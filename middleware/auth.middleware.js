import jwt from "jsonwebtoken";
import redisClient from "../services/redis.service.js";
import dotenv from "dotenv";
dotenv.config();

export const authUser = async (req, res, next) => {
    try {
        let token = req.cookies.token;

        if (!token && req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            return res.status(401).send({ error: 'Unauthorized User' });
        }

        const isBlackListed = await redisClient.get(token);

        if (isBlackListed) {
            res.clearCookie('token');
            return res.status(401).send({ error: 'Unauthorized User' });
        }

        const decoded = jwt.verify(token, process.env.KEY);
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).send({ error: 'Unauthorized User' });
    }
};

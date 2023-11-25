import { Jwt } from "jsonwebtoken";
import { errorHandler } from "./error";

export const verifyToken = async (req, res, next) => {
    const token  = req.cookie.token;
    if(!token){
        return next(errorHandler(401, "Access Denied"));
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) return next(errorHandler(403, 'Forbidden'));
        req.user = user; 
        next();
    })
}
import {NextFunction,Request,Response} from "express"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from ".";


export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers["authorization"] ?? "";
    console.log(authHeader);

    try {
        const decoded = jwt.verify(authHeader, JWT_SECRET);
        console.log(decoded);
        // @ts-ignore
        if (decoded.userId) {
            // @ts-ignore
            req.userId = decoded.userId;
            return next();
        } else {
            return res.status(403).json({
                message: "You are o  logged in"
            })    
        }
    } catch(e) {
        return res.status(403).json({
            message: "You are not logged in"
        })
    }
}

export function workerMiddleware(req: Request, res: Response, next: NextFunction) { 
}

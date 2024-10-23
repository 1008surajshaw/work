import express from "express"
import workerRouter from './router/worker'
import userRouter from "./router/user"
import cors from "cors"
const app = express();
app.use(express.json());
app.use(cors());
export const JWT_SECRET = "Suraj123"; 
app.use("/v1/user",userRouter);
app.use("/v1/worker",workerRouter);

app.listen(3000)
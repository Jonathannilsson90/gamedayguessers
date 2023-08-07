import "dotenv/config"
import express, { NextFunction,Request,Response } from "express"
import morgan from "morgan"
import createHttpError, {isHttpError} from "http-errors"
import cors from "cors"
import helmet from "helmet"
import userRoute from "./routes/userRoutes"
const app = express();

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())
app.use(helmet())

app.use("/api/user", userRoute)



app.use((req,res,next) => {
    next(createHttpError(404, "Enpoint not found"))
});

app.use((error:unknown, req:Request, res:Response, next: NextFunction)=> {
console.error(error)
let errorMessage = "An unknown error has occured."
let statusCode = 500;
if(isHttpError(error)) {
statusCode = error.status
errorMessage = error.message
}
res.status(statusCode).json({error: errorMessage})
})



export default app

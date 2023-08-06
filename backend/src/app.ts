import "dotenv/config"
import express from "express"
import morgan from "morgan"
import createHttpError from "http-errors"
import cors from "cors"
import helmet from "helmet"
import jwt from "jsonwebtoken"

const app = express();

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())
app.use(helmet())





export default app

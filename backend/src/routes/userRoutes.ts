import express  from "express";
import * as userControllers from "../controllers/userControllers"
const router = express.Router()

router.post("/register", userControllers.registerNewUser)
router.post("/token", userControllers.generateAccessToken)
router.delete("/delete", userControllers.deleteUser)

export default router;
import express from "express";
import dotenv from "dotenv"
dotenv.config();
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connection.js";
const app = express();
const PORT = process.env.PORT;

app.use( "/api/auth", authRoutes)

connectToMongoDB();
const server = app.listen(PORT, () => {
   console.log(`App listening on port ${PORT} 📟`);
});
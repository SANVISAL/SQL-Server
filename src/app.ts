import express from "express";
import route from "./routes/user-route";

const app = express();

app.use(express.json());

// Define your routes here
app.use("api/v1", route);

export default app;

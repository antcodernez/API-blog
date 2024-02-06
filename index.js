import express  from "express";
import morgan from "morgan";
const port = 9222;
import "./database.js";
import { routerAPI } from "./routers/index.router.js";
const app = express();


app.use(morgan("tiny"));

app.use(express.json());


app.get("/", (req, res) => {
    res.json({msg: "Hola"})
})

routerAPI(app);

app.listen(port, () => {
    console.log(`API working on http://localhost:${port}`);
})
import { routerPosts } from "./posts.router.js";
import express  from "express";

function routerAPI(app) 
    {
        const router = express.Router();

        app.use("/blog", routerPosts);
    }

export {
    routerAPI
}
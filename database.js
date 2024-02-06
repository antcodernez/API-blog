import mongoose from "mongoose";
import { config } from "./config/config.js";
mongoose.connect(config.dbURI)
    .then(db => console.log("Conected to the db master ñ.ñ"))
    .catch(err => console.error(err));
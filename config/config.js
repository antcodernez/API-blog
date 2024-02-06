import dotenv from "dotenv";

dotenv.config({path: ".env"})

const config = {
    dbURI: process.env.URI_BD
}

export {
    config
}
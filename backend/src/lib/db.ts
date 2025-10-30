// import { MongoClient } from "mongodb";
// import { config } from "../config/config";

// export const client = new MongoClient(config.DB_URL)

import { config } from "../config/config";
import mongoose from "mongoose";

mongoose.connect(config.DB_URL)

const catSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const catModal = mongoose.model("Cat", catSchema)
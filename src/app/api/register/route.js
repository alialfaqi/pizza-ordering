import mongoose from "mongoose"
import { User } from "../../models/User.js"

require("dotenv").config();

export async function POST(req) {
    try {
        const body = await req.json();
        await mongoose.connect(process.env.MONGO_URL)
        const createdUser = await User.create(body)
        return Response.json(createdUser)
    } catch (error) { console.log(error) }


}
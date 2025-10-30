//creare uno schema dello user
import mongoose from "mongoose";

interface Iuser{
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    image?: number,
    created_at: Date,
    updated_at?: Date,
    role: "student|teacher|admin",
    data: any
}


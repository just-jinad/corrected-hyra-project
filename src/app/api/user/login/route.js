import hydraModel from "@/app/models/hydramodel";
import connections from "@/dbconnection/connections.js";
import { NextResponse } from "next/server";
import bcryptjs from 'bcrypt'
const jwt = require('jsonwebtoken')
connections();


export async function POST(data) {
    try {
        const reqBody = await data.json();
        const { email, password } = reqBody;
        const user = await hydraModel.findOne({ email: email });
        
        console.log(user)
        if (!user) {
            return NextResponse.json({ status: 404, message: "User not found" });
        }
        const validPassword = await bcryptjs.compare
        (password, user.password)
        if(!validPassword){
            return NextResponse.json({error: "Invalid password", status:400})
        }

        const token = jwt.sign({email}, "secret", {expiresIn:"4h"})
        console.log(token);
        return NextResponse.json({ status: 200, message: "Login successful", user: user });
 
    } 
    catch (error) {
        console.error(error);
        // return NextResponse.json({ status: 500, message: "Internal server error" });
    }
    
}

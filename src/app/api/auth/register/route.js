import { connectToDB } from "@/utils/database";
import User from "@/models/User.model";
import { jsonRes } from "@/utils/stringifyResponse";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request){
    const {firstName, lastName, email, username, password} = await request.json();

    try {
        await connectToDB()

        if(!firstName || !lastName || !email || !username || !password){
            return new Response(jsonRes({msg: "field can't be empty"}), {status: 400})
        }

        const user = await User.findOne({email});

        if(user){
            return NextResponse.json({msg: "User already exists"}, {status: 400})
        }

        const newUser = new User({
            firstName,
            lastName,
            username,
            email,
            password
        })

        const res = await newUser.save();

        if(res){
            return new Response(jsonRes({response: res, msg: "success"}), {status: 200});
        }else{
            return new Response(jsonRes({msg: "Unable to create new user"}), {status: 400});
        }


    } catch (error) {
        console.log(error.message)
        return new Response(jsonRes({msg: error.message}), {status: 500})
    }
}
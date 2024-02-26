import { connectToDB } from "@/utils/database";
import { jsonRes } from "@/utils/stringifyResponse";
import { NextResponse, NextRequest } from "next/server";
import User from "@/models/User.model";


export async function POST(request){
    const {contactId, firstName, lastName, phoneNumber, lookUp, imageAvailable, userId } = await request.json();

    try {
        await connectToDB()

        const contact = await Contact.create({
            contactId, 
            firstName, 
            lastName, 
            phoneNumber, 
            lookUp, 
            imageAvailable,
            user: userId
        })

    } catch (error) {
        return new Response(jsonRes({msg: error.message}), {status: 500})
    }
}
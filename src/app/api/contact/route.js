import { connectToDB } from "@/utils/database";
import { jsonRes } from "@/utils/stringifyResponse";
import { NextResponse, NextRequest } from "next/server";
import Contact from "@/models/Contact.model";


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

        if(contact){
            return new Response(jsonRes({msg: "success"}), {status: 200});
        }else{
            return new Response(jsonRes({msg: "Unable to add user contacts"}), {status: 400});
        }

    } catch (error) {
        return new Response(jsonRes({msg: error.message}), {status: 500})
    }
}
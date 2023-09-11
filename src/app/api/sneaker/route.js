import { NextResponse } from "next/server";
import { connectDB } from "@/src/utils/mongoose";
import Sneaker from "@/src/models/Sneaker";
export async function GET(){
    connectDB()

    const sneakers = await Sneaker.find()
    return NextResponse.json(sneakers)
}

export async function POST(request){
    try {
        const data= request.json()
        const newSneaker = new Sneaker(data)
        const saveSneaker= await newSneaker.save()
        return NextResponse.json(saveSneaker)    
    } catch (error) {
        return NextResponse.json(error.message,{
            status:'400'
        })
    }
    
}

export async function PUT(request){
    try {
        const data= request.json()
        const newSneaker = new Sneaker(data)
        const saveSneaker= await newSneaker.save()
        return NextResponse.json(saveSneaker)    
    } catch (error) {
        return NextResponse.json(error.message,{
            status:'400'
        })
    }
    
}


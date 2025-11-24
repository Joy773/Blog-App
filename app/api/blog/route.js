import { ConnectDB } from "@/lib/config/db"
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server"
import {writeFile} from 'fs/promises'

const LoadDB = async() => {
    await ConnectDB();
}

LoadDB();

//API Endpoint for getting all the posts
export async function GET(request){
    const blogs = await BlogModel.find({});
    return NextResponse.json({blogs})
}
//API Endpoint for uploading blogs
export async function POST(request){
    try {
        const formData = await request.formData();
        const timestamp = Date.now();
        const image = formData.get('image');
        
        if (!image) {
            return NextResponse.json({success: false, msg: "No image provided"}, {status: 400});
        }
        
        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        const path = `./public/${timestamp}_${image.name}`;
        await writeFile(path,buffer);
        const imgUrl = `/${timestamp}_${image.name}`;

        const blogData = {
            title: `${formData.get('title')}`,
            description: `${formData.get('description')}`,
            category: `${formData.get('category')}`,
            author: `${formData.get('author')}`,
            image: `${imgUrl}`,
            authorImg: `${formData.get('authorImg')}`,
        }

        await BlogModel.create(blogData);
        console.log("Blog saved successfully");
        return NextResponse.json({success: true, msg: "Blog added"});
    } catch (error) {
        console.error("Error creating blog:", error);
        return NextResponse.json({success: false, msg: "Failed to create blog"}, {status: 500});
    }
} 
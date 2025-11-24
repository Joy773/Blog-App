import mongoose from "mongoose";
export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://Blog_App:helloworld123@cluster0.redyb8k.mongodb.net/my-app');
    console.log('DB Connected');
}
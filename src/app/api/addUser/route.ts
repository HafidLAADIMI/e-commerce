import User from "@/app/Backend/Model/User";
import connectDB from "@/app/Backend/db";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    await connectDB();
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({
        status: 403,
        message: "You should provide an email and a password",
      });
    }

    const existUser = await User.findOne({ email });
    if (existUser) {
      return NextResponse.json({
        status: 403,
        message: "The user already exists",
      });
    }

    const newUser = new User({ email, password });
    await newUser.save();

    return NextResponse.json({
      status: 200,
      message: "The user was added successfully",
    });
  } catch (error: any) {
    console.error("Error adding user:", error);
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

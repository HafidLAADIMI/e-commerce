import connectDB from "@/app/Backend/db";
import User from "@/app/Backend/Model/User";
import { auth} from "@/auth";
import { NextResponse } from "next/server";
export const GET = async (request: Request) => {
    try {
      await connectDB();
      const session = await auth();
      if (!session) {
        return NextResponse.json({
          message: "you are not authenticated",
          status: 401,
        });
      }
      const user = await User.find();
      if (!user) {
        return NextResponse.json({
          message: "there is no user in the database",
          status: 404,
        });
      }
      return NextResponse.json({
        data: user,
        status: 200,
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        message: error,
        status: 500,
      });
    }
  };
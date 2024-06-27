import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import connectDB from "./app/Backend/db";
import userSchema from "./app/Backend/Model/User";
interface credentials {
  email: string;
  password: string;
}
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        try {
          await connectDB();
          const user = await userSchema.findOne({ email:credentials.email });
          if (user) {
            if (user.password == credentials.password) {
              return user;
            } else throw new Error("the password is incorrect");
          }
        } catch (error) {
          console.log(error);
        }
      },
    })
  ],
});

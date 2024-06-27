"use server"
import { signIn,signOut } from "@/auth"
import { redirect } from "next/dist/server/api-utils";
export const loginWithCredentials=async(formData:FormData)=>{
   try{
      const response=await signIn("credentials",{
        email:formData.get('email'),
        password:formData.get("password"),
        redirect:false,
      })
      return response;
   }catch(error){
    console.log(error)
   }
}
export const LogOut=async()=>{
    try{
      await signOut({redirectTo:"/"})
    }catch(error){
        console.log(error)
    }
}
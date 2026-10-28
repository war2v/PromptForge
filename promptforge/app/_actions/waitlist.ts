// Server Actions / Mutations trigger by form
"use server"

import { supabase } from "@/lib/supabase"


export const joinWaitlist = async (email: string , role: string, first_name: string, last_name: string) => {

    console.log(email)
    console.log(role)
    console.log(first_name)
    console.log(last_name)
    const { data, error } = await supabase
        .from('waitlist')
        .insert([
            { 
                'email': email ,
                'role': role,
                'first_name': first_name,
                'last_name': last_name,
            }
        ])

    if(error){
        console.log(error)
    }
    else{
        console.log(data)
    }

    

}
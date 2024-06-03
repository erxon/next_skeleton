import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import User from './app/lib/models/User';
import dbConnect from './app/lib/db-connect';
import Google from "next-auth/providers/google"

interface UserObject {
    email: string;
    firstName: string;
    lastName: string;
    hash: string;
    salt: string;
    createdAt: string;
}

async function getUser(email: string) : Promise<UserObject | undefined> {
  try {
    await dbConnect();
    
    const user = await User.findOne({email: email});
    return user;
  } catch (error){
    console.log(error);
    throw new Error("Failed to fetch user");
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Google,
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
          
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.hash);

          if (passwordsMatch) return user;
        }
        
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});

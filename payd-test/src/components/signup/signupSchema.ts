import { z } from "zod";

export const signUpSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    username: z.string().min(1, { message: "Username is required" }),
    password: z
      .string({ required_error: "Password is required!" })
      .min(6, { message: "Password must contain at least 6 character(s)" }),
      confirmpass: z.string(),
  }).refine((data) => data.password === data.confirmpass, {
    message: "Passwords do not match!",
    path: ["confirmpass"],
  });

 
  
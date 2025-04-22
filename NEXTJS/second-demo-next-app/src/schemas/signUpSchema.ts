import {z} from 'zod'

export const usenameValidation = z
    .string()
    .regex(/^[a-zA-Z0-9_]+$/, "username must not contain special character")
    .min(3, "username should be atleast 2 chareacters")
    .max(20, "username should be atmost 20 characters")

export  const singUpValidation = z.object({
    username: usenameValidation,
    email: z.string().regex(/.+\@.+\..+/, "Invalid Email ID"),
    password: z.string().min(4, "password should be atleast 4 characters")
})




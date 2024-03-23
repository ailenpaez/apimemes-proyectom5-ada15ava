import z from "zod";

const userSchema = z.object({
  mail: z.string(),
  username: z.string().min(6).max(10),
  password: z.string().min(8).max(15),
  interests: z.enum(["animales","niños","humor","general"]).default("general")
});

const validateUser = (obj: any) => userSchema.safeParse(obj);

const validatePartialUser = (obj: any) => userSchema.partial().safeParse(obj);

export { validateUser, validatePartialUser };

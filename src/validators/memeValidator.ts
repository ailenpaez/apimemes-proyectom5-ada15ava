import z from "zod";

const memeSchema = z.object({
  id: z.string(),
  name: z.string().min(6).max(10),
  categories: z.array(z.string()),
  author: z.string(),
  imageUrl: z.string(),
  likes: z.string(),
  dislikes: z.string()
});

const validateMeme = (obj: any) => memeSchema.safeParse(obj);

const validatePartialMeme = (obj: any) => memeSchema.partial().safeParse(obj);

export {validateMeme, validatePartialMeme};

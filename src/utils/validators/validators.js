import {z} from "zod"

export const orderValidation = z.object({
  name: z.string().min(2,"Введіть ім'я."),
  phone: z.string().min(10,"Введіть номер телефону."),
  date: z.string(),
  time: z.string(),
});
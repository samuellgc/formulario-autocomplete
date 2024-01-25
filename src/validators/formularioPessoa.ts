import { z } from "zod";

export const validationSchema = z.object({
  pessoa: z.string().min(1, { message: "Campo obrigatório!" }),
  email: z.string().min(1, { message: "Campo obrigatório!" }).email({
    message: "Formato de e-mail inválido!",
  }),
  telefone: z.string().min(1, { message: "Campo obrigatório!" }),
});

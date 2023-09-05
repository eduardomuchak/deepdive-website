import { z } from "zod";

export const registerTeacherFormSchema = z.object({
  fullName: z.string().nonempty("Campo obrigatório"),
  email: z.string().email("Email inválido").nonempty("Campo obrigatório"),
  phone: z.string().nonempty("Campo obrigatório"),
  state: z.string().nonempty("Campo obrigatório"),
  city: z.string().nonempty("Campo obrigatório"),
  experienceTime: z.string().nonempty("Campo obrigatório"),
  alreadyLivedAbroad: z.string().nonempty("Campo obrigatório"),
  certifications: z.string().nonempty("Campo obrigatório"),
  firstCheckbox: z.string().refine((value) => value === "true", {
    message: "Você precisa aceitar os termos",
  }),
  secondCheckbox: z.string().optional(),
});

export type RegisterTeacherFormSchema = z.infer<
  typeof registerTeacherFormSchema
>;

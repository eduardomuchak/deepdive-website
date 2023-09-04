"use client";

import { ErrorMessage } from "@/components/ErrorMessage";
import { Form } from "@/components/Form";
import { Button } from "@/components/_Primitives/Button";
import { Input } from "@/components/_Primitives/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import Background from "./background";

const registerTeacherFormSchema = z.object({
  fullName: z.string().nonempty("Campo obrigatório"),
  email: z.string().email("Email inválido").nonempty("Campo obrigatório"),
  phone: z.string().nonempty("Campo obrigatório"),
  state: z.string().nonempty("Campo obrigatório"),
  city: z.string().nonempty("Campo obrigatório"),
  experienceTime: z.string().nonempty("Campo obrigatório"),
  alreadyLivedAbroad: z.string().nonempty("Campo obrigatório"),
  certifications: z.string().nonempty("Campo obrigatório"),
});

type RegisterTeacherFormSchema = z.infer<typeof registerTeacherFormSchema>;

export default function BeATeacher() {
  const {
    control,
    formState,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterTeacherFormSchema>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      state: "",
      city: "",
      experienceTime: "",
      alreadyLivedAbroad: "",
      certifications: "",
    },
    resolver: zodResolver(registerTeacherFormSchema),
  });
  console.log("formState", formState.defaultValues);

  const handleLabelName = (key: string) => {
    switch (key) {
      case "fullName":
        return "Nome completo";
      case "email":
        return "Email";
      case "phone":
        return "Telefone";
      case "state":
        return "Estado";
      case "city":
        return "Cidade";
      case "experienceTime":
        return "Tempo de experiência";
      case "alreadyLivedAbroad":
        return "Já morou no exterior?";
      case "certifications":
        return "Certificações";
      default:
        return "";
    }
  };

  // For each key in the form, we need to create a controller
  const list = Object.keys(
    formState.defaultValues as RegisterTeacherFormSchema,
  );

  const onSubmit = (data: RegisterTeacherFormSchema) => {
    console.log("data", data);
  };

  return (
    <>
      <main className="relative mx-auto w-full max-w-[686px]">
        <div className="mb-[60px] mt-[152px] text-center">
          <span className="text-center font-alt text-[40px] font-normal leading-[52px] text-white">
            Faça Parte da Equipe de Professores da DeepDive e{" "}
          </span>
          <strong className="text-center font-alt text-[40px] leading-[52px] text-white">
            Contribua com a Formação de Líderes Globais.
          </strong>
        </div>
        <Form.Root>
          <Form.Title>
            Cadastre suas informações ao nosso banco de currículos
          </Form.Title>
          <Form.InputContainer>
            {list.map((key, index) => {
              return (
                <div className="flex flex-col gap-1" key={`${key}-${index}`}>
                  <Controller
                    control={control}
                    name={key as keyof RegisterTeacherFormSchema}
                    render={({ field }) => (
                      <Input label={handleLabelName(key)} id={key} {...field} />
                    )}
                  />
                  <ErrorMessage>
                    {errors[key as keyof RegisterTeacherFormSchema]?.message}
                  </ErrorMessage>
                </div>
              );
            })}
          </Form.InputContainer>
          <div className="mt-3 flex flex-col space-y-3 px-4">
            <div className="flex flex-row space-x-3">
              <input
                type="checkbox"
                className="relative h-6 w-6 min-w-[24px] appearance-none rounded-md border-2 border-brand-gray text-brand-primary-blue checked:border-transparent checked:bg-brand-orange checked:text-lg checked:text-white checked:ring-transparent focus:border-brand-orange focus:ring-brand-orange checked:focus:border-transparent checked:focus:ring-transparent"
              />
              <span className="font-sans text-xs font-normal leading-tight tracking-wide text-brand-gray">
                Ao inscrever-se, você concorda com o processamento de seus dados
                pessoais pela DeepDive, conforme nossa Declaração de
                Privacidade.
              </span>
            </div>
          </div>
          <Button
            onClick={handleSubmit(onSubmit)}
            className="mt-8 max-w-[133px]"
          >
            Cadastrar
          </Button>
        </Form.Root>
      </main>
      <Background />
    </>
  );
}

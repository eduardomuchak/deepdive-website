"use client";

import { ErrorMessage } from "@/components/ErrorMessage";
import { Form } from "@/components/Form";
import { Button } from "@/components/_Primitives/Button";
import { Checkbox } from "@/components/_Primitives/Checkbox";
import { Input } from "@/components/_Primitives/Input";
import {
  RegisterTeacherFormSchema,
  registerTeacherFormSchema,
} from "@/validations/RegisterTeacher";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import Background from "./background";

export default function BeATeacher() {
  const {
    control,
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
      firstCheckbox: "false",
      secondCheckbox: "false",
    },
    resolver: zodResolver(registerTeacherFormSchema),
  });

  const onSubmit = (data: RegisterTeacherFormSchema) => {
    console.log("data", data);
  };

  return (
    <>
      <main className="relative mx-auto w-full max-w-[726px] px-2">
        <div className="mb-[60px] mt-[152px] text-center">
          <span className="text-center font-alt text-[36px] font-normal leading-[52px] text-white md:text-[40px]">
            Faça Parte da Equipe de Professores da DeepDive e{" "}
          </span>
          <strong className="text-center font-alt text-[40px] leading-[52px] text-white">
            Contribua com a Formação de Líderes Globais.
          </strong>
        </div>
        <Form.Root className={"relative mb-24"}>
          <Form.Title>
            Cadastre suas informações ao nosso banco de currículos
          </Form.Title>
          <Form.InputContainer>
            <div className="flex flex-col gap-1">
              <Controller
                control={control}
                name={"fullName"}
                render={({ field }) => (
                  <Input
                    label={"Nome completo"}
                    id={"Nome completo"}
                    {...field}
                  />
                )}
              />
              <ErrorMessage>{errors.fullName?.message}</ErrorMessage>
            </div>
            <div className="flex flex-col gap-1">
              <Controller
                control={control}
                name={"email"}
                render={({ field }) => (
                  <Input label={"Email"} id={"Email"} {...field} />
                )}
              />
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
            </div>
            <div className="flex flex-col gap-1">
              <Controller
                control={control}
                name={"phone"}
                render={({ field }) => (
                  <Input label={"Telefone"} id={"Telefone"} {...field} />
                )}
              />
              <ErrorMessage>{errors.phone?.message}</ErrorMessage>
            </div>
            <div className="flex w-full flex-row space-x-4">
              <div className="flex w-full flex-col gap-1">
                <Controller
                  control={control}
                  name={"state"}
                  render={({ field }) => (
                    <Input label={"Estado"} id={"Estado"} {...field} />
                  )}
                />
                <ErrorMessage>{errors.state?.message}</ErrorMessage>
              </div>
              <div className="flex w-full flex-col gap-1">
                <Controller
                  control={control}
                  name={"city"}
                  render={({ field }) => (
                    <Input label={"Cidade"} id={"Cidade"} {...field} />
                  )}
                />
                <ErrorMessage>{errors.city?.message}</ErrorMessage>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Controller
                control={control}
                name={"experienceTime"}
                render={({ field }) => (
                  <Input
                    label={"Tempo de experiência"}
                    id={"Tempo de experiência"}
                    {...field}
                  />
                )}
              />
              <ErrorMessage>{errors.experienceTime?.message}</ErrorMessage>
            </div>
            <div className="flex flex-col gap-1">
              <Controller
                control={control}
                name={"alreadyLivedAbroad"}
                render={({ field }) => (
                  <Input
                    label={"Já morou no exterior?"}
                    id={"Já morou no exterior?"}
                    {...field}
                  />
                )}
              />
              <ErrorMessage>{errors.alreadyLivedAbroad?.message}</ErrorMessage>
            </div>
            <div className="flex flex-col gap-1">
              <Controller
                control={control}
                name={"certifications"}
                render={({ field }) => (
                  <Input
                    label={"Certificações"}
                    id={"Certificações"}
                    {...field}
                  />
                )}
              />
              <ErrorMessage>{errors.certifications?.message}</ErrorMessage>
            </div>
          </Form.InputContainer>
          <div className="mt-3 flex flex-col space-y-3 px-4">
            <Controller
              control={control}
              name={"firstCheckbox"}
              render={({ field }) => (
                <Checkbox
                  onCheckedChange={(e) => {
                    field.onChange(String(e));
                  }}
                  {...field}
                  value={String(field.value)}
                >
                  Ao inscrever-se, você concorda com o processamento de seus
                  dados pessoais pela DeepDive, conforme nossa{" "}
                  <Link
                    href={"https://deepdiveschool.com/privacy"}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="underline">
                      Declaração de Privacidade.
                    </span>
                  </Link>
                </Checkbox>
              )}
            />
            <ErrorMessage>{errors.firstCheckbox?.message}</ErrorMessage>

            <Controller
              control={control}
              name={"secondCheckbox"}
              render={({ field }) => (
                <Checkbox
                  onCheckedChange={(e) => {
                    field.onChange(String(e));
                  }}
                  {...field}
                  value={String(field.value)}
                >
                  Sim, aceito receber comunicações de marketing sobre produtos,
                  serviços e eventos, podendo me descadastrar a qualquer
                  momento.
                </Checkbox>
              )}
            />
            <ErrorMessage>{errors.secondCheckbox?.message}</ErrorMessage>
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

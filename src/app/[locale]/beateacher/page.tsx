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
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import Background from "./background";

export default function BeATeacher() {
  const t = useTranslations("BeATeacherPage");

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
            {t("title1")}
          </span>
          <strong className="text-center font-alt text-[40px] leading-[52px] text-white">
            {t("title2")}
          </strong>
        </div>
        <Form.Root className={"relative mb-24"}>
          <Form.Title>{t("formTitle")}</Form.Title>
          <Form.InputContainer>
            <div className="flex flex-col gap-1">
              <Controller
                control={control}
                name={"fullName"}
                render={({ field }) => (
                  <Input label={t("formName")} id={t("formName")} {...field} />
                )}
              />
              <ErrorMessage>
                {errors.fullName?.message && t("requiredField")}
              </ErrorMessage>
            </div>
            <div className="flex flex-col gap-1">
              <Controller
                control={control}
                name={"email"}
                render={({ field }) => (
                  <Input
                    label={t("formEmail")}
                    id={t("formEmail")}
                    {...field}
                  />
                )}
              />
              <ErrorMessage>
                {errors.email?.message && t("invalidEmail")}
              </ErrorMessage>
            </div>
            <div className="flex flex-col gap-1">
              <Controller
                control={control}
                name={"phone"}
                render={({ field }) => (
                  <Input
                    label={t("formPhone")}
                    id={t("formPhone")}
                    {...field}
                  />
                )}
              />
              <ErrorMessage>
                {errors.phone?.message && t("requiredField")}
              </ErrorMessage>
            </div>
            <div className="flex w-full flex-row space-x-4">
              <div className="flex w-full flex-col gap-1">
                <Controller
                  control={control}
                  name={"state"}
                  render={({ field }) => (
                    <Input
                      label={t("formState")}
                      id={t("formState")}
                      {...field}
                    />
                  )}
                />
                <ErrorMessage>
                  {errors.state?.message && t("requiredField")}
                </ErrorMessage>
              </div>
              <div className="flex w-full flex-col gap-1">
                <Controller
                  control={control}
                  name={"city"}
                  render={({ field }) => (
                    <Input
                      label={t("formCity")}
                      id={t("formCity")}
                      {...field}
                    />
                  )}
                />
                <ErrorMessage>
                  {errors.city?.message && t("requiredField")}
                </ErrorMessage>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Controller
                control={control}
                name={"experienceTime"}
                render={({ field }) => (
                  <Input
                    label={t("formExperienceTime")}
                    id={t("formExperienceTime")}
                    {...field}
                  />
                )}
              />
              <ErrorMessage>
                {errors.experienceTime?.message && t("requiredField")}
              </ErrorMessage>
            </div>
            <div className="flex flex-col gap-1">
              <Controller
                control={control}
                name={"alreadyLivedAbroad"}
                render={({ field }) => (
                  <Input
                    label={t("formAlreadyLivedAbroad")}
                    id={t("formAlreadyLivedAbroad")}
                    {...field}
                  />
                )}
              />
              <ErrorMessage>
                {errors.alreadyLivedAbroad?.message && t("requiredField")}
              </ErrorMessage>
            </div>
            <div className="flex flex-col gap-1">
              <Controller
                control={control}
                name={"certifications"}
                render={({ field }) => (
                  <Input
                    label={t("formCertifications")}
                    id={t("formCertifications")}
                    {...field}
                  />
                )}
              />
              <ErrorMessage>
                {errors.certifications?.message && t("requiredField")}
              </ErrorMessage>
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
                  {t("firstCheckbox")}
                  <Link
                    href={"https://deepdiveschool.com/privacy"}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="underline">{t("privacy")}</span>
                  </Link>
                </Checkbox>
              )}
            />
            <ErrorMessage>
              {errors.firstCheckbox?.message && t("acceptTerms")}
            </ErrorMessage>

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
                  {t("secondCheckbox")}
                </Checkbox>
              )}
            />
            <ErrorMessage>
              {errors.secondCheckbox?.message && t("requiredField")}
            </ErrorMessage>
          </div>
          <Button
            onClick={handleSubmit(onSubmit)}
            className="mt-8 max-w-[133px]"
          >
            {t("registerButton")}
          </Button>
        </Form.Root>
      </main>
      <Background />
    </>
  );
}

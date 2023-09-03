"use client";

import { ErrorMessage } from "@/components/ErrorMessage";
import { Button } from "@/components/_Primitives/Button";
import { Input } from "@/components/_Primitives/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const testFormSchema = z.object({
  name: z.string().nonempty("Campo obrigatório"),
  email: z.string().email("Email inválido"),
});

type TestFormSchema = z.infer<typeof testFormSchema>;

export default function Home() {
  const { control } = useForm<TestFormSchema>({
    defaultValues: {
      name: "",
      email: "",
    },
    resolver: zodResolver(testFormSchema),
  });

  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
        <h1 className="font-sans text-3xl font-bold ">Roboto</h1>
        <h1 className="font-alt text-3xl font-bold">Railway</h1>
        <Button className="max-w-[234px]">Testar Agora Gratuitamente</Button>
        <div className="w-full max-w-[400px] space-y-10 self-center">
          <Controller
            control={control}
            name="name"
            render={({ field }) => <Input label="Nome" id="name" {...field} />}
          />
          <ErrorMessage>Teste</ErrorMessage>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input label="Email" id="email" {...field} />
            )}
          />
        </div>
      </div>
    </>
  );
}

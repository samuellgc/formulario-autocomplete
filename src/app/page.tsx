"use client";

import { InputText } from "@/components/ui/Input";
import { SelectAutoComplete } from "@/components/ui/SelectAutoComplete";
import { Button, Stack, Typography } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "@/validators/formularioPessoa";
import { toast } from "react-toastify";

interface FormularioPessoa {
  pessoa: string;
  email: string;
  telefone: string;
}

export default function Home() {
  const methods = useForm<FormularioPessoa>({
    resolver: zodResolver(validationSchema),
  });
  const onSubmit = (data: FormularioPessoa) => {
    console.log(data);
    toast.success("Formulário enviado com sucesso!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
      <FormProvider {...methods}>
        <form
          className="bg-white p-5 shadow-md rounded-md"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <Typography sx={{ mb: 2, textAlign: "center" }}>
            Cadastre uma pessoa
          </Typography>
          <Stack direction="column" gap={3}>
            <SelectAutoComplete />
            <InputText label="Preencha o e-mail da pessoa" name="email" />
            <InputText label="Preencha o telefone da pessoa" name="telefone" />
            <Button type="submit" sx={{ backgroundColor: "#1565c0 !important" }} variant="contained">
              Enviar
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </main>
  );
}

import { useApi } from "@/hooks/useApi";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

interface Pessoa {
  id: number;
  nome: string;
}

export function useSelectAutoComplete() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly Pessoa[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<number | null>(null);
  const [loading, setIsLoading] = useState<boolean>(false);
  const { register } = useFormContext();
  const { api } = useApi();

  const fetchPersons = async () => {
    const { data } = await api.get("");
    setOptions(data);
  };

  const handleListPersons = async () => {
    if (options.length === 0) {
      setIsLoading(true);
      await fetchPersons();
      setIsLoading(false);
    }
  };

  return {
    open,
    setOpen,
    loading,
    options,
    setSelectedPerson,
    handleListPersons,
    selectedPerson,
    register,
  };
}

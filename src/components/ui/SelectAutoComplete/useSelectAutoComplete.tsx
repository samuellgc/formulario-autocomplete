import { useApi } from "@/hooks/useApi";
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";

interface Pessoa {
  id: number;
  nome: string;
}

export function useSelectAutoComplete() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly Pessoa[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<number | null>(null);
  const loading = open && options.length === 0;
  const { register } = useFormContext();
  const { api } = useApi();

  const fetchPersons = async () => {
    const { data } = await api.get("");
    setOptions(data);
  };

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    if (options.length === 0 && active) {
      fetchPersons();
    }

    return () => {
      active = false;
    };
  }, [loading]);

  return {
    open,
    setOpen,
    loading,
    options,
    setSelectedPerson,
    selectedPerson,
    register,
  };
}

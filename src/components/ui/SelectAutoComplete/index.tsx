"use client";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelectAutoComplete } from "./useSelectAutoComplete";

export function SelectAutoComplete() {
  const {
    loading,
    open,
    options,
    register,
    selectedPerson,
    handleListPersons,
    setOpen,
    setSelectedPerson,
  } = useSelectAutoComplete();

  return (
    <Autocomplete
      sx={{ width: 300 }}
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      onChange={(_, value) => setSelectedPerson(value?.id || null)}
      getOptionLabel={(option) => option.nome}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          {...register("pessoa", {
            setValueAs: () => selectedPerson,
            onChange: () => {
              setOpen(true);
              handleListPersons();
            },
          })}
          label="Selecione uma pessoa"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
              </>
            ),
          }}
        />
      )}
    />
  );
}

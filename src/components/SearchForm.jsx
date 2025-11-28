// components/SearchForm.jsx
import { Button, Input, Select, SelectItem, Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";

export default function SearchForm({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    onSearch({
      criterio: form.get("criterio"),
      valor: form.get("valor")
    });
  };

  return (
    <Card className="mb-6 shadow-lg rounded-xl">
      <CardHeader>
        <h3 className="text-lg font-semibold">Buscar Aclaraciones</h3>
      </CardHeader>
      <CardBody>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center"
        >
          <Select label="Criterio" name="criterio" required>
            <SelectItem key="cis">CIS</SelectItem>
            <SelectItem key="tarjeta">Número de tarjeta</SelectItem>
            <SelectItem key="cuenta">Cuenta</SelectItem>
          </Select>

          <Input
            name="valor"
            label="Valor"
            placeholder="Ingrese valor…"
            required
          />

          <Button color="primary" type="submit" className="w-full">
            Buscar
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}

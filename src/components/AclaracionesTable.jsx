// components/AclaracionesTable.jsx
import { Button, Badge, Card, CardHeader, CardBody } from "@nextui-org/react";
import React from "react";

export default function AclaracionesTable({ data, onOpenDetalles }) {
  return (
    <Card className="shadow-md rounded-xl">
      <CardHeader className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Historial</h3>
        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
          {data.length} registros
        </span>
      </CardHeader>

      <CardBody>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Folio</th>
                <th className="border p-2">CIS</th>
                <th className="border p-2">Registro</th>
                <th className="border p-2">Fecha</th>
                <th className="border p-2">Estado</th>
                <th className="border p-2">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {data.map((row) => (
                <tr key={row.folio}>
                  <td className="border p-2">{row.folio}</td>
                  <td className="border p-2">{row.cis}</td>
                  <td className="border p-2">{row.registro}</td>
                  <td className="border p-2">{row.fecha}</td>

                  <td className="border p-2 text-center">
                    <Badge color={row.estado === "Abierto" ? "danger" : "success"}>
                      {row.estado}
                    </Badge>
                  </td>

                  <td className="border p-2 text-center">
                    <Button
                      size="sm"
                      color="primary"
                      onPress={() => onOpenDetalles(row)}
                    >
                      Ver compras
                    </Button>
                  </td>
                </tr>
              ))}

              {data.length === 0 && (
                <tr>
                  <td colSpan="6" className="border p-3 text-center text-gray-500">
                    No hay resultados
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}

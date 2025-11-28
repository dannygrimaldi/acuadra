// components/ComprasModal.jsx
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableRow,
  TableBody,
  TableCell,
  Checkbox,
  Spinner
} from "@nextui-org/react";
import React from "react";

export default function ComprasModal({ isOpen, onClose, compras, loading }) {
  return (
    <Modal size="4xl" isOpen={isOpen} onClose={onClose} backdrop="blur">
      <ModalContent>
        <ModalHeader className="bg-primary text-white">
          Detalles de Compras
        </ModalHeader>

        <ModalBody>
          {loading ? (
            <div className="flex justify-center py-10">
              <Spinner size="lg" />
            </div>
          ) : (
            <Table removeWrapper aria-label="Compras relacionadas">
              <TableHeader>
                <TableColumn>Fecha</TableColumn>
                <TableColumn>Referencia</TableColumn>
                <TableColumn>Comercio</TableColumn>
                <TableColumn>Monto</TableColumn>
                <TableColumn>Seleccionar</TableColumn>
              </TableHeader>

              <TableBody>
                {compras.map((c, i) => (
                  <TableRow key={i}>
                    <TableCell>{c.fecha}</TableCell>
                    <TableCell>{c.referencia}</TableCell>
                    <TableCell>{c.comercio}</TableCell>
                    <TableCell>${c.monto}</TableCell>
                    <TableCell>
                      <Checkbox size="sm" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </ModalBody>

        <ModalFooter>
          <Button color="secondary" variant="flat" onPress={onClose}>
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

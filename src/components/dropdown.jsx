import React, { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { UserIcon } from "./UserIcon";

export default function App() {
  const [selectedColor] = useState("default");

  const variants = ["light"];

  return (
    <div className="flex flex-wrap gap-4 dark">
      {variants.map((variant) => (
        <Dropdown key={variant} backdrop="blur">
          <DropdownTrigger>
            <Button
              color={selectedColor}
              variant={variant}
              className="capitalize"
            ><UserIcon className="w-4 mr-1" />
              44083564
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Dropdown Variants"
            color={selectedColor}
            variant={variant}
          >
            <DropdownItem key="themeswitch">
              <ThemeSwitcher/>
              </DropdownItem>
            <DropdownItem key="Logout" className="text-primary" color="danger">
              Logout
              </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ))}
    </div>
  );
}

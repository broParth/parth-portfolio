"use client";

import { useState } from "react";
import MenuButton from "./MenuButton";
import NavOverlay from "./NavOverlay";

export default function NavigationShell() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuButton isOpen={isOpen} onToggle={() => setIsOpen((prev) => !prev)} />
      <NavOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

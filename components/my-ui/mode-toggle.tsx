"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { SunDimIcon, MoonStarsIcon } from "@phosphor-icons/react";


export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <MoonStarsIcon  /> : <SunDimIcon />}
    </Button>
  );
}

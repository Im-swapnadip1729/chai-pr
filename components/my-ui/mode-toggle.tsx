"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Toggle } from "@/components/ui/toggle";
import { SunIcon, MoonStarsIcon } from "@phosphor-icons/react";


export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (

      <Toggle aria-label="Toggle bookmark" size="sm" variant="outline" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'light' ? <SunIcon /> : <MoonStarsIcon />}
      </Toggle>
   
  );
}

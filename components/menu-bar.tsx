'use client';

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Discord, Github } from "@/components/media-buttons";
import ThemeSwitch from "@/components/theme-switch";
import { Separator } from "@/components/ui/separator";

interface MenuBarProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export function MenuBar({ currentTab, onTabChange }: MenuBarProps) {
  return (
    <div className="w-full h-16 border-b flex items-center justify-between px-6 bg-background shrink-0">
        {/* Logo and Title */}
        <div className="flex flex-1 items-center gap-3 font-bold text-lg">
            <img src="./logo.png" alt="PySplanner Logo" width={40} height={40} className="rounded-md" />
            <span className="text-primary">PySplanner</span>
        </div>

      <Tabs value={currentTab} onValueChange={onTabChange}>
        <TabsList variant="line">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="visualizer">Visualizer</TabsTrigger>
            <TabsTrigger value="docs">Docs</TabsTrigger>
        </TabsList>
        </Tabs>

      <div className="flex flex-1 items-center justify-end">
        <ThemeSwitch />
        <Separator orientation="vertical" className="h-8" />
        <div className="flex ml-4 gap-4">
          <Discord />
          <Github />
        </div>
      </div>
    </div>
  );
}
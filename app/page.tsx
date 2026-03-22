'use client';

import { useState } from 'react';
import { Footer } from '@/components/footer';
import { MenuBar } from '@/components/menu-bar';

import HomeTab from './home/page';
import DashboardTab from './dashboard/page';
import VisualizerTab from './visualizer/page';
import DocsTab from './docs/page';

export default function Home() {
  const [currentTab, setCurrentTab] = useState('home');

  let Content = HomeTab;
  if (currentTab === 'dashboard') Content = DashboardTab;
  else if (currentTab === 'visualizer') Content = VisualizerTab;
  else if (currentTab === 'docs') Content = DocsTab;

  return (
    <div className="flex flex-col min-h-screen min-w-screen bg-background">
      <MenuBar currentTab={currentTab} onTabChange={setCurrentTab} />
      <div className="flex-1 flex flex-col w-full">
        <Content setCurrentTab={setCurrentTab} />
      </div>
      <Footer className="w-full mt-auto shrink-0" />
    </div>
  );
}
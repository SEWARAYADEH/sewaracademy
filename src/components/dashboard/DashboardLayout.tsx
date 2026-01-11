import { ReactNode } from 'react';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardHeader } from './DashboardHeader';

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  titleAr?: string;
}

export function DashboardLayout({ children, title, titleAr }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        <DashboardHeader title={title} titleAr={titleAr} />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

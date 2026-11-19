import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Omyxia CRM Microservice',
  description: 'Customer Relationship Management, Leads & Sales Pipeline',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <header className="border-b border-slate-800 bg-slate-900/60 px-6 py-4 backdrop-blur">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white shadow-lg shadow-indigo-500/20">
                CRM
              </span>
              <div>
                <h1 className="text-base font-semibold text-white">Omyxia CRM</h1>
                <p className="text-xs text-slate-400">Microservice Standalone Mode (Port 3003)</p>
              </div>
            </div>
            <nav className="flex items-center gap-4 text-sm font-medium text-slate-300">
              <a href="/" className="hover:text-indigo-400 transition-colors">แดชบอร์ด</a>
              <a href="/leads" className="hover:text-indigo-400 transition-colors">ไปป์ไลน์การขาย (Kanban)</a>
              <a href="/activities" className="hover:text-indigo-400 transition-colors">กิจกรรมลูกค้า (Activities)</a>
              <a href="/customers" className="hover:text-indigo-400 transition-colors">ข้อมูลลูกค้า (Accounts)</a>
            </nav>
          </div>
        </header>
        <main className="p-8 max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}

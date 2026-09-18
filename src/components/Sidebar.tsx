import { useState } from 'react';
import {
  LayoutDashboard,
  Building2,
  UserCheck,
  CalendarDays,
  Video,
  ClipboardCheck,
  HeartHandshake,
  BarChart3,
  Menu,
  X,
} from 'lucide-react';
import { Logo } from './Logo';

export type Section =
  | 'inicio'
  | 'conocenos'
  | 'induccion'
  | 'cronograma'
  | 'recursos'
  | 'evaluacion'
  | 'experiencia'
  | 'indicadores';

interface SidebarProps {
  active: Section;
  onNavigate: (section: Section) => void;
}

const navItems: { id: Section; label: string; icon: typeof LayoutDashboard }[] = [
  { id: 'inicio', label: 'Inicio', icon: LayoutDashboard },
  { id: 'conocenos', label: 'Conócenos', icon: Building2 },
  { id: 'induccion', label: 'Tu inducción', icon: UserCheck },
  { id: 'cronograma', label: 'Cronograma', icon: CalendarDays },
  { id: 'recursos', label: 'Video', icon: Video },
  { id: 'evaluacion', label: 'Evaluación', icon: ClipboardCheck },
  { id: 'experiencia', label: 'Tu experiencia', icon: HeartHandshake },
  { id: 'indicadores', label: 'Indicadores', icon: BarChart3 },
];

export function Sidebar({ active, onNavigate }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigate = (section: Section) => {
    onNavigate(section);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white border-b border-gray-200 px-4 py-3 md:hidden">
        <Logo />
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg text-navy-800 hover:bg-navy-50"
          aria-label="Menú"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-navy-900/40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 md:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="hidden md:flex items-center px-6 py-6 border-b border-gray-100">
          <Logo />
        </div>

        <div className="md:hidden px-6 py-4 border-b border-gray-100">
          <Logo />
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`nav-item w-full ${isActive ? 'nav-item-active' : ''}`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="px-6 py-4 border-t border-gray-100">
          <p className="text-[10px] font-semibold tracking-wider text-emerald-600 uppercase">
            Talento con propósito
          </p>
          <p className="text-[10px] text-gray-400 mt-1">
            Conectando talento con oportunidades
          </p>
        </div>
      </aside>
    </>
  );
}

import { TrendingUp, Heart, Shield, Leaf } from 'lucide-react';
import { Logo } from '../Logo';
import { organigrama } from '@/data/organigrama';
import type { OrgNode } from '@/data/types';

const significados = [
  {
    icon: TrendingUp,
    titulo: 'Crecimiento y desarrollo',
    desc: 'Las flechas ascendentes representan crecimiento, desarrollo de competencias y mejora continua, asociados a una visión de desarrollo hacia 2030.',
    color: 'navy',
  },
  {
    icon: Heart,
    titulo: 'Enfoque humano',
    desc: 'El perfil humano representa el enfoque en las personas, el bienestar y el reconocimiento de sus sueños, metas y capacidades.',
    color: 'emerald',
  },
  {
    icon: Shield,
    titulo: 'Confianza y seguridad',
    desc: 'El azul representa confianza, honestidad, seguridad, respaldo y profesionalismo.',
    color: 'navy',
  },
  {
    icon: Leaf,
    titulo: 'Bienestar y empatía',
    desc: 'El verde representa crecimiento personal, inclusión, diversidad y empatía.',
    color: 'emerald',
  },
];

function OrgCard({ node, depth }: { node: OrgNode; depth: number }) {
  const isGroup = !node.nombre;
  return (
    <div className={depth === 0 ? 'flex flex-col items-center' : ''}>
      <div
        className={`card px-5 py-3 ${
          depth === 0
            ? 'border-navy-700 bg-navy-800 text-white'
            : isGroup
              ? 'border-emerald-300 bg-emerald-50'
              : 'bg-white'
        }`}
      >
        <p
          className={`text-xs font-semibold ${
            depth === 0 ? 'text-emerald-400' : isGroup ? 'text-emerald-700' : 'text-navy-600'
          }`}
        >
          {node.titulo}
        </p>
        {node.nombre && (
          <p
            className={`text-sm font-semibold mt-0.5 ${
              depth === 0 ? 'text-white' : 'text-navy-900'
            }`}
          >
            {node.nombre}
          </p>
        )}
      </div>
      {node.children && node.children.length > 0 && (
        <div className="flex flex-col items-center">
          <div className="w-px h-6 bg-gray-300" />
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            {node.children.map((child, i) => (
              <div key={i} className="flex flex-col items-center">
                <OrgCard node={child} depth={depth + 1} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Conocenos() {
  return (
    <div className="space-y-12">
      {/* Identity header */}
      <section className="card p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <Logo variant="icon" className="h-24 w-24" />
            <div className="text-center">
              <p className="font-display text-xl font-extrabold text-navy-900">GTH S.A.S.</p>
              <p className="text-xs text-emerald-600 font-medium">
                Gestión de Talento Humano
              </p>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="section-title">Nuestra identidad</h2>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              GTH S.A.S. — Gestión de Talento Humano es una organización enfocada en
              conectar el talento con oportunidades, promoviendo el crecimiento, el
              bienestar y el desarrollo de competencias de sus colaboradores.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="badge bg-navy-50 text-navy-700">
                Talento con propósito
              </span>
              <span className="badge bg-emerald-50 text-emerald-700">
                Conectando talento con oportunidades
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Logo meaning */}
      <section>
        <h2 className="section-title">Significado del logo</h2>
        <p className="section-subtitle mt-1 mb-8">
          Cada elemento de nuestra identidad representa un compromiso
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {significados.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.titulo} className="card p-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    s.color === 'navy' ? 'bg-navy-50' : 'bg-emerald-50'
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 ${
                      s.color === 'navy' ? 'text-navy-700' : 'text-emerald-600'
                    }`}
                  />
                </div>
                <h3 className="text-base font-bold text-navy-900">{s.titulo}</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Organigrama */}
      <section>
        <h2 className="section-title">Estructura organizacional</h2>
        <p className="section-subtitle mt-1 mb-8">
          Organigrama de GTH S.A.S.
        </p>
        <div className="card p-6 md:p-10 overflow-x-auto">
          <div className="min-w-fit">
            <OrgCard node={organigrama} depth={0} />
          </div>
        </div>
      </section>
    </div>
  );
}

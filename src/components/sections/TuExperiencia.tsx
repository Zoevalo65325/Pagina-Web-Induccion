import { useState } from 'react';
import {
  Brain,
  Ear,
  Eye,
  MessageSquare,
  HeartCrack,
  Trophy,
  Star,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { empatia } from '@/data/contenido';

const iconMap: Record<string, typeof Brain> = {
  Brain,
  Ear,
  Eye,
  MessageSquare,
  HeartCrack,
  Trophy,
};

const surveyQuestions = [
  'Claridad de la información',
  'Organización de la inducción',
  'Acompañamiento recibido',
  'Utilidad de los contenidos',
  'Facilidad para comprender el rol',
  'Experiencia general',
];

export function TuExperiencia() {
  const [ratings, setRatings] = useState<number[]>(Array(6).fill(0));
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const hasRatings = ratings.some((r) => r > 0);
  const avgRating = hasRatings
    ? ratings.filter((r) => r > 0).reduce((a, b) => a + b, 0) /
      ratings.filter((r) => r > 0).length
    : 0;
  const satisfactionPercent = hasRatings ? Math.round((avgRating / 5) * 100) : 0;
  const meetsTarget = avgRating >= 4.2;

  const handleRating = (qIdx: number, value: number) => {
    const newRatings = [...ratings];
    newRatings[qIdx] = value;
    setRatings(newRatings);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="space-y-10">
      <div>
        <h2 className="section-title">Tu experiencia</h2>
        <p className="section-subtitle mt-1">
          Comprendemos tu experiencia como nuevo colaborador
        </p>
      </div>

      {/* Empathy map */}
      <section>
        <h3 className="text-lg font-bold text-navy-900 mb-1">Mapa de empatía</h3>
        <p className="text-sm text-gray-500 mb-6">
          Basado en el mapa de empatía del nuevo colaborador
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {empatia.map((section) => {
            const Icon = iconMap[section.icon] || Brain;
            return (
              <div key={section.titulo} className="card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-navy-50 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-navy-700" />
                  </div>
                  <h4 className="text-sm font-bold text-navy-900">{section.titulo}</h4>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-gray-600 flex items-start gap-2 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Satisfaction survey */}
      <section>
        <h3 className="text-lg font-bold text-navy-900 mb-1">Encuesta de satisfacción</h3>
        <p className="text-sm text-gray-500 mb-6">
          Califica tu experiencia del 1 al 5 (meta: ≥ 4.2/5 o ≥ 85%)
        </p>

        {submitted ? (
          <div className="card p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8 text-emerald-600" />
            </div>
            <h4 className="text-lg font-bold text-navy-900">Encuesta enviada</h4>
            <p className="text-sm text-gray-500 mt-1">Gracias por tu feedback</p>
            {hasRatings && (
              <div className="mt-6 inline-flex flex-col items-center gap-2 px-6 py-4 rounded-lg bg-navy-50">
                <p className="text-3xl font-extrabold text-navy-900">
                  {avgRating.toFixed(1)}
                  <span className="text-lg text-gray-400">/5</span>
                </p>
                <p className="text-sm font-semibold text-emerald-600">
                  Satisfacción: {satisfactionPercent}%
                </p>
                <span
                  className={`badge mt-1 ${
                    meetsTarget ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                  }`}
                >
                  {meetsTarget ? 'Meta alcanzada (≥ 4.2/5)' : 'Por debajo de la meta (≥ 4.2/5)'}
                </span>
              </div>
            )}
            <div className="mt-6">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setRatings(Array(6).fill(0));
                  setFeedback('');
                }}
                className="btn-secondary"
              >
                Realizar nuevamente
              </button>
            </div>
          </div>
        ) : (
          <div className="card p-6 md:p-8 space-y-6">
            {surveyQuestions.map((question, qIdx) => (
              <div key={qIdx}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-navy-900">
                    {qIdx + 1}. {question}
                  </p>
                  {ratings[qIdx] > 0 && (
                    <span className="text-xs font-bold text-emerald-600">
                      {ratings[qIdx]}/5
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      onClick={() => handleRating(qIdx, value)}
                      className="group"
                      aria-label={`${value} estrellas`}
                    >
                      <Star
                        className={`h-7 w-7 transition-colors ${
                          value <= ratings[qIdx]
                            ? 'fill-emerald-500 text-emerald-500'
                            : 'text-gray-300 group-hover:text-gray-400'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Open question */}
            <div>
              <label className="text-sm font-semibold text-navy-900 block mb-2">
                ¿Qué mejorarías de tu proceso de inducción?
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={4}
                placeholder="Escribe tus sugerencias aquí..."
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-navy-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-200 focus:border-navy-400 resize-none"
              />
            </div>

            {/* Live result */}
            {hasRatings && (
              <div className="flex items-center gap-4 p-4 rounded-lg bg-navy-50">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-emerald-500 text-emerald-500" />
                  <span className="text-lg font-bold text-navy-900">
                    {avgRating.toFixed(1)}
                  </span>
                  <span className="text-sm text-gray-500">/5</span>
                </div>
                <span className="text-sm text-gray-600">
                  Satisfacción actual: {satisfactionPercent}%
                </span>
              </div>
            )}

            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                disabled={!hasRatings}
                className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
                Enviar encuesta
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

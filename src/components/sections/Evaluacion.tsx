import { useState } from 'react';
import {
  ClipboardCheck,
  Briefcase,
  CheckCircle2,
  XCircle,
  Award,
  RotateCcw,
  TrendingUp,
} from 'lucide-react';
import { cargos } from '@/data/cargos';
import { evaluaciones } from '@/data/evaluaciones';
import type { CargoId } from '@/data/types';

export function Evaluacion() {
  const [selectedCargo, setSelectedCargo] = useState<CargoId | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const evaluacion = selectedCargo
    ? evaluaciones.find((e) => e.cargoId === selectedCargo)
    : null;

  const totalPreguntas = evaluacion?.preguntas.length ?? 0;

  const correctCount = answers.reduce((acc, ans, i) => {
    if (evaluacion && ans === evaluacion.preguntas[i].correcta) return acc + 1;
    return acc;
  }, 0);

  const porcentaje = totalPreguntas > 0 ? Math.round((correctCount / totalPreguntas) * 100) : 0;
  const aprobado = porcentaje >= 85;

  const handleSelectCargo = (id: CargoId) => {
    setSelectedCargo(id);
    setCurrentQ(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedAnswer(null);
  };

  const handleAnswer = (idx: number) => {
    setSelectedAnswer(idx);
  };

  const handleNext = () => {
    if (selectedAnswer === null || !evaluacion) return;
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    setSelectedAnswer(null);
    if (currentQ + 1 < totalPreguntas) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="section-title">Evaluación de inducción</h2>
        <p className="section-subtitle mt-1">
          Selecciona tu cargo y evalúa tu nivel de aprendizaje
        </p>
      </div>

      {/* Cargo selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
        {cargos.map((c) => (
          <button
            key={c.id}
            onClick={() => handleSelectCargo(c.id)}
            className={`card p-4 text-left transition-all duration-200 hover:border-navy-300 ${
              selectedCargo === c.id
                ? 'border-navy-700 ring-2 ring-navy-200 bg-navy-50'
                : ''
            }`}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  selectedCargo === c.id
                    ? 'bg-navy-700 text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                <Briefcase className="h-4 w-4" />
              </div>
              <p className="text-xs font-bold text-navy-900 leading-snug">{c.nombre}</p>
            </div>
          </button>
        ))}
      </div>

      {/* No cargo selected */}
      {!selectedCargo && (
        <div className="card p-12 flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <ClipboardCheck className="h-7 w-7 text-gray-400" />
          </div>
          <p className="text-sm font-semibold text-navy-900">
            Selecciona uno de los cinco cargos para comenzar
          </p>
          <p className="text-xs text-gray-500 mt-1 max-w-md">
            La evaluación combina preguntas de conocimiento corporativo, conocimiento
            específico del cargo, herramientas y competencias.
          </p>
        </div>
      )}

      {/* Quiz */}
      {selectedCargo && evaluacion && !showResults && (
        <div className="card p-6 md:p-8">
          {/* Progress */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-semibold text-gray-500">
              Pregunta {currentQ + 1} de {totalPreguntas}
            </span>
            <span className="badge bg-navy-50 text-navy-700">
              {evaluacion.preguntas[currentQ].categoria}
            </span>
          </div>
          <div className="w-full h-1.5 bg-gray-100 rounded-full mb-8">
            <div
              className="h-full bg-navy-700 rounded-full transition-all duration-300"
              style={{ width: `${((currentQ + 1) / totalPreguntas) * 100}%` }}
            />
          </div>

          {/* Question */}
          <h3 className="text-base md:text-lg font-bold text-navy-900 mb-6">
            {evaluacion.preguntas[currentQ].pregunta}
          </h3>

          {/* Options */}
          <div className="space-y-3">
            {evaluacion.preguntas[currentQ].opciones.map((opcion, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                  selectedAnswer === idx
                    ? 'border-navy-700 bg-navy-50 ring-1 ring-navy-200'
                    : 'border-gray-200 hover:border-navy-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      selectedAnswer === idx
                        ? 'border-navy-700 bg-navy-700'
                        : 'border-gray-300'
                    }`}
                  >
                    {selectedAnswer === idx && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-sm text-navy-900">{opcion}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Next button */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {currentQ + 1 < totalPreguntas ? 'Siguiente' : 'Ver resultados'}
            </button>
          </div>
        </div>
      )}

      {/* Results */}
      {selectedCargo && evaluacion && showResults && (
        <div className="space-y-6">
          <div className="card p-8 text-center">
            <div
              className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4 ${
                aprobado ? 'bg-emerald-50' : 'bg-red-50'
              }`}
            >
              {aprobado ? (
                <Award className="h-10 w-10 text-emerald-600" />
              ) : (
                <XCircle className="h-10 w-10 text-red-500" />
              )}
            </div>
            <h3 className="text-2xl font-extrabold text-navy-900">{porcentaje}%</h3>
            <p className="text-sm text-gray-500 mt-1">
              {correctCount} de {totalPreguntas} respuestas correctas
            </p>
            <div
              className={`inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg ${
                aprobado ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-600'
              }`}
            >
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-semibold">
                {aprobado
                  ? 'Nivel de aprendizaje / eficacia: Aprobado (meta ≥ 85%)'
                  : 'Nivel de aprendizaje / eficacia: No aprobado (meta ≥ 85%)'}
              </span>
            </div>
          </div>

          {/* Answer review */}
          <div className="card p-6">
            <h4 className="text-sm font-bold text-navy-900 mb-4">Revisión de respuestas</h4>
            <div className="space-y-3">
              {evaluacion.preguntas.map((q, i) => {
                const isCorrect = answers[i] === q.correcta;
                return (
                  <div
                    key={i}
                    className={`p-4 rounded-lg border ${
                      isCorrect ? 'border-emerald-200 bg-emerald-50/50' : 'border-red-200 bg-red-50/50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {isCorrect ? (
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-navy-900">{q.pregunta}</p>
                        <p className="text-xs text-gray-600 mt-1">
                          Respuesta correcta: {q.opciones[q.correcta]}
                        </p>
                        {!isCorrect && answers[i] !== undefined && (
                          <p className="text-xs text-red-500 mt-0.5">
                            Tu respuesta: {q.opciones[answers[i]]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center">
            <button onClick={handleRestart} className="btn-secondary">
              <RotateCcw className="h-4 w-4" />
              Realizar nuevamente
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

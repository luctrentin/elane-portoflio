import React from 'react';
import { X, Heart, Scan, Scissors, Shield, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import { Especialidade } from '../types';

interface EspecialidadeModalProps {
  isOpen: boolean;
  onClose: () => void;
  especialidade: Especialidade | null;
}

const iconMap = {
  Heart,
  Scan,
  Scissors,
  Shield,
  Sparkles
};

const colorMap = {
  endodontia: {
    gradient: 'from-red-500 to-rose-600',
    bg: 'from-red-50 to-rose-50',
    text: 'text-red-700',
    border: 'border-red-200'
  },
  radiologia: {
    gradient: 'from-blue-500 to-cyan-600',
    bg: 'from-blue-50 to-cyan-50',
    text: 'text-blue-700',
    border: 'border-blue-200'
  },
  cirurgia: {
    gradient: 'from-purple-500 to-violet-600',
    bg: 'from-purple-50 to-violet-50',
    text: 'text-purple-700',
    border: 'border-purple-200'
  },
  periodontia: {
    gradient: 'from-green-500 to-emerald-600',
    bg: 'from-green-50 to-emerald-50',
    text: 'text-green-700',
    border: 'border-green-200'
  },
  dentistica: {
    gradient: 'from-amber-500 to-yellow-600',
    bg: 'from-amber-50 to-yellow-50',
    text: 'text-amber-700',
    border: 'border-amber-200'
  }
};

const EspecialidadeModal: React.FC<EspecialidadeModalProps> = ({ isOpen, onClose, especialidade }) => {
  if (!isOpen || !especialidade) return null;

  const IconComponent = iconMap[especialidade.icon as keyof typeof iconMap];
  const colors = colorMap[especialidade.id as keyof typeof colorMap];

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de saber mais sobre ${especialidade.nome} e agendar uma teleconsulta.`;
    const whatsappUrl = `https://wa.me/5588999468429?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  // Dados detalhados para cada especialidade
  const detalhesEspecialidade = {
    endodontia: {
      introducao: "A Endodontia é a especialidade que trata das doenças da polpa dental (nervo do dente). Utilizamos tecnologia microscópica e instrumentação mecanizada para garantir tratamentos mais precisos e confortáveis.",
      diferenciais: [
        "Microscópio operatório para visualização ampliada",
        "Instrumentação rotatória mecanizada",
        "Localizador apical eletrônico",
        "Ozonioterapia como terapia complementar",
        "Anestesia computadorizada para maior conforto"
      ],
      procedimentos: [
        {
          nome: "Tratamento de Canal em Adultos",
          descricao: "Remoção da polpa infectada e selamento do canal radicular"
        },
        {
          nome: "Endodontia Infantil (Pulpotomia)",
          descricao: "Tratamento conservador em dentes de leite"
        },
        {
          nome: "Retratamento Endodôntico",
          descricao: "Reintervenção em casos de insucesso do tratamento anterior"
        },
        {
          nome: "Ozonioterapia",
          descricao: "Terapia complementar para desinfecção e cicatrização"
        }
      ],
      indicacoes: [
        "Dor de dente intensa",
        "Sensibilidade ao quente/frio",
        "Inchaço na gengiva",
        "Escurecimento do dente",
        "Trauma dental"
      ]
    },
    radiologia: {
      introducao: "A Radiologia Odontológica é fundamental para um diagnóstico preciso. Utilizamos tecnologia digital e tomografia 3D para visualizar estruturas que não são visíveis no exame clínico.",
      diferenciais: [
        "Radiografias digitais com menor radiação",
        "Tomografia computadorizada 3D",
        "Interpretação especializada de imagens",
        "Planejamento digital de tratamentos",
        "Diagnóstico precoce de lesões"
      ],
      procedimentos: [
        {
          nome: "Radiografias Periapicais",
          descricao: "Visualização detalhada de dentes e estruturas adjacentes"
        },
        {
          nome: "Radiografias Panorâmicas",
          descricao: "Visão geral de toda a arcada dentária"
        },
        {
          nome: "Tomografia Computadorizada",
          descricao: "Imagem 3D para casos complexos"
        },
        {
          nome: "Interpretação de Exames",
          descricao: "Análise especializada e laudo detalhado"
        }
      ],
      indicacoes: [
        "Planejamento de implantes",
        "Avaliação de cistos e tumores",
        "Diagnóstico de fraturas",
        "Localização de canais extras",
        "Acompanhamento pós-operatório"
      ]
    },
    cirurgia: {
      introducao: "A Cirurgia Oral abrange procedimentos cirúrgicos na cavidade bucal. Utilizamos técnicas minimamente invasivas para garantir maior conforto e recuperação mais rápida.",
      diferenciais: [
        "Técnicas minimamente invasivas",
        "Anestesia local eficaz",
        "Instrumentos cirúrgicos modernos",
        "Protocolos de biossegurança rigorosos",
        "Acompanhamento pós-operatório completo"
      ],
      procedimentos: [
        {
          nome: "Extrações Simples",
          descricao: "Remoção de dentes com técnica atraumática"
        },
        {
          nome: "Extrações Complexas",
          descricao: "Remoção de dentes inclusos ou com complicações"
        },
        {
          nome: "Remoção de Terceiros Molares",
          descricao: "Extração de sisos com técnica especializada"
        },
        {
          nome: "Cirurgias Periorestauradoras",
          descricao: "Procedimentos para melhoria do contorno gengival"
        }
      ],
      indicacoes: [
        "Dentes não restauráveis",
        "Dentes inclusos",
        "Preparação para ortodontia",
        "Infecções recorrentes",
        "Cistos e lesões"
      ]
    },
    periodontia: {
      introducao: "A Periodontia cuida da saúde das gengivas e estruturas de suporte dos dentes. A prevenção é fundamental para manter seus dentes por toda a vida.",
      diferenciais: [
        "Avaliação periodontal completa",
        "Instrumentos ultrassônicos modernos",
        "Técnicas de raspagem atraumática",
        "Orientação personalizada de higiene",
        "Programa de manutenção preventiva"
      ],
      procedimentos: [
        {
          nome: "Profilaxia (Limpeza)",
          descricao: "Remoção de placa e tártaro com ultrassom"
        },
        {
          nome: "Raspagem e Alisamento",
          descricao: "Tratamento da doença periodontal"
        },
        {
          nome: "Controle de Placa",
          descricao: "Orientações para higiene bucal eficaz"
        },
        {
          nome: "Manutenção Periodontal",
          descricao: "Acompanhamento regular para prevenção"
        }
      ],
      indicacoes: [
        "Sangramento gengival",
        "Mau hálito persistente",
        "Gengivas inchadas",
        "Retração gengival",
        "Mobilidade dental"
      ]
    },
    dentistica: {
      introducao: "A Dentística restaura a forma, função e estética dos dentes. Utilizamos materiais de última geração para resultados naturais e duradouros.",
      diferenciais: [
        "Resinas compostas de alta qualidade",
        "Técnicas adesivas modernas",
        "Seleção de cor personalizada",
        "Acabamento e polimento refinado",
        "Materiais biocompatíveis"
      ],
      procedimentos: [
        {
          nome: "Restaurações Estéticas",
          descricao: "Resinas compostas com aparência natural"
        },
        {
          nome: "Tratamento de Cáries",
          descricao: "Remoção de cárie e restauração do dente"
        },
        {
          nome: "Clareamento Dental",
          descricao: "Clareamento supervisionado e seguro"
        },
        {
          nome: "Reconstruções Estéticas",
          descricao: "Restauração de dentes muito destruídos"
        }
      ],
      indicacoes: [
        "Cáries dentárias",
        "Fraturas dentais",
        "Manchas nos dentes",
        "Desgaste dental",
        "Melhoria estética"
      ]
    }
  };

  const detalhes = detalhesEspecialidade[especialidade.id as keyof typeof detalhesEspecialidade];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className={`bg-gradient-to-r ${colors.gradient} text-white p-6 flex items-center justify-between`}>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{especialidade.nome}</h2>
              <p className="text-white/90">Tratamento Especializado</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[70vh]">
          <div className="space-y-8">
            {/* Introdução */}
            <div className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-6 ${colors.border} border`}>
              <h3 className={`text-xl font-bold ${colors.text} mb-3`}>
                O que é {especialidade.nome}?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {detalhes.introducao}
              </p>
            </div>

            {/* Diferenciais */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                <CheckCircle className={`w-5 h-5 mr-2 ${colors.text.replace('text-', 'text-')}`} />
                Nossos Diferenciais
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {detalhes.diferenciais.map((diferencial, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg">
                    <div className={`w-2 h-2 ${colors.gradient.replace('from-', 'bg-').split(' ')[0]} rounded-full mt-2 flex-shrink-0`}></div>
                    <span className="text-sm text-slate-700">{diferencial}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Procedimentos */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Procedimentos Realizados
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {detalhes.procedimentos.map((procedimento, index) => (
                  <div key={index} className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                    <h4 className={`font-semibold ${colors.text} mb-2`}>
                      {procedimento.nome}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {procedimento.descricao}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicações */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Quando Procurar Este Tratamento?
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {detalhes.indicacoes.map((indicacao, index) => (
                  <div key={index} className={`flex items-center space-x-3 p-3 bg-gradient-to-r ${colors.bg} rounded-lg ${colors.border} border`}>
                    <div className={`w-2 h-2 ${colors.gradient.replace('from-', 'bg-').split(' ')[0]} rounded-full flex-shrink-0`}></div>
                    <span className="text-sm text-slate-700 font-medium">{indicacao}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-6 text-center ${colors.border} border`}>
              <h3 className={`text-xl font-bold ${colors.text} mb-3`}>
                Precisa deste tratamento?
              </h3>
              <p className="text-slate-600 mb-6">
                Agende uma teleconsulta para avaliação inicial e orientações personalizadas
              </p>
              <button
                onClick={handleWhatsApp}
                className={`bg-gradient-to-r ${colors.gradient} text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto`}
              >
                Agendar Teleconsulta
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EspecialidadeModal;
import React, { useState } from 'react';
import { X, BookOpen, Heart, Shield, Sparkles, Users, Play, ArrowRight } from 'lucide-react';

interface ConteudosEducativosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConteudosEducativosModal: React.FC<ConteudosEducativosModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('saude-bucal');

  if (!isOpen) return null;

  const handleWhatsApp = (assunto: string) => {
    const message = `Olá! Gostaria de saber mais sobre ${assunto}. Posso agendar uma teleconsulta?`;
    const whatsappUrl = `https://wa.me/5588999468429?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const tabs = [
    { id: 'saude-bucal', label: 'Saúde Bucal', icon: Heart },
    { id: 'prevencao', label: 'Prevenção', icon: Shield },
    { id: 'tratamentos', label: 'Tratamentos', icon: Sparkles },
    { id: 'cuidados', label: 'Cuidados', icon: Users }
  ];

  const conteudos = {
    'saude-bucal': [
      {
        titulo: "Importância da saúde bucal para o corpo",
        descricao: "Entenda como a saúde da boca impacta diretamente na saúde geral do organismo.",
        topicos: [
          "Relação entre doenças bucais e cardíacas",
          "Impacto da saúde bucal na digestão",
          "Conexão entre gengiva e diabetes",
          "Influência na autoestima e qualidade de vida",
          "Prevenção de infecções sistêmicas"
        ]
      },
      {
        titulo: "Sinais de alerta na saúde bucal",
        descricao: "Identifique precocemente os sintomas que indicam necessidade de cuidado profissional.",
        topicos: [
          "Sangramento gengival persistente",
          "Dor de dente que não passa",
          "Mau hálito constante",
          "Manchas ou mudanças na cor dos dentes",
          "Sensibilidade excessiva ao quente/frio"
        ]
      },
      {
        titulo: "Alimentação e saúde bucal",
        descricao: "Como os alimentos que consumimos afetam diretamente nossos dentes e gengivas.",
        topicos: [
          "Alimentos que fortalecem os dentes",
          "Bebidas que podem causar erosão",
          "Importância do cálcio e vitamina D",
          "Horários ideais para consumo de doces",
          "Hidratação e produção de saliva"
        ]
      }
    ],
    'prevencao': [
      {
        titulo: "Técnicas corretas de escovação",
        descricao: "Aprenda a técnica adequada para uma limpeza eficaz dos dentes e gengivas.",
        topicos: [
          "Escolha da escova dental ideal",
          "Técnica de Bass modificada",
          "Tempo adequado de escovação (2-3 minutos)",
          "Movimentos corretos para cada região",
          "Quando trocar a escova dental"
        ]
      },
      {
        titulo: "Uso correto do fio dental",
        descricao: "Técnica adequada para limpeza entre os dentes e prevenção de cáries.",
        topicos: [
          "Tipos de fio dental disponíveis",
          "Técnica correta de passagem",
          "Frequência ideal de uso",
          "Alternativas para casos especiais",
          "Sinais de que está sendo usado corretamente"
        ]
      },
      {
        titulo: "Importância das consultas regulares",
        descricao: "Por que o acompanhamento profissional é fundamental para manter a saúde bucal.",
        topicos: [
          "Frequência ideal de consultas",
          "Detecção precoce de problemas",
          "Limpeza profissional vs caseira",
          "Orientações personalizadas",
          "Prevenção é mais econômica que tratamento"
        ]
      }
    ],
    'tratamentos': [
      {
        titulo: "Quando é necessário tratamento de canal",
        descricao: "Situações que indicam a necessidade de tratamento endodôntico.",
        topicos: [
          "Dor intensa e pulsátil",
          "Sensibilidade prolongada ao calor",
          "Inchaço na região do dente",
          "Escurecimento do dente",
          "Trauma dental com exposição da polpa"
        ]
      },
      {
        titulo: "Opções de restaurações modernas",
        descricao: "Conheça os materiais e técnicas atuais para restaurar seus dentes.",
        topicos: [
          "Resinas compostas de última geração",
          "Cerâmicas e porcelanas",
          "Técnicas adesivas modernas",
          "Durabilidade e estética",
          "Cuidados pós-restauração"
        ]
      },
      {
        titulo: "Clareamento dental seguro",
        descricao: "Métodos profissionais para clarear os dentes sem danificar o esmalte.",
        topicos: [
          "Diferença entre clareamento caseiro e profissional",
          "Cuidados durante o tratamento",
          "Alimentos que devem ser evitados",
          "Manutenção dos resultados",
          "Contraindicações importantes"
        ]
      }
    ],
    'cuidados': [
      {
        titulo: "Cuidados pós-tratamento",
        descricao: "Orientações essenciais para garantir o sucesso dos tratamentos realizados.",
        topicos: [
          "Medicação prescrita e horários",
          "Alimentação nos primeiros dias",
          "Sinais de alerta para procurar ajuda",
          "Higiene bucal durante a recuperação",
          "Retornos e acompanhamento"
        ]
      },
      {
        titulo: "Higiene bucal para crianças",
        descricao: "Como cuidar da saúde bucal dos pequenos desde os primeiros dentes.",
        topicos: [
          "Quando começar a escovação",
          "Pasta de dente com ou sem flúor",
          "Técnicas lúdicas para motivar",
          "Primeira consulta ao dentista",
          "Prevenção de cáries na infância"
        ]
      },
      {
        titulo: "Cuidados especiais para idosos",
        descricao: "Adaptações necessárias na higiene bucal durante o envelhecimento.",
        topicos: [
          "Xerostomia (boca seca) e suas causas",
          "Cuidados com próteses dentárias",
          "Medicamentos que afetam a saúde bucal",
          "Adaptações para limitações motoras",
          "Importância do acompanhamento regular"
        ]
      }
    ]
  };

  const TabContent: React.FC<{ conteudo: any }> = ({ conteudo }) => (
    <div className="space-y-6">
      {conteudo.map((item: any, index: number) => (
        <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-800 mb-2">{item.titulo}</h3>
              <p className="text-slate-600 mb-4">{item.descricao}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-rose-100 rounded-xl flex items-center justify-center ml-4">
              <Play className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          
          <div className="space-y-2 mb-6">
            {item.topicos.map((topico: string, idx: number) => (
              <div key={idx} className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm text-slate-600">{topico}</span>
              </div>
            ))}
          </div>
          
          <button
            onClick={() => handleWhatsApp(item.titulo)}
            className="flex items-center text-purple-700 hover:text-purple-800 font-medium transition-colors duration-300"
          >
            Saber mais sobre este tópico
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-700 to-rose-600 text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Conteúdos Educativos</h2>
              <p className="text-purple-200">Informações importantes sobre saúde bucal</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 overflow-x-auto">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-4 font-semibold transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-purple-700 border-b-2 border-purple-700 bg-purple-50'
                    : 'text-slate-600 hover:text-purple-700 hover:bg-slate-50'
                }`}
              >
                <IconComponent className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <TabContent conteudo={conteudos[activeTab as keyof typeof conteudos]} />
          
          {/* CTA dentro do modal */}
          <div className="mt-8 bg-gradient-to-br from-purple-50 to-rose-50 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-rose-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              Tem dúvidas específicas?
            </h3>
            <p className="text-slate-600 mb-4">
              Agende uma teleconsulta e receba orientações personalizadas
            </p>
            <button
              onClick={() => handleWhatsApp("orientações personalizadas sobre saúde bucal")}
              className="bg-gradient-to-r from-purple-700 to-purple-800 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-800 hover:to-purple-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Teleconsulta Gratuita
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConteudosEducativosModal;
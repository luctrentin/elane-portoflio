import React from 'react';
import { Video, CheckCircle, Clock, UserCheck, Phone, Calendar } from 'lucide-react';

const Teleconsulta: React.FC = () => {
  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de agendar uma teleconsulta com a Dra. Elane para triagem inicial.";
    const whatsappUrl = `https://wa.me/5588999468429?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleGoogleCalendar = () => {
    const title = "Teleconsulta - Dra. Elane Lima";
    const details = "Teleconsulta para triagem inicial, orientações personalizadas e avaliação de urgência";
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(details)}`;
    window.open(calendarUrl, '_blank');
  };

  const beneficios = [
    {
      icon: UserCheck,
      titulo: "Triagem Inicial Online",
      descricao: "Avaliação prévia do seu caso para definir a melhor abordagem"
    },
    {
      icon: CheckCircle,
      titulo: "Orientações Personalizadas", 
      descricao: "Receba dicas específicas para seu problema dental"
    },
    {
      icon: Clock,
      titulo: "Avaliação de Urgência",
      descricao: "Identificamos casos que precisam de atendimento imediato"
    },
    {
      icon: Video,
      titulo: "Conhecer Antes da Consulta",
      descricao: "Crie uma conexão com a doutora antes do encontro presencial"
    }
  ];

  return (
    <section id="teleconsulta" className="py-20 bg-gradient-to-br from-purple-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-rose-100 text-purple-800 rounded-full text-sm font-bold">
                <Video className="w-4 h-4 mr-2" />
                DIFERENCIAL EXCLUSIVO
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                <span className="text-purple-700">Teleconsulta</span>
                <br />
                <span className="text-rose-600">Especializada</span>
              </h2>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Receba orientação especializada no conforto da sua casa. 
                Nossa teleconsulta serve como triagem inicial para conhecer seu caso.
              </p>
            </div>

            {/* Benefícios */}
            <div className="grid sm:grid-cols-2 gap-4">
              {beneficios.map((beneficio, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <beneficio.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">{beneficio.titulo}</h3>
                    <p className="text-sm text-slate-600">{beneficio.descricao}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsApp}
                className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-700 to-purple-800 text-white rounded-xl hover:from-purple-800 hover:to-purple-900 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                <span className="font-semibold">Agendar via WhatsApp</span>
              </button>
              
              <button
                onClick={handleGoogleCalendar}
                className="group flex items-center justify-center px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5 mr-3 group-hover:text-purple-600" />
                <span className="font-semibold">Google Calendar</span>
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform">
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-200 to-rose-200 rounded-3xl opacity-20"></div>
              
              <div className="relative space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-rose-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Video className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Como Funciona?</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <span className="text-slate-700">Agende pelo WhatsApp ou Google Calendar</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-rose-50 rounded-xl">
                    <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <span className="text-slate-700">Receba o link da videochamada</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <span className="text-slate-700">Conversa de 15-20 minutos com orientações</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-rose-500 p-4 rounded-xl text-white text-center">
                  <p className="font-bold text-lg">Atendimento Especializado</p>
                  <p className="text-sm opacity-90">Orientação profissional personalizada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teleconsulta;
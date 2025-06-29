import React from 'react';
import { Star, Award, Microscope, Phone, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de agendar uma teleconsulta com a Dra. Elane.";
    const whatsappUrl = `https://wa.me/5588999468429?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleGoogleCalendar = () => {
    const title = "Consulta Presencial - Dra. Elane Lima";
    const details = "Consulta presencial no consultório da Dra. Elane Lima da Silva";
    const location = "Av. Madre Benvenuta, 322 - Trindade, Florianópolis/SC";
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    window.open(calendarUrl, '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-stone-50 via-rose-50 to-purple-50 flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23752E2E%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                Mestre pela UFSC
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-800">Dra. Elane Lima</span>
                <br />
                <span className="text-purple-700">Endodontista</span>
                <br />
                <span className="text-rose-600">& Radiologista</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Cuidado especializado para toda a família com tecnologia avançada em 
                <span className="font-semibold text-purple-700"> Endodontia</span> e 
                <span className="font-semibold text-rose-600"> Radiologia Odontológica</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsApp}
                className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-700 to-purple-800 text-white rounded-xl hover:from-purple-800 hover:to-purple-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                <Phone className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                <span className="font-semibold">Teleconsulta</span>
              </button>
              
              <button
                onClick={handleGoogleCalendar}
                className="group flex items-center justify-center px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-xl hover:border-rose-300 hover:bg-rose-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5 mr-3 group-hover:text-rose-600" />
                <span className="font-semibold">Agendar Consulta Presencial</span>
              </button>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-md">
                <Award className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-sm font-medium text-slate-700">Mestre pela UFSC</span>
              </div>
              
              <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-md">
                <Microscope className="w-5 h-5 text-rose-600 mr-2" />
                <span className="text-sm font-medium text-slate-700">Tecnologia Microscópica</span>
              </div>
              
              <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-md">
                <Star className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-sm font-medium text-slate-700">Convênios Aceitos</span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-200 to-rose-200 rounded-3xl opacity-20"></div>
              <div className="relative space-y-6">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-rose-100 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face" 
                      alt="Dra. Elane Lima" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-700 mb-2">Dra. Elane Lima</h3>
                  <p className="text-purple-700 font-medium">Elane L. Silva</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-sm">Endodontia Adulto e Infantil</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                    <span className="text-sm">Radiologia e Imaginologia</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm">Tecnologia Avançada</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
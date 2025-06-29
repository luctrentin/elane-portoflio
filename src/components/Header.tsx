import React, { useState } from 'react';
import { Menu, X, Phone, Calendar, GraduationCap } from 'lucide-react';
import { contatoInfo } from '../data/professionalData';
import AcademicModal from './AcademicModal';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAcademicModalOpen, setIsAcademicModalOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' }, 
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Teleconsulta', href: '#teleconsulta' },
    { label: 'Conteúdos', href: '#conteudos' },
    { label: 'Contato', href: '#contato' }
  ];

  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de agendar uma teleconsulta com a Dra. Elane.";
    const whatsappUrl = `https://wa.me/5588999468429?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleGoogleCalendar = () => {
    const title = "Teleconsulta - Dra. Elane Lima";
    const details = "Teleconsulta para avaliação inicial e orientações personalizadas";
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(details)}`;
    window.open(calendarUrl, '_blank');
  };

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo com Foto */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-rose-100 rounded-full flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" 
                  alt="Dra. Elane Lima" 
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl font-bold text-slate-800">
                  Elane Lima
                </h1>
                <p className="text-sm text-purple-700 font-medium">
                  Endodontia | Radiologia
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-600 hover:text-purple-700 font-medium transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={handleWhatsApp}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-700 to-purple-800 text-white rounded-lg hover:from-purple-800 hover:to-purple-900 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                Teleconsulta
              </button>
              <button
                onClick={handleGoogleCalendar}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-rose-400 to-rose-500 text-white rounded-lg hover:from-rose-500 hover:to-rose-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Agendar
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-600 hover:text-purple-700 hover:bg-slate-100 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-slate-200">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-slate-600 hover:text-purple-700 font-medium transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsAcademicModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="text-slate-600 hover:text-purple-700 font-medium transition-colors duration-300 py-2 text-left flex items-center"
                >
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Formação Acadêmica
                </button>
              </nav>
              <div className="flex flex-col space-y-3 mt-6">
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-700 to-purple-800 text-white rounded-lg hover:from-purple-800 hover:to-purple-900 transition-all duration-300 shadow-md"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Teleconsulta
                </button>
                <button
                  onClick={handleGoogleCalendar}
                  className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-rose-400 to-rose-500 text-white rounded-lg hover:from-rose-500 hover:to-rose-600 transition-all duration-300 shadow-md"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar Consulta
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Academic Modal */}
      <AcademicModal 
        isOpen={isAcademicModalOpen} 
        onClose={() => setIsAcademicModalOpen(false)} 
      />
    </>
  );
};

export default Header;
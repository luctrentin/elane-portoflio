import React, { useState } from 'react';
import { MessageCircle, X, Phone, Calendar, MapPin, AlertTriangle } from 'lucide-react';
import { chatOptions } from '../data/professionalData';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (acao: string) => {
    setSelectedOption(acao);
    
    switch (acao) {
      case 'tratamento':
        alert('Por favor, descreva brevemente sua dúvida e entraremos em contato em breve.');
        break;
      case 'atendente':
        handleWhatsApp('Gostaria de falar com um atendente');
        break;
      case 'agendar':
        handleWhatsApp('Gostaria de agendar uma consulta ou teleconsulta');
        break;
      case 'convenios':
        setSelectedOption('convenios-info');
        break;
      case 'localizacao':
        setSelectedOption('localizacao-info');
        break;
      case 'emergencia':
        handleWhatsApp('URGÊNCIA DENTAL - Preciso de atendimento imediato');
        break;
    }
  };

  const handleWhatsApp = (message: string) => {
    const whatsappUrl = `https://wa.me/5588999468429?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    setSelectedOption(null);
  };

  const handleBackToMenu = () => {
    setSelectedOption(null);
  };

  const renderConveniosInfo = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-slate-800">Convênios Aceitos</h3>
        <button onClick={handleBackToMenu} className="text-amber-600 text-sm">← Voltar</button>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-slate-600 mb-3">Principais convênios aceitos:</p>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Unimed
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Bradesco Saúde
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            SulAmérica
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Amil
          </div>
        </div>
      </div>
      
      <div className="bg-amber-50 p-3 rounded-lg">
        <p className="text-sm text-amber-800">
          <strong>💳 Particular:</strong> Aceitamos cartão, PIX e dinheiro
        </p>
      </div>
      
      <button
        onClick={() => handleWhatsApp('Gostaria de confirmar se meu convênio é aceito')}
        className="w-full bg-green-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
      >
        Confirmar Meu Convênio
      </button>
    </div>
  );

  const renderLocalizacaoInfo = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-slate-800">Localização</h3>
        <button onClick={handleBackToMenu} className="text-amber-600 text-sm">← Voltar</button>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 text-rose-600 mt-0.5" />
          <div>
            <p className="font-medium text-slate-800">Endereço:</p>
            <p className="text-sm text-slate-600">
              Av. Madre Benvenuta, 322<br />
              Trindade - Florianópolis/SC
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <Phone className="w-5 h-5 text-amber-600 mt-0.5" />
          <div>
            <p className="font-medium text-slate-800">Telefone:</p>
            <p className="text-sm text-slate-600">(88) 99946-8429</p>
          </div>
        </div>
      </div>
      
      <div className="flex space-x-2">
        <button
          onClick={() => handleWhatsApp('Gostaria de saber sobre os horários de atendimento')}
          className="flex-1 bg-amber-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors"
        >
          Horários
        </button>
        <button
          onClick={() => window.open('https://maps.google.com/?q=Av.+Madre+Benvenuta,+322+Trindade+Florianópolis+SC', '_blank')}
          className="flex-1 bg-rose-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-rose-700 transition-colors"
        >
          Ver no Mapa
        </button>
      </div>
    </div>
  );

  const renderMainMenu = () => (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h3 className="font-bold text-slate-800 mb-2">Olá! 👋</h3>
        <p className="text-sm text-slate-600">
          Sou a assistente virtual da Dra. Elane Lima. Como posso ajudar?
        </p>
      </div>
      
      <div className="space-y-2">
        {chatOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionClick(option.acao)}
            className="w-full flex items-center p-3 text-left bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors duration-200"
          >
            <span className="mr-3">{option.emoji}</span>
            <span className="text-sm text-slate-700">{option.texto}</span>
          </button>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-amber-500 to-rose-500 p-3 rounded-lg text-white text-center">
        <p className="text-sm font-medium">🎁 Teleconsulta 100% Gratuita</p>
        <p className="text-xs opacity-90">Triagem inicial sem compromisso</p>
      </div>
    </div>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group w-16 h-16 bg-gradient-to-r from-amber-600 to-rose-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center hover:scale-110 transform"
        >
          <MessageCircle className="w-8 h-8 group-hover:animate-pulse" />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
            1
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-600 to-rose-600 text-white p-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold">Assistente Virtual</h3>
              <p className="text-xs opacity-90">Dra. Elane Lima</p>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setSelectedOption(null);
              }}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50">
            {selectedOption === 'convenios-info' && renderConveniosInfo()}
            {selectedOption === 'localizacao-info' && renderLocalizacaoInfo()}
            {!selectedOption && renderMainMenu()}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget: React.FC = () => {
  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de falar diretamente com a Dra. Elane Lima.";
    const whatsappUrl = `https://wa.me/5588999468429?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-24 z-40">
      <button
        onClick={handleWhatsApp}
        className="group w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center hover:scale-110 transform hover:bg-green-600"
        title="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8 group-hover:animate-pulse" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
          !
        </div>
      </button>
    </div>
  );
};

export default WhatsAppWidget;
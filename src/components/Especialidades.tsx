import React, { useState } from 'react';
import { Heart, Scan, Scissors, Shield, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { especialidades } from '../data/professionalData';
import EspecialidadeModal from './EspecialidadeModal';
import { Especialidade } from '../types';

const iconMap = {
  Heart,
  Scan,
  Scissors,
  Shield,
  Sparkles
};

const Especialidades: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedEspecialidade, setSelectedEspecialidade] = useState<Especialidade | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWhatsApp = (especialidade: string) => {
    const message = `Olá! Gostaria de saber mais sobre ${especialidade}. Posso agendar uma teleconsulta?`;
    const whatsappUrl = `https://wa.me/5588999468429?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSaberMais = (especialidade: Especialidade) => {
    setSelectedEspecialidade(especialidade);
    setIsModalOpen(true);
  };

  // Dados do carrossel com fotos ilustrativas
  const carouselData = [
    {
      id: 'endodontia',
      titulo: 'Endodontia',
      descricao: 'Tratamento de canal com tecnologia microscópica e instrumentação mecanizada',
      imagem: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      detalhes: 'Utilizamos microscópio operatório e instrumentos rotatórios para maior precisão e conforto'
    },
    {
      id: 'radiologia',
      titulo: 'Radiologia Odontológica',
      descricao: 'Diagnóstico preciso através de imagens digitais e tomografia 3D',
      imagem: 'https://images.pexels.com/photos/4269693/pexels-photo-4269693.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      detalhes: 'Radiografias digitais e tomografia computadorizada para diagnóstico preciso'
    },
    {
      id: 'dentistica',
      titulo: 'Dentística',
      descricao: 'Restaurações estéticas e tratamentos conservadores',
      imagem: 'https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      detalhes: 'Resinas compostas e cerâmicas para restaurações naturais e duradouras'
    },
    {
      id: 'cirurgia',
      titulo: 'Cirurgia Oral',
      descricao: 'Procedimentos cirúrgicos orais com técnicas modernas e seguras',
      imagem: 'https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      detalhes: 'Extrações e cirurgias com técnicas minimamente invasivas'
    },
    {
      id: 'periodontia',
      titulo: 'Periodontia',
      descricao: 'Cuidados especializados para saúde gengival e prevenção',
      imagem: 'https://images.pexels.com/photos/6812548/pexels-photo-6812548.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      detalhes: 'Tratamento gengival e profilaxia para manter sua saúde bucal'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  return (
    <>
      <section id="especialidades" className="py-20 bg-gradient-to-br from-stone-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Nossas <span className="text-purple-700">Especialidades</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Oferecemos cuidado especializado com tecnologia de ponta para garantir 
              o melhor tratamento para você e sua família
            </p>
          </div>

          {/* Carrossel de Fotos Ilustrativas */}
          <div className="mb-16">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="relative h-96 md:h-[500px]">
                {/* Imagem atual */}
                <div className="absolute inset-0">
                  <img
                    src={carouselData[currentSlide].imagem}
                    alt={carouselData[currentSlide].titulo}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>

                {/* Conteúdo sobreposto */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="max-w-2xl">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      {carouselData[currentSlide].titulo}
                    </h3>
                    <p className="text-lg md:text-xl mb-4 opacity-90">
                      {carouselData[currentSlide].descricao}
                    </p>
                    <p className="text-sm md:text-base opacity-80 mb-6">
                      {carouselData[currentSlide].detalhes}
                    </p>
                    <button
                      onClick={() => {
                        const especialidade = especialidades.find(esp => esp.id === carouselData[currentSlide].id);
                        if (especialidade) handleSaberMais(especialidade);
                      }}
                      className="bg-gradient-to-r from-purple-600 to-rose-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Saber mais sobre {carouselData[currentSlide].titulo}
                    </button>
                  </div>
                </div>

                {/* Botões de navegação */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Indicadores */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {carouselData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-white' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Não sabe qual especialidade precisa?
              </h3>
              <p className="text-slate-600 mb-6">
                Agende uma teleconsulta e receba orientação personalizada
              </p>
              <button
                onClick={() => handleWhatsApp("teleconsulta para orientação")}
                className="bg-gradient-to-r from-purple-700 to-rose-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-800 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Teleconsulta
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Especialidade */}
      <EspecialidadeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        especialidade={selectedEspecialidade}
      />
    </>
  );
};

export default Especialidades;
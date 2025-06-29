import React, { useState } from 'react';
import { BookOpen, Heart, Shield, Sparkles, ArrowRight, Users, Award, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import ConteudosEducativosModal from './ConteudosEducativosModal';

const ConteudosEducativos: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleWhatsApp = (assunto: string) => {
    const message = `Olá! Gostaria de saber mais sobre ${assunto}. Posso agendar uma teleconsulta?`;
    const whatsappUrl = `https://wa.me/5588999468429?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const categorias = [
    {
      id: 'saude-bucal',
      titulo: 'Saúde Bucal Geral',
      descricao: 'Entenda a importância da saúde bucal para todo o organismo',
      icon: Heart,
      gradient: 'from-red-500 to-rose-600',
      bg: 'from-red-50 to-rose-50',
      topicos: ['Relação com saúde geral', 'Sinais de alerta', 'Alimentação saudável']
    },
    {
      id: 'prevencao',
      titulo: 'Prevenção e Cuidados',
      descricao: 'Técnicas corretas de higiene e prevenção de problemas',
      icon: Shield,
      gradient: 'from-green-500 to-emerald-600',
      bg: 'from-green-50 to-emerald-50',
      topicos: ['Escovação correta', 'Uso do fio dental', 'Consultas regulares']
    },
    {
      id: 'tratamentos',
      titulo: 'Tratamentos Modernos',
      descricao: 'Conheça os tratamentos disponíveis e quando são necessários',
      icon: Sparkles,
      gradient: 'from-purple-500 to-violet-600',
      bg: 'from-purple-50 to-violet-50',
      topicos: ['Tratamento de canal', 'Restaurações', 'Clareamento dental']
    },
    {
      id: 'cuidados',
      titulo: 'Cuidados Especiais',
      descricao: 'Orientações para diferentes idades e situações específicas',
      icon: Users,
      gradient: 'from-blue-500 to-cyan-600',
      bg: 'from-blue-50 to-cyan-50',
      topicos: ['Pós-tratamento', 'Crianças', 'Idosos']
    }
  ];

  const itemsPerSlide = 2;
  const totalSlides = Math.ceil(categorias.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return categorias.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <>
      <section id="conteudos" className="py-20 bg-gradient-to-br from-stone-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header com ícone de livro */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-rose-500 rounded-2xl flex items-center justify-center mr-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                  Conteúdos <span className="text-purple-700">Educativos</span>
                </h2>
                <p className="text-lg text-purple-700 font-medium mt-2">
                  Baseado em Evidências Científicas
                </p>
              </div>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Informações importantes sobre saúde bucal para você e sua família. 
              Conhecimento que faz a diferença no seu cuidado diário.
            </p>
          </div>

          {/* Carrossel de Categorias */}
          <div className="relative mb-16">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 gap-8 px-4">
                      {categorias
                        .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                        .map((categoria) => {
                          const IconComponent = categoria.icon;
                          return (
                            <div
                              key={categoria.id}
                              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-slate-200"
                            >
                              <div className={`h-2 bg-gradient-to-r ${categoria.gradient}`}></div>
                              
                              <div className="p-8">
                                <div className={`w-16 h-16 bg-gradient-to-br ${categoria.bg} rounded-2xl flex items-center justify-center mb-6`}>
                                  <IconComponent className="w-8 h-8 text-red-600" />
                                </div>
                                
                                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                                  {categoria.titulo}
                                </h3>
                                
                                <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                                  {categoria.descricao}
                                </p>

                                <div className="space-y-3 mb-8">
                                  {categoria.topicos.map((topico, index) => (
                                    <div key={index} className="flex items-center">
                                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                      <span className="text-slate-600 font-medium">{topico}</span>
                                    </div>
                                  ))}
                                </div>
                                
                                <button
                                  onClick={() => setIsModalOpen(true)}
                                  className={`group/btn w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r ${categoria.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                                >
                                  Explorar Conteúdos
                                  <ArrowRight className="w-5 h-5 ml-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </button>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Botões de Navegação */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicadores */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-purple-600 w-8' 
                      : 'bg-slate-300 hover:bg-purple-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-rose-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Tem dúvidas específicas?
              </h3>
              <p className="text-slate-600 mb-6">
                Agende uma teleconsulta e receba orientações personalizadas
              </p>
              <button
                onClick={() => handleWhatsApp("orientações personalizadas sobre saúde bucal")}
                className="bg-gradient-to-r from-purple-700 to-purple-800 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-800 hover:to-purple-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Teleconsulta Gratuita
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Conteúdos */}
      <ConteudosEducativosModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ConteudosEducativos;
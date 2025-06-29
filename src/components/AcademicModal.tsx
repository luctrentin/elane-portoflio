import React, { useState } from 'react';
import { X, GraduationCap, Award, BookOpen, Users, Star, ExternalLink } from 'lucide-react';
import { formacao, producoesCientificas } from '../data/professionalData';

interface AcademicModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AcademicModal: React.FC<AcademicModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('formacao');

  if (!isOpen) return null;

  const mestrado = formacao.filter(f => f.tipo === 'mestrado');
  const especializacoes = formacao.filter(f => f.tipo === 'especializacao');
  const aperfeicoamento = formacao.filter(f => f.tipo === 'aperfeicoamento');
  const graduacao = formacao.filter(f => f.tipo === 'graduacao');
  const cursos = formacao.filter(f => f.tipo === 'curso');

  const artigos = producoesCientificas.filter(p => p.tipo === 'artigo');
  const capitulos = producoesCientificas.filter(p => p.tipo === 'capitulo');
  const congressos = producoesCientificas.filter(p => p.tipo === 'congresso');

  const iconMap = {
    mestrado: Star,
    especializacao: Award,
    aperfeicoamento: BookOpen,
    graduacao: GraduationCap,
    curso: Users,
    artigo: BookOpen,
    capitulo: Award,
    congresso: Users
  };

  const colorMap = {
    mestrado: 'from-purple-500 to-purple-600',
    especializacao: 'from-amber-500 to-amber-600',
    aperfeicoamento: 'from-blue-500 to-blue-600',
    graduacao: 'from-green-500 to-green-600',
    curso: 'from-rose-500 to-rose-600',
    artigo: 'from-blue-500 to-blue-600',
    capitulo: 'from-amber-500 to-amber-600',
    congresso: 'from-green-500 to-green-600'
  };

  const FormacaoCard: React.FC<{ item: any }> = ({ item }) => {
    const IconComponent = iconMap[item.tipo as keyof typeof iconMap];
    const gradientColor = colorMap[item.tipo as keyof typeof colorMap];
    
    return (
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4">
        <div className="flex items-start space-x-3">
          <div className={`w-10 h-10 bg-gradient-to-br ${gradientColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
            <IconComponent className="w-5 h-5 text-white" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                {item.tipo}
              </span>
              <span className="text-xs font-bold text-purple-600">
                {item.periodo}
              </span>
            </div>
            
            <h3 className="text-sm font-bold text-slate-800 mb-1 leading-tight">
              {item.titulo}
            </h3>
            
            <p className="text-slate-600 text-xs mb-1">
              <span className="font-medium">Instituição:</span> {item.instituicao}
            </p>
            
            {item.cargaHoraria && (
              <p className="text-slate-600 text-xs">
                <span className="font-medium">Carga Horária:</span> {item.cargaHoraria}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  const ProducaoCard: React.FC<{ producao: any }> = ({ producao }) => {
    const IconComponent = iconMap[producao.tipo as keyof typeof iconMap];
    const gradientColor = colorMap[producao.tipo as keyof typeof colorMap];
    
    return (
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4">
        <div className="flex items-start space-x-3">
          <div className={`w-10 h-10 bg-gradient-to-br ${gradientColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
            <IconComponent className="w-5 h-5 text-white" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                {producao.tipo}
              </span>
              <span className="text-xs font-bold text-purple-600">
                {producao.ano}
              </span>
            </div>
            
            <h3 className="text-sm font-bold text-slate-800 mb-1 leading-tight">
              {producao.titulo}
            </h3>
            
            {producao.publicacao && (
              <p className="text-slate-600 text-xs mb-1">
                <span className="font-medium">Publicado em:</span> {producao.publicacao}
              </p>
            )}
            
            {producao.detalhes && (
              <p className="text-slate-600 text-xs">
                {producao.detalhes}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-700 to-purple-800 text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Formação & Produções Acadêmicas</h2>
              <p className="text-purple-200">Dra. Elane Lima da Silva</p>
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
        <div className="flex border-b border-slate-200">
          <button
            onClick={() => setActiveTab('formacao')}
            className={`flex-1 px-6 py-4 font-semibold transition-colors ${
              activeTab === 'formacao'
                ? 'text-purple-700 border-b-2 border-purple-700 bg-purple-50'
                : 'text-slate-600 hover:text-purple-700 hover:bg-slate-50'
            }`}
          >
            <GraduationCap className="w-5 h-5 inline mr-2" />
            Formação Acadêmica
          </button>
          <button
            onClick={() => setActiveTab('producoes')}
            className={`flex-1 px-6 py-4 font-semibold transition-colors ${
              activeTab === 'producoes'
                ? 'text-purple-700 border-b-2 border-purple-700 bg-purple-50'
                : 'text-slate-600 hover:text-purple-700 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-5 h-5 inline mr-2" />
            Produções Científicas
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {activeTab === 'formacao' && (
            <div className="space-y-8">
              {/* Mestrado - Destaque */}
              {mestrado.length > 0 && (
                <div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 mb-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">Mestrado</h3>
                        <p className="text-purple-700 font-medium">Formação de Excelência</p>
                      </div>
                    </div>
                    
                    {mestrado.map((item, index) => (
                      <div key={index} className="bg-white rounded-xl p-4 shadow-md">
                        <h4 className="text-lg font-bold text-slate-800 mb-2">{item.titulo}</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="flex items-center">
                            <GraduationCap className="w-4 h-4 text-purple-600 mr-2" />
                            <span className="text-slate-700 text-sm">{item.instituicao}</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-purple-600 mr-2" />
                            <span className="text-slate-700 text-sm">{item.periodo}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Especializações */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mr-3">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">Especializações</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {especializacoes.map((item, index) => (
                    <FormacaoCard key={index} item={item} />
                  ))}
                </div>
              </div>

              {/* Aperfeiçoamento */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">Aperfeiçoamento</h3>
                </div>
                <div className="grid md:grid-cols-1 gap-4">
                  {aperfeicoamento.map((item, index) => (
                    <FormacaoCard key={index} item={item} />
                  ))}
                </div>
              </div>

              {/* Graduação */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">Graduação</h3>
                </div>
                <div className="grid md:grid-cols-1 gap-4">
                  {graduacao.map((item, index) => (
                    <FormacaoCard key={index} item={item} />
                  ))}
                </div>
              </div>

              {/* Educação Continuada 2024 */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-rose-600 rounded-lg flex items-center justify-center mr-3">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">Educação Continuada (2024)</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cursos.map((item, index) => (
                    <FormacaoCard key={index} item={item} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'producoes' && (
            <div className="space-y-8">
              {/* Artigos Científicos */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">Artigos Publicados</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {artigos.map((artigo, index) => (
                    <ProducaoCard key={index} producao={artigo} />
                  ))}
                </div>
              </div>

              {/* Capítulos de Livros */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mr-3">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">Capítulos de Livros</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {capitulos.map((capitulo, index) => (
                    <ProducaoCard key={index} producao={capitulo} />
                  ))}
                </div>
              </div>

              {/* Participação em Congressos */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">Participação em Congressos</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {congressos.map((congresso, index) => (
                    <ProducaoCard key={index} producao={congresso} />
                  ))}
                </div>
              </div>

              {/* Resumo Acadêmico */}
              <div className="bg-gradient-to-br from-purple-50 to-rose-50 rounded-2xl p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-rose-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Compromisso com a Ciência
                  </h3>
                  
                  <p className="text-slate-600 mb-4 max-w-2xl mx-auto">
                    A Dra. Elane mantém-se sempre atualizada com as mais recentes descobertas 
                    científicas, garantindo que seus pacientes recebam o tratamento mais 
                    moderno e eficaz disponível.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">{artigos.length}</div>
                      <div className="text-slate-600 text-sm font-medium">Artigos Publicados</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-rose-600 mb-1">{capitulos.length}</div>
                      <div className="text-slate-600 text-sm font-medium">Capítulos de Livros</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">{congressos.length}+</div>
                      <div className="text-slate-600 text-sm font-medium">Eventos Científicos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcademicModal;
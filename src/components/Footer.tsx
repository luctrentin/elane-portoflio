import React, { useState } from 'react';
import { Phone, Mail, MapPin, Heart, Award, Shield, GraduationCap } from 'lucide-react';
import { contatoInfo } from '../data/professionalData';
import AcademicModal from './AcademicModal';

const Footer: React.FC = () => {
  const [isAcademicModalOpen, setIsAcademicModalOpen] = useState(false);

  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de mais informações sobre os serviços da Dra. Elane Lima.";
    const whatsappUrl = `https://wa.me/5588999468429?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Logo e Informações Principais */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <h3 className="text-2xl font-bold">Elane L. Silva</h3>
                  <button
                    onClick={() => setIsAcademicModalOpen(true)}
                    className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-md hover:shadow-lg"
                    title="Formação e Produções Acadêmicas"
                  >
                    <GraduationCap className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-purple-300 font-medium mb-4">
                  Endodontia | Radiologia
                </p>
                <p className="text-slate-300 leading-relaxed max-w-md">
                  Cuidado especializado com tecnologia avançada para você e sua família. 
                  Mestre pela UFSC com compromisso científico e excelência clínica.
                </p>
              </div>
              
              <div className="flex space-x-4">
                <div className="flex items-center px-4 py-2 bg-purple-600/20 border border-purple-600/30 rounded-lg">
                  <Award className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-sm text-purple-200">Mestre UFSC</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-rose-600/20 border border-rose-600/30 rounded-lg">
                  <Heart className="w-4 h-4 text-rose-400 mr-2" />
                  <span className="text-sm text-rose-200">Tecnologia Avançada</span>
                </div>
              </div>
            </div>

            {/* Contato */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-purple-400 mt-0.5" />
                  <div>
                    <p className="text-slate-300">{contatoInfo.telefone}</p>
                    <button
                      onClick={handleWhatsApp}
                      className="text-green-400 hover:text-green-300 text-sm font-medium"
                    >
                      WhatsApp
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-rose-400 mt-0.5" />
                  <p className="text-slate-300 break-all">{contatoInfo.email}</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-400 mt-0.5" />
                  <div className="text-slate-300">
                    <p>{contatoInfo.endereco.rua}</p>
                    <p>{contatoInfo.endereco.bairro} - {contatoInfo.endereco.cidade}/{contatoInfo.endereco.estado}</p>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleWhatsApp}
                className="w-full bg-gradient-to-r from-purple-700 to-purple-800 text-white py-3 rounded-xl font-semibold hover:from-purple-800 hover:to-purple-900 transition-all duration-300 shadow-lg"
              >
                Teleconsulta
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-slate-400 text-sm">
                  &copy; {currentYear} Elane L. Silva. Todos os direitos reservados.
                </p>
                <p className="text-slate-500 text-xs mt-1">
                  <strong>Resp. Tec.:</strong><br />
                  Elane L. Silva Cirurgiã Dentista - CRO/SC 23933
                </p>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-slate-400">
                  <Shield className="w-4 h-4 mr-2" />
                  <span className="text-xs">Site Seguro</span>
                </div>
                <div className="flex items-center text-slate-400">
                  <Heart className="w-4 h-4 mr-2 text-rose-400" />
                  <span className="text-xs">Feito com cuidado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Academic Modal */}
      <AcademicModal 
        isOpen={isAcademicModalOpen} 
        onClose={() => setIsAcademicModalOpen(false)} 
      />
    </>
  );
};

export default Footer;
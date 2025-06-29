import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { contatoInfo } from '../data/professionalData';

const ContatoFormulario: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    mensagem: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar mensagem WhatsApp formatada
    const message = `
*SOLICITAÇÃO DE CONTATO*

*Nome:* ${formData.nome}
*Telefone:* ${formData.telefone}
${formData.email ? `*Email:* ${formData.email}` : ''}
${formData.mensagem ? `*Mensagem:* ${formData.mensagem}` : ''}

---
Enviado através do site da Dra. Elane Lima
    `.trim();

    const whatsappUrl = `https://wa.me/5588999468429?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nome: '',
        telefone: '',
        email: '',
        mensagem: ''
      });
    }, 3000);
  };

  const handleDirectWhatsApp = () => {
    const message = "Olá! Gostaria de agendar uma consulta com a Dra. Elane Lima.";
    const whatsappUrl = `https://wa.me/5588999468429?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (isSubmitted) {
    return (
      <section id="contato" className="py-20 bg-gradient-to-br from-purple-50 to-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Mensagem Enviada!
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              Sua solicitação foi encaminhada via WhatsApp. 
              Retornaremos em breve!
            </p>
            <div className="animate-spin w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-purple-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Entre em <span className="text-purple-700">Contato</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Agende sua consulta ou teleconsulta. Estamos aqui para cuidar 
            do seu sorriso e da sua saúde bucal
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Telefone / WhatsApp</h4>
                    <p className="text-slate-600">{contatoInfo.telefone}</p>
                    <button
                      onClick={handleDirectWhatsApp}
                      className="text-purple-600 hover:text-purple-700 text-sm font-medium mt-1"
                    >
                      Chamar no WhatsApp →
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Email</h4>
                    <p className="text-slate-600">{contatoInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Endereço</h4>
                    <p className="text-slate-600">
                      {contatoInfo.endereco.rua}<br />
                      {contatoInfo.endereco.bairro} - {contatoInfo.endereco.cidade}/{contatoInfo.endereco.estado}
                    </p>
                    <button
                      onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(`${contatoInfo.endereco.rua}, ${contatoInfo.endereco.bairro}, ${contatoInfo.endereco.cidade}, ${contatoInfo.endereco.estado}`)}`, '_blank')}
                      className="text-green-600 hover:text-green-700 text-sm font-medium mt-1"
                    >
                      Ver no Google Maps →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="p-6 pb-0">
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  📍 Nossa Localização
                </h3>
              </div>
              <div className="h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.2!2d-48.5194!3d-27.5969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM1JzQ4LjgiUyA0OMKwMzEnMDkuOCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Consultório"
                ></iframe>
              </div>
            </div>

            {/* Teleconsulta */}
            <div className="bg-gradient-to-br from-purple-100 to-rose-100 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                🎁 Teleconsulta Especializada
              </h3>
              <p className="text-slate-600 mb-4">
                Agende sua triagem inicial online. 
                Disponível de segunda a sexta.
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={handleDirectWhatsApp}
                  className="flex-1 bg-gradient-to-r from-purple-700 to-rose-600 text-white py-3 rounded-xl font-semibold hover:from-purple-800 hover:to-rose-700 transition-all duration-300"
                >
                  Agendar Agora
                </button>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Solicitar Contato
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-slate-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="telefone" className="block text-sm font-semibold text-slate-700 mb-2">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email (Opcional)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="mensagem" className="block text-sm font-semibold text-slate-700 mb-2">
                  Mensagem (Opcional)
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Descreva brevemente sua necessidade ou dúvida..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-700 to-rose-600 text-white rounded-xl font-semibold hover:from-purple-800 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Send className="w-5 h-5 mr-3" />
                Enviar Solicitação
              </button>
              
              <p className="text-xs text-slate-500 text-center">
                * Campos obrigatórios. Sua solicitação será enviada via WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoFormulario;
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Especialidades from './components/Especialidades';
import Teleconsulta from './components/Teleconsulta';
import ConteudosEducativos from './components/ConteudosEducativos';
import ContatoFormulario from './components/ContatoFormulario';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Especialidades />
        <Teleconsulta />
        <ConteudosEducativos />
        <ContatoFormulario />
      </main>
      <Footer />
      <ChatWidget />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
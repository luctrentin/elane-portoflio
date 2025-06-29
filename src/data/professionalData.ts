import { Especialidade, ProducaoCientifica, Formacao, ContatoInfo, ChatOption } from '../types';

export const contatoInfo: ContatoInfo = {
  nome: "Dra. Elane Lima da Silva",
  cro: "23933",
  telefone: "(88) 99946-8429",
  email: "liimasilva002@gmail.com",
  endereco: {
    rua: "Av. Madre Benvenuta, 322",
    bairro: "Trindade",
    cidade: "Florianópolis",
    estado: "SC"
  }
};

export const especialidades: Especialidade[] = [
  {
    id: "endodontia",
    nome: "Endodontia Adulto e Infantil",
    categoria: "principal",
    descricao: "Tratamento de canal com tecnologia microscópica e mecanizada para adultos e crianças",
    tecnologias: ["Motor endodôntico", "Localizador apical", "Lupa microscópica", "Ozonioterapia"],
    procedimentos: [
      "Tratamento de canal em adultos",
      "Endodontia infantil (dentes de leite)",
      "Retratamento endodôntico",
      "Ozonioterapia aplicada"
    ],
    icon: "Heart"
  },
  {
    id: "radiologia",
    nome: "Radiologia Odontológica e Imaginologia",
    categoria: "principal", 
    descricao: "Diagnóstico preciso através de imagens digitais e tomografia 3D",
    tecnologias: ["Radiografias digitais", "Tomografia computadorizada", "Imagem 3D"],
    procedimentos: [
      "Radiografias digitais",
      "Interpretação de exames",
      "Tomografia computadorizada",
      "Planejamento com imagem 3D",
      "Diagnóstico preciso de lesões"
    ],
    icon: "Scan"
  },
  {
    id: "cirurgia",
    nome: "Cirurgia Oral",
    categoria: "secundaria",
    descricao: "Procedimentos cirúrgicos orais com técnicas modernas e seguras",
    procedimentos: [
      "Extrações simples e complexas",
      "Remoção de terceiros molares",
      "Cirurgias periorestaurativos"
    ],
    icon: "Scissors"
  },
  {
    id: "periodontia",
    nome: "Periodontia",
    categoria: "secundaria",
    descricao: "Cuidados especializados para saúde gengival e prevenção",
    procedimentos: [
      "Tratamento gengival",
      "Profilaxia e limpeza",
      "Controle de placa bacteriana"
    ],
    icon: "Shield"
  },
  {
    id: "dentistica",
    nome: "Dentística", 
    categoria: "secundaria",
    descricao: "Restaurações estéticas e tratamentos conservadores",
    procedimentos: [
      "Restaurações estéticas",
      "Tratamento de cáries",
      "Clareamento dental"
    ],
    icon: "Sparkles"
  }
];

export const producoesCientificas: ProducaoCientifica[] = [
  {
    tipo: "artigo",
    titulo: "Association of Ozoniotherapy to Endodontics",
    ano: 2022,
    publicacao: "Brazilian Applied Science Review"
  },
  {
    tipo: "artigo", 
    titulo: "Clinical Evidence of Pulp Revascularization",
    ano: 2022,
    publicacao: "Brazilian Journal of Health Review"
  },
  {
    tipo: "capitulo",
    titulo: "Utilização de Pasta Obturadora para Apicificação",
    ano: 2022,
    publicacao: "Seven Editora"
  },
  {
    tipo: "capitulo",
    titulo: "Óleos Essenciais e suas Aplicações na Odontologia",
    ano: 2021
  },
  {
    tipo: "capitulo",
    titulo: "Desafios do Atendimento Odontológico ao Paciente Surdo",
    ano: 2021
  },
  {
    tipo: "congresso",
    titulo: "Congresso Nacional de Inovações em Saúde (CONAIS)",
    ano: 2023
  },
  {
    tipo: "congresso",
    titulo: "Encontro Nacional de Trabalho Interdisciplinar e Saúde",
    ano: 2023
  },
  {
    tipo: "congresso", 
    titulo: "III Congresso Internacional de Saúde Única",
    ano: 2022
  }
];

export const formacao: Formacao[] = [
  {
    tipo: "mestrado",
    titulo: "Mestrado em Estudos Clínicos e Laboratoriais em Endodontia",
    instituicao: "UFSC",
    periodo: "2024"
  },
  {
    tipo: "especializacao",
    titulo: "Especialização em Endodontia Avançada",
    instituicao: "ABO",
    periodo: "2022-2024"
  },
  {
    tipo: "especializacao",
    titulo: "Especialização em Radiologia Odontológica",
    instituicao: "UNIBF", 
    periodo: "2024"
  },
  {
    tipo: "aperfeicoamento",
    titulo: "Aperfeiçoamento em Cirurgia Oral Menor",
    instituicao: "Eleva",
    periodo: "2022-2023"
  },
  {
    tipo: "graduacao",
    titulo: "Graduação em Odontologia",
    instituicao: "UNIFAMETRO",
    periodo: "2017-2021"
  },
  {
    tipo: "curso",
    titulo: "Auditoria do SUS baseada em Risco",
    instituicao: "UFRN",
    periodo: "2024"
  },
  {
    tipo: "curso",
    titulo: "Radiologia Odontológica",
    instituicao: "ESTETUS",
    periodo: "2024",
    cargaHoraria: "80h"
  },
  {
    tipo: "curso",
    titulo: "Boas Práticas Clínicas",
    instituicao: "FIOCRUZ",
    periodo: "2024"
  }
];

export const chatOptions: ChatOption[] = [
  {
    id: 1,
    emoji: "1️⃣",
    texto: "Dúvidas sobre seu tratamento",
    acao: "tratamento"
  },
  {
    id: 2,
    emoji: "2️⃣", 
    texto: "Falar com um dos nossos atendentes",
    acao: "atendente"
  },
  {
    id: 3,
    emoji: "3️⃣",
    texto: "Agendar consulta ou teleconsulta", 
    acao: "agendar"
  },
  {
    id: 4,
    emoji: "4️⃣",
    texto: "Informações sobre convênios",
    acao: "convenios"
  },
  {
    id: 5, 
    emoji: "5️⃣",
    texto: "Localização e horários",
    acao: "localizacao"
  },
  {
    id: 6,
    emoji: "6️⃣",
    texto: "Emergência dental",
    acao: "emergencia"
  }
];

export const convenios = [
  "Unimed", "Bradesco Saúde", "SulAmérica", "Amil", "Golden Cross", 
  "Particular", "Cartão de Crédito", "PIX"
];
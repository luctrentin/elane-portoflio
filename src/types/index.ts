export interface Especialidade {
  id: string;
  nome: string;
  categoria: 'principal' | 'secundaria';
  descricao: string;
  tecnologias?: string[];
  procedimentos: string[];
  icon: string;
}

export interface ProducaoCientifica {
  tipo: 'artigo' | 'capitulo' | 'congresso';
  titulo: string;
  ano: number;
  publicacao?: string;
  detalhes?: string;
}

export interface Formacao {
  tipo: 'mestrado' | 'especializacao' | 'aperfeicoamento' | 'graduacao' | 'curso';
  titulo: string;
  instituicao: string;
  periodo: string;
  cargaHoraria?: string;
}

export interface ContatoInfo {
  nome: string;
  cro: string;
  telefone: string;
  email: string;
  endereco: {
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
  };
}

export interface ChatOption {
  id: number;
  emoji: string;
  texto: string;
  acao: string;
}
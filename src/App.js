import React, { useState, useEffect } from 'react';
import FormularioJogo from './components/FormularioJogo';
import TabelaJogos from './components/TabelaJogos';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Importe seu arquivo de estilos

function App() {
  const [jogos, setJogos] = useState([]);
  const [jogoEmEdicao, setJogoEmEdicao] = useState(null);

  useEffect(() => {
    const jogosSalvos = localStorage.getItem('catalogoJogos');
    if (jogosSalvos) {
      setJogos(JSON.parse(jogosSalvos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('catalogoJogos', JSON.stringify(jogos));
  }, [jogos]);

  const adicionarJogo = (novoJogo) => {
    novoJogo.id = Date.now();
    setJogos([...jogos, novoJogo]);
    setJogoEmEdicao(null);
  };

  const atualizarJogo = (jogoAtualizado) => {
    setJogos(jogos.map((jogo) => (jogo.id === jogoAtualizado.id ? jogoAtualizado : jogo)));
    setJogoEmEdicao(null);
  };

  const excluirJogo = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este jogo?')) {
      setJogos(jogos.filter((jogo) => jogo.id !== id));
    }
  };

  const selecionarJogoParaEdicao = (jogo) => {
    setJogoEmEdicao({ ...jogo });
  };

  return (
    <div className="container mt-5">
      <h1>Catálogo de Jogos</h1>
      <div className="row">
        <div className="col-md-6">
          <FormularioJogo
            onSalvar={jogoEmEdicao ? atualizarJogo : adicionarJogo}
            jogoParaEdicao={jogoEmEdicao}
            onCancelarEdicao={() => setJogoEmEdicao(null)}
          />
        </div>
        <div className="col-md-6">
          <TabelaJogos
            jogos={jogos}
            onEditar={selecionarJogoParaEdicao}
            onExcluir={excluirJogo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
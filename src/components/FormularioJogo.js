import React, { useState, useEffect } from 'react';

function FormularioJogo({ onSalvar, jogoParaEdicao, onCancelarEdicao }) {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [plataforma, setPlataforma] = useState('');
  const [avaliacao, setAvaliacao] = useState('');

  useEffect(() => {
    if (jogoParaEdicao) {
      setId(jogoParaEdicao.id);
      setNome(jogoParaEdicao.nome);
      setGenero(jogoParaEdicao.genero);
      setPlataforma(jogoParaEdicao.plataforma);
      setAvaliacao(jogoParaEdicao.avaliacao);
    } else {
      setId('');
      setNome('');
      setGenero('');
      setPlataforma('');
      setAvaliacao('');
    }
  }, [jogoParaEdicao]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoJogo = { id, nome, genero, plataforma, avaliacao: parseInt(avaliacao) };
    onSalvar(novoJogo);
  };

  return (
    <div className="mb-4">
      <h2>{jogoParaEdicao ? 'Editar Jogo' : 'Adicionar Novo Jogo'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome:</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="genero" className="form-label">Gênero:</label>
          <input
            type="text"
            className="form-control"
            id="genero"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="plataforma" className="form-label">Plataforma:</label>
          <input
            type="text"
            className="form-control"
            id="plataforma"
            value={plataforma}
            onChange={(e) => setPlataforma(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="avaliacao" className="form-label">Avaliação (1-5):</label>
          <input
            type="number"
            className="form-control"
            id="avaliacao"
            value={avaliacao}
            onChange={(e) => setAvaliacao(e.target.value)}
            min="1"
            max="5"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {jogoParaEdicao ? 'Salvar Edições' : 'Adicionar Jogo'}
        </button>
        {jogoParaEdicao && (
          <button type="button" className="btn btn-secondary ms-2" onClick={onCancelarEdicao}>
            Cancelar
          </button>
        )}
      </form>
    </div>
  );
}

export default FormularioJogo;
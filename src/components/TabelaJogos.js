import React from 'react';

function TabelaJogos({ jogos, onEditar, onExcluir }) {
  return (
    <div>
      <h2>Lista de Jogos</h2>
      {jogos.length === 0 ? (
        <p>Nenhum jogo cadastrado.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Gênero</th>
              <th>Plataforma</th>
              <th>Avaliação</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {jogos.map((jogo) => (
              <tr key={jogo.id}>
                <td>{jogo.nome}</td>
                <td>{jogo.genero}</td>
                <td>{jogo.plataforma}</td>
                <td>{jogo.avaliacao}</td>
                <td>
                  <button className="btn btn-sm btn-warning me-2" onClick={() => onEditar(jogo)}>
                    Editar
                  </button>
                  <button className="btn btn-sm btn-danger" onClick={() => onExcluir(jogo.id)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TabelaJogos;
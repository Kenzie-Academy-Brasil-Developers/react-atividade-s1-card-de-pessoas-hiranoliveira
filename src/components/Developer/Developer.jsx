import "./styles.css";

function Developer({ user, idade, pais }) {
  return (
    <div className="DevCard">
      <h1>Dev: {user}</h1>
      <h2>Idade: {idade}</h2>
      <h2>País: {pais}</h2>
    </div>
  );
}

export default Developer;

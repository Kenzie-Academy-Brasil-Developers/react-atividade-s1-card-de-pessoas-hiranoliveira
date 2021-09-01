// import logo from "./logo.svg";
import "./App.css";

import Developer from "./components/Developer/Developer";

function App() {
  const users = { Gabriel: "Gabriel", Filipe: "Filipe", Mariana: "Mariana" };
  const age = { Gabriel: 19, Filipe: 28, Mariana: 24 };
  const country = { Gabriel: "Brasil", Filipe: "Brasil", Mariana: "Itália" };
  return (
    <div className="App">
      <Developer
        user={users.Gabriel}
        idade={age.Gabriel}
        pais={country.Gabriel}
      />
      <Developer user={users.Filipe} idade={age.Filipe} pais={country.Filipe} />
      <Developer
        user={users.Mariana}
        idade={age.Mariana}
        pais={country.Mariana}
      />
    </div>
  );
}

export default App;

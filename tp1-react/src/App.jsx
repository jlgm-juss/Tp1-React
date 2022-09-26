import TituloPrincipal from "./components/TituloPrincipal"
import TituloSecundario from "./components/TituloSecundario";
import TituloTerciario from "./components/TituloTerciario";

function App() {

const myFriend = 'Hello my friend!';

  return (
    <div>
      <TituloPrincipal></TituloPrincipal>
      <TituloSecundario mod={myFriend} estado={true}/>
      <TituloTerciario/>
    </div>
  );
}

export default App;

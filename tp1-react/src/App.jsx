import TituloPrincipal from "./components/TituloPrincipal"
import TituloSecundario from "./components/TituloSecundario";

function App() {

const myFriend = 'Hello my friend!';

  return (
    <div>
      <TituloPrincipal></TituloPrincipal>
      <TituloSecundario mod={myFriend} estado={true}/>
    </div>
  );
}

export default App;

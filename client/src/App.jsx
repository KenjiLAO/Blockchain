import { EthProvider } from "./contexts/EthContext";
import Demo from "./components/Demo";
import HelloWorld from "./components/Hello World/HelloWorld";
import Items from "./components/Items/Items";


function App() {
  return (
    <EthProvider>
      <div id="App">
        <div className="container">
          <Demo />
          <hr />
          <HelloWorld />
          <hr />
          <Items />
          <hr />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;

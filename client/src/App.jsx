import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import HelloWorld from "./components/Hello World/HelloWorld";
import Balance from "./components/Balance/Balance";

function App() {
  return (
    <EthProvider>
      <div id="App">
        <div className="container">
          <Intro />
          <hr />
          <Setup />
          <hr />
          <Demo />
          <hr />
          <HelloWorld />
          <hr />
          <Balance />
          <hr />
          <Footer />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;

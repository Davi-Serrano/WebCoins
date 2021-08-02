import CoinsProvider from "./Context/Coins";

import Coins from "./Pages/Coins/index.js"; 

function App() {
  return (
    <CoinsProvider>

    <div className="App">
      <h1>Hellow</h1>

      <Coins />                    
    </div>
    </CoinsProvider>
  );
}

export default App;

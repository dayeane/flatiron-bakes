import { cakes } from "../data/cakesData"
import CakeContainer from "./CakeContainer"
import Header from "./Header"
import Search from "./Search"


function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <CakeContainer cakeList={cakes}/>
    </div>
  );
}

export default App;

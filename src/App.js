import CakeCard from "./CakeCard"

function App() {
  return (
    <div className="App">
      <h1>Dayis Cakes</h1>
      <CakeCard flavor={"Red Velvet"} price={1}/>
      <CakeCard flavor={"2 Red Velvet"} price={2}/>
      <CakeCard flavor={"3 Red Velvet"} price={3}/>
    </div>
  );
}

export default App;

import {useState} from 'react'
import { cakes } from "../data/cakesData"
import CakeContainer from "./CakeContainer"
import Header from "./Header"
import Search from "./Search"
import Form from "./Form"

function App() {
  const [cakeList, setCakeList] = useState(cakes)
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setCakeList(cakes.filter((cake) => {
      return cake.flavor.includes(e.target.value)
    }))
  }

  const handleAddCake = (cake) => {
    setCakeList([cake, ...cakeList])
  }
  // const cakesFilter = cakeList.filter((cake) => {

  //    return cake.flavor.includes(search)
  // });

  return (
    <div className="App">
      <Header bakeryName="FlatironBakes" slogan="live live code bake repeat" />
      <Search search={search} handleSearch={handleSearch}/>
      <CakeContainer cakeList={cakeList}/>
      <Form handleAddCake={handleAddCake}/>
    </div>
  );
}

export default App;

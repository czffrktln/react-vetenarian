import React, { useEffect, useState } from "react"
import axios from "axios";
import Client from "./components/Client";

const App = () => {

  const [searchInput, setSearchInput] = useState("")
  const [disable, setDisable] = useState(true)
  const [data, setData] = useState()

  const getData = async () => {
    setData([])
    const response = await axios.get(`https://demoapi.com/api/vet/clients?search=${searchInput}`)
    console.log(response);
    setData(response.data)
  }

  console.log(data);

  return (
    <div>
      <h2>Veterinarian admin - clients</h2>
      <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} ></input>
      <button disabled={searchInput.length > 2 ? false : true} onClick={getData} >Search</button>
      {data && data.map(client => <Client {...{client, data, setData}} />)}
    </div>
  )
}

export default App

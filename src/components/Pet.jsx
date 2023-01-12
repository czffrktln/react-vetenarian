import axios from "axios"
import { useState } from "react"

const Pet = ({pet}) => {

  const [vaccinated, setVaccinated] = useState(pet.isVaccinated)
  const [loading, setLoading] = useState(false)
  
  console.log("0", vaccinated);

  const vaccinate = async () => {
    setLoading(true)
    let response = await axios.post("https://demoapi.com/api/vet/pets/", {
      name: pet.name,
      isVaccinated: !vaccinated 
    })
    console.log(response);
    if (response.status === 201) {
      console.log("idebemegy");
      console.log("1", vaccinated);
      setVaccinated(!vaccinated)
      console.log("2", vaccinated);
    }
    console.log("3", vaccinated);
    setLoading(false)
  }

  return (
    <div>
      <h3>{pet.name}</h3>
      <h3>{loading ? "..." : `${vaccinated}`}</h3>
      <button onClick={vaccinate}>Button</button>
    </div>
  )
}
export default Pet
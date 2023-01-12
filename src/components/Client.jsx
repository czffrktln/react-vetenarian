import Pet from "./Pet"

const Client = ({client}) => {
  return (
    <div>
      <h3>{client.name}</h3>
      {client.pets.map(pet => <Pet {...{pet}} />)}
    </div>
  )
}
export default Client
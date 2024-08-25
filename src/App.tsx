import FavIcon from "./components/FavIcon"
import { Button } from "@material-tailwind/react";

function App() {

  return (
    <main className="py-10 px-10 bg-gray-300 h-screen font-primaryRegular">
      <FavIcon />
      <Button className="bg-success ">Probando Material UI</Button>
    </main>
  )
}

export default App

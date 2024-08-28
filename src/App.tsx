import { Typography } from "@material-tailwind/react"
import CardProperty from "./components/CardProperty"
import MainLayout from "./layouts/MainLayout"

function App() {

  return (
    <MainLayout>
      <Typography>Pantalla home</Typography>
      <CardProperty title="Departamento monoambiente" location="Villa Sarita" price="12321" inmobiliaria="lasds"/>
    </MainLayout>
  )
}

export default App

import ComponentContext1 from "./components/ComponentContext1"
import ComponentContext2 from "./components/ComponentContext2"
import { TestProvider } from "./context/TestContext"

function Test() {


  return (
    <>
      <TestProvider>
        <ComponentContext1 />
        <ComponentContext2 />
      </TestProvider>
    </>
  )
}

export default Test
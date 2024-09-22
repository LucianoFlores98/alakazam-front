import { useTestContext } from '../context/TestContext';

function ComponentContext1() {
  const { setTestContextValue } = useTestContext();

  const handleClick = () => {
    setTestContextValue('Hola mi ciela');
  };
  return (
    <div>
      <button onClick={handleClick}>Enviar informacion por un context</button>
    </div>
  );
}
export default ComponentContext1;
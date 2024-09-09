import { useTestContext } from '../context/TestContext';

function ComponentContext2() {
  const { testContextValue } = useTestContext();

  return <div>El value es: {testContextValue}</div>;
}
export default ComponentContext2;
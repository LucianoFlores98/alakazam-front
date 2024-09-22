import { createContext, useContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export const TestContext = createContext();

export const TestProvider: React.FC<Props> = ({ children }) => {
  const [testContextValue, setTestContextValue] = useState('');
  return <TestContext.Provider value={{ testContextValue, setTestContextValue }}>{children}</TestContext.Provider>;
};

export const useTestContext = () => {
  const context = useContext(TestContext);
  if (context === undefined) {
    throw new Error('TestContext must be used within a TestProvider');
  }
  return context;
};
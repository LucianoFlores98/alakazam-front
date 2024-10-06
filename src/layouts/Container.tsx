interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <>
      <main className="max-w-[2520px] mx-auto xl:px-15 md:px-5 sm:px-2 px-4">
        {children}
      </main>
    </>
  );
};

export default Container;
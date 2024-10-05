interface Props {
  children: React.ReactNode;
}

const ContentLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <main className="bg-gray-100/80 font-primaryRegular">
        {children}
      </main>
    </>
  );
};

export default ContentLayout;
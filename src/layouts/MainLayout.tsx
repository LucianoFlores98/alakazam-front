import NavbarTop from "../components/NavbarTop";
import NavbarBottom from "../components/NavBarBottom";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavbarTop />
      <NavbarBottom />
      <main className="bg-gray-100/80 h-screen font-primaryRegular pt-14">
        {children}
      </main>
    </>
  );
};

export default MainLayout;
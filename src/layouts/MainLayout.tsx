import NavbarTop from "../components/NavbarTop";
import NavbarBottom from "../components/NavBarBottom";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="layout">
      <NavbarTop />
      <main className="bg-gray-300 h-screen font-primaryRegular">
        {children}
      </main>
      <NavbarBottom />
    </div>
  );
};

export default MainLayout;
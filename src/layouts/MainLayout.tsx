import NavbarTop from "../components/NavbarTop";
import NavbarBottom from "../components/NavBarBottom";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="layout">
      <NavbarTop />
      <NavbarBottom />
      <main className="bg-gray-300 h-screen font-primaryRegular pt-14">
        {children}
      </main>
      <NavbarBottom />
    </div>
  );
};

export default MainLayout;
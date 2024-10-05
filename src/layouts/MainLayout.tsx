import { Footer } from "../components/Footer";
import NavbarTop from "../components/NavbarTop";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavbarTop />
      <main className="bg-white font-primaryRegular">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
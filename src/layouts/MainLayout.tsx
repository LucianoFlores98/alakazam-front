import { Footer } from "../components/Footer";
import NavbarTop from "../components/NavbarTop";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavbarTop />
      <main className="bg-gray-100/80 font-primaryRegular">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
import { Footer } from "../components/Footer";
import {NavbarTop} from "../components/NavbarTop";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen max-w-[2520px] bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(255,53,0,0.1)_0,rgba(255,163,0,0)_60%,rgba(255,3,0,0.04)_100%)]">
      <NavbarTop />
      <main className="font-primaryRegular pt-28">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
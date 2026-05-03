import Footer from "@/components/share/footer/Footer";
import Navbar from "@/components/share/navbar/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-[calc(100vh-301.4px)] py-24">{children}</main>
      <Footer />
    </div>
  );
};

export default AuthLayout;

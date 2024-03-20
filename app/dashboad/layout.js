import Navbar from "../components/Navbar";
import NavbarResp from "../components/NavbarResp";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <Navbar />
      <NavbarResp />
      {children}
    </section>
  );
}

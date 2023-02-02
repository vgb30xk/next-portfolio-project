import Footer from "./footer";
import Header from "./header";

function Layout({ children }) {
  return (
    <div className="bg-primary">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;

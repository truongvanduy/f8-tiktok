import Header from "../components/Header";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default DefaultLayout;

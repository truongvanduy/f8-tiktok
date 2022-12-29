import Header from "../components/Header";

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <main>{children}</main>
      </div>
    </div>
  );
}

export default HeaderOnly;

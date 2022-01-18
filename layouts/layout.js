import Navbar from "../components/navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      <main className="container pt-5 mt-5">{children}</main>
    </div>
  );
}

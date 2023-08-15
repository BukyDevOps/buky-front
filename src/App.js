import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import MyRouter from "./router/MyRouter";

import "./static/css/linearicons.css";
import "./static/css/nice-select.css";

function App() {
  return (
    <>
      <MyRouter />
      <Footer />
    </>
  );
}

export default App;

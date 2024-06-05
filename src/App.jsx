import Navbar from "./components/navbar";
import "./style/global.css";
import Sidebar from "./components/sidebar";
import ContentArea from "./components/content-area";
import { useState } from "react";
import Default from "./components/default";
function App() {
  const [showDefault, setShowDefault] = useState(true);
  return (
    <>
      {showDefault ? (
        <Default />
      ) : (
        <>
          <Navbar />
          <div className="body-wrapper">
            <Sidebar />
            <ContentArea />
          </div>
        </>
      )}
    </>
  );
}

export default App;

import DetailPopup from "./Components/DetailPopup/DetailPopup";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Routers from "./Routes/Routers";


function App() {
  return (
    <>
    <Header/>
     <main>
       <Routers/>
     </main>
    <Footer/>
    </>
  );
}

export default App;

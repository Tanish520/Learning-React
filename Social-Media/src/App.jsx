import { useContext } from "react";
import "./App.css";
import CreatePost from "./Components/CreatePost/CreatePost";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Context } from "./Context/ContextApi";
import LoaderComp from "./Components/Loader/LoaderComp";

function App() {
  const {homeSection, posts} = useContext(Context);
  return (
    <div className="App-Container">
      <Navbar />
      <div className="Container">
        <Sidebar />
        <div className="Main">
          {homeSection ? posts.length === 0 ? <LoaderComp/>: <Home/> : <CreatePost/>}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

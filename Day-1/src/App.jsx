import Post from "./Components/Post";

function App(){
  let name = "Tanish";
    return (
        <div>
            <h1>Hello <u>{name}</u></h1>
            <Post/>
        </div>
    )
}

export default App;
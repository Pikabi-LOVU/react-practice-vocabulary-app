import "./App.css";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";


//component 함수는 JSX를 리턴한다
function App() {

  const website = {
    name: "random.gg", 
    url: "https://www.random.gg/ko"
  }

  return (
    <div className="App">
      <Hello />
      <Welcome />
    </div>
  );
}

export default App;

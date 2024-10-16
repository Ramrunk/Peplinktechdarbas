import { Routes, Route } from "react-router-dom";
import "./App.css";
import Root from "./routes/Root";
import List from "./routes/List";
import Chucknorris from "./routes/Chucknorris";
import Navigation from "./Navigation";
import Error from "./routes/Error";
function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<Root></Root>}></Route>
          <Route path="/1" element={<List></List>}></Route>
          <Route path="/2" element={<Chucknorris></Chucknorris>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

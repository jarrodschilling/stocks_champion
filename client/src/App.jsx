import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import Error from "./views/Error";
import './App.css';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

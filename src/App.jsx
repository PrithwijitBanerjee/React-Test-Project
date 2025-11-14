import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Views/Home/Home";
import Layout from "./Components/Layout";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import './App.css'
import Addbook from './components/Addbook'
import Booklist from './components/Booklist'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  

  return (
    <>
      <BrowserRouter>
<Routes>
  
  <Route path="/" element={<Booklist/>}/>
  <Route path="/add" element={<Addbook/>}/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App

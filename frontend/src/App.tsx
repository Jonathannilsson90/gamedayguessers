import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/LoginView";

function App() {
 

  return (
   <BrowserRouter>
   <Routes>
  <Route path="/" element={<LoginPage/>}/>
  <Route/>

   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
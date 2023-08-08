import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/LoginView";
import SignUp from "./pages/Singup/SignupView";
import MyPage from "./pages/MyPage/MyPageView";

function App() {
 

  return (
   <BrowserRouter>
   <Routes>
  <Route path="/" element={<LoginPage/>}/>
  <Route  path="/signup" element={<SignUp/>}/>
  <Route  path="/mypage/:name" element={<MyPage/>}/>
  <Route/>

   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
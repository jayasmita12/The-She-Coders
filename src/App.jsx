import React ,{ useState } from "react";
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import TicTacToe from "./components/TicTacToe";
import ChatWindow from "./components/ChatWindow";
import AuthSignInPage from "./AuthSignInPage";
import AuthSignUpPage from "./AuthSignUpPage";
import Home from "./components/Home";


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isAccount, setAccount] = useState(false);
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthSignInPage />} />
      <Route path="/signup" element={<AuthSignUpPage/>} />
      <Route path="/dashboard" element={<Home/>}/>
      <Route path="/tic-tac-toe" element={<TicTacToe/>}/>
      <Route path="/chat-app" element={<ChatWindow/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;

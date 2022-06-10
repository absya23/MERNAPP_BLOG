import "./App.css";
// import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { Routes, Route } from "react-router-dom";

function App() {
  const user = true;
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Home />} />
        <Route path="/setting" element={user ? <Setting /> : <Home />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </>
  );
}

export default App;

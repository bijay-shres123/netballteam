import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TrainingSession from "./pages/TrainingSession";
import Session1 from "./pages/Session1";
import MyProfile from "./pages/MyProfile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="forum" element={<Forum />}/>
          <Route path="contact" element={<Contact />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/trainingsession" element={<TrainingSession/>}/>
          <Route path="/session1" element={<Session1/>}/>
          <Route path="/myprofile" element={<MyProfile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
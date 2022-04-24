import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TrainingSession from "./pages/TrainingSession";
import SessionPage from "./pages/SessionPage";
import MyProfile from "./pages/MyProfile";
import TrainingRequest from "./pages/TrainingRequest";
import ForgotPassword from "./pages/ForgotPassword";
import AskQuestion from './pages/AskQuestion'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/forum" element={<Forum />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/trainingsession" element={<TrainingSession/>}/>
          <Route path="/session/:id" element={<SessionPage/>}/>
          <Route path="/myprofile" element={<MyProfile/>}/>
          <Route path="/trainingrequest" element={<TrainingRequest/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/ask-question" element={<AskQuestion/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
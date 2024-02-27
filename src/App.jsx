import { Route, Routes } from "react-router-dom"
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import NotFound from './pages/NotFound'
import PublicRoutes from "./components/PublicRoutes";
import PrivateRoutes from "./components/PrivateRoutes";
import "./styles/utility.css";
import "./styles/main.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signIn" element={<PublicRoutes><SignIn /></PublicRoutes>} />
        <Route path="/" element={<PrivateRoutes><Home /></PrivateRoutes>} />
        <Route path="*" element={<PublicRoutes><NotFound /></PublicRoutes>} />
      </Routes>
    </>
  );
}

export default App;

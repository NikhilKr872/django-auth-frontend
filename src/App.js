import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import AuthContext, { AuthProvider } from "./context/AuthContext";
import {useContext} from 'react';
// import PrivateRoute from "./utils/PrivateRoute";

function App() {
  let {user} = useContext(AuthContext);  

  return (
    <div className="App">
  
          <Header />
          <Routes>
            <Route
              element={
                !user ? <Navigate replace to="/login" /> : <HomePage />
              }
              path="/"
              exact
            />
            <Route element={<LoginPage />} path="/login" />
          </Routes>
    </div>
  );
}

export default App;

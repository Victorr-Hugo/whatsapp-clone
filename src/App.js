import logo from "./logo.svg";
import "./App.css";
import { useUsers } from "./context/userContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, SignInPage } from "./pages";

function App() {
  const { currentUser } = useUsers();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={currentUser ? <HomePage /> : <SignInPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

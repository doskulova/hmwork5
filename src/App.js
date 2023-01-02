import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserRegisterPage from "./pages/userRegisterPage/UserRegisterPage";
import UserListPage from "./pages/userListPage/UserListPage";
import Menu from "./components/menu/Menu";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Menu/>
              <Routes>
                  <Route index element={<UserRegisterPage/>}/>
                  <Route path="/users" element={<UserListPage/>}/>
              </Routes>
          </BrowserRouter>
      </div>

  );
}

export default App;

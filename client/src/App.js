import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDetail from "./pages/UserDetail";
import ListMember from "./pages/ListMember";
import AdminUserDetail from "./pages/AdminUserDetail";
import AdminStatistical from "./pages/AdminStatistical";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route index path="/login" element={<Login />} />
          <Route index path="/register" element={<Register />} />
          <Route index path="/account" element={<UserDetail />} />
          <Route
            index
            path="/admin/account/:id"
            element={<AdminUserDetail />}
          />
          <Route index path="/admin/list-member" element={<ListMember />} />
          <Route
            index
            path="/admin/statistical/:id"
            element={<AdminStatistical />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

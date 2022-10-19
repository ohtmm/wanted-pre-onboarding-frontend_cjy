import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Login from "./components/login/login";
import SignUp from "./components/sign_up/sign_up";
import TodoList from "./components/todo_list/todo_list";
import PrivateRoute from "./routes/private_route";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/todo"
          element={
            <PrivateRoute>
              <TodoList />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

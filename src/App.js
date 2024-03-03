import './App.css';
import { Header } from "./components/Header/Header";
import { Email } from "./components/Email/Email";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addUser({
      name: "Carlos",
      username: "cedo",
      email: "carlosduarte.1@hotmail.com"
    }));
  }, []);
  
  return (
    <>
      <div className="App">
        <Header />
        <Email />
      </div>
    </>
  );
}

export default App;

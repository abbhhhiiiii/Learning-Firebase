import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./firebase";
import "./App.css";

const auth = getAuth(app);

function App() {
  const signupuser = () => {
    createUserWithEmailAndPassword(auth, "abhishek@gmail.com", "Abhi123").then((value) => console.log(value));
  };

  return (
    <>
      <div>
        <h1>Firebase App</h1>
        <button onClick={signupuser}>Create User</button>
      </div>
    </>
  );
}

export default App;

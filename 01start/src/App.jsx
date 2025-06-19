import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";
import './App.css'

const db = getDatabase(app);

function App() {
  const putData = () =>{
  set(ref(db, 'users/abhi'), {
    id: 1,
    name: "bhoomi",
    age: 23,
  });
};

  return (
    <>
     <div>
      <h1>Firebase App</h1>
      <button onClick={putData}>Put Data</button>
     </div>
    </>
  )
}

export default App;

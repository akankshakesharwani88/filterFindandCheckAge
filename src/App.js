import "./styles.css";
import { useState } from "react";
export default function App() {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const arr = [1, 2, 3, 4, 5, 6];
  const result = arr.find((item) => item % 2 === 0);
  console.log(result);
  const res = arr.filter((item) => item % 2 === 0);
  console.log(res);
  const useHandle = (e) => {
    setError(false);
    setUser(e.target.value);
    console.log(e.target.value);
    if (e.target.value > 18) {
      setError(true);
    }
  };

  return (
    <div className="App">
      <input value={user} onChange={useHandle} />
      {error ? "age must be greater than 18" : ""}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}


import React, { useState } from "react";
function App() {
  const [counts, setcounts] = useState(0);
  function myfunc() {
    setcounts(counts + 1);
  }
  function myfunc1() {
    setcounts(counts - 1);
  }
  function myfunc3() {
    setcounts(counts + 1);
  }
  return (
    <>
      <button onClick={myfunc}>increase</button>&emsp;
      <span>{counts}</span>&emsp;
      <button onClick={myfunc1}>decrease</button>&emsp;
      <button onMouseOver={myfunc3}>{counts}</button>
    </>
  );
}
export default App;

import React, { useState } from "react"
import { Input } from "antd";
import Todos from "./Todos";
function App() {
  const [todos, setTodo] = useState([])
  const [text, setText] = useState("")
  const handlSub = (e) => {
    if (e.key == "Enter") {
      setTodo(todo => [...todo, text])
      setText('')
    }
  }

  const handlDel = (id) => {
    setTodo(todo => [...todo].filter((t, i) => i != id))
  }
  return (
    <>
      <center>
        <div style={{ marginTop: "5em", width: "50%" }}>
          <Input placeholder="Add Task ... " onKeyDown={handlSub} onChange={e => setText(e.target.value)} value={text} />
        </div>
        <br />
        <Todos todos={todos} handl={handlDel} />
      </center>
    </>)
}

export default App;

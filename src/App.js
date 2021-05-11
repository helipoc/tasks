import React, { useState, useEffect } from "react"
import { Input, notification } from "antd";
import Todos from "./Todos";
function App() {
  const [todos, setTodo] = useState([])
  const [text, setText] = useState("")
  const handlSub = (e) => {
    if (e.key == "Enter") {
      if (text == "") {
        notification["error"]({
          message: 'Task field is empty ',
          duration: 2
        })
        return;
      }
      setTodo(todo => [...todo, text])
      setText('')
      notification["success"]({
        message: 'Added Task !',
        duration: 2
      })
    }
  }

  const handlDel = (id) => {
    setTodo(todo => [...todo].filter((t, i) => i != id))
    notification["info"]({
      message: 'Task Done !',
      duration: 2
    })

  }
  useEffect(() => {
    let saved = localStorage.getItem('todos')
    if (saved && saved.length > 0) {
      setTodo(JSON.parse(saved))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <center>
        <div style={{ marginTop: "5em", marginBottom: "3em", width: "50%" }}>
          <Input placeholder="Add Task ... " onKeyDown={handlSub} onChange={e => setText(e.target.value)} value={text} />
        </div>
        <br />
        {todos.length > 0 ? <Todos todos={todos} handl={handlDel} /> :
          <div className="animate__animated animate__zoomIn">
            <img src="https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-10.gif" width="300" height="300" />
            <br />
            <b style={{ fontFamily: "monospace" }}>Your Tasks list is empty !</b>
          </div>
        }
      </center>
    </>)
}

export default App;

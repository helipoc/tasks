import React from "react"
import { Card } from "antd"


function Todos({ todos, handl }) {
    return (
        <div style={{ width: "40em  " }}>
            <Card hoverable>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", font: "25px arial, sans-serif" }}>
                    {todos.map((c, i) => <p key={i} onClick={() => handl(i)}>{c}</p>)}
                </div>
            </Card>
        </div>

    )
}


export default Todos;
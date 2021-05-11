import React, { useEffect, useState } from "react"
import { Card } from "antd"


function Todos({ todos, handl }) {
    const animetype = "animate__fadeInUp"
    const [animes, setAn] = useState([...todos].map(c => `animate__animated ${animetype}`))

    useEffect(() => {
        setAn([...todos].map(c => `animate__animated ${animetype}`))
    }, [todos])
    const hndl = (i) => {
        setAn([...todos].map((c, j) => i == j ? "animate__animated animate__fadeOutRight" : `animate__animated ${animetype}`))
        setTimeout(() => handl(i), 500)
    }

    return (
        <div style={{ width: "50%" }}>
            <Card hoverable>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", font: "25px arial, sans-serif" }}>
                    {todos.map((c, i) => {
                        return (
                            <div key={i} style={{ display: "flex", width: "100%" }} className={animes[i]}>
                                <p>{c}</p>
                                <i className="fas fa-check-circle" style={{ marginLeft: "auto", color: "green" }} onClick={() => hndl(i)} />
                            </div>
                        )

                    })}
                </div>
            </Card>
        </div >

    )
}


export default Todos;
import { useState } from "react";
import "./styles.css";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
                <div className="card">
                    <h2 style={{ color: "white" }}>Counter</h2>
                    <p className="count">{count}</p>
                    <div className="buttons">
                        <button onClick={() => setCount(count + 1)}>Increase</button><br></br>
                        <button onClick={() => setCount(count - 1)}>Decrease</button><br></br>
                        <button onClick={() => setCount(0)}>Reset</button>
                    </div>
                </div>
        </div>
    );
}

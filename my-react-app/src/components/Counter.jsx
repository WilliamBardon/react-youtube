import { useState } from "react";

export const Counter = ({start}) => {
    const [count, setCount] = useState(start);
    return (
        <div>
            <h2>Counter: {count} </h2>
            <button onClick={()=>setCount(count + 1)}>Incrementa</button>
        </div>
    )
}
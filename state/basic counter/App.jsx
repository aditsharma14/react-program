import { useState } from "react";
const Counter=()=>{
    const [count,setcount]=useState(0);
    const increment=()=>setcount(count+1);
    const decrement=()=>setcount(count-1);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>press to add</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};
export default Counter;
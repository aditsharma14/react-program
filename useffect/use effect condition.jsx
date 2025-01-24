import { useEffect,useState } from "react";
const App=()=>{
    const [value,setvalue]=useState(0);
    useEffect(()=>{
        console.log("call useEffect");
        if(value>0){
            document.title = `Increment (${value})`; 
        }
       
    });
    return(
        <>
            <h2>{value}</h2>
            <button onClick={() => setvalue(value + 1)}>Click me</button>
        </>
    )
};
export default App;

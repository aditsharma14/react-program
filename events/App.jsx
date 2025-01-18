const Button=()=>{
    const handleclick=()=>console.log("clicked");
    return(
        <button onClick={handleclick}>click me</button>
    );
};
const App=()=>{
    return(
        <div>
            <Button/>
        </div>
    );
};
export default App;
const App1=()=>{
    return(
        <User
            name="Adit sharma"
            age={18}
        />

    );
};
const User=(props)=>{
    return(
        <div>
            <h1>name={props.name}</h1>
            <p>age={props.age}</p>
        </div>
    );
};
export default App1;
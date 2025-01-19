const App2=()=>{
    return(
        <User
            name="iphone 18 pro max"
            cost={180000}
        />
    );
};
const User=(props)=>{
    return(
        <section>
            <h2>name:{props.name}</h2>
            <p>cost:{props.cost}</p>
        </section>
    );
};
export default App2;
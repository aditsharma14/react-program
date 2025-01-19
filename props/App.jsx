const App=()=>{
    return(
        <User
            img="C:\Users\KIIT\Desktop\photo.jpg"
            name="adit sharma"
            age={18}
            ismarried="false"
            istudent="yes"
        />
    );
};
const User=(props)=>{
    return(
        <section>
            <img src={props.img} alt={props.name} width={200}/>
            <h1>Name:{props.name}</h1>
            <h1>Age:{props.age}</h1>
            <h1>Marraige status:{props.ismarried}</h1>
            <h1>istudent;{props.istudent}</h1>


        </section>
    );
    
};
export default App;
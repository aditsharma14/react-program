const Weather=()=>{
    let temp=2;
    if(temp<15){
        return(<div><h1>It is cold outisde</h1></div>)
    }
    if(temp>=15 && temp<=25){
        return(<div><h1>It is normal outisde</h1></div>)
    }
    if(temp>25){
        return(<div><h1>It is hot outisde</h1></div>)
    }
};
export default Weather;
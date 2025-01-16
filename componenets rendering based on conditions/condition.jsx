const Cart=()=>{
    const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoddie"];
    return(
        <div>
            <h1>cart 🛒</h1>
            {items.length>0&&<h2>you have {items.length} items in your cart</h2>}
            <ul>
                <h4> 👇Products </h4>
                {items.map((item) => (
                <li key={Math.random()}>{item}</li>
                ))}
            </ul>
        </div>
        
    );
};
const App = () => <Cart />;
export default App;

const Move=()=>{
    function Movehandler(){
        alert("Mouse move event fired");
        console.log("Mouse move event fired");
    };
    return(
        <p onMouseOver={Movehandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus saepe quas minima? Esse ea recusandae suscipit nostrum. Minima doloremque pariatur at numquam dolorum aut similique. Velit saepe ea repellat.</p>
    );
};
export default Move;

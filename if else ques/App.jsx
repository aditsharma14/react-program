import Weather from "./assets/components/weather";
import UserStatus from "./assets/components/userstatus";
const App=()=>{
    return(
        <div>
            <Weather/>
            <UserStatus LoggedIn={true} IsAdmin={true}/>

        </div>
        
    );
};
export default App;
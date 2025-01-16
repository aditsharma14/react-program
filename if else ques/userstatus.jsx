const UserStatus=(props)=>{
    if(props.LoggedIn && props.IsAdmin){
        return <div>welcome admin</div>
    }
    else{
        return <div>welcome user</div>
    }
}
export default UserStatus;
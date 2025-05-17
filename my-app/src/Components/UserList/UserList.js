import User from "../User/User";
import userData from "../../data/User.json"
import "./userlist.css"


function UserList() {

    const users = userData.users
    // console.log(users);

    return <div className="userList">

       
        <h2>Users</h2>

        <div className="users">
        {
            users.map((user) => {
                // return <User name={user.firstName} age={user.age} />
                return <User key={user.id} userData={user}    />
            })
        }

        {/* <User name="Umakanta" age="38"/>
        <User name="Sai" age="31"/>
        <User name="Harse" age="45"/> */}
</div>
    </div>
}

export default UserList;

//style={{color:"orange", backgroundColor:"cyan"}}
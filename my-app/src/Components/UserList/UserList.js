import User from "../User/User";
import "./userlist.css"
import { useState } from "react";
import Button from 'react-bootstrap/Button';


function UserList(props) {

    // const users = userData.users
    // const [users, setUsers] = useState(userData.users)
    // console.log(users);
    const { users, setUsers } = props

    function onSortByAge() {
        const sortedUsers = [...users]
        sortedUsers.sort((user1, user2) => {
            return user1.age - user2.age
        })
        setUsers(sortedUsers);
    }

    function onDeleteButtonClick(evt, id) {
        console.log('Delete Clicked for userId: ', id)
        const tempUsers = users.filter((user) => {
            return user.id != id;
        })
        setUsers(tempUsers);
    }

    return <div className="userList">


        <h2>Users</h2>
        <Button onClick={onSortByAge}>Sort By Age</Button>

        <div className="users">
            {
                users.map((user) => {
                    // return <User name={user.firstName} age={user.age} />
                    return <User onDeleteUser={onDeleteButtonClick} key={user.id} userData={user} />
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
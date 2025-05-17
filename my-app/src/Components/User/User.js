import "./user.css"
import Button from 'react-bootstrap/Button';

function User(props) {
    
    // console.log(props)
    const user = props.userData;
    return <div className="user">
        <p style={{ fontSize: "x-large", fontWeight: "bold" }}>Id #{user.id}</p>
        <img src={user.image} />
        <p>Name: {user.firstName + " " + user.lastName} </p>
        <p> Age: {user.age}</p>
        <p> Gender: {user.gender}</p>
        <p>Email: {user.email}</p>
        {/* lifting the state */}
        <Button onClick={(evt)=> props.onDeleteUser(evt, user.id)} variant="danger">Delete Me</Button>
        <br />
    </div>
}

export default User;


/*


style={{ color:"red", backgroundColor: "yellow", 
    border:"3px solid blue", padding:"5px", margin:"10px"}}
*/
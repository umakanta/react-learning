 import { useLocation } from "react-router-dom";

 function UserPage(props) {
   const location = useLocation();
    const user = location.state?.user;
    const userId = user.id

    return <div>
    <h3> I am {user.firstName} - a single userId: {userId}</h3>
    </div>
 }

 export default UserPage;
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserForm(props) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("")

    const navigate = useNavigate();

    function onInputChange(e) {
        // console.log("Typed Value: ",e.target.value)
        const nameSearchval = e.target.value
        setName(nameSearchval)
    }

    function onEmailChange(e) {
        const emailSearchVal = e.target.value
        setEmail(emailSearchVal)
    }

    function onAgeChange(e) {
        const ageVal = e.target.value
        setAge(ageVal)
    }

    function onGenderChange(e) {
        const genderVal = e.target.value
        setGender(genderVal)
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(`Form Submitted with Name:${name} Email:${email}`)

        const newUsr = {
            firstName: name,
            lastName: "",
            email, gender, age,  // key and value -> same
            image: "https://dummyjson.com/icon/michaelw/128",
            id: Math.random().toString()
        }
        props.onAddUser(newUsr);

        // window.location.href = "/";
        navigate("/");


        setTimeout(() => {
            setName("")
            setEmail("");
        }, 2000);
    }

    return <div onSubmit={handleSubmit}>

        <form>

            <div>
                <label htmlFor="name"> Name </label>
                <input onChange={onInputChange} type="text" id="name" value={name} />
            </div>

            <div>
                <label htmlFor="email"> Email </label>
                <input onChange={onEmailChange} type="text" id="email" value={email} />
            </div>

            <div>
                <label htmlFor="age"> Age </label>
                <input onChange={onAgeChange} type="number" id="age" value={age} />
            </div>

            <div>
                <label htmlFor="gender"> Gender </label>
                <input onChange={onGenderChange} type="text" id="gender" value={gender} />
            </div>

            <button type="submit"> Submit</button>


        </form>
    </div>
}

export default UserForm;
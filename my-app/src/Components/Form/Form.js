import { useState } from "react";

function Form() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    function onInputChange(e){
        // console.log("Typed Value: ",e.target.value)
        const nameSearchval = e.target.value
        setName(nameSearchval)
    }

    function onEmailChange(e){
        const emailSearchVal = e.target.value
        setEmail(emailSearchVal)
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(`Form Submitted with Name:${name} Email:${email}`)

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
                <input onChange={onEmailChange} type="text" id="email"  value={email}/>
            </div>

            <button type="submit"> Submit</button>


        </form>
    </div>
}

export default Form;
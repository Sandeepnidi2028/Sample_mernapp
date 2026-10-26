import { useState } from "react";

function Register()
 {
  let [name, setName] = useState("");
  let [emailid, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [role, setRole] = useState("");

  let handleRegister =async (event) => {
    event.preventDefault();
    let res = await fetch("http://localhost:3000/api/emp/register", 
      {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, emailid, password, role })
    })
       let data = await res.json()

        if (res) {
            console.log("data inserted success");
            console.log(data);
        } else {
            console.log("data insertion failed")
            console.log(data)

        }
    
    
  }
  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleRegister}>
        <input type="text"

        onChange={(e) => setName(e.target.value)} 
        value={name} 
        placeholder="Enter name" /><br />
                <input type="email" 
                onChange={(e) => setEmail(e.target.value)} 
                value={emailid} 
                placeholder="Enter Email" /><br />
                <input type="password" 
                onChange={(e) => setPassword(e.target.value)} 
                value={password} 
                placeholder="Enter your password" /><br />

                <select 
                onChange={(e) => setRole(e.target.value)} 
                value={role}>

                    <option value="">Choose your role</option>
                    <option value="HR">HR</option>
                    <option value="EMPLOYEE">EMPLOYEE</option>
                </select>

                <br />
                <button type="submit">Register</button>
            </form>
    </div>
  );
}
export default Register

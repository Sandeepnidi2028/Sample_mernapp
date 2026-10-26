import { useState } from "react";

function Register()
 {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [role, setRole] = useState("");

  return (
    <div>
      <h1>Register Page</h1>
      <form>
        <input type="text"

        onChange={(e) => setName(e.target.value)} 
        value={name} 
        placeholder="Enter name" /><br />
                <input type="email" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email} 
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

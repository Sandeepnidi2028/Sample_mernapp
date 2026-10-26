function Register()
 {
  return (
    <div>
      <h1>Register Page</h1>
      <form>
                <input type="text" placeholder="Enter name" /><br />
                <input type="email" placeholder="Enter Email" /><br />
                <input type="password" placeholder="Enter your password" /><br />

                <select>
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

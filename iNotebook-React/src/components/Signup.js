import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Signup = (props) => {
    const [creds, setCreds] = useState({ name: "", email: "", password: "", cpassword: "" });
    const history = useHistory()
    const {showAlert} = props

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, email, password } = creds
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        })

        const json = await response.json()
        if (json.success) {
            localStorage.setItem('token', json.authtoken)
            history.push("/")
            showAlert("Account Created Successfully","success")
        }
        else {
            showAlert("Invalid Data Entered","danger")
        }
    }

    const onChange = (e)=>{
        setCreds({...creds, [e.target.name]: e.target.value})
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Name</label>
                    <input type="text" className="form-control" value={creds.name} onChange={onChange} id="name" name="name" aria-describedby="nameHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={creds.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={creds.password} onChange={onChange} name="password" id="password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" value={creds.cpassword} onChange={onChange} name="cpassword" id="cpassword" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Signup

import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const host = "http://localhost:5000";
function Login() {
    let navigate = useNavigate();
    const [credential, SetCredential] = useState({ email: "", password: "" });
    // on changes
    const onChange = (e) => {
        SetCredential({ ...credential, [e.target.name]: e.target.value });
    };
    // handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();
        // fetch login api
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: credential.email,
                password: credential.password,
            }),
        });

        const json = await response.json();
        console.log(json);

        if (json.success) {
            // redirect to the home
            localStorage.setItem('token', json.authtoken);
            navigate("/"); 
        }
        else {
            alert("Pls Enter corrct credential")
        }

        // reset the values
        SetCredential({ email: "", password: "" });
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        name="email"
                        onChange={onChange}
                        value={credential.email}
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        onChange={onChange}
                        value={credential.password}
                        name="password"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Login;

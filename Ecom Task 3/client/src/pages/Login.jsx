import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

const URL = "http://localhost:5000/api/auth/login";

const Login = () => {
    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();


    const handleEvent = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(state);

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/JSON",
                },
                body: JSON.stringify(state),
            })
            console.log("Login Error", response);

            const res_data = await response.json();

            if (response.ok) {
                storeTokenInLS(res_data.token);

                setState({ email: "", password: "" });
                toast.success("Login Successful")
                navigate("/");
            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
                // console.log("Invalid credential");
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <section>
                <main>
                    <div className="section_Login">
                        <div className="container">
                            <div className="LoginForm">
                                <form onSubmit={handleSubmit}>
                                    <h1 className="main_heading mb-3">Login Form</h1>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" value={state.email} onChange={handleEvent} name="email" placeholder="email" id="email" autoComplete="off" required />
                                    </div>
                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input type="password" value={state.password} onChange={handleEvent} name="password" placeholder="password" id="password" autoComplete="off" required />
                                    </div>

                                    <br />

                                    <button type="submit">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Login;
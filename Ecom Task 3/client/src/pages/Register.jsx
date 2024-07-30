import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';


const Register = () => {
    const [state, setState] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",

    });

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    // handle the input values 
    const handleEvent = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setState({
            ...state,
            [name]: value,

        })
    }


    // Data Submit form 
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(state);
        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(state),
            });

            const res_data = await response.json();
            console.log("res from server", res_data);

            if (response.ok) {
                // stored token data in localStorage
                storeTokenInLS(res_data.token);

                setState({
                    username: "", email: "", phone: "", password: ""
                });
                toast.success("Registration Successful")
                navigate("/");
            }else{
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            }
        } catch (error) {
            console.log("register", error);
        }

    }


    return <>
        <main>
            <div className="section_registration">
                <div className="container grid grid-two-cols">
                    <div className="registration_Form">

                        <form onSubmit={handleSubmit}>
                            <h1 className="main_heading mb-3">Registration Form</h1>
                            <div>
                                <label htmlFor="username">username</label>
                                <input type="text" value={state.username} onChange={handleEvent} name="username" placeholder="username" id="username" required />
                            </div>
                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email" value={state.email} onChange={handleEvent} name="email" placeholder="email" id="email" required />
                            </div>
                            <div>
                                <label htmlFor="phone">phone</label>
                                <input type="number" value={state.phone} onChange={handleEvent} name="phone" placeholder="phone" id="phone" required />
                            </div>
                            <div>
                                <label htmlFor="password">password</label>
                                <input type="password" value={state.password} onChange={handleEvent} name="password" placeholder="password" id="password" required />
                            </div>
                            <br />
                            <div className="formButton">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>

    </>
}

export default Register;
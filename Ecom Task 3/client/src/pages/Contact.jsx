import { useState } from "react";
import { useAuth } from "../store/auth";

const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
}

const Contact = () => {
    const [state, setState] = useState(defaultContactFormData);

    const [userData, setUserData] = useState(true);
    const { user } = useAuth();

    if (userData && user) {
        setState({
            username: user.username,
            email: user.email,
            message: "",
        })
        setUserData(false);
    }

    const handleEvent = (e) => {
        // console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(state);

        try {
            const response = await fetch("http://localhost:5000/api/form/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(state),
                });

            if (response.ok) {
                setState(defaultContactFormData);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return <>
        <section>
            <main>
                <div className="section_Contact">
                    <div className="container ">
                        <div className="ContactForm">
                            <form onSubmit={handleSubmit}>
                                <h1 className="main_heading mb-3">Contact Form</h1>
                                <div>
                                    <label htmlFor="username">username</label>
                                    <input type="text" value={state.username} onChange={handleEvent} name="username" placeholder="username" id="username" required />
                                </div>
                                <div>
                                    <label htmlFor="email">email</label>
                                    <input type="email" value={state.email} onChange={handleEvent} name="email" placeholder="email" id="email" autoComplete="off" required />
                                </div>
                                <div>
                                    <label htmlFor="email">textarea</label>
                                    <textarea id="message" value={state.message} onChange={handleEvent} name="message" rows="4" cols="50"></textarea>
                                </div>
                                <div className="formButton">
                                    <button type="submit">submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>
}

export default Contact;
import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

const AdminContacts = () => {
    const [contacts, setContacts] = useState([]);
    const { authorizationToken } = useAuth();

    const getAllContactsData = async () => {

        try {
            const response = await fetch("http://localhost:5000/api/admin/contacts", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                }
            })

            const data = await response.json();
            console.log(`Contact data is here ${data}`);
            setContacts(data);

        } catch (error) {
            console.log(error);
        }
    }


    //    Defining the function by deleteContactById

    const deleteContactById = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            }
            );
            if (response.ok) {
                getAllContactsData();
                toast.success("Deleted Successfully");
            }else{
                toast.error("Not Deleted");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllContactsData();
    }, []);

    return (
        <>
            <section className="admin_contacts_section">
                <div className="container">
                    <h1>Admin Users Data</h1>
                </div>
                <div className="container admin_contacts">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((curUser, index) => {
                                const { username, email, message, _id } = curUser;
                                return (
                                    <>
                                        <tr key={index}>
                                            <td>{username}</td>
                                            <td>{email}</td>
                                            <td>{message}</td>
                                            <td><button className="btn" onClick={() => deleteContactById(_id)}>Delete</button></td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default AdminContacts;
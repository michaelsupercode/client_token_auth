import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../api/api';

function Dashboard(props) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers({ token: props.token })
            .then(result => {
                if (result.err) {
                    alert(result.err)
                    return;
                }
                setUsers(result)
            })
    }, [props.token])

    return (
        <div>
            <h1>Your Dashboard</h1>
            <button onClick={props.logout}>Logout</button>
            {
                users.map((user, index) => (
                    <div key={index}>
                        <h3>
                            <h3>hey,</h3> {user.firstname} {user.lastname}
                        </h3>
                        <p> {user.email} </p>
                    </div>
                ))
            }
        </div>
    )
}

export default Dashboard;
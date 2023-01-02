import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersAction} from "../../redux/actions";
import Table from "react-bootstrap/Table";

function UserListPage(props) {
    const dispatch = useDispatch()
    const {users} = useSelector(state => state.usersReducer)
    useEffect(() => {
        dispatch(fetchUsersAction())
    },[])
    return (
        <>
            <h1>user list</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>email</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(user=>
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                }
                </tbody>
            </Table>


        </>
    );
}

export default UserListPage;
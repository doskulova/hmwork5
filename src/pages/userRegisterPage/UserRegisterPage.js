import React, {useState} from 'react';
import {Container, Form, Row, Col, Button, Spinner, Alert} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {alertOff, alertOn, createUserAction} from "../../redux/actions";
function UserRegisterPage(props) {
    const dispatch = useDispatch()

    const {preloader} = useSelector(state => state.preloaderReducer)
    const {message, variant}= useSelector(state => state.alertReducer)
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:""
    })

    const changeInput = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    };
    const registerUser = (event) => {
        event.preventDefault()
        if(user.name.trim() === ""){
            dispatch(alertOn({message:"введите имя", variant:"danger"}))

            setTimeout(()=>{
                dispatch(alertOff())
            }, 3000)
        } else if (user.username.trim() === ""){
            dispatch(alertOn({message:"введите имя пользователя", variant:"danger"}))

            setTimeout(()=>{
                dispatch(alertOff())
            }, 3000)
        } else if (user.email.trim() === ""){
            dispatch(alertOn({message:"введите электронную почту", variant:"danger"}))

            setTimeout(()=>{
                dispatch(alertOff())
            }, 3000)
        }
       dispatch(createUserAction(user))
    }


    return (
        <Container>
            <h1 className="my-4">register user</h1>
            {
                preloader
                ?
                    <Spinner animation ="border"/>
                    :
                <Form onSubmit={registerUser}>
                    <Row>
                        <Col lg={3}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Control
                                    type="text"
                                    placeholder="name"
                                    name="name"
                                    onChange={changeInput}
                                    value={user.name}
                                />


                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Form.Group className="mb-3" controlId="username">

                                <Form.Control
                                    type="text"
                                    placeholder="username"
                                    name="username"
                                    onChange={changeInput}
                                    value={user.username}

                                />
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Control
                                    type="text"
                                    placeholder="email"
                                    name="email"
                                    onChange={changeInput}
                                    value={user.email}

                                />
                            </Form.Group>
                        </Col>

                        <Col lg={3}>
                            <Button type="submit" variant="success" className="w-100">
                                register user
                            </Button>
                        </Col>
                    </Row>
                </Form>
            }
            {
                message
                &&
              <Alert variant={variant}>{message}</Alert>
            }
        </Container>
    );
}

export default UserRegisterPage;
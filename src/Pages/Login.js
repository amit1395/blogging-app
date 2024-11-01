    import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
    import Base from "../Components/Base";
    import { NavLink as ReactLink } from "react-router-dom";

    const Login=()=>{
        return (
            <Base>
            <Container>
                <Row className="mt-4">
                    <Col sm={{size:6,offset:3}}>
                    <Card color="dark" outline>
                    <CardHeader className="text-center">
                        Login Here
                    </CardHeader>
                    <CardBody >
                            <Form>
                                <FormGroup>
                                <Label for="email">
                                    Enter Email
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="Enter Email"
                                    type="email"
                                    />
                                </FormGroup>
                                <FormGroup>
                                <Label for="password">
                                    Enter Password
                                </Label>
                                <Input
                                    id="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    type="password"
                                    />
                                </FormGroup>
                                <Container className="text-center">
                                    <Button color="dark">Login</Button>
                                    <Button color="dark" tag={ReactLink} to="/signup"className="ms-2">Sign up</Button>
                                </Container>
                            </Form>
                    </CardBody>
                </Card>
                    </Col>
                </Row>
            </Container>
            </Base>
        );

    }

    export default Login;
    import { Container,Card, CardHeader,CardBody,Form,FormGroup, Label,Input, Button, Row, Col } from "reactstrap";
    import Base from "../Components/Base";
    import { signUp } from "../Services/user_service";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

    const Signup=()=>{
           const[data,setData] =useState({
                name:'',
                email:'',
                password:'',
                about:''
            })
            const[error,setError]=useState({
                errors:[],
                isError:false
            })
            useEffect(()=>{
            //  console.log(data)
            },[data]
        )

            const handleChange=(event,property)=>{
               setData({...data,[property]:event.target.value})

            }
            //reset the data
            const resetData=()=>{
                setData({
                    name:'',
                    email:'',
                    password:'',
                    about:''
                })
            }

            //submitting the form
            const submitForm=(event)=>{
                event.preventDefault();
                //data validation
                //call server API to save
                signUp(data).then((resp)=>{
                    console.log(resp);
                    console.log("Successfull");
                    toast.success("User registed Successfully");
                    resetData();
                }).catch((error)=>{
                    console.log(error);
                    console.log("Failed");
                });
                console.log(data)

            }

        return (
            <Base>
            <Container>
                <Row className="mt-4">
                    <Col sm={{ size:6,offset:3 }}>
                    <Card color="dark" outline>
                <CardHeader className="text-center">
                    <h3>Fill Your information to Register</h3>
                </CardHeader>
                <CardBody>
                    {/*creating form */}
                    <Form onSubmit={submitForm}>
                        {/*name  field */}
                        <FormGroup>
                            <Label for="name">Enter Name</Label>
                            <Input type="text" placeholder="Enter name here" id="name"
                            onChange={(e)=>handleChange(e,'name')}
                            value={data.name}/> 
                            
                        </FormGroup>
                        {/*email  field */}
                        <FormGroup>
                            <Label for="email">Enter Email</Label>
                            <Input type="email" placeholder="Enter email here" id="email"
                            onChange={(e)=>handleChange(e,'email')}
                            value={data.email}/> 
                            
                        </FormGroup>
                        {/*password  field */}
                        <FormGroup>
                            <Label for="password">Enter Password</Label>
                            <Input type="password" placeholder="Enter password here" id="password"
                            onChange={(e)=>handleChange(e,'password')}
                            value={data.password}/> 
                            
                        </FormGroup>

                        <FormGroup>
                            <Label for="about">
                                    About
                            </Label>
                        <Input
                            id="about"
                                name="text"
                                type="textarea"
                                    style={{height:"250px"}}
                                    onChange={(e)=>handleChange(e,'about')}
                                    value={data.about}/>
                        </FormGroup>
                        <Container className="text-center">
                            <Button color="dark"> Register</Button>
                            <Button color="secondary" type="reset" className="ms-2"
                            onClick={resetData}> Reset</Button>
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

    export default Signup;
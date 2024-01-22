import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/hexagonlogo.png";
import "../style/style.css";

const Logins = () => {
    return(
        <Container style={{marginTop:'7vh'}}>
            <Row>
                <Col className="centered">
                <h3>Welcome Back!</h3>
                </Col>
            </Row>
            <Row>
                <Col className="centered">
                    <img src={logo} alt="hexagon" width={'15%'} ></img>
                </Col>
            </Row>
            <Row className="centered">
                <Col className="col-5">
                    <Form className="text-start px-4 py-3 mt-2" >               
                    <Form.Group className="mb-3">
                        <Form.Control type="email" placeholder="Alamat email" />
                    </Form.Group>                                
                    <Form.Group className="mb-3">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Col className="centered">
                        <Button style={{width:'100%'}}variant="primary" type="submit"> Masuk</Button>
                    </Col>
                    <p className="pt-3">Belum memiliki akun? daftar <Link to='/daftar'>di sini</Link></p> 
                    </Form> 
                </Col>
            </Row>       
        </Container>
    )
}
export default Logins;
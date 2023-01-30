import React from "react";
import { Container, Col,Row } from "reactstrap";
import Cours from "../Annonce/Cours"
import SideBar from "../Annonce/SideBar"
import Pagination from "../Annonce/Pagination";

const Articles = () => {
    return (
     
       <Container fluid >
            
               <Row>
              <Col md="2">
                 <SideBar></SideBar>
             </Col>
             <Col md="10">
                <Cours></Cours>
                <Cours></Cours>
                <Cours></Cours>
             </Col>
             </Row>
            <Col>
               <Pagination></Pagination>
            </Col>
            </Container>

    )
}
export default Articles;
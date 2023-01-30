import React from "react";
import '../Cards/Cards.css';
import announce from "../../assets/announce.png";
import Favorite from "../../assets/Favorite.png";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBBtn,
    MDBRipple,
  } from "mdb-react-ui-kit";
  
  

const Cards= () => {
   return (
    <MDBContainer className="my-2">
      <MDBRow >
       
       
        
        <MDBCol md="6" lg="10" className="mb-4 ml-4">
          <MDBCard style={{ borderRadius: "15px" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-overlay"
            >
              <MDBCardImage
                src={announce}
                fluid
                className="w-100"
                style={{
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              />
              <a href="#!">
                <div className="mask"></div>
              </a>
            </MDBRipple>
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between">
                <div>
                 <strong>Math</strong>
                  <p className="small text-muted">Publié par <a href="#!" className="text-dark">
                     Rezig Meroua
                    </a></p>
                </div>
                <div>
                  <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                    
                    
                  <img className='icon' src={Favorite} alt="" id="favorite"/>
                  </div>
                  
                </div>
              </div>
            </MDBCardBody>
            <hr className="my-0" />
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
                 <a href="/DetailAnnounce"><MDBBtn color="success">Voir plus</MDBBtn></a>
                  <span>2000 Da</span>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Cards
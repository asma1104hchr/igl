import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import './Cours.css'
import announce from "../../assets/announce.png"
import send from '../../assets/Sent.png'
import {Link} from "react-router-dom"

function Cours() {
  return (
    <MDBContainer fluid>
        <img src={send} alt="send" className="rotateimg180"/>
      <MDBRow className=" mb-0">
        <MDBCol md="12" xl="10">
          <MDBCard className="shadow-0 border rounded-3 mt-5">
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <MDBCardImage
                      src= {announce}
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol md="6">
                  <h5>Mathématique</h5>
                  
                  <div className="mt-1 mb-0 text-muted small">
                  
                 <strong>Niveau : Lycée</strong>
                  <p className="small text-muted">Publié par <a href="#!" className="text-dark">
                     Rezig Meroua
                    </a></p>
                    <p className="text-truncate ">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                  </div>
                  
                </MDBCol>
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start"
                >
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h5 className="mb-1 me-1">2000 Da /mois</h5>
                    
                  </div>
                  <h6 className="text-success">En ligne</h6>
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn color='success' size="sm">
                      <Link to="/DetailAnnounce" className="link-light">Voir plus</Link>
                    </MDBBtn>
                    <MDBBtn outline color="success" size="sm" className="mt-2">
                    <Link to="/UserFavorites" className="link-success">Ajouter aux favoris</Link>
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
  );
}

export default Cours;
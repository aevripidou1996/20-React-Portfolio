import React from 'react';
import { 
    MDBContainer, 
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle, 
    MDBCardText,
    MDBCardFooter,
    MDBBtn
 } from 'mdb-react-ui-kit';
 import resumePic from '../../images/laptop-resume.jpg';

const Resume = () => {
    const pdfUrl = 'file:///C:/Users/61434/Desktop/Andrew%20Evripidou_CV%205.pdf'
    return (
        <MDBContainer fluid className="vh-100">
            <div className="d-flex justify-content-center">
            <MDBCard className="w-25">
                <MDBCardImage className="img-thumbnail" position="top" src={resumePic} />
                <MDBCardBody>
                <MDBCardTitle>Download Resume:</MDBCardTitle>
                <MDBCardText>Press the button below to download a copy of my resume.</MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className="text-center">
                <MDBBtn href={pdfUrl}>DOWNLOAD</MDBBtn>
                </MDBCardFooter>
            </MDBCard>
            </div>
        </MDBContainer>
    )
};

export default Resume;
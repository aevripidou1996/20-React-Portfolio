import React from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import './About.css'
import cliff from '../../images/Developer-Photo.jpg';

const About = () => {
    return (
        <MDBContainer fluid className="vh-100 bkgrd">
            <div className="d-flex justify-content-center flex-column flex-sm-row">

                <MDBCard className="order-sm-2 card-picture my-4 mx-auto mx-sm-0">
                    <MDBCardImage variant="top" className="img-fluid rounded" src={cliff} />
                </MDBCard>
                
                <MDBCard border="dark" className="order-sm-1 my-4 card-text mx-auto mx-sm-0">
                    <MDBCardBody>
                    <MDBCardTitle>About Andrew Evripidou</MDBCardTitle>
                    <MDBCardText>
                    Heyy! I'm Andrew, i am a 27-year-old residing in the vibrant city of Sydney Australia and for the past 7 years i have been working in the real estate sector, managing and selling sydneys most prestigious properties.However, with the sudden shock of the COVID pandemic and sydney lockdown i was forced to work from home for months at a time. It is during this time, i became curious with computers wich in return led to me discovering my passion with web development. Beyond my ever growing passion for computing I am also an ardent advocate of an active lifestyle. I take immense pleasure in embarking on leisurely strolls accompanied by my beloved dog Max. Additionally i also enjoy engaging in numerous activities whether it be reading, weight training, socializing and cars. By embracing an active and diverse lifestyle, I strive to make the most of my time outside of work, enjoying the wonders of both nature and the readily available knowlage that surround myself with.
                    </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </MDBContainer>
    )
};

export default About;
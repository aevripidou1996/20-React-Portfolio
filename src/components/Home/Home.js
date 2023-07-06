import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import hero from '../../images/heroImage.jpg'

const Home = () => {
    return (
        <MDBContainer fluid className="text-center vh-100 bkgrd">
            <div className="pt-2 vh-100">
                <img src={hero} className='img-fluid rounded-pill shadow-4-strong' alt='Photo of Andrew' />
                <p className=" my-0 py-0 text-dark fs-1">Welcome To My React Portfolio Page!!!!</p>
            </div>
            
        </MDBContainer>
    )
};

export default Home;
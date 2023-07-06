import React from 'react';
import { 
    MDBContainer, 
    MDBRow, 
    MDBCard, 
    MDBCol, 
    MDBCardBody, 
    MDBCardTitle, 
    MDBCardText,
    MDBCardLink, 
    MDBCardImage,
    MDBCardFooter
    } from 'mdb-react-ui-kit';

import card1Img from '../../images/quizzApp.png'
import card2Img from '../../images/weatherApp.png'
import card3Img from '../../images/notetakerAPP.png'
import card4Img from '../../images/passwordGenerator.png'
import card5Img from '../../images/text-editor-pwa-sm.png'
import card6Img from '../../images/rrg.png'
import './Portfolio.css'

const Portfolio = () => {
    
    return (
        <MDBContainer fluid className="h-100 pb-4 bkgrd">
            <MDBRow className="row-cols-1 row-cols-md-3 g-3 pt-2">
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={card1Img} />
                        <MDBCardBody>
                        <MDBCardTitle>Quizz App</MDBCardTitle>
                        <MDBCardText>
                            This is a Quiz App that tests a users knowledge the the programming languages used in full stack development. This app uses html, css and javascript to function.
                        </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                        <MDBCardLink href='https://github.com/aevripidou1996/wk4-QuizApp'>Repository link</MDBCardLink>
                        <MDBCardLink href='https://aevripidou1996.github.io/wk4-QuizApp/'>Deployed app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={card2Img} />
                        <MDBCardBody>
                        <MDBCardTitle>Weather App</MDBCardTitle>
                        <MDBCardText>
                            This is a Weather App that allows a user to see a 5 day weather forcast in their area. This app uses This app uses html, css, javascript and the open weather API to function.
                        </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                        <MDBCardLink href='https://github.com/aevripidou1996/weather-app'>Repository link</MDBCardLink>
                        <MDBCardLink href='https://aevripidou1996.github.io/weather-app/'>Deployed app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={card3Img} />
                        <MDBCardBody>
                        <MDBCardTitle>Note Taking App</MDBCardTitle>
                        <MDBCardText>
                            This web app is used for searching movies by title name and finding a source to stream or buy them from using API calls.

                        </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                        <MDBCardLink href='https://github.com/aevripidou1996/Note-Taker-App'>Repository link</MDBCardLink>
                        <MDBCardLink href='https://wk11-note-app.herokuapp.com/notes'>Deployed app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <MDBRow className="row-cols-1 row-cols-md-3 g-3 pt-2">
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={card4Img} />
                        <MDBCardBody>
                        <MDBCardTitle>Password Generator</MDBCardTitle>
                        <MDBCardText>
                            This is a Password Generator that generates a new random password for a user. This app uses This app uses html, css, javascript and the open weather API to functions.
                        </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                        <MDBCardLink href='https://github.com/aevripidou1996/WK3-Challenge'>Repository link</MDBCardLink>
                        <MDBCardLink href='https://aevripidou1996.github.io/WK3-Challenge/'>Deployed app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={card5Img} />
                        <MDBCardBody>
                        <MDBCardTitle>Simple Text Editor</MDBCardTitle>
                        <MDBCardText>
                            A Progressive Web Application using JavaScript, Webpack and Workbox to create a simple text editor.
                        </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                        <MDBCardLink href='https://github.com/aevripidou1996/PWA-Text-Editor'>Repository link</MDBCardLink>
                        <MDBCardLink href='https://text-eddit-4bec9081872b.herokuapp.com/'>Deployed app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={card6Img} />
                        <MDBCardBody>
                        <MDBCardTitle>Random Recipe Generator</MDBCardTitle>
                        <MDBCardText>
                            This app allows the user to generate an almost limitless choice on what to cook for their next meal. This app uses This app uses html, css, javascript and the open weather API to function.s.
                        </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                        <MDBCardLink href='https://github.com/aevripidou1996/random-recipe-generator'>Repository link</MDBCardLink>
                        <MDBCardLink href='https://aevripidou1996.github.io/random-recipe-generator/'>Deployed app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        )
};

export default Portfolio;
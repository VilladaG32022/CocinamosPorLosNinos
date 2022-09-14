import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Card from "../../components/Cards/PricingCard/Card"
import "../PricingSection/PricingSection.css"




export default function PricingContainer(props){

    return(
        <MDBContainer>
            <MDBRow className="donate__row">
                <MDBCol>
                    <Card/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>  

);
}
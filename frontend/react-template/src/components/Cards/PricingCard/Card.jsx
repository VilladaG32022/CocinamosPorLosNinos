import React from 'react';
import {MDBCard,MDBCardTitle,MDBCardText,MDBBtn,MDBCardOverlay,MDBIcon} from 'mdb-react-ui-kit';


import {PricingSec} from '../../../utils/constants'

export default function App(props) {



    const {btntext} = props;
    return (
        <MDBCard>
            <MDBCardOverlay>

                
                <div className="donate__header">

                    {PricingSec.map(i => (
                        <>
                        <MDBCardTitle className="donate__title">
                            {i.title ? i.title : 'Dona' }
                        </MDBCardTitle>
                        <div className="donate__div">
                            <MDBCardText className="donate__text">
                                {i.text}
                             </MDBCardText>
                             <MDBBtn className="donate__button">
                                 {btntext} 
                                 <MDBIcon className="donate__icon" fas icon="credit-card" />
                             </MDBBtn>
                         </div>
                        </>



                    ))}
                </div>
        </MDBCardOverlay>
    </MDBCard>
    );
}
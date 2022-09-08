import React from "react";
import LoginForm from '../../components/Forms/LoginForm'
import '../Log-In/login.css';

export default function LogIn (){
    console.log("HOLA")
    return(
        <div className="Container">
            <LoginForm className="Form__container"/>

        </div>

    );
}


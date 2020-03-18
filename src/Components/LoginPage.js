import React from 'react'
import '../LoginPage.css';
import Logo from '../Dollar-Sign.png';
import DebitLogo from '../debit-card.png';

const LoginPage = (props) => {

    return(
        <div>
            <div className="logo_and_text">
                <h3>Atm Bank</h3>
                <img className="debitLogo" src={DebitLogo} alt="debit_logo"/>
            </div>
            <div>
                <h1>WHERE YOUR BANKING NEEDS ARE</h1>
                <h1 className="our_priority">OUR PRIORITY</h1>
            </div>

            <img className="dallorLogo" src={Logo} alt="logo" />
        </div>
    )


};
export default LoginPage;
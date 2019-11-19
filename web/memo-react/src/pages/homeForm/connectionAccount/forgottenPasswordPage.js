import React, { Component } from 'react';
import { Link } from "@reach/router"
import ForgottenPasswordForm from './forgottenPasswordForm.js';

class ForgottenPasswordPage extends Component{

    render()
    {
        return <div className='row'>
                    <div className='hidden-xs col-sm-3 connectionPageLeftPane'/>
                    
                    <div className='col-xs-12 col-sm-9 connectionPageCenterPane'>
                        <div>
                            <h2>Réinitialisation du mot de passe</h2>
                            <div className="row boundary"/>
                            <div className='connectTitle '>Entrez votre adresse e-mail pour rénitialiser votre mot de passe</div>
                            <div className="col-xs-12">
                            <ForgottenPasswordForm/>
                            </div>

                            <div className="connectAction col-xs-12">
                                <div className="col-xs-12 col-sm-12">
                                    <Link  to="/connection" className="link"><span>Se connecter</span></Link>
                                </div>
                                <div className="col-xs-12 col-sm-12 accountLinkBlock txtBold">
                                    Pas encore inscrit ?
                                </div>
                                <div className="col-xs-12 col-sm-12 accountLinkBlock">
                                    <Link to="/creationCompte" id="loginNoAccount" className="link">S'inscrire</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;
    
    }
}
export default ForgottenPasswordPage;
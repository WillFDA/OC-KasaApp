import React from "react";
import { Link } from "react-router-dom";
import './_notfound.scss'
export default function NotFound() {
    return(
    <main className="container error__container"> 
        <div className="error">
            <h1 className="error__title">404</h1>
            <p className="error__subtitle">Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <Link className="error__link" to='/'>Retourner sur la page d’accueil</Link>
    </main>
    )
}
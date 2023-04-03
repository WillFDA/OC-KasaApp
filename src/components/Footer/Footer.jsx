import React from "react";
import './_footer.scss'
import { ReactComponent as LogoKasa } from '../../assets/logo_kasa.svg';
export default function Footer() {
    return(
        <footer className="footer">
            <LogoKasa className="footer__logo" />
            <p className="footer__copyright">
            &copy; 2020 Kasa. All rights reserved.
            </p>
        </footer>
    )
}
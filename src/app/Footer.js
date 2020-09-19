import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className="footer">
            <ul>
                <li>Suggestions? Errors? <a href="mailto:someguy590@gmail.com"><address>Contact Me</address></a></li>
                <li><Link to="/legal">Legal Information</Link></li>
                <li>Mutants And Masterminds Tools © 2020</li>
            </ul>
        </footer>
    );
}

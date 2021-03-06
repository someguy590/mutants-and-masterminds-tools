import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <section>
            <h1>Welcome to Mutant and Masterminds tools!</h1>
            <h2>Tools</h2>
            <p>Use the following tools for your d20 based super hero stories!</p>
            <ul>
                <li>
                    <Link to="/heroCreator3e">Hero Creator 3e</Link>
                </li>
            </ul>

            <h2>Suggestions? Errors? Want to get to know me!? Contact me below!</h2>
            <address>
                <a href="mailto:someguy5590@gmail.com">someguy590@gmail.com</a>
            </address>
            <p>Always happy to take in an error to fix or a suggestion to consider!</p>
        </section>
    );
}

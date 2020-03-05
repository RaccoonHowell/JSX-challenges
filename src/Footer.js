import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
    <ul>
        <li>
            <Link to="/header">Header</Link>
        </li>

        <li>
            <Link to="/paragraph">Paragraph</Link>
        </li>

        <li>
            <Link to="/square">Square</Link>
        </li>

        <li>
            <Link to="/people">People</Link>
        </li>

        <li>
            <Link to="/clicked">Clicked</Link>
        </li>

        <li>
            <Link to="/toggleText">ToggleText</Link>
        </li>

        <li>
            <Link to="/counter">Counter</Link>
        </li>

        <li>
            <Link to="/stepCounter">StepCounter</Link>
        </li>

        <li>
            <Link to="/catchMe">CatchMe</Link>
        </li>

        <li>
            <Link to="/length">Length</Link>
        </li>

        <li>
            <Link to="/passwordStrength">PasswordStrength</Link>
        </li>

        <li>
            <Link to="/tempConverter">TempConverter</Link>
        </li>
    </ul>
)

export default Footer;
import React from "react";

import './styles/TopBar.css';
import GitHubLogo from './assets/GitHubLogo.svg';

export default class TopBar extends React.Component {
    render() {
        return (
            <ul id="TopBar">
            <li id='GitHubLogo'>
                <a href='https://github.com/raujimenez/PaymentTracker'>
                    <img height='30px'src={GitHubLogo} alt='GitHubLogo'></img>
                </a>
            </li>
            <li id='PageName'>PageName</li>
            <li id='Settings'>Settings</li>
            </ul>
        )
    }
}
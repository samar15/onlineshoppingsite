import { React, Component } from 'react';
import {Jumbotron } from 'react-bootstrap';
import '../css/login.css';

export default class LoginPage extends Component {
    render() {
        return (
            <div class="row"  >
                <div class="Col no-gutter" >
                    <div class="image">
                        <img src="/images/logo.jpg" alt="shopping" />
                    </div>
                </div>
                <div class="Col no-gutter">
                    <div class="login" id="Jumbotron">
                        <Jumbotron style={{"height" : 610 , "background-color": "black" , "color": "white" , "margin": 40 }}>
                                <h2>login</h2>
                                <br />
                                <form id="login" method="get" action="login.php">
                                    <label><b>UserName</b></label>
                                    <br />
                                    <input type="email" maxlength="128" id="ap_email" placeholder="username" name="email" tabindex="1" class="a-input-text a-span12 auth-autofocus auth-required-field" />
                                    <br />
                                    <br />
                                    <label><b>Password</b> </label>
                                    <br />
                                    <input type="Password" name="Pass" id="Pass" placeholder="Password " required />
                                    <br />
                                    <br/>
                                    <a class="btn btn-primary btn-lg" href="http://localhost:8080/" role="button">submit</a>
                                </form>
                        </Jumbotron>
                    </div>

                </div>
            </div>
        )
    }
}
import {React, Component} from 'react';
import {Jumbotron } from 'react-bootstrap'

export default class HomePage extends Component{
    render(){
        return(
            <Jumbotron className="bg-dark text-white">
             
                <h2>Home</h2>
                <br/>
                <div class="login">
                    <form id="login" method="get" action="login.php">
                        <label><b>User Name</b></label>
                        <br/>
                        <input type="email" maxlength="128" id="ap_email" placeholder="username" name="email" tabindex="1" class="a-input-text a-span12 auth-autofocus auth-required-field"/>
                        <br/>
                        <br/>
                        <label><b>Password</b> </label>
                        <br/>
                        <input type="Password" name="Pass" id="Pass" placeholder="Password " required />
                        <br/> 
                     </form>
                </div>
             
            </Jumbotron>
        )
    }
}

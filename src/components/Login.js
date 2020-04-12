import React, { Component } from 'react';
import axios from "axios";

class Login extends Component {
    constructor(){
        super();
        this.state = {
            email:"",
            username:"",
            password:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.startSession = this.startSession.bind(this);
    }

    handleChange(e){
        const {name,value} = e.target;
        this.setState({
            [name]:value
        });
    }

    startSession(e){
        e.preventDefault();
        axios({method:"POST",url:"http://localhost:4000/api/users/login",data:this.state});
    }

    render() {
        return (
            <div>
                <h1>Iniciar sesion</h1>
                <form onSubmit={this.startSession}>
                    <input type='text' name='email' onChange={this.handleChange} placeholder='email'/>
                    {/* <input type='text' name='username' onChange={this.handleChange} placeholder='username'/> */}
                    <input type='password' name='password' onChange={this.handleChange} placeholder='password'/>
                    <button type='submit'>Iniciar sesion</button>
                </form>
            </div>
        );
    }
}

export default Login;

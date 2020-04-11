import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            email:"",
            username:"",
            password:""
        }
    }

    handleChange(e){
        const {name,value} = e.target;
        this.setState({
            [name]:value
        });
    }

    render() {
        return (
            <div>
                <h1>Iniciar sesion</h1>
                <form>
                    <input type='text' name='email' onChange={this.handleChange} placeholder='email'/>
                    <input type='text' name='username' onChange={this.handleChange} placeholder='username'/>
                    <input type='password' name='password' onChange={this.handleChange} placeholder='password'/>
                    <button type='submit'>Iniciar sesion</button>
                </form>
            </div>
        );
    }
}

export default Login;

import React, { Component } from 'react';
import axios from "axios";
import {Cookies} from "react-cookie";
class MainMenu extends Component {
    render() {
        const test = axios.get("http://localhost:4000/api/users/verifique")
        .then(res=>{
            console.log(res.data);
        })
        // console.log(pathValidation);

        
        return (
            <div>
                
            </div>
        );
    }
}

export default MainMenu;

import React from "react";
import { NavLink } from 'react-router-dom';
import "./UserProfile.css";
import "../UserForm/UserForm";

import getUsers from "../data/users-get";



class UserProfile extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }
    // create a logic where we capture login credentials from login page and load the associated info automatically 

    componentDidMount() {
        fetch('/rest/users')
            .then(response => response.json())
            .then(users => this.setState({ users }));
    }


    render() {
         
           return(
            <>
                <div className="UserProfile">
                    <header className="headerUserProfile">
                        <h1>User Profile</h1>
                    </header>
                    <hr></hr>
                    <form className="profileForm">
                        <div className="profileBox">
                            <div className="paraInputWrap">
                                <p>First Name</p>
                                <input type="text"
                                    className="ProfileName profileInput"
                                    value={
                                        this.state.users.length === 0 ? 
                                            "" : this.state.users[0].userName
                                    }
                                />
                            </div>
                            <div className="paraInputWrap">
                                <p>Surname</p>
                                <input type="text"
                                    className="ProfileSurname profileInput"
                                    value={
                                        this.state.users.length === 0 ? 
                                            "" : this.state.users[0].userLastName
                                    }
                                />
                            </div>
                        </div>
                        <div className="profileBox">
                            <div className="paraInputWrap">
                                <p>Address</p>
                                <input type="text" 
                                    className="ProfileAddress profileInput" 
                                    value={
                                        this.state.users.length === 0 ? 
                                            "" : this.state.users[0].address
                                    }
                                />
                            </div>
                            <div className="paraInputWrap">
                                <p>City</p>
                                <input type="text" 
                                    className="ProfileCity profileInput"
                                    value={
                                        this.state.users.length === 0 ? 
                                            "" : this.state.users[0].city
                                    }
                                />
                            </div>
                            <div className="paraInputWrap">
                                <p>Post Code</p>
                                <input type="text" 
                                    className="ProfileZipCode profileInput" 
                                    value={
                                        this.state.users.length === 0 ? 
                                            "" : this.state.users[0].postcode
                                    }    
                                />
                            </div>
                        </div>
                        <div className="profileBox">
                            <div className="paraInputWrap">
                                <p>Email</p>
                                <input type="email"
                                    className="ProfileEmail profileInput"
                                    value={
                                        this.state.users.length === 0 ? 
                                        "" : this.state.users[0].email
                                    }
                                />
                            </div>
                        </div>
                        <div className="profileBox">
                            <div className="paraInputWrap">
                                <p>Address</p>
                                <input type="text" 
                                    className="ProfileAddress profileInput" 
                                    value={
                                        this.state.users.length === 0 ? 
                                            "" : this.state.users[0].address

                                    }
                                />
                            </div>
                            <div className="paraInputWrap">
                                <p>City</p>
                                <input type="text" 
                                    className="ProfileCity profileInput"
                                    value={
                                        this.state.users.length === 0 ? 
                                            "" : this.state.users[0].city
                                    }
                                />
                            </div>
                            <div className="paraInputWrap">
                                <p>Post Code</p>
                                <input type="text" 
                                    className="ProfileZipCode profileInput" 
                                    value={
                                        this.state.users.length === 0 ? 
                                            "" : this.state.users[0].postcode
                                    }    
                                />
                            </div>
                        </div>
                        <div className="profileBox">
                            <div className="paraInputWrap">
                                <p>Email</p>
                                <input type="email"
                                    className="ProfileEmail profileInput"
                                    value={
                                        this.state.users.length === 0 ? 
                                        "" : this.state.users[0].email
                                    }
                                />
                            </div>
                        </div>


                    </form>
                </div>
                <NavLink to='/user-profile'><button>Edit Details</button></NavLink>
                <NavLink to='/user-dashboard'><button>Dashboard</button></NavLink>
            
            </>
        );
    }
}

export default UserProfile;

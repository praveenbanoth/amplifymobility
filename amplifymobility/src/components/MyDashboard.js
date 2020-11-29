import React, {Component } from 'react'
import './MyStyle.css'
import './HomeImage.jpeg'
import HomeImageoriginal from './HomeImageoriginal'
class MyDashboard extends Component{
    render()
    {
        return(
            <div className="sidenav style1">
            {/* <img src="HomeImage.jpeg" alt ="Dashboard"/> */}
             {/* <a href="#">Dashboard</a> */}
             <HomeImageoriginal/>
             <h3 className="style1">ACTIVITY</h3>
             <a href="#">Authorizations</a>
             <a href="#">Charging Sessions</a>
             <h3 className="style1">ASSETS</h3>
             <a href="#">Charge Points</a>
             <a href="#">Charging Zones</a>
             <a href="#">Location</a>
             <a href="#">Location Images</a>
             <h3 className="style1">CRM</h3>
             <a href="#">Users</a>
             <a href="#">RFID Tags</a>
             <h3 className="style1">PARTNERS</h3>
             <a href="#">Partners</a>
             <a href="#">Partner Comtacts</a>
             <h3 className="style1">ANALYTICS</h3>
             <a href="#">Reports</a>
             <a href="#">SigFox Data</a>
             <h3 className="style1">CONFIGURATION</h3>
             <a href="#">Admin Account</a>
             <a href="#">Company Detail</a>
             <a href="#">Change Password</a>
             </div>
            )
    }
}
export default MyDashboard 
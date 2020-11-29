import React, {Component, Fragment } from 'react'
import './Mainpagecolor.css'
// import MapContainer from './MapContainer'
const options = [
    {
      label: "Hyderabad",
      value: "10",
    },
    {
      label: "Mumbai",
      value: "20",
    },
    {
      label: "Banglore",
      value: "25",
    },
    {
      label: "Pune",
      value: "30",
    },
  ];
class Mainpage extends Component{
    
   
     
    render()
    {
        return(
            <Fragment>
                <div className="box1" >
                <a href="#">Faulty and Connectivity Loss </a>
                <p><b>12</b></p>
            </div>
            
            <div className="box2">
                <a href="#">Active Charging Sessions</a>
                <p><b>9</b></p>                <p>9.96kWh</p>
            </div>
            <div className="box3">
                <a  href="#">Chanrging Sessions      </a>
                <input type="date" name="myDate" align="right" ></input>

                <p><b>232</b> </p>
                <p>4.5% Increase</p>
                 
                        </div>
            <div className="box4">
                <a href="#">Total Energy</a>
                <input type="date" name="myDate"  ></input>

                <p><b>460.426</b></p>   
                <p>4.5% Decrease</p>
         </div>
            <div className="box5">
                <a href="#">Total Revenue</a>
                <input type="date" name="myDate"  ></input>

                <p><b>0</b></p>  
                <p>No Data</p>
          </div>
            <div className="box6">
                <a href="#">New Users</a>
                <input type="date" name="myDate"  ></input>

                <p><b>7</b></p>  
                <p>No Prior Data</p>
          </div>
            <div className="box7">
                <a href="#">New Charge Points</a>
                <input type="date" name="myDate"  ></input>

                <p><b>2</b></p>    
                <p>50% Decrease</p>
        </div>
            <div className="box8">
                <a href="#">Charge Points by Type</a>
                <p>Commercial Public </p>
                <p>Commercial Private </p>
            </div>
            <div id="Mainpage">
            <div className="box9">
                <a href="#">Locations by City</a>
                <select>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
                <p>
                    <name >value:x</name>
                </p>
            </div>
            </div>
                           

            </Fragment>  
            )
        }
    }
    export default Mainpage 
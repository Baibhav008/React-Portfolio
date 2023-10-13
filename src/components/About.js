import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/png.png" alt="" style={{width:200,height:200,border:"solid-black"}} />

            </div>

            <div className="nine columns main-col">

               <h2 style={{fontSize:"35px"}}>About Me</h2>
               <p style={{fontSize:"20px",color:'white'}}>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2 style={{fontSize:"28px"}}>Contact Details</h2>
                  <p className="address" style={{fontSize:"20px",color:'white'}}>
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
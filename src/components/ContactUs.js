import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead" style={{color:"white",fontSize:"28px"}}>
              Contact me for any work or suggestions :
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in : {resumeData.linkedinId}
                </h4>
                <h4>Phone Number : 9523960790
                  
                </h4>
                <h4>Email : baibhavk6@gmail.com
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
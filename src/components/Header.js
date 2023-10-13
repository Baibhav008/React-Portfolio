import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home" style={{color:'white',fontSize:"20px"}}>Home</a></li>
               <li><a className="smoothscroll" href="#about" style={{color:'white',fontSize:"20px"}}>About</a></li>
             <li><a className="smoothscroll" href="#resume" style={{color:'white',fontSize:"20px"}}>Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio" style={{color:'white',fontSize:"20px"}}>Works</a></li>
            
               <li><a className="smoothscroll" href="#contact" style={{color:'white',fontSize:"20px"}}>Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I am {resumeData.name}.</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif ',fontSize:"28px",textShadow:"2px 4px 4px rgba(46,91,173,0.6)"}}>I am an {resumeData.role}.{resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}
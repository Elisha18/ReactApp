import React, { Component } from 'react';
import './css/footer.css'; 
class Footer extends Component {
    render() { 
        return ( 
            <div>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <a className="icon" href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                <a className="icon" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                <a className="icon" href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                <a className="icon" href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                                <a className="icon" href="#"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
                                <p><i class="fa fa-copyright" aria-hidden="true"></i> 2020 Elisha George. Created using React.js</p>
                            </div>
                        </div>
                    </div>

                </footer>
            </div>
         );
    }
}
 
export default Footer;
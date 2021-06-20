import React, { Component } from 'react';
import Axios from 'axios';
import _ from 'lodash';
import avatar from './css/image/avatar.png';
import './css/patientRecord.css';
import doctorVisit from './css/image/doctorVisit.jpg';


class PatientRecord extends Component {

    state = {
        data: [],
        map: { name: '', Id: '', Dob: '', gender: '', city: '' },
    }

    async componentDidMount() {
        const { data } = await Axios.get("https://jsonplaceholder.typicode.com/users");
        // , {
        //     auth: {
        //         username: 'root',
        //         password: 'secret',
        //       }
        //     }).catch(function(error){
        //         console.log(error);
        //     });

        this.setState({
            data: data
        })
        console.log(this.state.data);
        const patientId = this.props.match.params.id
        const patientRecord = this.state.data.filter(d => (d.id == patientId))
        console.log(patientRecord[0]);

        this.setState({
            map: this.mapToViewModel(patientRecord[0])
        })
        console.log(this.state.map);
    }

    mapToViewModel(patientRecord) {
        return {
            // name : _.get(patientRecord[0],"resource.name[0].given"),
            // Id : _.get(patientRecord[0],"resource.id","Unknown"),
            // Dob : _.get(patientRecord[0],"resource.birthDate","Unknown"),
            // gender : _.get(patientRecord[0],"resource.gender","Unknown"),
            // city : _.get(patientRecord[0],"resource.address[0].city","City Unknown")
            name: patientRecord.name,
            Id: patientRecord.id,
            Dob: patientRecord.username,
            gender: patientRecord.email,
            city: patientRecord.address.city
        }
    }

    render() {
        const { map } = this.state;
        return (
            <section className="dashboard">
                <div className="sidebar">
                    <center>
                        <img src={avatar} class="profile_image" alt="no image" />
                        <h4>{map.name}</h4>
                    </center>
                    <a href=""><i class="fa fa-id-badge" aria-hidden="true"></i><span>ID : {map.Id}</span></a>
                    <a href=""><i class="fa fa-id-badge" aria-hidden="true"></i><span>Email Id : {map.gender}</span></a>
                    <a href=""><i class="fa fa-calendar" aria-hidden="true"></i><span>Username : {map.Dob}</span></a>
                    <a href=""><i class="fa fa-location-arrow" aria-hidden="true"></i><span>Address : {map.city}</span></a>
                </div>
                <div className="card">
                    <div className="blog-post">
                        <div className="blog-post_img">
                            <img className="image" src={doctorVisit} alt="no image" />
                        </div>
                        <div className="blog-post_info">
                            <div className="blog-post_date">
                                <span></span>
                            </div>

                            <h3 href="" className="blog-post_title">Click on read more to know about -</h3>
                            <p className="blog-post_text">Past Medication Record, Past doctor visit, Past Blood Test Results</p>
                            <a href="" className="blog-post_cta" >Read more</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PatientRecord;
import React, { Component } from 'react';
import video from './css/image/Human_Medical_Background_1_Videvo.mp4';
import SearchBox from './common/searchBox';
import Button from './common/button';
import './css/home.css';


class Home extends Component {
    state = { 
        searchQuery:"",
    };

    handleSearch=(query)=>{
        this.setState({
            searchQuery:query,
        });
    }
    handlePatient= (e)=>{
        e.preventDefault();
        this.props.history.push("/patient");
    }


    handleClick=(e)=>{
        e.preventDefault();
        const {searchQuery} = this.state;
        this.props.history.push("/patient?"+searchQuery);
    }


    render() { 
        return ( 
           <div className="v-header container-home">
               <div className="fullscreen-video-wrap">
                    <video autoPlay loop>
                        <source src={video} type="video/mp4"></source>
                    </video>
               </div>
               <div className="header-overlay"></div>
                <div className="header-content">
                    <p id="p">Platform that makes patient a true <br/> master of their medical data</p>
                    <SearchBox className="border"
                        onChange={this.handleSearch}
                        value = {this.state.searchQuery}
                    />
                    
                    <Button className="button"
                        onChange = {this.handleClick}
                        label = "Search" 
                    />
                    <Button 
                        onChange = {this.handlePatient}
                        label = "Get All Patient"
                    />
                </div>
            </div>
           
         );
    }
}
 
export default Home;
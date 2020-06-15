import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
    state = {
        data:[],
      }
   
    async serverCall(){
        const {entry : data} = await axios.get("http://localhost:8888/Patient", {
            auth: {
                username: 'root',
                password: 'secret',
              }
            });
        
            this.setState({
                data:data
            });
            return this.state.data;
    }

    
    
}
 
export default Search;
import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import Table from './common/table';
import Pagination from './common/pagination';
import { paginate } from '../util/paginate';
import './css/patient.css';
class Patient extends Component {

    state = {
        data: [],              // state variable to store the fetched data
        pageSize: 4,            // for Pagination 
        currentPage: 1          // for pagination
    };

    // async call to server using axios 
    async componentDidMount() {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")

        console.log(data);
        this.setState({
            data: data
        });
    }

    handlePagination = (page) => {
        this.setState({
            currentPage: page
        });
    }

    renderHeading() {
        return (
            <h1 className="page-head">List of all the patients</h1>
        );
    }

    render() {
        const { pageSize, currentPage } = this.state;
        console.log(this.state.data.length)
        if (this.state.data.length === 0)
            return <h4 className="head">There are no movies in the Database</h4>

        const data = paginate(this.state.data, currentPage, pageSize);
        console.log(data);
        return (
            <div className="table-container">
                <div className=" top-sec">
                    <div className="col-4">

                        {this.renderHeading()}
                    </div>
                    <div className="col-3">

                        <Pagination className="pagination"
                            count={this.state.data.length}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onClick={this.handlePagination}
                        />
                    </div>
                </div>
                <Table
                    className="table table-hover"
                    data={data}
                />

            </div>
        );
    }
}

export default Patient;

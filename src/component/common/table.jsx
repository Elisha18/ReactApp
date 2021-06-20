import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
const Table = (props) => {
    const { data } = props;
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Patient's Id</th>
                    <th>Patient's Name</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr>
                        <td>{item.id}</td>
                        <td><Link to={`/patient/${item.id}`}>{item.name}</Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
// _.get(item, "resource.name[0].given", "[Name Unknown]")
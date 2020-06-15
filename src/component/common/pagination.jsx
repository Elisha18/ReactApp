import React, { Component } from 'react';
import _ from 'lodash';
import '../css/pagination.css';
const Pagination = (props) => {

    const {count,pageSize,currentPage,onClick} = props;
    const pageCount = Math.ceil(count/pageSize);
    const pages = _.range(1,pageCount+1);
    if(pageCount===1){
        return null;
    }

    return (
        <nav className="page-nav">
            <ul className="pagination">
                {pages.map(page=>(
                    <li key={page} className={page===currentPage ? 'page-item active' : 'page-item'}>
                        <a className="page-link" onClick ={()=>onClick(page)}>{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
      );
}
 
export default Pagination;
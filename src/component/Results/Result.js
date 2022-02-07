import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getLocalStorage } from './../../services/localstorage-data.service';

//Result component
export class Result extends Component {

    constructor() {
        super();
        this.state = {
            list: getLocalStorage() 
        };
    }

    render() {
        return (
            <div className="container">
                <div>
                    <h3 className="thanks-description">Thanks for your submission!</h3>

                    <table className="table-result">
                        <thead>
                            <tr>
                                <th>
                                    URLs
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* The map method is taking the list from the overview page  */}
                            { 
                                this.state.list.map((item) => {
                                    const { id, title } = item;

                                    return (
                                        <tr key={id}>
                                            <th>
                                                <a href={title} target="_blank"> {title} </a>
                                            </th>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>

                    </table>
                    
                    <div className="back-overview-page">
                        <Link to="/">Back to Overview page</Link>
                    </div>
                </div>
            </div>
        )
    }

}
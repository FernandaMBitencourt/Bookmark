import React, { Component } from "react";
import ReactDOM from "react-dom";
import { FaEdit, FaTrash, } from "react-icons/fa";

//importing jquery library
const $ = require('jquery')

//importing datatable
$.DataTable = require('datatables.net')

//Table component
export class Tbl extends Component {

    componentDidMount() {
        this.renderTableComponent();
    }

    renderTableComponent = () => {

        //this.$el is a cached reference to the jQuery 
        this.$el = $(this.el);
        this.$el.DataTable(
            {
                dom: '<"data-table-wrapper"fltp>',
                data: this.props.data,
                pageLength: 20,
                lengthMenu: [20],
                ordering: false,
                columns: [
                    { title: 'URLs', data: "title" },
                    { title: 'Edit', data: "id" },
                    { title: 'Delete', data: "id" }
                ],
                columnDefs: [
                    {
                        targets: [0],
                        className: "center",
                        createdCell: (td, cellData, rowData) => ReactDOM.render(<a href={rowData.title} rel="noreferrer" target="_blank"> {rowData.title} </a>, td)
                    },
                    {
                        targets: [1],
                        width: 60,
                        className: "center",
                        createdCell: (td, cellData, rowData) => ReactDOM.render(
                            <button
                                type='button'
                                className='edit-btn'
                                id={rowData.id}
                                onClick={() => {
                                    this.props.editItem(rowData.id);
                                }}
                            > <FaEdit /> </button>, td)
                    },
                    {
                        targets: [2],
                        width: 60,
                        className: "center",
                        createdCell: (td, cellData, rowData) => ReactDOM.render(
                            <button
                                type='button'
                                className='delete-btn'
                                id={rowData.id}
                                onClick={() => {
                                    this.props.removeItem(rowData.id);
                                }}
                            > <FaTrash /> </button>, td)
                    }
                ]

            }
        );
    }

    render() {
        return (
            <div>
                <table className="display table-overview" ref={el => this.el = el} ></table>
            </div>
        )
    }

}

//function clean data inside the table and add list from the form   
export function resetTable(list) {
    const table = $('.data-table-wrapper').find('table').DataTable();
    table.clear();
    table.rows.add(list);
    table.draw();
}

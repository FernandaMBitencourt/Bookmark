import React, { Component } from "react";

import Alert from './../Alert/Alert';
import { Tbl, resetTable } from './../DataTable/Tbl';
import { validateURL, returnNewURLWithHttp } from './../../services/validate-url.service';
import { getLocalStorage, setLocalStorage } from './../../services/localstorage-data.service';

//Overview component
export class Overview extends Component {

    constructor() {
        super();

        this.state = {
            name: "",
            list: getLocalStorage(),
            isEditing: false,
            editID: null,
            alert: {}
        };
    }

    componentDidMount() {
        setLocalStorage(this.state.list);
    }

    componentDidUpdate() {
        setLocalStorage(this.state.list);
    }

    render() {
        /**
         * Function to submit the form 
         * 
         * @param {*} e - event prevent the page reload when the form made submission
         */
        const handleSubmit = (e) => {
            e.preventDefault();

            //Show alert if there is no content link in the entry
            if (!this.state.name) {
                showAlert(true, "danger", "Please enter value ");

            // Validate URL and show if the URL its not valid
            } else if (!validateURL(this.state.name)) {
                showAlert(true, "danger", "Please enter a valid URL");

            // Verify if is editing the URL 
            } else if (verifyIsEditing()) {
                addItemOrEditItemAndVerifyIfURLExist(true);

            } else {
                addItemOrEditItemAndVerifyIfURLExist(false);

            }
        }

        /**
         * The function to check if the URL and perform functions of editing or adding the URL exists and executing the parameter
         * 
         * @param {*} editItem - parameter to check which function to execute (edit or add item)
         */
        const addItemOrEditItemAndVerifyIfURLExist = (editItem) => {
            let newName = returnNewURLWithHttp(this.state.name);

            fetch(newName, {
                mode: 'no-cors'
            }).then(response => {

                if (editItem) {
                    editItemList(newName);
                } else {
                    addNewItemList(newName);
                }

            }).catch(error => {
                showAlert(true, "danger", "Please enter a exist URL");
            })
        }
        // Show the alert
        const showAlert = (show = false, type = "", msg = "") => {
            this.setState({ alert: { show, type, msg } });
        }
        /**
         * The function remove item from the list 
         * 
         * @param {*} id 
         */
        const removeItem = (id) => {
            showAlert(true, "danger", "URL removed")
            const newList = this.state.list.filter((item) => item.id !== id);
            this.setState({ list: newList });
            resetTable(newList);
        }
        
        /**
         * The function edit the item from the list 
         *  
         * @param {*} id - parameter to check if its the same id 
         */
        const editItem = (id) => {
            const editItem = this.state.list.find((item) => item.id === id);
            this.setState({
                isEditing: true,
                editID: id,
                name: editItem.title
            });
        }

        /**
         * The function verify if is editing
         * 
         */
        const verifyIsEditing = () => {
            if (this.state.name && this.state.isEditing) {
                return true;
            }
            return false;
        }

        /**
         * The function edit the item and on the list and navigate to the result pages
         * 
         * @param {*} name - parameter to be edit 
         */
        const editItemList = (name) => {
            const listEdited = this.state.list.map((item) => {
                if (item.id === this.state.editID) {
                    return { ...item, title: name }
                }
                return item;
            });
            this.setState({
                list: listEdited,
                name: "",
                editID: null,
                isEditing: false
            });
            resetTable(listEdited);
            showAlert(true, "success", "Updated url");
            navigateToResultPage();
        }

        /**
         * The function add new item into the list and navigate to the result pages
         * 
         * @param {*} name 
         */
        const addNewItemList = (name) => {
            showAlert(true, "success", "URL added to the List");
            const newItem = { id: new Date().getTime().toString(), title: name };
            this.state.list.unshift(newItem);
            const newListItem = [...this.state.list];
            this.setState({
                list: newListItem,
                name: ""
            });
            resetTable(newListItem);
            navigateToResultPage();
        }
        
        // The function make the navigation to the result pages
        const navigateToResultPage = () => {
            setTimeout(() => { this.props.navigate('/result'); }, 200);
        }

        return (
            <div className="container">
                <form onSubmit={handleSubmit}>
                    {this.state.alert.show && <Alert {...this.state.alert} removeAlert={showAlert} list={this.state.list} />}
                    <h3 style={{ marginBottom: "3rem", marginTop: "3rem", textAlign: "center" }}>
                        List of Links
                    </h3>

                    <div className="mb-3 form">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="e.g. URL"

                            onChange={(e) => this.setState({ name: e.target.value })}
                            value={this.state.name}
                        />
                        <button type="submit"
                            className="btn btn-success"
                        >
                            {this.state.isEditing ? "Edit" : "Submit"}
                        </button>
                    </div>
                </form>

                <Tbl data={this.state.list} editItem={editItem} removeItem={removeItem} />
            </div>
        )
    }

}
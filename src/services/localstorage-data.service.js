
/**
 * The function get from the localStorage 
 * @returns 
 */
export function getLocalStorage() {

    let list = localStorage.getItem("list");
    if (list) {
        return (list = JSON.parse(localStorage.getItem("list")));
    } else {
        return [];
    }
    
}

/**
 * The function store the list on the localStorage 
 * @returns 
 */
export function setLocalStorage(list) {
    localStorage.setItem("list", JSON.stringify(list));
}
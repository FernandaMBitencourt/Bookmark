
/**
 * function to verify if the URL it's valid 
 * 
 * @param {*} url 
 * @returns 
 */
export function validateURL(url) {

    var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var regex = new RegExp(expression);

    if (url.match(regex) === null) {
        return false;
    } else {
        return true;
    }

}

/**
 * function to return new URL string if there is no http:// at the beginning
 * 
 * @param {*} url - url parameter for http:// validation
 * @returns 
 */
export function returnNewURLWithHttp(url) {
    var newName = "";
    if (!validateURLInitWithHttp(url)) {
        newName = "http://" + url;
    } else {
        newName = url;
    }

    return newName;
}

/**
 * function to check if the URL starts without http://
 * 
 * @param {*} url 
 * @returns 
 */
function validateURLInitWithHttp(url) {
    var expression = /https?:\/\/(www\.)?/gi;
    var regex = new RegExp(expression);

    if (url.match(regex) === null) {
        return false;
    } else {
        return true;
    }

}
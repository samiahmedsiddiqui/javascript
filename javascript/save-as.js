/**
 * This function download the file which is provided in the parameter of this function. 
 * This function can be used in ajax complete or any click etc.
 *
 * Param: URL which needs to be downloaded
 */
function saveAs(uri) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.setAttribute('download', "example.pdf"); // Name by which File needs to be downloaded/saved
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}

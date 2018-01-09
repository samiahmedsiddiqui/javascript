/**
 * Check the provided object is empty or not
 * 
 * Returns false if the object is not empty otherwise returns true
 */
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

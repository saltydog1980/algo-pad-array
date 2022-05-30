// REMEMBER TO PSEUDOCODE
/*I want to first check if array already satisfies minsize requirements
if it meets minSize return array
else create a loop starting at array length and stoping minSize pushing
provided padded value
upon loop completion, return the modified array */
const pad = (array, minSize, value=null) => {
    //array to modify and return in the end
    const ansArray = array;
    //if array already >= min size returning array
    if (array.length >= minSize) {
        return array;
    //else looping starting at array length and stopping at min size pushing padded value to array
    } else {
        for (let i = array.length; i < minSize; i++) {
            ansArray.push(value);
        }
    }
    //returning the modified answer array
    return ansArray;
}

/*•	Write a function that removes all elements with a given value.
•	Attach it to the array type.
•	Read about prototype and how to attach methods.
•	var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
•	arr.remove(1); //arr = [2,4,3,4,111,3,2,'1'];*/


if (!Array.prototype.removeElements) {
    Array.prototype.removeElements = function (callback) {
        var len=this.length, i;
        for (i = 0; i < len; i+=1) {
            if (this[i] === arguments[0]) {
                this.splice(i, 1);
            }
        }
        return this;
    }
}

function removeElements() {
    var str, arr, removeEl;
    str = document.getElementById('input-text').value;
    arr = str.split(',').valueOf();
    removeEl = document.getElementById('input-text1').value;
    jsConsole.writeLine(arr.removeElements(removeEl).join(', '));
}











/*•	Write a JavaScript function that finds how many times a substring is contained 
 *  in a given text (perform case insensitive search).*/

function substringInText() {
    var str, targetSubstr, count, i, len, len1, res;
    str = document.getElementById('input-text').value;
    targetSubstr = document.getElementById('input-text1').value;
    len = str.length;
    len1 = targetSubstr.length;
    
    for (i = 0, count = 0; i < len; i += 1) {
        str = str.toLowerCase();
        targetSubstr = targetSubstr.toLowerCase();
        res = str.indexOf(targetSubstr, i);
        if(res !== -1){
            count+=1;
            i=res+len1-1;
        } else {
            break;
        }
    }
    if (count) {
        jsConsole.writeLine(count);
    } else {
        count = '-1';
        jsConsole.writeLine(count);
    }

    return count;
}
/*•	Write a function for extracting all email addresses from given text.
•	All sub-strings that match the format @… should be recognized as emails.
•	Return the emails as array of strings.*/

function extractEMails() {
    var text, inputArr, result = [], i;

    text = document.getElementById('input-text').value;
    inputArr = text.split(' ');
    len = inputArr.length;
    regExpMail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    for (i = 0; i < len; i+=1) {
        if (regExpMail.test(inputArr[i])) {
            result.push(inputArr[i]);
        }
    }

    console.log('['+result.join(',\n')+']');
    return result;

}





/*•	Write a JavaScript function that replaces in a HTML document given as string all the tags <a href="…">…</a> with corresponding tags [URL=…]…/URL].*/


function replaceTags() {
    var text, text1, text2, text3;

    text = document.getElementById('input-text').value;
    text1 = text.replace(/<a href="/g, '[URL=');
    text2 = text1.replace(/<\/a>/g, '[/URL]');
    text3 = text2.replace(/">/g, ']');
    //jsConsole.writeLine(text3);
    console.log(text3);
    return text3;

}
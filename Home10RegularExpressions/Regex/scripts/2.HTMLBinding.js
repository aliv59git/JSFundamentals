/*•	Write a function that puts the value of an object into the content/attributes of HTML tags.
o	Add the function to the String.prototype*/


if (!String.hasOwnProperty('bind')) {
    String.prototype.bind = function (params) {
        var result;

        result = this.replace(/ data-bind-content="(.*?)".*?>/g,
			function (match, bindName) {
			    return match + params[bindName];
			});

        result = result.replace(/ data-bind-(.*?)="(.*?)"/g,
			function (match, bindType, bindName) {
			    if (bindType === 'content') {
			        return match;
			    } else {
			        return match + ' ' + bindType + '="' + params[bindName] + '"';
			    }
			});

        return result;
    }
}

var str = '<div data-bind-content="name"></div>\n<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>';
str = str.bind({
    name: 'Pesho',
    link: 'http://telerikacademy.com'
});
console.log(str);
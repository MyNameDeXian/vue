var util = {
	width: 	window.innerWidth,
	height: window.innerHeight,
}

// 以480屏为标准，设置根元素fontSize 为 100px
// var fontSize = util.width/480 * 100;
var html = document.querySelector('html');
var width = util.width/480 * 100;
var height = util.height/768 * 100;
var fontSize = (width + height)/2;
html.style.fontSize = fontSize + 'px';


document.body.style.fontSize = '16px';

var fs = window.getComputedStyle(html).fontSize;


var util = {
	width: window.innerWidth,
	height: window.innerHeight
}
// 设置body为默认的 fontSize
var body = document.body
var fz = getComputedStyle(body).fontSize;
body.style.fontSize = fz;

// 以宽480px，高768px屏为标准设 1rem = 100px; 方便于计算 so easy you say ne!
var width = util.width/480 * 100;
var height = util.height/768 * 100;
var fontSize = (width + height) / 2;
var html = document.querySelector('html');
html.style.fontSize = fontSize + 'px';



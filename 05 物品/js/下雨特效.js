const boxR = document.getElementById('rainBox');
let boxHeight = boxR.clientHeight;
let boxWidth = boxR.clientWidth;
// 页面大小变化时，改变盒子大小
window.onresize =  function() {
    boxHeight = boxR.clientHeight;
    boxWidth = boxR.clientWidth;
}
// 每隔一段时间,添加雨滴
var timebar = setInterval(function() {
    const rain = document.createElement('div');
    rain.classList.add('rain');
    rain.style.top = 0;
    // 随机刷新雨点位置
    rain.style.left = Math.random() * boxWidth + 'px';
    // 随机雨点透明度 -> 远近
    rain.style.opacity = Math.random();
    boxR.appendChild(rain);
    // 每隔一段时间，雨水下落
    let race = 1;
    const timer = setInterval(function() {
        if(parseInt(rain.style.top) > boxHeight) {
            clearInterval(timer);
            box.removeChild(rain);
        }
        race ++;
        rain.style.top = parseInt(rain.style.top) + race + 'px';
    },20);
},50);
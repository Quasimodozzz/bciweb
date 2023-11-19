window.onload = function () {
    function pushPicture(obj, initialPosition, targetPosition, size) {
        obj.onmousedown = function (ev) {
            var disX = ev.clientX - obj.offsetLeft;                  //计算X轴，div盒子左边框与鼠标之间的距离
            var disY = ev.clientY - obj.offsetTop;
            var in_position = false;
            obj.style.height = 100 + size + "px"
            obj.style.width = 100 + size + "px"

            //计算X轴，浏览器左边窗口与div盒子左边边框的距离
            //计算Y轴，div盒子上边框与鼠标之间的距离   


            document.onmousemove = function (ev) {
                var l = ev.clientX - disX;                               //计算X轴，浏览器左边窗口与div盒子左边边框的距离
                var t = ev.clientY - disY;                              //计算Y轴，浏览器上边窗口与div盒子上边边框的距离
                if (l > targetPosition[0] - 50 && l < targetPosition[0] + 50 && t > targetPosition[1] - 50 && t < targetPosition[1] + 50) {
                    in_position = true;
                }
                else {
                    in_position = false;
                }

                obj.style.left = l + "px";
                obj.style.top = t + "px";
            };
            document.onmouseup = function () {
                document.onmousemove = null;
                if (in_position) {
                    obj.style.left = targetPosition[0] + "px";
                    obj.style.top = targetPosition[1] + "px";
                    flag++
                    if (flag === 2) {
                        btns[1].style.display = 'block'
                    }
                    obj.onmousedown = null
                    document.onmouseup = null
                }
                else {
                    obj.style.left = initialPosition[0] + "px";
                    obj.style.top = initialPosition[1] + "px";
                    obj.style.height = 100 + "px"
                    obj.style.width = 100 + "px"
                }


            };

            return false;                     //阻止默认事件的发生       
        };
    }

    //buttons交互
    var btns = document.querySelector('.buttons').querySelectorAll('button')
    var flag = 0
    var amplifier = document.querySelector(".amplifier").querySelector('img');
    var eeg_Cab = document.querySelector('.EEG_Cab').querySelector('img')
    pushPicture(amplifier, [350, 0], [680, 535], -50)
    pushPicture(eeg_Cab, [500, 0], [362, 382], 50)
    btns[0].addEventListener('click', slipping)
    btns[1].addEventListener('click', function () {
        this.style.display = 'none'
        btns[2].style.display = 'block'
        drawLine([480, 450], [690, 550])
    })
    btns[2].addEventListener('click', show)

    function show() {

        drawLine([690, 550], [1130, 580])
        this.style.display = 'none'
        var btn = document.querySelector('.showResult').querySelector('.btn4')
        btn.style.display = 'block'
        btn.onclick = function () {
            this.style.display = 'none'
            var bar = document.querySelector('.bar')
            var openSoftware = document.querySelector('.showResult .openSoftware')
            openSoftware.style.display = 'block'
            btns[0].style.display = 'block'
            bar.style.display = 'block'
        }

    }


    function slipping() {

        var slip = document.querySelector('.bar').querySelector('.slip')
        var target = 30
        clearInterval(slip.timer)

        slip.timer = setInterval(() => {
            if (slip.offsetTop <= 210) {
                slip.style.top = slip.offsetTop + 1 + 'px'
                target--
                if (target === 0) {
                    clearInterval(slip.timer)
                }
            }
            else {
                clearInterval(slip.timer)
                this.style.display = 'none'
                var btns = document.querySelectorAll('.showResult button')
                var startCollection = document.querySelector('.showResult .startCollection')
                btns[0].style.display = 'none'
                btns[1].style.display = 'block'
                btns[1].addEventListener('click', showWave)
                startCollection.style.display = 'block'

            }
        }, 30)
    }

    function showWave() {
        this.style.display = 'none'
        var wave = document.querySelector('.showResult .wave')
        wave.style.display = 'block'
    }

    function drawLine(begin, target) {
        var ctx = document.getElementById('cvs').getContext('2d');
        ctx.beginPath();
        ctx.moveTo(begin[0], begin[1]);
        ctx.lineTo(target[0], target[1]);
        ctx.lineWidth = 5
        ctx.stroke();
    }
}

function raw(){
    $.ajax({
        type: "get",
        url: "/raw",
        success: function(data) {

            var y1 = data[0];var y2 = data[1];var y3 = data[2];var y4 = data[3];
            var y5 = data[4];var y6 = data[5];var y7 = data[6];var y8 = data[7];
            var yn = 0;
            var arrPoint = []; // 用于保存已经波形图的轨迹点
            var x_base = 0; // 我们要画的波形图的最后一个点的x坐标
            var y_base1 = y1[0];var y_base2 = y2[0];var y_base3 = y3[0];var y_base4 = y4[0];
            var y_base5 = y5[0];var y_base6 = y6[0];var y_base7 = y7[0];var y_base8 = y8[0];// 我们要画的波形图的最后一个点的y坐标
            var step = 0.1; // x轴每次走的步长
            (function (){
                // 首先让我们的函数周期调用
                var itv = setInterval(function(){
                    // 获取canvas对象和context,并进行一系列初始化
                    var canvas = document.getElementById("canvas");
                    var context = canvas.getContext("2d");
                    canvas.width += 1;
                    console.log(canvas.width)
                    context.strokeStyle = "rgb(102,0,255)";
                    context.lineWidth=0.005;



                    // 向数组中添加数据,将我们每一次目标到达的终点坐标添加到数组中.这里我设置的条件是,保证数组大小不会超过我的画布宽度除以step个
                    // 目的是针对画布定的,就是每一次我只画画布这么大小的图
                    var obj = {};
                    obj.x = x_base;
                    obj.y1 = y_base1;obj.y2 = y_base2;obj.y3= y_base3;obj.y4 = y_base4;
                    obj.y5 = y_base5;obj.y6 = y_base6;obj.y7 = y_base7;obj.y8 = y_base8;
                    arrPoint.push(obj);//末尾添加一个

                    context.beginPath();
                    context.moveTo(0,10);
                    context.lineTo(100,10);
                    context.lineTo(100,110);
                    context.lineTo(100,0);
                    context.stroke();
                    context.closePath();



                    context.beginPath();
                    for(var i1 = 0; i1 < arrPoint.length; i1++){
                        context.lineTo(arrPoint[i1].x,50-(arrPoint[i1].y1)/2);
                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i2 = 0; i2 < arrPoint.length; i2++){
                        context.lineTo(arrPoint[i2].x,100-(arrPoint[i2].y2)/2);
                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i3 = 0; i3 < arrPoint.length; i3++){
                        context.lineTo(arrPoint[i3].x,150-(arrPoint[i3].y3)/2);
                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i4= 0; i4 < arrPoint.length; i4++){
                        context.lineTo(arrPoint[i4].x,200-(arrPoint[i4].y4)/2);
                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i5 = 0; i5 < arrPoint.length; i5++){
                        context.lineTo(arrPoint[i5].x,250-(arrPoint[i5].y5)/2);
                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i6 = 0; i6 < arrPoint.length; i6++){
                        context.lineTo(arrPoint[i6].x,300-(arrPoint[i6].y6)/2);
                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i7 = 0; i7 < arrPoint.length; i7++){
                        context.lineTo(arrPoint[i7].x,350-(arrPoint[i7].y7)/2);

                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i8 = 0; i8 < arrPoint.length; i8++){
                        context.lineTo(arrPoint[i8].x,400-(arrPoint[i8].y8)/2);
                    }
                    context.stroke();
                    context.closePath();



                    // 这时候已经花完了,现在要算一算我们的下一个目标点的坐标了,算完了以后,保存在一个全局变量中
                    // 等待下次再执行画图函数时,将变量添加到数组中,让canvas画图使用
                    x_base += step;
                    yn+=1;
                    y_base1 = y1[yn];y_base2 = y2[yn];y_base3 = y3[yn];y_base4 = y4[yn];
                    y_base5 = y5[yn];y_base6 = y6[yn];y_base7 = y7[yn];y_base8 = y8[yn];

                },10)
            })()
        }
    })
}

function artifact(){
    $.ajax({
        type: "get",
        url: "/artifact",
        success: function(data) {

            var y1 = data[0];var y2 = data[1];var y3 = data[2];var y4 = data[3];
            var y5 = data[4];var y6 = data[5];var y7 = data[6];var y8 = data[7];
            var yn = 0;
            var arrPoint = []; // 用于保存已经波形图的轨迹点
            var x_base = 0; // 我们要画的波形图的最后一个点的x坐标
            var y_base1 = y1[0];var y_base2 = y2[0];var y_base3 = y3[0];var y_base4 = y4[0];
            var y_base5 = y5[0];var y_base6 = y6[0];var y_base7 = y7[0];var y_base8 = y8[0];// 我们要画的波形图的最后一个点的y坐标
            var step = 0.1; // x轴每次走的步长
            (function (){
                // 首先让我们的函数周期调用
                var itv = setInterval(function(){
                    // 获取canvas对象和context,并进行一系列初始化
                    var canvas = document.getElementById("canvas");
                    var context = canvas.getContext("2d");
                    context.clearRect(0,0,540,500);
                    context.strokeStyle = "rgb(102,0,255)";
                    context.lineWidth=0.005;


                    // 向数组中添加数据,将我们每一次目标到达的终点坐标添加到数组中.这里我设置的条件是,保证数组大小不会超过我的画布宽度除以step个
                    // 目的是针对画布定的,就是每一次我只画画布这么大小的图
                    var obj = {};
                    obj.x = x_base;
                    obj.y1 = y_base1;obj.y2 = y_base2;obj.y3= y_base3;obj.y4 = y_base4;
                    obj.y5 = y_base5;obj.y6 = y_base6;obj.y7 = y_base7;obj.y8 = y_base8;
                    arrPoint.push(obj);//末尾添加一个

                    context.beginPath();
                    context.moveTo(0,10);
                    context.lineTo(100,10);
                    context.lineTo(100,110);
                    context.lineTo(100,0);
                    context.stroke();
                    context.closePath();



                    context.beginPath();
                    for(var i1 = 0; i1 < arrPoint.length; i1++){
                        context.lineTo(arrPoint[i1].x,50-(arrPoint[i1].y1)/2);
                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i2 = 0; i2 < arrPoint.length; i2++){
                        context.lineTo(arrPoint[i2].x,100-(arrPoint[i2].y2)/2);
                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i3 = 0; i3 < arrPoint.length; i3++){
                        context.lineTo(arrPoint[i3].x,150-(arrPoint[i3].y3)/2);
                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i4= 0; i4 < arrPoint.length; i4++){
                        context.lineTo(arrPoint[i4].x,200-(arrPoint[i4].y4)/2);
                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i5 = 0; i5 < arrPoint.length; i5++){
                        context.lineTo(arrPoint[i5].x,250-(arrPoint[i5].y5)/2);
                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i6 = 0; i6 < arrPoint.length; i6++){
                        context.lineTo(arrPoint[i6].x,300-(arrPoint[i6].y6)/2);
                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i7 = 0; i7 < arrPoint.length; i7++){
                        context.lineTo(arrPoint[i7].x,350-(arrPoint[i7].y7)/2);

                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i8 = 0; i8 < arrPoint.length; i8++){
                        context.lineTo(arrPoint[i8].x,400-(arrPoint[i8].y8)/2);
                    }
                    context.stroke();
                    context.closePath();



                    // 这时候已经花完了,现在要算一算我们的下一个目标点的坐标了,算完了以后,保存在一个全局变量中
                    // 等待下次再执行画图函数时,将变量添加到数组中,让canvas画图使用
                    x_base += step;
                    yn+=1;
                    y_base1 = y1[yn];y_base2 = y2[yn];y_base3 = y3[yn];y_base4 = y4[yn];
                    y_base5 = y5[yn];y_base6 = y6[yn];y_base7 = y7[yn];y_base8 = y8[yn];

                },10)
            })()
        }
    })
}

function baseline(){
    $.ajax({
        type: "get",
        url: "/baseline",
        success: function(data) {
            var y1 = data[0];var y2 = data[1];var y3 = data[2];var y4 = data[3];
            var y5 = data[4];var y6 = data[5];var y7 = data[6];var y8 = data[7];
            var yn = 0;
            var arrPoint = []; // 用于保存已经波形图的轨迹点
            var x_base = 0; // 我们要画的波形图的最后一个点的x坐标
            var y_base1 = y1[0];var y_base2 = y2[0];var y_base3 = y3[0];var y_base4 = y4[0];
            var y_base5 = y5[0];var y_base6 = y6[0];var y_base7 = y7[0];var y_base8 = y8[0];// 我们要画的波形图的最后一个点的y坐标
            var step = 0.1; // x轴每次走的步长
            (function (){
                // 首先让我们的函数周期调用
                var itv = setInterval(function(){
                    // 获取canvas对象和context,并进行一系列初始化
                    var canvas = document.getElementById("canvas");
                    var context = canvas.getContext("2d");
                    context.strokeStyle = "rgb(102,0,255)";
                    context.lineWidth=0.005;


                    // 向数组中添加数据,将我们每一次目标到达的终点坐标添加到数组中.这里我设置的条件是,保证数组大小不会超过我的画布宽度除以step个
                    // 目的是针对画布定的,就是每一次我只画画布这么大小的图
                    var obj = {};
                    obj.x = x_base;
                    obj.y1 = y_base1;obj.y2 = y_base2;obj.y3= y_base3;obj.y4 = y_base4;
                    obj.y5 = y_base5;obj.y6 = y_base6;obj.y7 = y_base7;obj.y8 = y_base8;
                    arrPoint.push(obj);//末尾添加一个

                    context.beginPath();
                    context.moveTo(0,10);
                    context.lineTo(100,10);
                    context.lineTo(100,110);
                    context.lineTo(100,0);
                    context.stroke();
                    context.closePath();



                    context.beginPath();
                    for(var i1 = 0; i1 < arrPoint.length; i1++){
                        context.lineTo(arrPoint[i1].x,50-(arrPoint[i1].y1)/2);
                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i2 = 0; i2 < arrPoint.length; i2++){
                        context.lineTo(arrPoint[i2].x,100-(arrPoint[i2].y2)/2);
                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i3 = 0; i3 < arrPoint.length; i3++){
                        context.lineTo(arrPoint[i3].x,150-(arrPoint[i3].y3)/2);
                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i4= 0; i4 < arrPoint.length; i4++){
                        context.lineTo(arrPoint[i4].x,200-(arrPoint[i4].y4)/2);
                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i5 = 0; i5 < arrPoint.length; i5++){
                        context.lineTo(arrPoint[i5].x,250-(arrPoint[i5].y5)/2);
                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i6 = 0; i6 < arrPoint.length; i6++){
                        context.lineTo(arrPoint[i6].x,300-(arrPoint[i6].y6)/2);
                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i7 = 0; i7 < arrPoint.length; i7++){
                        context.lineTo(arrPoint[i7].x,350-(arrPoint[i7].y7)/2);

                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i8 = 0; i8 < arrPoint.length; i8++){
                        context.lineTo(arrPoint[i8].x,400-(arrPoint[i8].y8)/2);
                    }
                    context.stroke();
                    context.closePath();



                    // 这时候已经花完了,现在要算一算我们的下一个目标点的坐标了,算完了以后,保存在一个全局变量中
                    // 等待下次再执行画图函数时,将变量添加到数组中,让canvas画图使用
                    x_base += step;
                    yn+=1;
                    y_base1 = y1[yn];y_base2 = y2[yn];y_base3 = y3[yn];y_base4 = y4[yn];
                    y_base5 = y5[yn];y_base6 = y6[yn];y_base7 = y7[yn];y_base8 = y8[yn];

                },10)
            })()
        }
    })
}

function filter(){
    $.ajax({
        type: "get",
        url: "/filter",
        success: function(data) {

            var y1 = data[0];var y2 = data[1];var y3 = data[2];var y4 = data[3];
            var y5 = data[4];var y6 = data[5];var y7 = data[6];var y8 = data[7];
            var yn = 0;
            var arrPoint = []; // 用于保存已经波形图的轨迹点
            var x_base = 0; // 我们要画的波形图的最后一个点的x坐标
            var y_base1 = y1[0];var y_base2 = y2[0];var y_base3 = y3[0];var y_base4 = y4[0];
            var y_base5 = y5[0];var y_base6 = y6[0];var y_base7 = y7[0];var y_base8 = y8[0];// 我们要画的波形图的最后一个点的y坐标
            var step = 0.1; // x轴每次走的步长
            (function (){
                // 首先让我们的函数周期调用
                var itv = setInterval(function(){
                    // 获取canvas对象和context,并进行一系列初始化
                    var canvas = document.getElementById("canvas");
                    var context = canvas.getContext("2d");
                    context.strokeStyle = "rgb(102,0,255)";
                    context.lineWidth=0.008;


                    // 向数组中添加数据,将我们每一次目标到达的终点坐标添加到数组中.这里我设置的条件是,保证数组大小不会超过我的画布宽度除以step个
                    // 目的是针对画布定的,就是每一次我只画画布这么大小的图
                    var obj = {};
                    obj.x = x_base;
                    obj.y1 = y_base1;obj.y2 = y_base2;obj.y3= y_base3;obj.y4 = y_base4;
                    obj.y5 = y_base5;obj.y6 = y_base6;obj.y7 = y_base7;obj.y8 = y_base8;
                    arrPoint.push(obj);//末尾添加一个

                    // context.beginPath();
                    // context.moveTo(0,10);
                    // context.lineTo(100,10);
                    // context.lineTo(100,110);
                    // context.lineTo(100,0);
                    // context.stroke();
                    // context.closePath();



                    context.beginPath();
                    for(var i1 = 0; i1 < arrPoint.length; i1++){
                        context.lineTo(arrPoint[i1].x,50-(arrPoint[i1].y1)/2);
                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i2 = 0; i2 < arrPoint.length; i2++){
                        context.lineTo(arrPoint[i2].x,100-(arrPoint[i2].y2)/2);
                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i3 = 0; i3 < arrPoint.length; i3++){
                        context.lineTo(arrPoint[i3].x,150-(arrPoint[i3].y3)/2);
                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i4= 0; i4 < arrPoint.length; i4++){
                        context.lineTo(arrPoint[i4].x,200-(arrPoint[i4].y4)/2);
                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i5 = 0; i5 < arrPoint.length; i5++){
                        context.lineTo(arrPoint[i5].x,250-(arrPoint[i5].y5)/2);
                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i6 = 0; i6 < arrPoint.length; i6++){
                        context.lineTo(arrPoint[i6].x,300-(arrPoint[i6].y6)/2);
                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i7 = 0; i7 < arrPoint.length; i7++){
                        context.lineTo(arrPoint[i7].x,350-(arrPoint[i7].y7)/2);

                    }
                    context.stroke();
                    context.closePath();

                    context.beginPath();
                    for(var i8 = 0; i8 < arrPoint.length; i8++){
                        context.lineTo(arrPoint[i8].x,400-(arrPoint[i8].y8)/2);
                    }
                    context.stroke();
                    context.closePath();



                    // 这时候已经花完了,要算下一个目标点的坐标,算完以后,保存在一个全局变量中
                    // 等待下次再执行画图函数时,将变量添加到数组中,让canvas画图使用
                    x_base += step;
                    yn+=1;
                    y_base1 = y1[yn];y_base2 = y2[yn];y_base3 = y3[yn];y_base4 = y4[yn];
                    y_base5 = y5[yn];y_base6 = y6[yn];y_base7 = y7[yn];y_base8 = y8[yn];

                },10)
            })()
        }
    })
}
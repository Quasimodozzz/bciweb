function rawdata(){
    $.ajax({
        type: "get",
        url: "/raw",
        success: function(data) {

            var y1 = data[0];
            var yn = 0;
            var arrPoint = []; // 用于保存已经波形图的轨迹点
            var x_base = 0; // 我们要画的波形图的最后一个点的x坐标
            var y_base1 = y1[0];// 我们要画的波形图的最后一个点的y坐标
            var step = 0.1; // x轴每次走的步长
            var width=360; // 这个是画布宽度
            var height=200; // 这个是画图高度
            (function (){

                // 首先让我们的函数周期调用
                var itv = setInterval(function(){
                    // 获取canvas对象和context,并进行一系列初始化
                    var canvas = document.getElementById("canvas");
                    var context = canvas.getContext("2d");
                    context.strokeStyle = "rgb(255,0,0)";
                    context.fileStyle = "rgb(255,0,0)";
                    context.lineWidth=0.005;

                    // 画图之前首先清理一下我们的画布,四个参数.
                    // 1.坐标原点x
                    // 2.坐标原点y
                    // 3.要清理的宽度(这里宽度用的x_base是因为canvas画布的原点不断向左移动，变相的等于画布不断变宽
                    //   之所以减一个step是需要看下文,因为在下文中,x_base每一次都会增加一个step,而我们在清理画布的时候,
                    //   我们的画布原点还没有被移动,相当于我们在清除画布时,我们的画布宽度还没有增加,所以要减一个step,当然不减也可以,没事儿)
                    // 4.画布高度
                    context.clearRect(0,0,width,height);
                    // if(x_base > width){
                    //     console.log("clear" + index);
                    //     index++;
                    //     // 画布原点x轴向左移动一个step的位置
                    //     context.translate(step*-1,0);
                    // }

                    // 向数组中添加数据,将我们每一次目标到达的终点坐标添加到数组中.这里我设置的条件是,保证数组大小不会超过我的画布宽度除以step个
                    // 目的是针对画布定的,就是每一次我只画画布这么大小的图
                    var obj = {};
                    obj.x = x_base;
                    obj.y1 = y_base1;
                    // if(arrPoint.length>(width/step)){
                    //     arrPoint.splice(0,1);//删除第一个
                    //     console.log(arrPoint);
                    // }
                    arrPoint.push(obj);//末尾添加一个

                    // 开始画了,在画之前先将所有的图形都画出来
                    context.beginPath();
                    for(var i = 0; i < arrPoint.length; i++){
                        context.lineTo(arrPoint[i].x,250-arrPoint[i].y1);
                        // context.lineTo(arrPoint[i].x,100-arrPoint[i].y2);
                        // context.lineTo(arrPoint[i].x,170-arrPoint[i].y3);
                        // context.lineTo(arrPoint[i].x,240-arrPoint[i].y4);
                        // context.lineTo(arrPoint[i].x,310-arrPoint[i].y5);
                        // context.lineTo(arrPoint[i].x,380-arrPoint[i].y6);
                        // context.lineTo(arrPoint[i].x,450-arrPoint[i].y7);
                        // context.lineTo(arrPoint[i].x,520-arrPoint[i].y8);

                    }

                    // 再一次性将所有图形呈现在html上
                    context.stroke();
                    context.closePath();

                    // OK,这时候已经花完了,现在要算一算我们的下一个目标点的坐标了,算完了以后,保存在一个全局变量中
                    // 等待下次再执行画图函数时,将变量添加到数组中,让canvas画图使用
                    x_base += step;
                    yn+=1;
                    y_base1 = y1[yn];
                },10)
            })()



        }
    })
}


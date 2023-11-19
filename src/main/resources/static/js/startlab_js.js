function lab_fanshi()
{
    document.getElementById("content_title_result").innerText="实验范式";
    document.getElementById("content").style.display="block";
    document.getElementById("content_lab_fanshi").style.display="block";
    document.getElementById("content_lab_xinhao").style.display="none";
    document.getElementById("content_lab_yuchuli").style.display="none";
    document.getElementById("content_lab_tezheng").style.display="none";
    document.getElementById("content_lab_fenlei").style.display="none";
    document.getElementById("content_lab_result").style.display="none";
    var video = document.getElementById('lab_fanshi_video');
    video.pause()  //视频暂停
    video.currentTime=0  // 视频播放时长归零
}
function lab_xinhao()
{
    document.getElementById("content_title_result").innerText="信号采集";
    document.getElementById("content").style.display="block";
    document.getElementById("content_lab_fanshi").style.display="none";
    document.getElementById("content_lab_xinhao").style.display="block";
    document.getElementById("content_lab_yuchuli").style.display="none";
    document.getElementById("content_lab_tezheng").style.display="none";
    document.getElementById("content_lab_fenlei").style.display="none";
    document.getElementById("content_lab_result").style.display="none";
}
var i=0;
function lab_yuchuli()
{
    document.getElementById("content_title_result").innerText="预处理";
    document.getElementById("content").style.display="block";
    document.getElementById("content_lab_fanshi").style.display="none";
    document.getElementById("content_lab_xinhao").style.display="none";
    document.getElementById("content_lab_yuchuli").style.display="block";
    document.getElementById("content_lab_tezheng").style.display="none";
    document.getElementById("content_lab_fenlei").style.display="none";
    document.getElementById("content_lab_result").style.display="none";
    i=0;
    document.getElementById("lab_yuchuli_img_1").style.display="none";
    document.getElementById("lab_yuchuli_img_2").style.display="none";
    document.getElementById("lab_yuchuli_img_3").style.display="none";
    document.getElementById("middle_1").style.backgroundColor="rgb(230, 230, 230)";
    document.getElementById("middle_2").style.backgroundColor="rgb(230, 230, 230)";
    document.getElementById("middle_3").style.backgroundColor="rgb(230, 230, 230)";
}

function changeimg()
{
    i++;
    console.log(i);
    if(i==1){
        document.getElementById("middle_1").style.backgroundColor="rgb(50, 130, 200)";
        document.getElementById("lab_yuchuli_img_1").style.display="block";
    }
    else if(i==2){
        document.getElementById("middle_2").style.backgroundColor="rgb(50, 130, 200)";
        document.getElementById("lab_yuchuli_img_1").style.display="none";
        document.getElementById("lab_yuchuli_img_2").style.display="block";
}
    else if(i==3){
        document.getElementById("middle_3").style.backgroundColor="rgb(50, 130, 200)";
        document.getElementById("lab_yuchuli_img_2").style.display="none";
        document.getElementById("lab_yuchuli_img_3").style.display="block";
    }
}
function lab_tezheng()
{
    document.getElementById("content_title_result").innerText="特征提取";
    document.getElementById("content").style.display="block";
    document.getElementById("content_lab_fanshi").style.display="none";
    document.getElementById("content_lab_xinhao").style.display="none";
    document.getElementById("content_lab_yuchuli").style.display="none";
    document.getElementById("content_lab_tezheng").style.display="block";
    document.getElementById("content_lab_fenlei").style.display="none";
    document.getElementById("content_lab_result").style.display="none";
}
function lab_fenlei()
{
    document.getElementById("content_title_result").innerText="特征分类";
    document.getElementById("content").style.display="block";
    document.getElementById("content_lab_fanshi").style.display="none";
    document.getElementById("content_lab_xinhao").style.display="none";
    document.getElementById("content_lab_yuchuli").style.display="none";
    document.getElementById("content_lab_tezheng").style.display="none";
    document.getElementById("content_lab_fenlei").style.display="block";
    document.getElementById("content_lab_result").style.display="none";
}
function lab_result()
{
    document.getElementById("content_title_result").innerText="实验结果";
    document.getElementById("content").style.display="block";
    document.getElementById("content_lab_fanshi").style.display="none";
    document.getElementById("content_lab_xinhao").style.display="none";
    document.getElementById("content_lab_yuchuli").style.display="none";
    document.getElementById("content_lab_tezheng").style.display="none";
    document.getElementById("content_lab_fenlei").style.display="none";
    document.getElementById("content_lab_result").style.display="block";
}


function lab_report()
{
    document.getElementById("report").style.display="block";
    document.getElementById("home").style.opacity='0.3';
    document.getElementById("report_write").style.display="block";
    document.getElementById("report_history").style.display="none";
}
function report_exit()
{
    document.getElementById("report").style.display="none";
    document.getElementById("home").style.opacity="1.0";
}
function report_write()
{
    document.getElementById("report_write").style.display="block";
    document.getElementById("report_history").style.display="none";
}
function report_history()
{
    document.getElementById("report_write").style.display="none";
    document.getElementById("report_history").style.display="block";
    var report_data;
    $.ajax({
        type:"GET",
        url:"http://localhost:3000/report",
        dataType:"json",
        success:function (data) {
            report_data=data;
            console.log(report_data, '请求成功')
            var tableHtml = "";
            for(var i=0;i<report_data.length;i++){
                tableHtml += "<tr>";
                tableHtml +=    "<td>"+ report_data[i]['id'] +"</td>";
                tableHtml +=    "<td>"+ report_data[i]['name'] +"</td>";
                tableHtml +=    "<td>"+ report_data[i]['number'] +"</td>";
                tableHtml +=    "<td>"+ report_data[i]['xueyuan'] +"</td>";
                tableHtml +=    "<td>"+ report_data[i]['zhuanye'] +"</td>";
                tableHtml +=    "<td>"+ "<button>查看</button>" +"</td>";
                tableHtml +=    "<td>"+ "<button>修改</button>" +"</td>";
                tableHtml +=    "<td>"+ "<button>删除</button>" +"</td>";
                //使用this将当前button对象 传入到函数del中
                tableHtml += "</tr>";
                console.log(tableHtml);
            }
            //将拼接后的表格数据tbody
            $("#report_history_data").html(tableHtml);
        },
        error:function (err) {
            console.log(data, '请求失败')
        }
    });
}
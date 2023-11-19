//实验介绍
function lab_int(){
    document.getElementById("text_icon_introduction").style.display='block';
    document.getElementById("text_icon_principle").style.display='none';
    document.getElementById("text_icon_content").style.display='none';
    document.getElementById("text_icon_guide").style.display='none';
}
//实验原理
function lab_pri(){
    document.getElementById("text_icon_introduction").style.display='none';
    document.getElementById("text_icon_principle").style.display='block';
    document.getElementById("text_icon_content").style.display='none';
    document.getElementById("text_icon_guide").style.display='none';
}
//实验内容
function lab_con(){
    document.getElementById("text_icon_introduction").style.display='none';
    document.getElementById("text_icon_principle").style.display='none';
    document.getElementById("text_icon_content").style.display='block';
    document.getElementById("text_icon_guide").style.display='none';
}
//实验指导
function lab_gui(){
    document.getElementById("text_icon_introduction").style.display='none';
    document.getElementById("text_icon_principle").style.display='none';
    document.getElementById("text_icon_content").style.display='none';
    document.getElementById("text_icon_guide").style.display='block';
}
//开始实验
function lab_sta(){
    window.location.href='startlab.html';
}



//登录表单提交页面跳转
function log() {
    var name = document.login_form.login_name.value;
    var password = document.login_form.login_password.value;
    if (name==null||""==name) {
        alert("用户名为空，请重新输入");
    }
    else if(password==null||""==password){
        alert("密码为空，请重新输入");
    }
    else{
        var newData = {
            "username": name,
            "password": password,
        }
        console.log(newData)
        $.ajax({
            type: "post",
            url: "/login",
            data: newData,
            success: function(data) {
                if(data.toString()=='OK'){
                    window.location.href="main.html";
                }else if (data.toString()=='nouser'){
                    alert("用户名不存在");
                }
                else {
                    alert("密码错误");
                }
            }
        })
        // var param = {"name":name,"password":password};
        //     $.get("/login",param,function(result){
        //         if(result){
        //             window.location.href="main.html";
        //         }else{
        //             alert("用户名或者密码错误!");
        //         }
        //     });

    }
}
function view(){

    var postarray = new Array();
    //利用Ajax请求数据，获取数据。
    $.ajax({
        type: "post",//请求的类型
        url: "/view", //请求的后端处理路径
    //如若请求成功，返回200状态码，执行以下函数。
        success: function (results) {
        //遍历返回的数据数组，分别对应写入博文框
                document.login_form.view_count.value = results;
        }
    })
}



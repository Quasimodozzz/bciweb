function checkPassword(str){

    if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(str)){
        return true;
    }else{
        return false;
    }
}

function resetPassword(){
    var password = document.reset_form.new_password.value;
    var repassword = document.reset_form.re_password.value;
    if (password==null||""==password||!checkPassword(password)) {
        alert("密码格式有误！应为8至16位数字与字母的组合");
    }else{
        var sendData = {
            "password":password,
            "repassword":repassword
        }
        $.ajaxSettings.async = false;
        $.ajax({
            type: "post",
            url: "/resetP",
            data: sendData,

            success: function(data) {
                if (data=="update successfully"){
                    alert("密码修改成功！")
                    window.location.href="main.html"
                }
                else if (data=="error"){
                    alert("密码不一致！请重新输入！")
                }
            }
        })
        // $.ajaxSettings.async = true;
    }
}
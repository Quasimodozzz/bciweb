var Emailreg = new RegExp(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/)
function isEmail(str){
    return Emailreg.test(str);
}

function sendCode(){
    var mail = document.forget_form.input_mail.value;
    if (mail==null||""==mail||!isEmail(mail)) {
        alert("邮箱格式有误！");
    }
    else{
        var sendData = {
            "mail": mail
        }
        $.ajaxSettings.async = false;
        $.ajax({
            type: "post",
            url: "/sendEmail",
            data: sendData,

            success: function(data) {
                if (data=="success"){
                    alert("已成功发送")
                }
                else {
                    alert("该邮箱已注册")
                }
            }
        })
        // $.ajaxSettings.async = true;
    }
}


function verifcode(){
    var mail = document.forget_form_.input_mail.value;
    var code = document.forget_form.securityCode.value;
    if (mail==null||""==mail||!isEmail(mail)) {
        alert("邮箱格式有误！");
    }
    else{
        var sendData = {
            "mail": mail,
            "code": code
        }
        $.ajaxSettings.async = false;
        $.ajax({
            type: "post",
            url: "/check_email",
            data: sendData,

            success: function(data) {
                if (data=="noemail"){
                    alert("该邮箱未注册！")
                }else if (data=="noCode"){
                    alert("请先获取验证码！")
                }else if (data=="codeWrong"){
                    alert("验证码错误，请重新输入！")
                }else if (data=="codeRight"){
                    window.location.href="reset.html"
                }
            }
        })
        // $.ajaxSettings.async = true;
    }
}
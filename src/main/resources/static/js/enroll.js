function validation_password()
{
    var password = document.enroll_form.enroll_password.value;
    var password2 = document.enroll_form.enroll_password2.value;
    if(password!=password2){
        alert("两次密码输入不同！")
    }
}


//检测邮箱格式
var Emailreg = new RegExp(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/)
function isEmail(str){
    return Emailreg.test(str);
}

//检测手机号码格式
function isMobile(str){
    if(/^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(str)){
        return true;
    }
    return false;
}

//检测密码格式

// var pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;//8到16位数字与字母组合
function checkPassword(str){

    if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(str)){
        return true;
    }else{
        return false;
    }
}

//检测用户名中是否存在特殊符号
function checkUsernameSpecial(str) {
    var containSpecial = RegExp(
        /[(\ )(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+/
    );
    return containSpecial.test(str);
}

//检查用户名长度

function checkUsernameLength(str){
    // var name = document.enroll_form.enroll_name.value;
        return /.{3,10}/.test(str);


}




//注册按钮功能
function en()
{
    var name = document.enroll_form.enroll_name.value;
    var password = document.enroll_form.enroll_password.value;
    var tele=document.enroll_form.enroll_tele.value;
    var mail=document.enroll_form.enroll_mail.value;
    var code=document.enroll_form.verify_code.value;
    if (name==null||""==name||checkUsernameSpecial(name)||!checkUsernameLength(name)) {
        alert("用户名格式有误，应为3-10位字符，且用户名中不应包含除‘_’以外的符号");}
    else if(password==null||""==password||!checkPassword(password)){
        alert("密码格式有误，请输入8-16位数字与字母的组合");}
    else if(tele==null||""==tele||!isMobile(tele)){
        alert("手机号码格式有误");}
    else if(mail==null||""==mail||!isEmail(mail)){
        alert("邮箱格式有误");}
    else if(code==null||""==code){
        alert("请输入验证码！");}
    else{
        var newData = {
            "name": name,
            "password":password,
            "telephone": tele,
            "e_mail": mail,
            "code": code
        };

        $.ajax({
            type: "post",
            url: "/userenroll",
            data: newData,
            success: function(data) {
                console.log(data)
                if (data=="success") {
                    alert("用户注册成功！点击返回登录。")
                    window.location.href = "../index.html";
                }else if(data=="haveuser"){
                    alert("用户名已存在！")
                }else if(data=="haveemail"){
                    alert("该邮箱已注册！")
                }else if(data=="codewrong"){
                    alert("验证码错误！")
                }
            }
        })
    }
}


function getCode(){
    var name = document.enroll_form.enroll_name.value;
    var password = document.enroll_form.enroll_password.value;
    var tele=document.enroll_form.enroll_tele.value;
    var mail=document.enroll_form.enroll_mail.value;
    if (name==null||""==name||checkUsernameSpecial(name)||!checkUsernameLength(name)) {
        alert("用户名格式有误，应为3-10位字符，且用户名中不应包含除‘_’以外的符号");}
    else if(password==null||""==password||!checkPassword(password)){
        alert("密码格式有误，请输入8-16位数字与字母的组合");}
    else if(tele==null||""==tele||!isMobile(tele)){
        alert("手机号码格式有误");}
    else if(mail==null||""==mail||!isEmail(mail)){
        alert("邮箱格式有误");}
    else{
        var newData = {
            "e_mail": mail,
        };

        $.ajax({
            type: "post",
            url: "/getcode",
            data: newData,
            success: function(data){
                if (data=="success") {
                    alert("验证码发送成功！请在邮箱中确认。")
                }else {
                    alert("验证码发送失败，请检查您的邮箱信息是否有误。")
                }
            }


        })
    }

}
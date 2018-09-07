start();
function start() {
    document.getElementById("userinfoblock").style.display = "block";
    document.getElementById("changepasswordblock").style.display = "none";
    document.getElementById("userinput").value = "";
    document.getElementById("pninput").value = "";
    document.getElementById("emailinput").value = "";
    document.getElementById("phoneinput").value = "";
    $.ajax({
        type:'get',
        url:'/laravel/public/userinfo/getUserInfo',
        success:function (data) {
            document.getElementById("userinput").value = data[0]['username'];
            if (data[0]['petname'] != null) {
                document.getElementById("pninput").value = data[0]['petname'];
            }else{
                document.getElementById("pninput").value = "";
            }
            if (data[0]['email'] != null) {
                document.getElementById("emailinput").value = data[0]['email'];
            }else{
                document.getElementById("emailinput").value = "";
            }
            if (data[0]['phone'] != null) {
                document.getElementById("phoneinput").value = data[0]['phone'];
            }else{
                document.getElementById("phoneinput").value = "";
            }
        }
    });
}
//点击设置个人信息
function click1() {
    start();
}
//点击修改密码
function click2() {
    document.getElementById("userinfoblock").style.display = "none";
    document.getElementById("changepasswordblock").style.display = "block";
    document.getElementById("rlockinput").value = "";
    document.getElementById("newlockinput").value = "";
    document.getElementById("againlockinput").value = "";

}
//点击第一个完成按钮
function clickf1() {
    var user = document.getElementById("userinput").value;
    var pn = document.getElementById("pninput").value;
    var email = document.getElementById("emailinput").value;
    var phone = document.getElementById("phoneinput").value;
    $.ajax({
        type: 'get',
        async: false,
        url: '/laravel/public/userinfo/setUserInfo',
        data:{
            user:user,
            pn:pn,
            email:email,
            phone:phone
        },
        success: function (data) {
            alert(data.state);
        }
    });
}
//点击第二个完成按钮
function clickf2() {
    $.ajax({
        type:'get',
        async:false,
        url:'/laravel/public/userinfo/getUserInfo',
        success:function (data) {
            var password = document.getElementById("rlockinput").value;
            var newpassword = document.getElementById("newlockinput").value;
            var confirm = document.getElementById("againlockinput").value;
            if (password == data[0]['password'] && newpassword == confirm && newpassword!=password){
                setnewpassword(newpassword);
            }else if(password != data[0]['password']){
                alert("密码输入错误")
            }else if(newpassword==password){
                alert("新密码不能喝旧密码一致")
            }else {
                alert("两次密码输入不一致")
            }
        }
    });
}
function setnewpassword(newpassword) {
    $.ajax({
        type: 'get',
        async: false,
        data:{
            npassword: newpassword
        },
        url: '/laravel/public/userinfo/setNewPassword',
        success: function (data) {
            alert(data.state);
        }
    });
}
function getback() {
    window.location.href = "/laravel/public/note";
}
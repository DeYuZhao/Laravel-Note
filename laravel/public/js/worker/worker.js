var nowusername = null;
start();
function start() {
    document.getElementById("middlebar").style.display = "block";
    document.getElementById("middlebar2").style.display = "none";
    document.getElementById("middlebar3").style.display = "block";
    document.getElementById("userinput").value = "";
    document.getElementById("pninput").value = "";
    document.getElementById("emailinput").value = "";
    document.getElementById("phoneinput").value = "";
    var lidarray = [];
    var didarray = [];
    var usernamearray = [];
    $.ajax({
       type:'get',
       url:'/laravel/public/worker/start',
       async:false,
       success:function (data) {
            document.getElementById("middlebar").innerHTML = "";
            if (data.length>0){
                for (var i=0;i<data.length;i++){
                    var username = data[i];
                    usernamearray.push(username);
                    var div = document.createElement("div");
                    div.setAttribute("class","marea");
                    var div1 = document.createElement("div");
                    div1.setAttribute("class","imgmarea");
                    var div2 = document.createElement("img");
                    div2.src = "/laravel/public/img/note/grouplogo.png";
                    div1.appendChild(div2);
                    var div3 = document.createElement("div");
                    div3.setAttribute("class","usernamemarea");
                    div3.innerHTML = username;
                    var div4 = document.createElement("div");
                    div4.setAttribute("class","lookmarea");
                    var id = "lookmarea"+i;
                    lidarray.push(id);
                    div4.setAttribute("id", id);
                    div4.innerHTML = "查看";
                    var div5 = document.createElement("div");
                    div5.setAttribute("class","deletemarea");
                    var id2 = "deletemarea"+i;
                    didarray.push(id2);
                    div5.setAttribute("id", id2);
                    div5.innerHTML = "删除";
                    div.appendChild(div1);
                    div.appendChild(div3);
                    div.appendChild(div4);
                    div.appendChild(div5);
                    var parent = document.getElementById("middlebar");
                    parent.appendChild(div);
                }
            }
       }
    });
    for (var i=0;i<didarray.length;i++){
        t(i);
    }
    function t(m) {
        var e = document.getElementById(didarray[m]);
        e.onclick = function () {
            deleteuser(usernamearray[m]);
        }
    }
    for (var i=0;i<lidarray.length;i++){
        g(i);
    }
    function g(m) {
        var e = document.getElementById(lidarray[m]);
        e.onclick = function () {
            nowusername = usernamearray[m];
            lookuser(usernamearray[m]);
        }
    }
}
function clickadduser() {
    document.getElementById("middlebar").style.display = "none";
    document.getElementById("middlebar3").style.display = "none";
    document.getElementById("middlebar2").style.display = "block";
    document.getElementById("rlockinput").value = "";
    document.getElementById("newlockinput").value = "";
    document.getElementById("againlockinput").value = "";
}
function addnewuser() {

    var username = document.getElementById("rlockinput").value;
    var password = document.getElementById("newlockinput").value;
    var confirm = document.getElementById("againlockinput").value;
    $.ajax({
        type:'get',
        url:'/laravel/public/worker/addNewUser',
        data:{
            username: username,
            password: password,
            confirm: confirm
        },
        success:function (data) {
            if(data.state == "添加成功"){
                start();
                alert(data.state);
            }else{
                alert(data.state)
            }
        }
    });
}
function deleteuser(username) {
    $.ajax({
        type:'get',
        url:'/laravel/public/worker/deleteUser',
        data:{
            username: username
        },
        success:function (data) {
            if(data.state == "yes"){
                start();
                alert("删除成功");
            }
        }
    });
}
function lookuser(username) {
    $.ajax({
        type:'get',
        url:'/laravel/public/worker/lookUser',
        data:{
            username: username
        },
        success:function (data) {
            if (data.length>0){
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
        }
    });
}
function updateUser() {
    var user = document.getElementById("userinput").value;
    var pn = document.getElementById("pninput").value;
    var email = document.getElementById("emailinput").value;
    var phone = document.getElementById("phoneinput").value;
    $.ajax({
        type: 'get',
        async: false,
        url: '/laravel/public/worker/updateUser',
        data:{
            beforeun:nowusername,
            user:user,
            pn:pn,
            email:email,
            phone:phone
        },
        success: function (data) {
            alert(data.state);
        }
    });
    start();
}
function goback() {
    window.location.href = "/laravel/public/login";
}
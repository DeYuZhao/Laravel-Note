<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href={{URL::asset('/css/userinfo/style.css')}} />
    <script type="text/javascript" src={{URL::asset('/js/jquery-3.2.1.min.js')}}></script>


    <title>NoteMaster</title>


</head>
<body>
<div style="position: absolute;overflow: hidden;left: 0px;top: 0px;right: 0px;bottom: 0px;">
    <div id="root" style="position: absolute;overflow: hidden;left: 0px;top: 0px;right: 0px;bottom: 0px;">
        <div id="sidebar" class="sidebarcss">
            <div class="elementbar">
                <div class="logo"><img src={{URL::asset('/laravel/public/img/note/logo.png')}}/></div>
                <div class="name">NoteMaster</div>
            </div>
            <div id="group" class="elementbar1">
                <div class="logo"><img src={{URL::asset('/laravel/public/img/note/grouplogo.png')}}/></div>
                <div class="choice" onclick="click1()">设置个人信息</div>
            </div>
            <div id="new" class="elementbar1">
                <div class="logo"><img src={{URL::asset('/laravel/public/img/note/newnotelogo.png')}}/></div>
                <div class="choice" onclick="click2()">修改密码</div>
            </div>
            <div class="elementbar2">
                <div class="userlogo"><img src={{URL::asset('/laravel/public/img/note/userlogo.png')}}/></div>
                <div class="choice1" onclick="getback()">返回主页</div>
            </div>
        </div>
    </div>
    <div style="position: absolute;overflow: hidden;left: 160px;top: 0px;right: 0px;bottom: 0px;">
        <div id="root" style="position: absolute;overflow: hidden;left: 0px;top: 0px;right: 0px;bottom: 0px;">
            <div id="middlebar" class="middlebarcss">
                <div id="userinfoblock">
                    <div id="imgblock"><img src={{URL::asset('/img/note/userlogo.png')}}></div>
                    <div class="inputarea">
                        <div class="pngblock"><img src={{URL::asset('/img/userinfo/用户.png')}}></div>
                        <div class="inputcss"><input id="userinput" type="text" placeholder="请输入用户名..."></div>
                    </div>
                    <div class="inputarea">
                        <div class="pngblock"><img src={{URL::asset('/img/userinfo/昵称.png')}}></div>
                        <div class="inputcss"><input id="pninput" type="text" placeholder="请输入昵称..."></div>
                    </div>
                    <div class="inputarea">
                        <div class="pngblock"><img src={{URL::asset('/img/userinfo/邮件.png')}}></div>
                        <div class="inputcss"><input id="emailinput" type="text" placeholder="请输入邮箱地址..."></div>
                    </div>
                    <div class="inputarea">
                        <div class="pngblock"><img src={{URL::asset('/img/userinfo/电话.png')}}></div>
                        <div class="inputcss"><input id="phoneinput" type="text" placeholder="请输入联系方式..."></div>
                    </div>
                    <div class="inputarea"><div id="bf" onclick="clickf1()">完成</div></div>
                </div>
                <div id="changepasswordblock">
                    <div id="imgblock"><img src={{URL::asset('/img/note/userlogo.png')}}></div>
                    <div class="inputarea">
                        <div class="pngblock"><img src={{URL::asset('/img/userinfo/解锁.png')}}></div>
                        <div class="inputcss"><input id="rlockinput" type="password" placeholder="请输入旧密码..."></div>
                    </div>
                    <div class="inputarea">
                        <div class="pngblock"><img src={{URL::asset('/img/userinfo/密码.png')}}></div>
                        <div class="inputcss"><input id="newlockinput" type="password" placeholder="请输入新密码..."></div>
                    </div>
                    <div class="inputarea">
                        <div class="pngblock"><img src={{URL::asset('/img/userinfo/密码.png')}}></div>
                        <div class="inputcss"><input id="againlockinput" type="password" placeholder="请再次输入新密码..."></div>
                    </div>
                    <div class="inputarea"><div id="bf" onclick="clickf2()">完成</div></div>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src={{URL::asset('/js/userinfo/main.js')}}></script>
</body>
</html>
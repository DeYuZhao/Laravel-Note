<!DOCTYPE HTML>
<html >
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src={{URL::asset('/js/jquery-3.2.1.min.js')}}></script>

    <link rel="stylesheet" type="text/css" href={{URL::asset('/css/worker/style.css')}} />
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
                <div class="logo"><img src={{URL::asset('/laravel/public/img/worker/添加用户.png')}}/></div>
                <div class="choice" onclick="clickadduser()">添加用户</div>
            </div>
            <div id="new" class="elementbar1">
                <div class="logo"><img src={{URL::asset('/laravel/public/img/worker/查看列表.png')}}/></div>
                <div class="choice" onclick="start()">查看用户列表</div>
            </div>
            <div class="elementbar2">
                <div class="userlogo"><img src={{URL::asset('/laravel/public/img/worker/管理员.png')}}/></div>
                <div class="choice1" onclick="goback()">退出登录</div>
            </div>
        </div>
    </div>
</div>
<div style="position: absolute;overflow: hidden;left: 160px;top: 0px;right: 0px;bottom: 0px;">
    <div id="root" style="position: absolute;overflow: hidden;left: 0px;top: 0px;right: 0px;bottom: 0px;">
        <div id="middlebar" class="middlebarcss">
            {{--<div class="marea">--}}
                {{--<div class="imgmarea"><img src={{URL::asset('/img/note/grouplogo.png')}}></div>--}}
                {{--<div class="usernamemarea">root</div>--}}
                {{--<div class="lookmarea">查看</div>--}}
                {{--<div class="deletemarea">删除</div>--}}
            {{--</div>--}}
        </div>
        <div id="middlebar2" class="middlebarcss">
            <div class="imgmarea2"><img src={{URL::asset('/img/note/grouplogo.png')}}></div>
            <div class="inputarea">
                <div class="pngblock"><img src={{URL::asset('/img/userinfo/用户.png')}}></div>
                <div class="inputcss"><input id="rlockinput" type="text" placeholder="请输入用户名..."></div>
            </div>
            <div class="inputarea">
                <div class="pngblock"><img src={{URL::asset('/img/worker/密码.png')}}></div>
                <div class="inputcss"><input id="newlockinput" type="password" placeholder="请输入密码..."></div>
            </div>
            <div class="inputarea">
                <div class="pngblock"><img src={{URL::asset('/img/worker/密码.png')}}></div>
                <div class="inputcss"><input id="againlockinput" type="password" placeholder="请再次新密码..."></div>
            </div>
            <div class="inputarea"><div id="bf" onclick="addnewuser()">添加</div></div>
        </div>
    </div>
</div>
<div style="position: absolute;overflow: hidden;left: 660px;top: 0px;right: 0px;bottom: 0px;">
    <div id="root" style="position: absolute;overflow: hidden;left: 0px;top: 0px;right: 0px;bottom: 0px;">
        <div id="middlebar3" class="middlebarcss">
            <div id="userinfoblock">
                <div id="imgblock"><img src={{URL::asset('/img/note/grouplogo.png')}}></div>
                <div class="inputarea">
                    <div class="pngblock"><img src={{URL::asset('/img/userinfo/用户.png')}}></div>
                    <div class="inputcss"><input id="userinput" type="text" placeholder="用户名"></div>
                </div>
                <div class="inputarea">
                    <div class="pngblock"><img src={{URL::asset('/img/userinfo/昵称.png')}}></div>
                    <div class="inputcss"><input id="pninput" type="text" placeholder="昵称"></div>
                </div>
                <div class="inputarea">
                    <div class="pngblock"><img src={{URL::asset('/img/userinfo/邮件.png')}}></div>
                    <div class="inputcss"><input id="emailinput" type="text" placeholder="邮箱地址"></div>
                </div>
                <div class="inputarea">
                    <div class="pngblock"><img src={{URL::asset('/img/userinfo/电话.png')}}></div>
                    <div class="inputcss"><input id="phoneinput" type="text" placeholder="联系方式"></div>
                </div>
                <div class="inputarea"><div id="bf" onclick="updateUser()">完成</div></div>
            </div>
        </div>
    </div>
</div>
<script src={{URL::asset('/js/worker/worker.js')}}></script>
</body>
</html>
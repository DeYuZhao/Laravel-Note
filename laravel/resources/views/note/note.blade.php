<!DOCTYPE HTML>
<html >
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" id="token" content="{{ csrf_token() }}">
        <script src={{URL::asset('/js/jquery-3.2.1.min.js')}}></script>
        <script src={{URL::asset('/js/jquery-ui.min.js')}}></script>
        {{--<script src={{URL::asset('/css/jquery-ui.min.css')}}></script>--}}

        <script src={{URL::asset('/js/login/demo-1.js')}}></script>
        <script src={{URL::asset('/js/html2canvas.js')}}></script>
        <script src={{URL::asset('/js/jsPdf.debug.js')}}></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jspanel3/3.11.0/jquery.jspanel-compiled.js"></script>
        {{--<script src={{URL::asset('/vendor/ueditor/ueditor.config.js')}}></script>--}}
        {{--<script src={{URL::asset('/vendor/ueditor/ueditor.config.js')}}></script>--}}
        {{--<script src={{URL::asset('/vendor/ueditor/ueditor.all.js')}}></script>--}}
        <script src={{URL::asset('/js/quill.js')}}></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jspanel3/3.11.0/jquery.jspanel.css"/>
        <link rel="stylesheet" type="text/css" href={{URL::asset('/js/quill.snow.css')}} />
        <link rel="stylesheet" type="text/css" href={{URL::asset('/css/note/main.css')}} />
        <link rel="stylesheet" type="text/css" href={{URL::asset('/css/note/main_middle.css')}} />
        <link rel="stylesheet" type="text/css" href={{URL::asset('/css/note/main_right.css')}} />
        <style>
            .ui-helper-hidden-accessible {display:none;}
            .ui-autocomplete {background-color:#FFFFFF;max-height: 100px;width: 150px;overflow-y: auto; position: absolute; cursor: default; border-radius: 3px; border-left: 1px solid #ececec;border-bottom: 1px solid #ececec;border-right: 1px solid #ececec; }
            .ui-menu {list-style: none;padding: 0;margin: 0;display: block;outline: none;width: 150px;}
            .ui-menu .ui-menu-item a {text-decoration:none;display:block;zoom:1;}
            .ui-widget{font-size: 14px;
                font-family: caecilia, times, serif;
                color: rgb(106,125,126);
                font-weight: 300;}
            .ui-datepicker{width: 150px;}

            /*.ui-state-hover, .ui-widget-content .ui-state-hover, .ui-widget-header .ui-state-hover, .ui-state-focus, .ui-widget-content .ui-state-focus, .ui-widget-header .ui-state-focus {background: #ff8a00;border: none;color:#000;border-radius:0;font-weight: normal;}*/
        </style>
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
                    <div id="new" class="elementbar1">
                        <div class="logo"><img src={{URL::asset('/laravel/public/img/note/newnotelogo.png')}}/></div>
                        <div class="choice" onclick="clicknew()">新建</div>
                    </div>
                    <div id="search" class="elementbar1">
                        <div class="logo"><img src={{URL::asset('/laravel/public/img/note/searchlogo.png')}}/></div>
                        <div class="choice" onclick="clicksearch()">搜索</div>
                    </div>
                    <div id="note" class="elementbar1">
                        <div class="logo"><img src={{URL::asset('/laravel/public/img/note/notelogo.png')}}/></div>
                        <div class="choice" onclick="clicknote()">笔记</div>
                    </div>
                    <div id="notebook" class="elementbar1">
                        <div class="logo"><img src={{URL::asset('/laravel/public/img/note/notebooklogo.png')}}/></div>
                        <div class="choice" onclick="clicknotebook()">笔记本</div>
                    </div>
                    <div id="tag" class="elementbar1">
                        <div class="logo"><img src={{URL::asset('/laravel/public/img/note/taglogo.png')}}/></div>
                        <div class="choice" onclick="clicktag()">标签</div>
                    </div>
                    <div id="group" class="elementbar1">
                        <div class="logo"><img src={{URL::asset('/laravel/public/img/note/grouplogo.png')}}/></div>
                        <div class="choice" onclick="clickgroup()">关注</div>
                    </div>
                    <div class="elementbar2">
                        <div class="userlogo"><img src={{URL::asset('/laravel/public/img/note/userlogo.png')}}/></div>
                        <div class="choice1" onclick="toPersonview()">个人信息</div>
                        <div class="choice2" onclick="logout()">退出账号</div>
                    </div>
                </div>
            </div>
        </div>
        <div style="position: absolute;overflow: hidden;left: 160px;top: 0px;right: 0px;bottom: 0px;">
            <div id="root" style="position: absolute;overflow: hidden;left: 0px;top: 0px;right: 0px;bottom: 0px;">
                <div id="middlebar" class="middlebarcss">
                    <div class="shownote" id="st">
                        {{--笔记显示界面--}}
                        <div class="notehead" id="nh">
                            <div class="mnhead" id="mnh">笔记</div>
                            <div class="mnheadcutlogo" id="mnhcl"></div>
                            <div class="mnheadcutword" id="mnhcw" onclick="getAllMyShares()">我的分享</div>
                            <div class="mnheadsumnote" id="mnhsn">总共{{$num}}条记录</div>
                        </div>
                        <div class="totalnote" id="tn">
                            {{--//界面初始化时js自动加载用户当前笔记--}}
                        </div>
                        {{--新建界面--}}
                        <div id="newhead">
                            <div id="inputarea">
                                <input name="newnotename" id="nntn" type="text" placeholder="请输入笔记名称...">
                            </div>
                        </div>
                        <div id="choicearea">
                            <div id="cninputarea">
                                <textarea name="newnotecontent" id="nntc" type="text" placeholder=""></textarea>
                            </div>
                            <div id="completenewnote" onclick="addnewnote()">完成</div>
                        </div>
                        {{--搜索界面--}}
                        <div id="searchhead">
                            <div id="searchheadinput">
                                <input name="searchinput" id="si" type="text" placeholder="搜索笔记...">
                                <div id="searchimg" onclick="searchnote()"><img src={{URL::asset('/img/note/searchlogo.png')}}></div>
                            </div>
                        </div>
                        <div id="searresult"></div>
                        {{--笔记本界面--}}
                        <div id="notebookhead">
                            <div id="notebookname">笔记本</div>
                            <div id="addnotebookinput">
                                <input name="addinput" id="addnbi" type="text" placeholder="新增笔记本...">
                                <div id="addnotebookimg" onclick="addNewNoteBook()"><img src={{URL::asset('/img/note/newnotelogo.png')}}></div>
                            </div>
                            <div id="searchnotebook">
                                <input name="searchinput" id="snbi" type="text" placeholder="查找笔记本">
                                <div id="searchnotebookimg" onclick="searchNoteBook()"><img src={{URL::asset('/img/note/searchlogo.png')}}></div>
                            </div>
                        </div>
                        <div id="searchnotebookresult"></div>
                        {{--标签界面--}}
                        <div id="taghead">
                            <div id="tagname">标签</div>
                            <div id="addtaginput">
                                <input name="addinput" id="addtagi" type="text" placeholder="新增标签...">
                                <div id="addtagimg" onclick="addTag()"><img src={{URL::asset('/img/note/addtag.png')}}></div>
                            </div>
                            <div id="searchtag">
                                <input name="searchinput" id="stagi" type="text" placeholder="查找标签">
                                <div id="searchtagimg" onclick="searchTag()"><img src={{URL::asset('/img/note/searchlogo.png')}}></div>
                            </div>
                        </div>
                        <div id="searchtagresult"></div>
                        {{--好友界面--}}
                        <div id="grouphead">
                            <div id="groupname">关注</div>
                                <div id="groupinput">
                                    <div id="showunfollows" onclick="recOtherUsers()">推荐好友</div>
                                {{--<input name="addinput" id="addnbi" type="text" placeholder="新增笔记本...">--}}
                                {{--<div id="addnotebookimg" onclick="addNewNoteBook()"><img src={{URL::asset('/img/note/newnotelogo.png')}}></div>--}}
                                </div>
                                {{--<div id="searchgroup">--}}
                                    {{--<input name="searchinput" id="sgroup" type="text" placeholder="查找用户">--}}
                                    {{--<div id="searchnotebookimg" onclick="searchUser()"><img src={{URL::asset('/img/note/searchlogo.png')}}></div>--}}
                                {{--</div>--}}
                            </div>
                        <div id="searchgroupresult"></div>
                    </div>
                </div>
            </div>
        </div>
        <div style="position: absolute;overflow: hidden;left: 560px;top: 0px;right: 0px;bottom: 0px;">
            <div id="root" style="position: absolute;overflow: hidden;left: 0px;top: 0px;right: 0px;bottom: 0px;">
                <div id="rightbar" class="rightbarcss">

                </div>
                <div id="rightbar1" class="rightbarcss1">
                    <div id="rightbarhead">
                        <div id="rightnotetitle"></div>
                        <div id="rightnotebook">
                            <img id="tnbimg" src={{URL::asset('/img/note/notebooklogo.png')}}>
                            <div id="rightnotebookname"></div>
                        </div>
                        <div id="righttag">
                            <img id="tnbimg" src={{URL::asset('/img/note/taglogo.png')}}>
                            <input id="righttagname" value="标签" placeholder="添加标签...">
                        </div>
                        <img id="rightsave" onclick="saveNote()" src={{URL::asset('/img/note/savelogo.png')}}>
                        <img id="rightpdf" onclick="toPDF()" src={{URL::asset('/img/note/pdflogo.png')}}>
                        <img id="rightshare" onclick="shareNote()" src={{URL::asset('/img/note/分享.png')}}>
                        <img id="rightdelete" onclick="deleteNote()" src={{URL::asset('/img/note/deletelogo.png')}}>
                    </div>
                    {{--@include("vendor.UEditor.assets")--}}
                    <div id="rightbartext" class="rightbartextarea">
                        <div id="editor" style="height: 500px;"></div>
                    </div>
                </div>
                {{--笔记本修改界面--}}
                <div id="rightbar2" class="rightbarcss2">
                    <div id="rightnotebookInfo" class="rightnotebookInfoarea">
                        <img id="rnbiimg" src={{URL::asset('/img/note/显示详情.png')}}>
                        <div id="rnbnameinput">
                            <div id="inputtitle">标题</div>
                            <input id="afterit" placeholder="请输入笔记本名称...">
                        </div>
                        <div id="runameinput">
                            <div id="inputuser">创建者</div>
                            <input id="afteriu" value="" readonly>
                        </div>
                        <div id="rctimeinput">
                            <div id="inputtime">创建时间</div>
                            <input id="afteritt" value="" readonly>
                        </div>
                        <div id="savebutton" onclick="saveNoteBook()">保 存</div>
                        <div id="deletebutton" onclick="deleteNoteBook()">删 除</div>
                    </div>
                </div>
            </div>
        </div>
        <script src={{URL::asset('/js/note/main.js')}}></script>
    </body>
</html>
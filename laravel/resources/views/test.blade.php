<!DOCTYPE HTML>
<html >
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    {{--<link rel="stylesheet" type="text/css" href={{URL::asset('/css/notepage/notepage.css')}}/>--}}
    <script src={{URL::asset('/js/jquery-3.2.1.min.js')}}></script>
    <script src={{URL::asset('/js/jquery-ui.min.js')}}></script>
    {{--<script src={{URL::asset('/css/jquery-ui.min.css')}}></script>--}}
    {{--<script src={{URL::asset('/js/note/main.js')}}></script>--}}
    {{--<script src={{URL::asset('/js/login/demo-1.js')}}></script>--}}
    <link rel="stylesheet" type="text/css" href={{URL::asset('/css/note/main.css')}} />
    <link rel="stylesheet" type="text/css" href={{URL::asset('/css/note/main_middle.css')}} />
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
    <script>
        $(function () {
            var availableTags= [
                "C#",
                "C++",
                "Java",
                "JavaScript",
                "ASP",
                "ASP.NET",
                "JSP",
                "PHP",
                "Python",
                "Ruby"
            ];
            $("#si").autocomplete({
                source:availableTags
            });
        })
    </script>
    <title>NoteMaster</title>
</head>
<body>
<div style="position: absolute;overflow: hidden;left: 160px;top: 0px;right: 0px;bottom: 0px;">
    <div id="root" style="position: absolute;overflow: hidden;left: 0px;top: 0px;right: 0px;bottom: 0px;">
        <div id="middlebar" class="middlebarcss">
            <div class="shownote" id="st">
                <div id="searchhead">
                    <div id="searchheadinput">
                        <input name="searchinput" id="si" type="text" placeholder="搜索笔记...">
                        <div id="searchimg" onclick=""><img src={{URL::asset('/img/note/searchlogo.png')}}></div>
                    </div>
                </div>
                <div id="searresult"></div>
            </div>
        </div>
    </div>
</div>
{{--<div class="ui-widget">--}}
    {{--<label for="tags">标签：</label>--}}
    {{--<div id="middlebar" class="middlebarcss">--}}
        {{--<div class="shownote" id="st">--}}
            {{--<div id="searchhead">--}}
                {{--<div id="searchheadinput">--}}
                    {{--<input name="searchinput" id="tags" type="text" placeholder="搜索笔记...">--}}
                    {{--<div id="searchimg" onclick=""><img src={{URL::asset('/img/note/searchlogo.png')}}></div>--}}
                {{--</div>--}}
            {{--</div>--}}
            {{--<div id="searresult"></div>--}}
        {{--</div>--}}
    {{--</div>--}}
{{--</div>--}}
</body>
</html>
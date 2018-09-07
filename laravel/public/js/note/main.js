var originbookname = "";
setStartNote();
function setStartNote() {
    document.getElementById("rightbar").style.display = "block";
    document.getElementById("rightbar1").style.display = "none";
    document.getElementById("rightbar2").style.display = "none";
    var title;
    var titlearray = [];
    var imgidarrary = [];
    $.ajax({
        type:'get',
        async:false,
        url:'/laravel/public/note/getnote',
        success:function (data) {
            if(data.length!=0) {
                for (var i = 0; i < data.length; i++) {
                    var title = data[i].notename;
                    var update = data[i]['updatetime'];
                    var notebook = "---";
                    if (data[i]['notebookname'] != null) {
                        notebook = data[i]['notebookname'];
                    }
                    var tag = "---";
                    if (data[i]['tag'] != null) {
                        tag = data[i]['tag'];
                    }
                    // var content = "你还没有笔记哦~";
                    // if (data[i]['content'] != null) {
                    //     content = data[i]['content'];
                    // }
                    var div = document.createElement("div");
                    div.setAttribute("id", "firstNote");
                    var div1 = document.createElement("div");
                    div1.setAttribute("id", "firstNoteTitle");
                    var image = document.createElement("img");
                    image.src = "/laravel/public/img/note/显示详情.png";
                    var imageid = "showNoteInfo"+i;
                    imgidarrary.push(imageid);
                    titlearray.push(title);
                    image.setAttribute("class","snInfo");
                    image.setAttribute("id",imageid);
                    var div2 = document.createElement("div");
                    div2.setAttribute("id", "firstNoteUpdateTime");
                    var div3 = document.createElement("div");
                    div3.setAttribute("id", "firstNoteBookAndTag");
                    var div4 = document.createElement("div");
                    div4.setAttribute("id", "firstNoteIntroduction");
                    div1.innerHTML = title;
                    div2.innerHTML = update;
                    div3.innerHTML = "笔记:" + notebook + "//标签:" + tag;
                    div4.innerHTML = "";
                    div.appendChild(div1);
                    div.appendChild(image);
                    div.appendChild(div2);
                    div.appendChild(div3);
                    div.appendChild(div4);
                    var parent = document.getElementById("tn");
                    parent.appendChild(div);
                }
            }
        }
    });
    for (var i=0;i<imgidarrary.length;i++){
        chi(i);
    }
    function chi(m) {
        var e = document.getElementById(imgidarrary[m]);
        e.onclick = function () {
            checkNoteInfo(titlearray[m]);
        }
    }
    document.getElementById("nh").style.display = "block";
    document.getElementById("tn").style.display = "block";
    document.getElementById("newhead").style.display = "none";
    document.getElementById("choicearea").style.display = "none";
    document.getElementById("searchhead").style.display = "none";
    document.getElementById("searresult").style.display = "none";
    document.getElementById("notebookhead").style.display = "none";
    document.getElementById("searchnotebookresult").style.display = "none";
    document.getElementById("taghead").style.display = "none";
    document.getElementById("searchtagresult").style.display = "none";
}
function clicknew() {
    var e1 = document.getElementById("new");
    var e2 = document.getElementById("search");
    var e3 = document.getElementById("note");
    var e4 = document.getElementById("notebook");
    var e5 = document.getElementById("tag");
    var e6 = document.getElementById("group");
    e1.style.borderRight = "2px solid white";
    e1.style.borderTop = "2px solid rgb(106,125,126)";
    e1.style.borderBottom = "2px solid rgb(106,125,126)";

    e2.style.borderRight = "0px solid rgb(106,125,126)";
    e2.style.borderTop = "2px solid white";
    e2.style.borderBottom = "2px solid white";

    e3.style.borderRight = "0px solid rgb(106,125,126)";
    e3.style.borderTop = "2px solid white";
    e3.style.borderBottom = "2px solid white";

    e4.style.borderRight = "0px solid rgb(106,125,126)";
    e4.style.borderTop = "2px solid white";
    e4.style.borderBottom = "2px solid white";

    e5.style.borderRight = "0px solid rgb(106,125,126)";
    e5.style.borderTop = "2px solid white";
    e5.style.borderBottom = "2px solid white";

    e6.style.borderRight = "0px solid rgb(106,125,126)";
    e6.style.borderTop = "2px solid white";
    e6.style.borderBottom = "2px solid white";
    document.getElementById("nh").style.display = "none";
    document.getElementById("tn").style.display = "none";
    document.getElementById("newhead").style.display = "block";
    document.getElementById("choicearea").style.display = "block";
    document.getElementById("searchhead").style.display = "none";
    document.getElementById("searresult").style.display = "none";
    document.getElementById("notebookhead").style.display = "none";
    document.getElementById("searchnotebookresult").style.display = "none";
    document.getElementById("taghead").style.display = "none";
    document.getElementById("searchtagresult").style.display = "none";

}
function clicksearch() {
    var e1 = document.getElementById("new");
    var e2 = document.getElementById("search");
    var e3 = document.getElementById("note");
    var e4 = document.getElementById("notebook");
    var e5 = document.getElementById("tag");
    var e6 = document.getElementById("group");
    e2.style.borderRight = "2px solid white";
    e2.style.borderTop = "2px solid rgb(106,125,126)";
    e2.style.borderBottom = "2px solid rgb(106,125,126)";

    e1.style.borderRight = "0px solid rgb(106,125,126)";
    e1.style.borderTop = "2px solid white";
    e1.style.borderBottom = "2px solid white";

    e3.style.borderRight = "0px solid rgb(106,125,126)";
    e3.style.borderTop = "2px solid white";
    e3.style.borderBottom = "2px solid white";

    e4.style.borderRight = "0px solid rgb(106,125,126)";
    e4.style.borderTop = "2px solid white";
    e4.style.borderBottom = "2px solid white";

    e5.style.borderRight = "0px solid rgb(106,125,126)";
    e5.style.borderTop = "2px solid white";
    e5.style.borderBottom = "2px solid white";

    e6.style.borderRight = "0px solid rgb(106,125,126)";
    e6.style.borderTop = "2px solid white";
    e6.style.borderBottom = "2px solid white";

    document.getElementById("nh").style.display = "none";
    document.getElementById("tn").style.display = "none";
    document.getElementById("newhead").style.display = "none";
    document.getElementById("choicearea").style.display = "none";
    document.getElementById("searchhead").style.display = "block";
    document.getElementById("searresult").style.display = "block";
    document.getElementById("notebookhead").style.display = "none";
    document.getElementById("searchnotebookresult").style.display = "none";
    document.getElementById("taghead").style.display = "none";
    document.getElementById("searchtagresult").style.display = "none";

    document.getElementById("searresult").innerHTML = "";
    document.getElementById("si").value = "";
    setFuzzySearch();
}
function clicknote() {
    var e1 = document.getElementById("new");
    var e2 = document.getElementById("search");
    var e3 = document.getElementById("note");
    var e4 = document.getElementById("notebook");
    var e5 = document.getElementById("tag");
    var e6 = document.getElementById("group");
    e3.style.borderRight = "2px solid white";
    e3.style.borderTop = "2px solid rgb(106,125,126)";
    e3.style.borderBottom = "2px solid rgb(106,125,126)";

    e2.style.borderRight = "0px solid rgb(106,125,126)";
    e2.style.borderTop = "2px solid white";
    e2.style.borderBottom = "2px solid white";

    e1.style.borderRight = "0px solid rgb(106,125,126)";
    e1.style.borderTop = "2px solid white";
    e1.style.borderBottom = "2px solid white";

    e4.style.borderRight = "0px solid rgb(106,125,126)";
    e4.style.borderTop = "2px solid white";
    e4.style.borderBottom = "2px solid white";

    e5.style.borderRight = "0px solid rgb(106,125,126)";
    e5.style.borderTop = "2px solid white";
    e5.style.borderBottom = "2px solid white";

    e6.style.borderRight = "0px solid rgb(106,125,126)";
    e6.style.borderTop = "2px solid white";
    e6.style.borderBottom = "2px solid white";

    document.getElementById("tn").innerHTML = "";
    setStartNote();
}
function clicknotebook() {
    var e1 = document.getElementById("new");
    var e2 = document.getElementById("search");
    var e3 = document.getElementById("note");
    var e4 = document.getElementById("notebook");
    var e5 = document.getElementById("tag");
    var e6 = document.getElementById("group");
    e4.style.borderRight = "2px solid white";
    e4.style.borderTop = "2px solid rgb(106,125,126)";
    e4.style.borderBottom = "2px solid rgb(106,125,126)";

    e2.style.borderRight = "0px solid rgb(106,125,126)";
    e2.style.borderTop = "2px solid white";
    e2.style.borderBottom = "2px solid white";

    e3.style.borderRight = "0px solid rgb(106,125,126)";
    e3.style.borderTop = "2px solid white";
    e3.style.borderBottom = "2px solid white";

    e1.style.borderRight = "0px solid rgb(106,125,126)";
    e1.style.borderTop = "2px solid white";
    e1.style.borderBottom = "2px solid white";

    e5.style.borderRight = "0px solid rgb(106,125,126)";
    e5.style.borderTop = "2px solid white";
    e5.style.borderBottom = "2px solid white";

    e6.style.borderRight = "0px solid rgb(106,125,126)";
    e6.style.borderTop = "2px solid white";
    e6.style.borderBottom = "2px solid white";

    document.getElementById("nh").style.display = "none";
    document.getElementById("tn").style.display = "none";
    document.getElementById("newhead").style.display = "none";
    document.getElementById("choicearea").style.display = "none";
    document.getElementById("searchhead").style.display = "none";
    document.getElementById("searresult").style.display = "none";
    document.getElementById("notebookhead").style.display = "block";
    document.getElementById("searchnotebookresult").style.display = "block";
    document.getElementById("taghead").style.display = "none";
    document.getElementById("searchtagresult").style.display = "none";

    document.getElementById("notebookname").innerHTML = "笔记本";
    document.getElementById("searchnotebookresult").innerHTML = "";
    document.getElementById("addnbi").value = "";
    document.getElementById("snbi").value = "";
    fuzzySeachNoteBook();
    setNoteBook();
}
function clicktag() {
    var e1 = document.getElementById("new");
    var e2 = document.getElementById("search");
    var e3 = document.getElementById("note");
    var e4 = document.getElementById("notebook");
    var e5 = document.getElementById("tag");
    var e6 = document.getElementById("group");
    e5.style.borderRight = "2px solid white";
    e5.style.borderTop = "2px solid rgb(106,125,126)";
    e5.style.borderBottom = "2px solid rgb(106,125,126)";

    e2.style.borderRight = "0px solid rgb(106,125,126)";
    e2.style.borderTop = "2px solid white";
    e2.style.borderBottom = "2px solid white";

    e3.style.borderRight = "0px solid rgb(106,125,126)";
    e3.style.borderTop = "2px solid white";
    e3.style.borderBottom = "2px solid white";

    e4.style.borderRight = "0px solid rgb(106,125,126)";
    e4.style.borderTop = "2px solid white";
    e4.style.borderBottom = "2px solid white";

    e1.style.borderRight = "0px solid rgb(106,125,126)";
    e1.style.borderTop = "2px solid white";
    e1.style.borderBottom = "2px solid white";

    e6.style.borderRight = "0px solid rgb(106,125,126)";
    e6.style.borderTop = "2px solid white";
    e6.style.borderBottom = "2px solid white";

    document.getElementById("nh").style.display = "none";
    document.getElementById("tn").style.display = "none";
    document.getElementById("newhead").style.display = "none";
    document.getElementById("choicearea").style.display = "none";
    document.getElementById("searchhead").style.display = "none";
    document.getElementById("searresult").style.display = "none";
    document.getElementById("notebookhead").style.display = "none";
    document.getElementById("searchnotebookresult").style.display = "none";
    document.getElementById("taghead").style.display = "block";
    document.getElementById("searchtagresult").style.display = "block";

    document.getElementById("stagi").value = "";
    fuzzySearchTag();
    setTag();
}
function clickgroup() {
    var e1 = document.getElementById("new");
    var e2 = document.getElementById("search");
    var e3 = document.getElementById("note");
    var e4 = document.getElementById("notebook");
    var e5 = document.getElementById("tag");
    var e6 = document.getElementById("group");
    e6.style.borderRight = "2px solid white";
    e6.style.borderTop = "2px solid rgb(106,125,126)";
    e6.style.borderBottom = "2px solid rgb(106,125,126)";

    e2.style.borderRight = "0px solid rgb(106,125,126)";
    e2.style.borderTop = "2px solid white";
    e2.style.borderBottom = "2px solid white";

    e3.style.borderRight = "0px solid rgb(106,125,126)";
    e3.style.borderTop = "2px solid white";
    e3.style.borderBottom = "2px solid white";

    e4.style.borderRight = "0px solid rgb(106,125,126)";
    e4.style.borderTop = "2px solid white";
    e4.style.borderBottom = "2px solid white";

    e5.style.borderRight = "0px solid rgb(106,125,126)";
    e5.style.borderTop = "2px solid white";
    e5.style.borderBottom = "2px solid white";

    e1.style.borderRight = "0px solid rgb(106,125,126)";
    e1.style.borderTop = "2px solid white";
    e1.style.borderBottom = "2px solid white";

    document.getElementById("nh").style.display = "none";
    document.getElementById("tn").style.display = "none";
    document.getElementById("newhead").style.display = "none";
    document.getElementById("choicearea").style.display = "none";
    document.getElementById("searchhead").style.display = "none";
    document.getElementById("searresult").style.display = "none";
    document.getElementById("notebookhead").style.display = "none";
    document.getElementById("searchnotebookresult").style.display = "none";
    document.getElementById("grouphead").style.display = "block";
    document.getElementById("searchgroupresult").style.display = "block";
    document.getElementById("taghead").style.display = "none";
    document.getElementById("searchtagresult").style.display = "none";

    // document.getElementById("notebookname").innerHTML = "笔记本";
    // document.getElementById("searchnotebookresult").innerHTML = "";
    // document.getElementById("addnbi").value = "";
    // document.getElementById("snbi").value = "";
    fuzzysearchUser();
    showAllFollow();
}
function addnewnote() {
    var notenameinput = document.getElementById("nntn").value;
    var contentinput = document.getElementById("nntc").value;
    if (notenameinput == ""){
        alert("笔记名称不能为空");
    }else{
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type:'get',
            url:'/laravel/public/note/addnote',
            data:{
                notename:notenameinput,
                content:contentinput
            },
            success:function (data) {
                if(data.state == "success"){
                    document.getElementById("nntn").value = "";
                    document.getElementById("nntc").value = "";
                    document.getElementById("tn").innerHTML = "";
                    clicknote();
                }else {
                    alert("笔记名称已存在");
                }
            }
        });
    }

}
//笔记模糊搜索
function setFuzzySearch() {
    // var source = ["学习笔记","学习手册"];
    var availableTags= [""];
    $.ajax({
        type:'get',
        async:false,
        url:'/laravel/public/note/fuzzysearch',
        success:function (data) {
            for (var i=0;i<data.length;i++)
                availableTags.push(data[i]['notename']);
        }
    });
    $("#si").autocomplete({
        source:availableTags
    });

}
//搜索笔记按钮
function searchnote() {
    var input = document.getElementById("si").value;
    var titlearray = [];
    var imgIdarrary = [];
    if (input == ""){
        alert("笔记名称不能为空");
    }else {
        $.ajax({
            type: 'get',
            async: false,
            data: {
                input: input
            },
            url: '/laravel/public/note/fuzzySearchNote',
            success: function (data) {
                if (data.length != 0) {
                    var e = document.getElementById("searchhead");
                    e.style.borderBottom = "0px solid #ececec";
                    for (var i = 0; i < data.length; i++) {
                        var title = data[i].notename;
                        var update = data[i]['updatetime'];
                        var notebook = "---";
                        if (data[i]['notebookname'] != null) {
                            notebook = data[i]['notebookname'];
                        }
                        var tag = "---";
                        if (data[i]['tag'] != null) {
                            tag = data[i]['tag'];
                        }
                        // var content = "你还没有笔记哦~";
                        // if (data[i]['content'] != null) {
                        //     content = data[i]['content'];
                        // }
                        var div = document.createElement("div");
                        div.setAttribute("id", "firstNote");
                        var div1 = document.createElement("div");
                        div1.setAttribute("id", "firstNoteTitle");
                        var image = document.createElement("img");
                        image.src = "/laravel/public/img/note/显示详情.png";
                        var imageid = "showNoteInfofromSearch"+i;
                        image.setAttribute("class","snInfo");
                        image.setAttribute("id",imageid);
                        imgIdarrary.push(imageid);
                        titlearray.push(title);
                        var div2 = document.createElement("div");
                        div2.setAttribute("id", "firstNoteUpdateTime");
                        var div3 = document.createElement("div");
                        div3.setAttribute("id", "firstNoteBookAndTag");
                        var div4 = document.createElement("div");
                        div4.setAttribute("id", "firstNoteIntroduction");
                        div1.innerHTML = title;
                        div2.innerHTML = update;
                        div3.innerHTML = "笔记:" + notebook + "//标签:" + tag;
                        div4.innerHTML = "";
                        div.appendChild(div1);
                        div.appendChild(image);
                        div.appendChild(div2);
                        div.appendChild(div3);
                        div.appendChild(div4);
                        var parent = document.getElementById("searresult");
                        parent.appendChild(div);
                    }
                }
            }
        });
        for (var i=0;i<imgIdarrary.length;i++){
            chi(i);
        }
        function chi(m) {
            var e = document.getElementById(imgIdarrary[m]);
            e.onclick = function () {
                checkNoteInfo(titlearray[m]);
            }
        }
    }

}
//笔记本界面设置、新建笔记本、笔记本模糊搜索
function setNoteBook() {
    var imgIdArray = [];
    var idarray = [];
    var titlearray = [];
    $.ajax({
        type:'get',
        async:false,
        url:'/laravel/public/note/getNoteBook',
        success:function (data) {
            if(data.length!=0) {
                document.getElementById("searchnotebookresult").innerHTML = "";
                var e = document.getElementById("notebookhead");
                e.style.borderBottom = "0px solid #ececec";
                for (var i = 0; i < data.length; i++) {
                    var title = data[i]['notebookname'];
                    titlearray.push(title);
                    var update = data[i]['createtime'];
                    var number = data[i]['num'];
                    var div = document.createElement("div");
                    div.setAttribute("id", "secondNote");
                    var div1 = document.createElement("div");
                    div1.setAttribute("id", "firstNoteTitle");
                    var div2 = document.createElement("div");
                    div2.setAttribute("id", "firstNoteUpdateTime");
                    var imgdiv = document.createElement("img");
                    imgdiv.setAttribute("class","sntInfo");
                    imgdiv.src = "/laravel/public/img/note/显示详情.png";
                    var imageId = "showNoteBookInfo"+i;
                    imgdiv.setAttribute("id",imageId);
                    imgIdArray.push(imageId);
                    var div3 = document.createElement("div");
                    div3.setAttribute("id", "firstNoteBookAndTag");
                    var div4 = document.createElement("div");
                    div4.setAttribute("id", "secondNoteIntroduction");
                    var div5 = document.createElement("div");
                    div5.setAttribute("class","looknotebutton");
                    var id = "looknotebutton"+i;
                    idarray.push(id);
                    div5.setAttribute("id",id);
                    div5.innerHTML = "查看";
                    div1.innerHTML = title;
                    div3.innerHTML = "创建时间:"+update;
                    div4.innerHTML = "总共"+number+"条笔记";
                    div.appendChild(div1);
                    div.appendChild(div2);
                    div.appendChild(imgdiv);
                    div.appendChild(div3);
                    div.appendChild(div4);
                    div.appendChild(div5);
                    var parent = document.getElementById("searchnotebookresult");
                    parent.appendChild(div);
                }
            }
        }
    });
    for (var i=0;i<titlearray.length;i++){
        t(i);
    }
    function t(m) {
        var e = document.getElementById(idarray[m]);
        e.onclick = function () {
            turnToNote(titlearray[m]);
        }
    }
    for (var i=0;i<titlearray.length;i++){
        cnbi(i);
    }

    function cnbi(m) {
        var e = document.getElementById(imgIdArray[m]);
        e.onclick = function () {
            checkNoteBookInfo(titlearray[m]);
        }
    }
}
function fuzzySeachNoteBook() {
    var availableTags= [""];
    $.ajax({
        type:'get',
        async:false,
        url:'/laravel/public/note/fuzzySearchNoteBook',
        success:function (data) {
            for (var i=0;i<data.length;i++)
                availableTags.push(data[i]['notebookname']);
        }
    });
    $("#snbi").autocomplete({
        source:availableTags
    });
}
function searchNoteBook() {
    var input = document.getElementById("snbi").value;
    var idarray = [];
    var titlearray = [];
    $.ajax({
        type: 'get',
        url: '/laravel/public/note/searchNoteBook',
        async:false,
        data: {
            searchbookname: input
        },
        success: function (data) {
            // alert(data.state);
            // alert(data[0]['notebookname']);
            if (data.state == "不存在"){
                document.getElementById("searchnotebookresult").innerHTML = "";
            }else{
                document.getElementById("searchnotebookresult").innerHTML = "";
                var e = document.getElementById("notebookhead");
                e.style.borderBottom = "0px solid #ececec";
                // for (var i = 0; i < data.length; i++) {
                    var title = data['notebookname'];
                    titlearray.push(title);
                    var update = data['createtime'];
                    var number = data['num'];
                    var div = document.createElement("div");
                    div.setAttribute("id", "secondNote");
                    var div1 = document.createElement("div");
                    div1.setAttribute("id", "firstNoteTitle");
                    var div2 = document.createElement("div");
                    div2.setAttribute("id", "firstNoteUpdateTime");
                    var div3 = document.createElement("div");
                    div3.setAttribute("id", "firstNoteBookAndTag");
                    var div4 = document.createElement("div");
                    div4.setAttribute("id", "secondNoteIntroduction");
                    var div5 = document.createElement("div");
                    div5.setAttribute("class","looknotebutton");
                    var id = "looknotebutton"+i;
                    idarray.push(id);
                    div5.setAttribute("id",id);
                    div5.innerHTML = "查看";
                    div1.innerHTML = title;
                    div3.innerHTML = "创建时间:"+update;
                    div4.innerHTML = "总共"+number+"条笔记";
                    div.appendChild(div1);
                    div.appendChild(div2);
                    div.appendChild(div3);
                    div.appendChild(div4);
                    div.appendChild(div5);
                    var parent = document.getElementById("searchnotebookresult");
                    parent.appendChild(div);
                }
            }

    });
    for (var i=0;i<titlearray.length;i++){
        t(i);
    }
    function t(m) {
        var e = document.getElementById(idarray[m]);
        e.onclick = function () {
            turnToNote(titlearray[m]);
        }
    }
}
function turnToNote(bn) {
    var name = bn ;
    var titlearray = [];
    var imgIdarrary = [];
    document.getElementById("notebookname").innerHTML = name;
    $.ajax({
        type:'get',
        async:false,
        url:'/laravel/public/note/turn',
        data:{
            bookname: name
        },
        success:function (data) {
            document.getElementById("searchnotebookresult").innerHTML = "";
            if(data.length!=0) {
                document.getElementById("searchnotebookresult").innerHTML = "";
                for (var i = 0; i < data.length; i++) {
                    var title = data[i].notename;
                    var update = data[i]['updatetime'];
                    var notebook = "---";
                    if (data[i]['notebookname'] != null) {
                        notebook = data[i]['notebookname'];
                    }
                    var tag = "---";
                    if (data[i]['tag'] != null) {
                        tag = data[i]['tag'];
                    }
                    // var content = "你还没有笔记哦~";
                    // if (data[i]['content'] != null) {
                    //     content = data[i]['content'];
                    // }
                    var div = document.createElement("div");
                    div.setAttribute("id", "firstNote");
                    var div1 = document.createElement("div");
                    div1.setAttribute("id", "firstNoteTitle");
                    var image = document.createElement("img");
                    image.src = "/laravel/public/img/note/显示详情.png";
                    var imageid = "showNoteInfofrombook"+i;
                    image.setAttribute("class","snInfo");
                    image.setAttribute("id",imageid);
                    imgIdarrary.push(imageid);
                    titlearray.push(title);
                    var div2 = document.createElement("div");
                    div2.setAttribute("id", "firstNoteUpdateTime");
                    var div3 = document.createElement("div");
                    div3.setAttribute("id", "firstNoteBookAndTag");
                    var div4 = document.createElement("div");
                    div4.setAttribute("id", "firstNoteIntroduction");
                    div1.innerHTML = title;
                    div2.innerHTML = update;
                    div3.innerHTML = "笔记:" + notebook + "//标签:" + tag;
                    div4.innerHTML = "";
                    div.appendChild(div1);
                    div.appendChild(image);
                    div.appendChild(div2);
                    div.appendChild(div3);
                    div.appendChild(div4);
                    var parent = document.getElementById("searchnotebookresult");
                    parent.appendChild(div);
                }
            }
        }
    });
    for (var i=0;i<imgIdarrary.length;i++){
        cni(i);
    }
    function cni(m) {
        var e = document.getElementById(imgIdarrary[m]);
        e.onclick = function () {
            checkNoteInfo(titlearray[m]);
        }
    }
}
function addNewNoteBook() {
    var input = document.getElementById("addnbi").value;
    document.getElementById("addnbi").value = "";
    var date = new Date();
    var createtime = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    $.ajax({
        type:'get',
        url:'/laravel/public/note/addnotebook',
        data:{
            newbookname: input,
            createtime: createtime
        },
        success:function (data) {
            if (data.state == "yes"){
                setNoteBook();
            }else {
                alert("笔记本名称已存在");
            }
        }
    });
}
//标签界面设置、新建标签、通过标签搜索笔记
function setTag() {
    var idarray = [];
    var tagarray = [];
    $.ajax({
        type: 'get',
        async: false,
        url: '/laravel/public/note/setTag',
        success: function (data) {
            document.getElementById("searchtagresult").innerHTML = "";
            if (data.length>0){
                document.getElementById("searchtagresult").innerHTML = "";
                document.getElementById("taghead").style.borderBottom = "0px solid #ececec";
                for (var i=0;i<data.length;i++){
                    var tag = data[i];
                    tagarray.push(tag);
                    var div = document.createElement("div");
                    div.setAttribute("id", "onetag");
                    var div1 = document.createElement("input");
                    div1.setAttribute("id", "tagtitle");
                    div1.readOnly = "true";
                    var div2 = document.createElement("div");
                    div2.setAttribute("class", "tsnote");
                    var id = "tsn"+i;
                    idarray.push(id);
                    div2.setAttribute("id",id);
                    div1.value = tag;
                    div2.innerHTML = "搜索";
                    div.appendChild(div1);
                    div.appendChild(div2);
                    var parent = document.getElementById("searchtagresult");
                    parent.appendChild(div);
                }
            }


        }
    });
    for (var i=0;i<tagarray.length;i++){
        t(i);
    }
    function t(m) {
        var e = document.getElementById(idarray[m]);
        e.onclick = function () {
            searchNoteByTage(tagarray[m]);
        }
    }
}
function searchNoteByTage(tag) {
    var tagname = tag;
    var titlearray = [];
    var imgIdarrary = [];
    document.getElementById("tagname").innerHTML = tagname;
    $.ajax({
        type: 'get',
        async:false,
        url: '/laravel/public/note/searchNoteByTag',
        data: {
            bytagname: tagname
        },
        success: function (data) {
            document.getElementById("searchtagresult").innerHTML = "";
            if(data.length!=0) {
                document.getElementById("searchtagresult").innerHTML = "";
                for (var i = 0; i < data.length; i++) {
                    var title = data[i]['notename'];
                    var update = data[i]['updatetime'];
                    var notebook = "---";
                    if (data[i]['notebookname'] != null) {
                        notebook = data[i]['notebookname'];
                    }
                    var tag = "---";
                    if (data[i]['tag'] != null) {
                        tag = data[i]['tag'];
                    }
                    // var content = "你还没有笔记哦~";
                    // if (data[i]['content'] != null) {
                    //     content = data[i]['content'];
                    // }
                    var div = document.createElement("div");
                    div.setAttribute("id", "firstNote");
                    var div1 = document.createElement("div");
                    div1.setAttribute("id", "firstNoteTitle");
                    var image = document.createElement("img");
                    image.src = "/laravel/public/img/note/显示详情.png";
                    var imageid = "showNoteInfofromtag"+i;
                    image.setAttribute("class","snInfo");
                    image.setAttribute("id",imageid);
                    imgIdarrary.push(imageid);
                    titlearray.push(title);
                    var div2 = document.createElement("div");
                    div2.setAttribute("id", "firstNoteUpdateTime");
                    var div3 = document.createElement("div");
                    div3.setAttribute("id", "firstNoteBookAndTag");
                    var div4 = document.createElement("div");
                    div4.setAttribute("id", "firstNoteIntroduction");
                    div1.innerHTML = title;
                    div2.innerHTML = update;
                    div3.innerHTML = "笔记:" + notebook + "//标签:" + tag;
                    div4.innerHTML = "";
                    div.appendChild(div1);
                    div.appendChild(image);
                    div.appendChild(div2);
                    div.appendChild(div3);
                    div.appendChild(div4);
                    var parent = document.getElementById("searchtagresult");
                    parent.appendChild(div);
                }
            }
        }
    });
    for (var i=0;i<imgIdarrary.length;i++){
        cni(i);
    }
    function cni(m) {
        var e = document.getElementById(imgIdarrary[m]);
        e.onclick = function () {
            checkNoteInfo(titlearray[m]);
        }
    }

}
function fuzzySearchTag() {
    var availableTags= [""];
    $.ajax({
        type:'get',
        async:false,
        url:'/laravel/public/note/fuzzySearchTag',
        success:function (data) {
            for (var i=0;i<data.length;i++)
                availableTags.push(data[i]);
        }
    });
    $("#stagi").autocomplete({
        source:availableTags
    });
}
function searchTag() {
    var input = document.getElementById("stagi").value;
    var idarray = [];
    var tagarray = [];
    $.ajax({
        type:'get',
        async:false,
        data:{
            tagname: input
        },
        url:'/laravel/public/note/searchTag',
        success:function (data) {
            // document.getElementById("searchtagresult").innerHTML = "";
            // if (data.length>0){
                document.getElementById("searchtagresult").innerHTML = "";
                document.getElementById("taghead").style.borderBottom = "0px solid #ececec";
                // for (var i=0;i<data.length;i++){
                    var tag = data[0]['tag'];
                    tagarray.push(tag);
                    var div = document.createElement("div");
                    div.setAttribute("id", "onetag");
                    var div1 = document.createElement("input");
                    div1.setAttribute("id", "tagtitle");
                    div1.readOnly = "true";
                    var div2 = document.createElement("div");
                    div2.setAttribute("class", "tsnote");
                    var id = "tsn"+i;
                    idarray.push(id);
                    div2.setAttribute("id",id);
                    div1.value = tag;
                    div2.innerHTML = "搜索";
                    div.appendChild(div1);
                    div.appendChild(div2);
                    var parent = document.getElementById("searchtagresult");
                    parent.appendChild(div);
                }
            // }
        // }
    });
    for (var i=0;i<tagarray.length;i++){
        t(i);
    }
    function t(m) {
        var e = document.getElementById(idarray[m]);
        e.onclick = function () {
            searchNoteByTage(tagarray[m]);
        }
    }
}
function addTag() {
    var input = document.getElementById("addtagi").value;
    document.getElementById("addtagi").value = "";
    $.ajax({
        type:'get',
        url:'/laravel/public/note/addTag',
        data:{
            newtag: input
        },
        success:function (data) {
            if (data.state == "yes"){
                setTag();
            }else {
                alert(data.state);
            }
        }
    });
}
function toPersonview() {
    window.location.href = "/laravel/public/userinfo";
}
//笔记信息查看修改
function checkNoteInfo(notetitle) {
    $.ajax({
        type: 'get',
        async: false,
        url: '/laravel/public/note/checkNoteInfo',
        data: {
            notetitle: notetitle
        },
        success: function (data) {
            document.getElementById("rightsave").style.display = "block";
            document.getElementById("rightpdf").style.display = "block";
            document.getElementById("rightshare").style.display = "block";
            document.getElementById("rightdelete").style.display = "block";
            if (data.note[0]['state'] == "public"){
                document.getElementById("rightshare").style.display = "none";
            }
            document.getElementById("rightbar").style.display = "none";
            document.getElementById("rightbar1").style.display = "block";
            document.getElementById("rightbar2").style.display = "none";
            document.getElementById("rightnotetitle").innerHTML = data.note[0]['notename'];
            var div = document.getElementById("rightnotebookname");
            // document.getElementById("rightnotebookname").innerHTML = data[0]['notebookname'];
            if (document.getElementById('select') == null) {
                var select = document.createElement("select");
                select.setAttribute("id", "select");
                for (var i = 0; i < data.notebook.length; i++) {
                    var option = document.createElement("option");
                    option.innerHTML = data.notebook[i]['notebookname'];
                    if(data.notebook[i]['notebookname'] == data.note[0]['notebookname']){
                        select.selectedIndex = i;
                    }
                    select.appendChild(option);
                }
                var option = document.createElement("option");
                option.innerHTML = "暂无笔记本";
                select.appendChild(option);
                div.appendChild(select);
            }else{
                var found = false;
                for (var i = 0; i < data.notebook.length; i++) {
                    var select = document.getElementById("select");
                    if(data.notebook[i]['notebookname'] == data.note[0]['notebookname']){
                        select.selectedIndex = i;
                        found = true;
                    }
                }
                if (!found){
                    select.selectedIndex = data.notebook.length;
                }
            }

            if (data.note[0]['notebookname'] != null) {
                document.getElementById("righttagname").value = data.note[0]['tag'];
            }else {
                document.getElementById("righttagname").value = "";
            }
            var var1 = data.note[0]['content'];
            if (var1 != "") {
                editor.setContents(eval('(' + var1 + ')'));
            }else{
                editor.setText("");
            }
            //editor.setText(data[0]['content']+'\n')
        }
    });
}
function saveNote() {
    var notetitle = document.getElementById('rightnotetitle').textContent;
    var content = JSON.stringify(editor.getContents());
    $.ajax({
        type: 'post',
        async: false,
        url: '/laravel/public/note/saveNote',
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        data: {
            notetitle: notetitle,
            content: content
        },
        success: function (data) {
            saveTag(notetitle);
            saveBelongToNoteBook(notetitle);
            alert(data.state);
            clicknote();
        }
    });

    //editor.setContents(eval('(' + var1 + ')'));
}
function saveTag(notetitle) {
    var tag = document.getElementById('righttagname').value;
    $.ajax({
        type: 'get',
        async: false,
        url: '/laravel/public/note/saveTag',
        data: {
            notetitle: notetitle,
            tag: tag
        },
        success: function (data) {

        }
    });
}
function saveBelongToNoteBook(notetitle) {
    var notebook = document.getElementById('select').value;
    $.ajax({
        type: 'get',
        async: false,
        url: '/laravel/public/note/saveBelongNoteBook',
        data: {
            notetitle: notetitle,
            notebook: notebook
        },
        success: function (data) {

        }
    });
}
function deleteNote() {
    var notetitle = document.getElementById('rightnotetitle').textContent;
    $.ajax({
        type: 'get',
        async: false,
        url: '/laravel/public/note/deleteNote',
        data: {
            notetitle: notetitle
        },
        success: function (data) {
            alert(data.state);
            clicknote();
        }
    });
}
function shareNote() {
    var title = document.getElementById("rightnotetitle").textContent;
    $.ajax({
        type: 'get',
        async: false,
        data:{
            notetitle: title
        },
        url: '/laravel/public/note/shareNote',
        success: function (data) {
            alert(data.state);
            getAllMyShares();
            checkNoteInfo(title);
        }
    });

}
function getAllMyShares() {
    document.getElementById("rightbar").style.display = "block";
    document.getElementById("rightbar1").style.display = "none";
    document.getElementById("rightbar2").style.display = "none";
    var title;
    var titlearray = [];
    var imgidarrary = [];
    $.ajax({
        type:'get',
        async:false,
        url:'/laravel/public/note/getnote',
        success:function (data) {
            document.getElementById("tn").innerHTML = "";
            if(data.length!=0) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i]['state'] == "public") {
                        var title = data[i].notename;
                        var update = data[i]['updatetime'];
                        var notebook = "---";
                        if (data[i]['notebookname'] != null) {
                            notebook = data[i]['notebookname'];
                        }
                        var tag = "---";
                        if (data[i]['tag'] != null) {
                            tag = data[i]['tag'];
                        }
                        // var content = "你还没有笔记哦~";
                        // if (data[i]['content'] != null) {
                        //     content = data[i]['content'];
                        // }
                        var div = document.createElement("div");
                        div.setAttribute("id", "firstNote");
                        var div1 = document.createElement("div");
                        div1.setAttribute("id", "firstNoteTitle");
                        var image = document.createElement("img");
                        image.src = "/laravel/public/img/note/显示详情.png";
                        var imageid = "showNoteInfo" + i;
                        imgidarrary.push(imageid);
                        titlearray.push(title);
                        image.setAttribute("class", "snInfo");
                        image.setAttribute("id", imageid);
                        var div2 = document.createElement("div");
                        div2.setAttribute("id", "firstNoteUpdateTime");
                        var div3 = document.createElement("div");
                        div3.setAttribute("id", "firstNoteBookAndTag");
                        var div4 = document.createElement("div");
                        div4.setAttribute("id", "firstNoteIntroduction");
                        div1.innerHTML = title;
                        div2.innerHTML = update;
                        div3.innerHTML = "笔记:" + notebook + "//标签:" + tag;
                        div4.innerHTML = "";
                        div.appendChild(div1);
                        div.appendChild(image);
                        div.appendChild(div2);
                        div.appendChild(div3);
                        div.appendChild(div4);
                        var parent = document.getElementById("tn");
                        parent.appendChild(div);
                    }
                }
            }
        }
    });
    for (var i=0;i<imgidarrary.length;i++){
        chi(i);
    }
    function chi(m) {
        var e = document.getElementById(imgidarrary[m]);
        e.onclick = function () {
            checkNoteInfo(titlearray[m]);
        }
    }
}
//笔记本信息查看修改
function checkNoteBookInfo(notebooktitle) {
    $.ajax({
        type: 'get',
        async:false,
        url: '/laravel/public/note/checkNoteBookInfo',
        data: {
            notebooktitle: notebooktitle
        },
        success: function (data) {
            document.getElementById("rightbar").style.display = "none";
            document.getElementById("rightbar1").style.display = "none";
            document.getElementById("rightbar2").style.display = "block";
            document.getElementById("afterit").value = data[0]['notebookname'];
            document.getElementById("rightnotebookname").innerHTML = data[0]['notebookname'];
            document.getElementById("afteriu").value = data[0]['username'];
            document.getElementById("afteritt").value = data[0]['createtime'];
        }
    });
    originbookname = document.getElementById("afterit").value;
}
function saveNoteBook() {
    var notebookname = document.getElementById("afterit").value;
    $.ajax({
        type: 'get',
        async: false,
        url: '/laravel/public/note/saveNoteBook',
        data: {
            originname: originbookname,
            notebookname: notebookname
        },
        success: function (data) {
            alert(data.state);
            clicknotebook();
        }
    });
}
function deleteNoteBook() {
    var notebookname = document.getElementById("afterit").value;
    $.ajax({
        type: 'get',
        async: false,
        url: '/laravel/public/note/deleteNoteBook',
        data: {
            notebookname: notebookname
        },
        success: function (data) {
            alert(data.state);
        }
    });
    document.getElementById("rightbar2").style.display = "none";
    setNoteBook();
}
function toPDF() {
    var doc = new jsPDF('landscape','pt',[205, 155])
    html2canvas(document.getElementById('rightbar1'),{
        onrendered:function (canvas) {
            var pageData = canvas.toDataURL('image/jpeg', 1.0);
            doc.addImage(pageData,'PNG',0, 40, 205,155);
            doc.save('a4.pdf')
        }
    })
}
function screenShot() {
    var doc = new jsPDF('landscape','pt',[500, 280]);
    html2canvas(document.body,{
        onrendered:function (canvas) {
            var pageData = canvas.toDataURL('image/jpeg', 1.0);
            doc.addImage(pageData,'PNG',0, 0, 500,280);
            doc.save('screen.pdf')
        }
    })
}
var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean'],                                    // remove formatting button
    ['link'],['image']
];
var editor = new Quill('#editor', {
    modules: { toolbar: toolbarOptions },
    theme: 'snow'
});
//群组信息
function fuzzysearchUser() {
    var availableTags= [];
    $.ajax({
        type:'get',
        async:false,
        url:'/laravel/public/group/fuzzySearch',
        success:function (data) {
            for (var i=0;i<data.length;i++)
                availableTags.push(data[i]['username']);
        }
    });
    $("#sgroup").autocomplete({
        source:availableTags
    });
}
function showAllFollow(){
    var idarray = [];
    var tagarray = [];
    $.ajax({
        type: 'get',
        async: false,
        url: '/laravel/public/group/showAllfollows',
        success: function (data) {
            document.getElementById("searchgroupresult").innerHTML = "";
            if (data.length>0){
                for (var i=0;i<data.length;i++){
                    var fu = data[i]['followusername'];
                    tagarray.push(fu);
                    var div = document.createElement("div");
                    div.setAttribute("id", "oneuser");
                    var div1 = document.createElement("input");
                    div1.setAttribute("id", "un");
                    div1.readOnly = "true";
                    var div2 = document.createElement("div");
                    div2.setAttribute("class", "tsnote");
                    var id = "fun"+i;
                    idarray.push(id);
                    div2.setAttribute("id",id);
                    div1.value = fu;
                    div2.innerHTML = "查看";
                    div.appendChild(div1);
                    div.appendChild(div2);
                    var parent = document.getElementById("searchgroupresult");
                    parent.appendChild(div);
                }
            }


        }
    });
    for (var i=0;i<tagarray.length;i++){
        t(i);
    }
    function t(m) {
        var e = document.getElementById(idarray[m]);
        e.onclick = function () {
            checkShareNote(tagarray[m]);
        }
    }
}
function checkShareNote(username) {
    var userarray = [];
    var titlearray = [];
    var imgidarrary = [];
    $.ajax({
        type:'get',
        async:false,
        data:{
          user: username
        },
        url:'/laravel/public/group/checkOtherFollow',
        success:function (data) {
            if(data.length!=0) {
                for (var i = 0; i < data.length; i++) {
                    var title = data[i]['notename'];
                    var update = data[i]['updatetime'];
                    var notebook = "---";
                    if (data[i]['notebookname'] != null) {
                        notebook = data[i]['notebookname'];
                    }
                    var tag = "---";
                    if (data[i]['tag'] != null) {
                        tag = data[i]['tag'];
                    }
                    // var content = "你还没有笔记哦~";
                    // if (data[i]['content'] != null) {
                    //     content = data[i]['content'];
                    // }
                    var div = document.createElement("div");
                    div.setAttribute("id", "firstNote");
                    var div1 = document.createElement("div");
                    div1.setAttribute("id", "firstNoteTitle");
                    var image = document.createElement("img");
                    image.src = "/laravel/public/img/note/显示详情.png";
                    var imageid = "of"+i;
                    userarray.push(data[i]['username']);
                    imgidarrary.push(imageid);
                    titlearray.push(title);
                    image.setAttribute("class","snInfo");
                    image.setAttribute("id",imageid);
                    var div2 = document.createElement("div");
                    div2.setAttribute("id", "firstNoteUpdateTime");
                    var div3 = document.createElement("div");
                    div3.setAttribute("id", "firstNoteBookAndTag");
                    var div4 = document.createElement("div");
                    div4.setAttribute("id", "firstNoteIntroduction");
                    div1.innerHTML = title;
                    div2.innerHTML = update;
                    div3.innerHTML = "笔记:" + notebook + "//标签:" + tag;
                    div4.innerHTML = "";
                    div.appendChild(div1);
                    div.appendChild(image);
                    div.appendChild(div2);
                    div.appendChild(div3);
                    div.appendChild(div4);
                    var parent = document.getElementById("searchgroupresult");
                    document.getElementById("searchgroupresult").innerHTML = "";
                    parent.appendChild(div);
                }
            }
        }
    });
    for (var i=0;i<imgidarrary.length;i++){
        chi(i);
    }
    function chi(m) {
        var e = document.getElementById(imgidarrary[m]);
        e.onclick = function () {
            checkNoteInfo2(userarray[m],titlearray[m]);
        }
    }
}
function checkNoteInfo2(username,notetitle) {
    $.ajax({
        type: 'get',
        async: false,
        url: '/laravel/public/group/checkNoteInfo',
        data: {
            user: username,
            notetitle: notetitle
        },
        success: function (data) {
            document.getElementById("rightsave").style.display = "none";
            document.getElementById("rightpdf").style.display = "none";
            document.getElementById("rightshare").style.display = "none";
            document.getElementById("rightdelete").style.display = "none";
            document.getElementById("rightbar").style.display = "none";
            document.getElementById("rightbar1").style.display = "block";
            document.getElementById("rightbar2").style.display = "none";
            document.getElementById("rightnotetitle").innerHTML = data.note[0]['notename'];
            var div = document.getElementById("rightnotebookname");
            // document.getElementById("rightnotebookname").innerHTML = data[0]['notebookname'];
            if (document.getElementById('select') == null) {
                var select = document.createElement("select");
                select.setAttribute("id", "select");
                for (var i = 0; i < data.notebook.length; i++) {
                    var option = document.createElement("option");
                    option.innerHTML = data.notebook[i]['notebookname'];
                    if(data.notebook[i]['notebookname'] == data.note[0]['notebookname']){
                        select.selectedIndex = i;
                    }
                    select.appendChild(option);
                }
                var option = document.createElement("option");
                option.innerHTML = "暂无笔记本";
                select.appendChild(option);
                div.appendChild(select);
            }else{
                var found = false;
                for (var i = 0; i < data.notebook.length; i++) {
                    var select = document.getElementById("select");
                    if(data.notebook[i]['notebookname'] == data.note[0]['notebookname']){
                        select.selectedIndex = i;
                        found = true;
                    }
                }
                if (!found){
                    select.selectedIndex = data.notebook.length;
                }
            }

            if (data.note[0]['notebookname'] != null) {
                document.getElementById("righttagname").value = data.note[0]['tag'];
            }else {
                document.getElementById("righttagname").value = "";
            }
            var var1 = data.note[0]['content'];
            if (var1 != "") {
                editor.setContents(eval('(' + var1 + ')'));
            }else{
                editor.setText("");
            }
            //editor.setText(data[0]['content']+'\n')
        }
    });
}
function recOtherUsers() {
    var idarray = [];
    var tagarray = [];
    $.ajax({
        type: 'get',
        async: false,
        url: '/laravel/public/group/recOtherUsers',
        success: function (data) {
            document.getElementById("searchgroupresult").innerHTML = "";
            if (data.length>0){
                for (var i=0;i<data.length;i++){
                    var fu = data[i]['username'];
                    tagarray.push(fu);
                    var div = document.createElement("div");
                    div.setAttribute("id", "oneuser");
                    var div1 = document.createElement("input");
                    div1.setAttribute("id", "un");
                    div1.readOnly = "true";
                    var div2 = document.createElement("div");
                    div2.setAttribute("class", "tsnote");
                    var id = "addfollow"+i;
                    idarray.push(id);
                    div2.setAttribute("id",id);
                    div1.value = fu;
                    div2.innerHTML = "关注";
                    div.appendChild(div1);
                    div.appendChild(div2);
                    var parent = document.getElementById("searchgroupresult");
                    parent.appendChild(div);
                }
            }


        }
    });
    for (var i=0;i<tagarray.length;i++){
        t(i);
    }
    function t(m) {
        var e = document.getElementById(idarray[m]);
        e.onclick = function () {
            addfollows(tagarray[m]);
        }
    }
}
function addfollows(fname) {
    $.ajax({
        type: 'get',
        async: false,
        data:{
            followname:fname
        },
        url: '/laravel/public/group/addFollow',
        success: function (data) {
            alert(data);
            alert(data.state);
            clickgroup();
        }
    });
}
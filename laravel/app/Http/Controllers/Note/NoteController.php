<?php

namespace App\Http\Controllers\Note;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Expr\Array_;

class NoteController extends Controller
{
    public function main()
    {
        $username = session('username');
        $data = DB::table("userinfo")->where('username',$username)->get();
        $num = DB::table("noteInfo")->where('username',$data[0]['username'])->count();
        return view('note/note',['num'=>$num]);
    }

    public function getNote()
    {
        $username = session('username');
        $condition = DB::table("userinfo")->where('username',$username)->get();
        $data = DB::table("noteInfo")->where('username',$condition[0]['username'])->get();
//        $noteInfo = DB::table("noteInfo")->get();
        return response()->json($data);
    }

    public function insertNewNote(Request $request)
    {
        $state = null;
        $username = session('username');
        $notename = $request->input("notename");
        date_default_timezone_set('PRC');
        $updatetime = "20".date('y-m-d H:i:s',time());
        $condition = DB::table("userinfo")->where("username",$username)->get();
        $data = DB::table("noteInfo")->where("username",$condition[0]['username'])->get();
        $count = DB::table("noteInfo")->where("username",$condition[0]['username'])->count();
        $num = DB::table("noteInfo")->count();
        $allnote = DB::table("noteInfo")->get();
        $num--;
        $index = $allnote[$num]['nid'];
        $exist = false;
        if ($count != 0) {
            for ($i = 0; $i < $count; $i++) {
                if ($notename == $data[$i]['notename']) {
                    $exist = true;
                    break;
                }
            }
        }
        if (!$exist){
            $state = "success";
            $index++;
            $result = DB::table("noteInfo")->insert(
                ['nid'=>$index,'notename'=>$notename,'tag'=>null,'notebookname'=>null,'content'=>"",'updatetime'=>$updatetime,'username'=>session('username')]);

        }else{
            $state = "failure";
        }


        return response()->json(array('state'=>$state),200);

    }

    public function setFuzzySearch()
    {
        $data = array();
        $userid = DB::table("userinfo")->where("username",session('username'))->get();
        $note = DB::table("noteInfo")->where("username",$userid[0]['username'])->get();
        for ($i=0;$i<sizeof($note);$i++){
            array_push($data,$note[$i]);
        }
        return response()->json($data,200);
    }

    public function fuzzySearchNote(Request $request)
    {
        $totalnote = array();
        $input = $request->input("input");
        $username = session("uesrname");
        $userid = DB::table("userinfo")->where("username",session('username'))->get();
        $note = DB::table("noteInfo")->where("username",$userid[0]['username'])->get();
        for ($i=0;$i<sizeof($note);$i++){
            $index = explode($input,$note[$i]['notename']);
            if (count($index)>1){
                array_push($totalnote,$note[$i]);
            }
        }
        return response()->json($totalnote,200);
    }

    public function getNoteBook()
    {
        $totalNoteBook = array();
        $username = session("uesrname");
        $userid = DB::table("userinfo")->where("username",session('username'))->get();
        $note = DB::table("noteInfo")->where("username",$userid[0]['username'])->get();
        $notebook = DB::table("notebookInfo")->where("username",$userid[0]['username'])->get();
        for ($i=0;$i<sizeof($notebook);$i++){
                $count = 0;
                for ($j=0;$j<sizeof($note);$j++){
                    if ($note[$j]['notebookname'] == $notebook[$i]['notebookname']){
                        $count++;
                    }
                }
                $data = ['notebookname'=>$notebook[$i]['notebookname'],'createtime'=>$notebook[$i]['createtime'],'num'=>$count];
                array_push($totalNoteBook,$data);
        }
        return response()->json($totalNoteBook,200);
    }

    public function turnToNote(Request $request)
    {
        $totalnote = array();
        $notebookname = $request->input('bookname');
        $userid = DB::table("userinfo")->where("username",session('username'))->get();
        $note = DB::table("noteInfo")->where("username",$userid[0]['username'])->get();
        for ($i=0;$i<sizeof($note);$i++){
            if ($note[$i]['notebookname'] == $notebookname)
                array_push($totalnote,$note[$i]);
        }

        return response()->json($totalnote,200);
    }

    public function addNoteBook(Request $request)
    {
        $state = null;
        $notebookname = $request->input('newbookname');
        $createtime = $request->input('createtime');
        $userid = DB::table("userinfo")->where("username",session('username'))->get();
//        $num = DB::table("notebookInfo")->count();
        $allnotebook = DB::table("notebookInfo")->get();
        $maxnotebook = $allnotebook[sizeof($allnotebook)-1]['nbid'];
        $notebook = DB::table("notebookInfo")->where("username",$userid[0]['username'])->get();
        $exist = false;
        $result = false;
        for ($i=0;$i<sizeof($notebook);$i++){
            if ($notebook[$i]['notebookname'] == $notebookname) {
                $exist = true;
                break;
            }
        }
        if (!$exist){
            $maxnotebook++;
            $result = DB::table("notebookInfo")->insert(['nbid'=>$maxnotebook,'notebookname'=>$notebookname,'createtime'=>$createtime,'username'=>$userid[0]['username']]);
            if ($result){
                $state = "yes";
            }else{
                $state = "no";
            }
        }

        return response()->json(array('state'=>$state),200);
    }

    public function fuzzySearchNoteBook()
    {
        $userid = DB::table("userinfo")->where("username",session('username'))->get();
        $notebook = DB::table("notebookInfo")->where("username",$userid[0]['username'])->get();

        return response()->json($notebook,200);
    }

    public function searchNoteBook(Request $request)
    {
        $notebookname = $request->input('searchbookname');
        $userid = DB::table("userinfo")->where("username",session('username'))->get();
        $notebook = DB::table("notebookInfo")->where("username",$userid[0]['username'])->get();
        $exist = false;
        $index = 0;
        for ($i=0;$i<sizeof($notebook);$i++){
            if ($notebook[$i]['notebookname'] == $notebookname){
                $exist = true;
                $index = $i;
                break;
            }
        }
        $note = DB::table("noteInfo")->where("username",$userid[0]['username'])->get();
        $count = 0;
        for ($j = 0; $j < sizeof($note); $j++) {
            if ($note[$j]['notebookname'] == $notebook[$index]['notebookname']) {
                $count++;
            }
        }
        if ($exist){
            return response()->json(array('notebookname'=>$notebook[$index]['notebookname'],'createtime'=>$notebook[$index]['createtime'],'num'=>$count),200);
        }

        return response()->json(array('state'=>$notebookname),200);
    }

    public function setTag()
    {
        $totaltag = array();
        $userid = DB::table("userinfo")->where("username",session('username'))->get();
        $tag = DB::table("taginfo")->where("username",$userid[0]['username'])->get();
        for ($i=0;$i<sizeof($tag);$i++){
            array_push($totaltag,$tag[$i]['tagname']);
        }

        return response()->json($totaltag,200);

    }

    public function searchNoteByTag(Request $request)
    {
        $totalnote = array();
        $tag = $request->input('bytagname');
        $userid = DB::table("userinfo")->where("username",session('username'))->get();
        $note = DB::table("noteInfo")->where("username",$userid[0]['username'])->get();
        for ($i=0;$i<sizeof($note);$i++){
            if ($note[$i]['tag'] == $tag){
                array_push($totalnote,$note[$i]);
            }
        }

            return response()->json($totalnote,200);
    }

    public function fuzzySearchTag()
    {
        $userid = DB::table("userinfo")->where("username",session('username'))->get();
        $note = DB::table("noteInfo")->where("username",$userid[0]['username'])->get();
        $totaltag = array();
        for ($i=0;$i<sizeof($note);$i++){
            if(!in_array($note[$i]['tag'],$totaltag)){
                array_push($totaltag,$note[$i]['tag']);
            }
        }

        return response()->json($totaltag,200);
    }

    public function searchTag(Request $request)
    {
        $totalnote = array();
        $tag = $request->input('tagname');
        $userid = DB::table("userinfo")->where("username",session('username'))->get();
        $note = DB::table("noteInfo")->where("username",$userid[0]['username'])->get();
        for ($i=0;$i<sizeof($note);$i++){
            if($note[$i]['tag'] == $tag){
                array_push($totalnote,$note[$i]);
            }
        }

        return response()->json($totalnote,200);
    }

    public function addTag(Request $request)
    {
        $state = null;
        $exist = false;
        $newtag = $request->input('newtag');
        $userid = DB::table("userinfo")->where("username",session('username'))->get();
        $num = DB::table("taginfo")->count();
        $tag = DB::table("taginfo")->where("username",$userid[0]['username'])->get();
        for ($i=0;$i<sizeof($tag);$i++){
            if($tag[$i]['tagname'] == $newtag){
                $exist = true;
                break;
            }
        }

        if (!$exist){
            $num++;
            $result = DB::table("taginfo")->insert(['tid'=>$num,'tagname'=>$newtag,'username'=>$userid[0]['username']]);
            if ($result){
                $state = "yes";
            }
        }else{
            $state = "该标签已存在";
        }

        return response()->json(array('state'=>$state),200);
    }

    public function checkNoteInfo(Request $request)
    {
        $title = $request->input('notetitle');
        $note = DB::table("noteInfo")->where(["username"=>session('username'),"notename"=>$title])->get();
        $notebook = DB::table("notebookInfo")->where(["username"=>session('username')])->get();

        return response()->json(array('note'=>$note,'notebook'=>$notebook),200);
    }

    public function checkNoteBookInfo(Request $request)
    {
        $title = $request->input('notebooktitle');
        session(['notebookname'=>$title]);
        $notebook = DB::table("notebookInfo")->where(["username"=>session('username'),"notebookname"=>$title])->get();

        return response()->json($notebook,200);
    }

    public function saveNoteBook(Request $request)
    {
        $state = null;
        $originname = $request->input('originname');
        $newname = $request->input('notebookname');
        $result = DB::table("notebookInfo")->where(["username"=>session('username'),"notebookname"=>session('notebookname')])
            ->update(["notebookname"=>$newname]);
        session(['notebookname'=>$newname]);
        $allnote = DB::table("noteInfo")->where(["username"=>session('username'),"notebookname"=>$originname])
            ->update(["notebookname"=>$newname]);
        if ($result){
            $state = "保存成功";
        }else{
            $state = "保存失败";
        }
        return response()->json(array('state'=>$state),200);
    }

    public function deleteNoteBook(Request $request)
    {
        $state = null;
        $notebook = $request->input('notebookname');
        $result = DB::table("notebookInfo")->where(["username"=>session('username'),"notebookname"=>$notebook])->delete();

        if ($result){
            $state = "删除成功";
        }else{
            $state = "删除失败";
        }
        return response()->json(array('state'=>$state),200);
    }

    public function saveNote(Request $request)
    {
        $state = null;
        $notetitle = $request->input('notetitle');
        $content = $request->input('content');
        $result = DB::table("noteInfo")->where(["username"=>session('username'),"notename"=>$notetitle])
            ->update(["content"=>$content]);
        if ($result){
            $state = "保存成功";
        }else{
            $state = "保存失败";
        }
        return response()->json(array('state'=>$state),200);
    }

    public function saveTag(Request $request)
    {
        $notetitle = $request->input('notetitle');
        $tag = $request->input('tag');
        $result = DB::table("noteInfo")->where(["username"=>session('username'),"notename"=>$notetitle])
            ->update(["tag"=>$tag]);
        if ($result){
            $exist = false;
            $allusertag = DB::table("taginfo")->where(["username"=>session('username')])->get();
            for ($i=0;$i<sizeof($allusertag);$i++){
                if ($tag == $allusertag[$i]['tagname']){
                    $exist = true;
                }
            }
            if (!$exist){
                $alltag = DB::table("taginfo")->get();
                $num = sizeof($alltag);
                $num++;
                $result1 = DB::table("taginfo")->insert(['tid'=>$num,'tagname'=>$tag,'username'=>session('username')]);
            }
        }
    }

    public function deleteNote(Request $request)
    {
        $state = null;
        $notetitle = $request->input('notetitle');
        $result = DB::table("noteInfo")->where(["username"=>session('username'),"notename"=>$notetitle])
            ->delete();
        if ($result){
            $state = "删除成功";
        }else{
            $state = "删除失败";
        }
        return response()->json(array('state'=>$state),200);
    }

    public function saveBelongNoteBook(Request $request)
    {
        $notetitle = $request->input('notetitle');
        $notebook = $request->input('notebook');
        $result = DB::table("noteInfo")->where(["username"=>session('username'),"notename"=>$notetitle])
            ->update(["notebookname"=>$notebook]);
    }

    public function shareNote(Request $request)
    {
        $state = null;
        $notetitle = $request->input('notetitle');
        $result = DB::table("noteInfo")->where(["username"=>session('username'),"notename"=>$notetitle])
            ->update(["state"=>"public"]);
        if ($result){
            $state = "分享成功";
        }else{
            $state = "分享失败";
        }
        return response()->json(array('state'=>$state),200);
    }
}

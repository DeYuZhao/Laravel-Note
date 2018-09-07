<?php

namespace App\Http\Controllers\Group;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Expr\Array_;

class GroupController extends Controller
{
    public function fuzzySearch()
    {
        $result = Array();
        $alluser = DB::table("userinfo")->get();
        for ($i=0;$i<sizeof($alluser);$i++){
            if ($alluser[$i]['username'] != "admin" && $alluser[$i]['username'] != session('username')){
                array_push($result, $alluser[$i]);
            }
        }
        return response()->json($result,200);
    }

    public function showAllfollows()
    {
        $allfollows = DB::table("group")->where("username",session('username'))->get();
        return response()->json($allfollows,200);
    }

    public function checkOtherFollow(Request $request)
    {
        $user = $request->input('user');
        $notes = DB::table("noteInfo")->where(["username"=>$user,"state"=>"public"])->get();
        return response()->json($notes,200);
    }

    public function checkNoteInfo(Request $request)
    {
        $user = $request->input('user');
        $notetitle = $request->input('notetitle');
        $note = DB::table("noteInfo")->where(["username"=>$user,"notename"=>$notetitle])->get();
        $notebook = DB::table("notebookInfo")->where(["username"=>$user])->get();
        return response()->json(array('note'=>$note,'notebook'=>$notebook),200);
    }

    public function recOtherUsers()
    {
        $allusers = DB::table("userinfo")->get();
        $follows = DB::table("group")->where(["username"=>session('username')])->get();
        $unfollows = Array();
        for ($i=0;$i<sizeof($allusers);$i++){
            if ($allusers[$i]["username"] != "admin" && $allusers[$i]["username"] != session('username')){
                $state = false;
                for ($j=0;$j<sizeof($follows);$j++){
                    if ($allusers[$i]["username"] == $follows[$j]["followusername"]){
                        $state = true;
                    }
                }
                if (!$state){
                    array_push($unfollows,$allusers[$i]);
                }
            }
        }
        return response()->json($unfollows,200);
    }

    public function addFollow(Request $request)
    {
        $state = null;
        $followname = $request->input('followname');
        $all = DB::table("group")->get();
        $num = sizeof($all);
        $num++;
        $result = DB::table("group")->insert(["gid"=>$num,"username"=>session('username'),"followusername"=>$followname]);
        if($result){
            $state = "关注成功";
        }else{
            $state = "关注失败";
        }
        return response()->json(array("state"=>$state),200);
    }
}

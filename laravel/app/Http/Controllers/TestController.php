<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TestController extends Controller
{
    public function test(Request $request)
    {
//       var_dump(DB::table("noteInfo")->get()[0]);
//        $request->session()->flush();
//        $session = $request->session()->all();
//        $dbusername = DB::table("userinfo")->where('username',"nosd")->get();
//        dd(session('username'));
//        $condition = DB::table("userinfo")->where('username',session('username'))->get();
//        $data = DB::table("noteInfo")->where('uid',$condition[0]['uid'])->get();
//        var_dump($condition);
//        $totalnote = array();
//        $notebookname = $request->input('ntb');
////        $username = session('uesrname');
//
//        $userid = DB::table("userinfo")->where("username",session('username'))->get();
//        $note = DB::table("noteInfo")->where("uid",$userid[0]['uid'])->get();
//        for ($i=0;$i<sizeof($note);$i++){
//            if ($note[$i]['notebookname'] == $notebookname)
//                array_push($totalnote,$note[$i]);
//        }
//        var_dump($totalnote);
//        $notebookname = $request->input('');
//        $userid = DB::table("userinfo")->where("username",session('username'))->get();
//        $notebook = DB::table("notebookInfo")->where("uid",$userid[0]['uid'])->get();
//        $exist = false;
//        $index = 0;
//        for ($i=0;$i<sizeof($notebook);$i++){
//            if ($notebook[$i]['notebookname'] == $notebookname){
//                $exist = true;
//                $index = $i;
//                break;
//            }
//        }
//        var_dump($notebook[$index]);
//        if ($exist){
//            return response()->json($notebook[$index],200);
//        }
        $user = DB::table("userinfo")->where("username",session('username'))->get();
        var_dump($user);
    }
}

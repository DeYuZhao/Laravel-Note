<?php

namespace App\Http\Controllers\Worker;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class WorkerController extends Controller
{
    public function main()
    {
        return view('worker/worker');
    }

    public function start()
    {
        $totaluser = array();
        $user = DB::table("userinfo")->get();
        for ($i=0;$i<sizeof($user);$i++){
            if ($user[$i]['username'] != "admin"){
                array_push($totaluser,$user[$i]['username']);
            }
        }

        return response()->json($totaluser,200);
    }

    public function addNewUser(Request $request)
    {
        $state = null;
        $username = $request->input('username');
        $password = $request->input('password');
        $confirmPassword = $request->input('confirm');
        $existusername = DB::table("userinfo")->get();
        $num = DB::table("userinfo")->count();
        $exist = false;
        for ($i=0;$i<$num;$i++){
            if ($username == $existusername[$i]['username']){
                $state = "用户名已存在";
                $exist = true;
                break;
            }
        }
        if (!$exist && $password == $confirmPassword){
            $num++;
            $result = DB::table("userinfo")->insert(['uid'=>$num,'username'=>$username,'password'=>$password]);
            $state = "添加成功";
        }elseif(!$exist && $password != $confirmPassword){
            $state = "密码不一致";
        }
        return response()->json(array('state'=>$state),200);
    }

    public function deleteUser(Request $request)
    {
        $username = $request->input('username');
        $num = DB::table("userinfo")->where("username",$username)->delete();

        return response()->json(array('state'=>"yes"),200);
    }

    public function lookUser(Request $request)
    {
        $username = $request->input('username');
        $user = DB::table("userinfo")->where("username",$username)->get();

        return response()->json($user,200);
    }

    public function updateUser(Request $request)
    {
        $beforeusername = $request->input('beforeun');
        $user = $request->input('user');
        $pn = $request->input('pn');
        $email = $request->input('email');
        $phone = $request->input('phone');
        $result = DB::table("userinfo")->where("username",$beforeusername)->update(['username'=>$user,'petname'=>$pn,'email'=>$email,'phone'=>$phone]);

        if ($result){
            $state = "修改成功";
        }else{
            $state = "修改失败";
        }

        return response()->json(array('state'=>$state),200);
    }
}

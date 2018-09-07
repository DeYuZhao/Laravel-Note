<?php

namespace App\Http\Controllers\Login;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class LoginController extends Controller
{

    public function toLogin()
    {
        return view("login/login");
    }

    public function judgeLogin(Request $request)
    {
        $state = null;
        $username = $request->input('username');
        $password = $request->input('password');
        $dbusername = DB::table("userinfo")->where('username',$username)->get();
        $website = "/laravel/public/note";
        if (sizeof($dbusername) == 0){
            $state = "用户名不存在";
        }elseif ($username == $dbusername[0]['username'] && $password == $dbusername[0]['password']){
            $state = "yes";
            if ($username == "admin"){
                $website = "/laravel/public/worker";
            }else{
                session(['username'=>$username]);
            }

        }else {
            $state = "密码错误";
        }

        return response()->json(array('state'=>$state,'website'=>$website),200);
    }

    public function judgeRegister(Request $request)
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
            session(['username'=>$username]);
            $num++;
            $result = DB::table("userinfo")->insert(['uid'=>$num,'username'=>$username,'password'=>$password]);
            $state = "yes";
        }elseif(!$exist && $password != $confirmPassword){
            $state = "密码不一致";
        }
        $website = "/laravel/public/note";
        return response()->json(array('state'=>$state,'website'=>$website),200);
    }

    public function logout(Request $request)
    {
        $request->session()->flush();
        if (session('username') == null){
            return response()->json(array('state'=>'yes'),200);
        }
        return response()->json(array('state'=>'no'),200);
    }
}

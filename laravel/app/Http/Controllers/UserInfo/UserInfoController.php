<?php

namespace App\Http\Controllers\UserInfo;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class UserInfoController extends Controller
{
    public function main()
    {
        return view('userinfo/user');
    }

    public function getUserInfo()
    {
        $user = DB::table("userinfo")->where("username",session('username'))->get();

        return response()->json($user,200);
    }

    public function setUserInfo(Request $request)
    {
        $state = null;
        $user = $request->input('user');
        $pn = $request->input('pn');
        $email = $request->input('email');
        $phone = $request->input('phone');
        $result = DB::table("userinfo")->where("username",session('username'))->update(['username'=>$user,'petname'=>$pn,'email'=>$email,'phone'=>$phone]);
        if ($result){
            $state = "修改成功";
        }else{
            $state = "修改失败";
        }
        
        return response()->json(array('state'=>$state),200);
    }

    public function setNewPassword(Request $request)
    {
        $newpassword = $request->input('npassword');
        $result = DB::table("userinfo")->where("username",session('username'))->update(['password'=>$newpassword]);

        if ($result){
            $state = "修改成功";
        }else{
            $state = "修改失败";
        }

        return response()->json(array('state'=>$state),200);
    }
}

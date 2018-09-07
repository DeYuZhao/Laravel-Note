<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
<meta name="viewport" content="width=device-width, initial-scale=1"> 
<title>NoteMaster</title>

<link rel="stylesheet" type="text/css" href={{URL::asset('/css/login/normalize.css')}} />
<link rel="stylesheet" type="text/css" href={{URL::asset('/css/login/demo.css')}} />
<!--必要样式-->
<link rel="stylesheet" type="text/css" href={{URL::asset('/css/login/component.css')}} />
	<script src={{URL::asset('/js/jquery-3.2.1.min.js')}}></script>

<!--[if IE]>

<![endif]-->
</head>
<body>
		<div class="container demo-1">
			<div class="content">
				<div id="large-header" class="large-header">
					<canvas id="demo-canvas"></canvas>
					<div class="logo_box">
						<h3>Welcom to NoteMaster</h3>
						<form action="#" name="f" method="post">
							<div class="prompt" id="promption" style="display: none">密码错误</div>
							<div class="input_outer" >
								<span class="u_user"></span>
								<input name="logname" id="useraccount" class="text" style="color: #FFFFFF !important" type="text" placeholder="请输入账户">
							</div>
							<div class="input_outer" >
								<span class="us_uer"></span>
								<input name="logpass" id="firstpassword" class="text" style="color: #FFFFFF !important; position:absolute; z-index:100;"value="" type="password" placeholder="请输入密码">
							</div>
							<div class="input_outer" style="display: none" id="confirmpassword">
								<span class="us_uer"></span>
								<input name="logpass" id="confirmpassword1" class="text" style="color: #FFFFFF !important; position:absolute; z-index:100;"value="" type="password" placeholder="请再次输入密码">
							</div>
							<div class="signup" id="gotosignup" style="display: block"><a onclick="showSignUp()" href="javascript:;" style="color: #FFFFFF">前往注册>></a></div>
							<div class="signup" id="gotologin" style="display: none"><a onclick="showlogin()" href="javascript:;" style="color: #FFFFFF">返回登录>></a></div>
							<div class="mb2"><a id="signupname" class="act-but submit" onclick="judgeLogin()" href="javascript:;" style="color: #FFFFFF">登录</a> </div>
						</form>
					</div>
				</div>
			</div>
		</div><!-- /container -->
		<script src={{URL::asset('/js/login/TweenLite.min.js')}}></script>
		<script src={{URL::asset('/js/login/EasePack.min.js')}}></script>
		<script src={{URL::asset('/js/login/rAF.js')}}></script>
		<script src={{URL::asset('/js/login/demo-1.js')}}></script>
		<script src={{URL::asset('/js/login/html5.js')}}></script>
	</body>
</html>
<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('admin/index');
});
Route::get('/login','Login\LoginController@toLogin');
Route::any('/login/judge1','Login\LoginController@judgeLogin');
Route::any('/login/judge2','Login\LoginController@judgeRegister');
Route::any('/login/logout','Login\LoginController@logout');

Route::get('/note', 'Note\NoteController@main');
Route::get('/note/getnote','Note\NoteController@getNote');
Route::any('/note/addnote','Note\NoteController@insertNewNote');
Route::any('/note/fuzzysearch','Note\NoteController@setFuzzySearch');


Route::any('/note/fuzzySearchNote','Note\NoteController@fuzzySearchNote');
Route::any('/note/getNoteBook','Note\NoteController@getNoteBook');
Route::any('/note/fuzzySearchNoteBook','Note\NoteController@fuzzySearchNoteBook');
Route::any('/note/searchNoteBook','Note\NoteController@searchNoteBook');
Route::any('/note/turn','Note\NoteController@turnToNote');
Route::any('/note/addnotebook','Note\NoteController@addNoteBook');

Route::any('/note/setTag','Note\NoteController@setTag');
Route::any('/note/searchNoteByTag','Note\NoteController@searchNoteByTag');
Route::any('/note/fuzzySearchTag','Note\NoteController@fuzzySearchTag');
Route::any('/note/searchTag','Note\NoteController@searchTag');
Route::any('/note/addTag','Note\NoteController@addTag');

Route::any('/note/checkNoteInfo', 'Note\NoteController@checkNoteInfo');
Route::any('/note/checkNoteBookInfo', 'Note\NoteController@checkNoteBookInfo');
Route::any('/note/saveNoteBook','Note\NoteController@saveNoteBook');
Route::any('/note/deleteNoteBook','Note\NoteController@deleteNoteBook');

Route::any('/note/saveNote','Note\NoteController@saveNote');
Route::any('/note/saveTag','Note\NoteController@saveTag');
Route::any('/note/deleteNote','Note\NoteController@deleteNote');
Route::any('/note/saveBelongNoteBook','Note\NoteController@saveBelongNoteBook');
Route::any('/note/shareNote','Note\NoteController@shareNote');

Route::any('/group/fuzzySearch','Group\GroupController@fuzzySearch');
Route::any('/group/showAllfollows','Group\GroupController@showAllfollows');
Route::any('/group/checkOtherFollow','Group\GroupController@checkOtherFollow');
Route::any('/group/checkNoteInfo','Group\GroupController@checkNoteInfo');
Route::any('/group/recOtherUsers','Group\GroupController@recOtherUsers');
Route::any('/group/addFollow','Group\GroupController@addFollow');

Route::any('/userinfo', 'UserInfo\UserInfoController@main');
Route::any('/userinfo/getUserInfo', 'UserInfo\UserInfoController@getUserInfo');
Route::any('/userinfo/setUserInfo', 'UserInfo\UserInfoController@setUserInfo');
Route::any('/userinfo/setNewPassword', 'UserInfo\UserInfoController@setNewPassword');

Route::any('/worker','Worker\WorkerController@main');
Route::any('/worker/start','Worker\WorkerController@start');
Route::any('/worker/addNewUser','Worker\WorkerController@addNewUser');
Route::any('/worker/deleteUser','Worker\WorkerController@deleteUser');
Route::any('/worker/lookUser','Worker\WorkerController@lookUser');
Route::any('/worker/updateUser','Worker\WorkerController@updateUser');

Route::get('/test','TestController@test');
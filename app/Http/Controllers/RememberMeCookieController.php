<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Cookie;
use Illuminate\Support\Str;

class RememberMeCookieController extends Controller
{
    public function remove(){
        if(Cookie::has('remember_me_'.Str::slug(env('APP_NAME')))){
            Cookie::queue(Cookie::forget('remember_me_'.Str::slug(env('APP_NAME'))));
        }
        return response()->json([
            'success' => true
        ],200);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Auth;

class SocialiteController extends Controller
{
    public function facebookredirect(){
        $redirectUrl = Socialite::driver('facebook')->stateless()->redirect()->getTargetUrl();
        return response()->json([
            'redirectUrl' => $redirectUrl
        ],200);
    }

    public function facebookcallback(Request $request){
        if ($request->has('error')) {
            if($request->error == 'access_denied'){
                if (Auth::check()) {
                    return response()->json([
                        'authenticated' => true,
                        'type' => Auth::user()->type
                    ],401);
                }
                else{
                    return response()->json([
                        'authenticated' => false
                    ],401);
                }
            }
        }
        $facebook_user = Socialite::driver('facebook')->stateless()->user();
        $user = User::where('facebook_id', $facebook_user->id)->first();
        if($user){
            if (Auth::check()) {
                return response()->json([
                    'connected' => true,
                    'authenticated' => true,
                    'type' => Auth::user()->type
                ],200);
            }
            else{
                Auth::login($user);
                $token = $user->createToken('auth_token')->plainTextToken;
                if($user->hasVerifiedEmail()){
                    return response()->json([
                        'connected' => true,
                        'authenticated' => false,
                        'type' => $user->type,
                        'verified' => true,
                        'token' => $token
                    ],200);
                }
                else{
                    return response()->json([
                        'connected' => true,
                        'authenticated' => false,
                        'type' => $user->type,
                        'verified' => false,
                        'token' => $token
                    ],200);
                }
            }
        }
        else{
            if (Auth::check()) {
                $auth_user = Auth::user();
                if($auth_user->facebook_id){
                    return response()->json([
                        'connected' => false,
                        'authenticated' => true,
                        'reconnect' => false,
                        'type' => $auth_user->type
                    ],200);
                }
                else{
                    $auth_user->facebook_id = $facebook_user->id;
                    $auth_user->save();
                    return response()->json([
                        'connected' => false,
                        'authenticated' => true,
                        'reconnect' => true,
                        'type' => $auth_user->type
                    ],200);
                }
            }
            else{
                return response()->json([
                    'connected' => false,
                    'authenticated' => false
                ],200);
            }
        }
    }

    public function githubredirect(){
        $redirectUrl = Socialite::driver('github')->stateless()->redirect()->getTargetUrl();
        return response()->json([
            'redirectUrl' => $redirectUrl
        ],200);
    }

    public function githubcallback(Request $request){
        if ($request->has('error')) {
            if($request->error == 'access_denied'){
                if (Auth::check()) {
                    return response()->json([
                        'authenticated' => true,
                        'type' => Auth::user()->type
                    ],401);
                }
                else{
                    return response()->json([
                        'authenticated' => false
                    ],401);
                }
            }
        }
        $github_user = Socialite::driver('github')->stateless()->user();
        $user = User::where('github_id', $github_user->id)->first();
        if($user){
            if (Auth::check()) {
                return response()->json([
                    'connected' => true,
                    'authenticated' => true,
                    'type' => Auth::user()->type
                ],200);
            }
            else{
                Auth::login($user);
                $token = $user->createToken('auth_token')->plainTextToken;
                if($user->hasVerifiedEmail()){
                    return response()->json([
                        'connected' => true,
                        'authenticated' => false,
                        'type' => $user->type,
                        'verified' => true,
                        'token' => $token
                    ],200);
                }
                else{
                    return response()->json([
                        'connected' => true,
                        'authenticated' => false,
                        'type' => $user->type,
                        'verified' => false,
                        'token' => $token
                    ],200);
                }
            }
        }
        else{
            if (Auth::check()) {
                $auth_user = Auth::user();
                if($auth_user->github_id){
                    return response()->json([
                        'connected' => false,
                        'authenticated' => true,
                        'reconnect' => false,
                        'type' => $auth_user->type
                    ],200);
                }
                else{
                    $auth_user->github_id = $github_user->id;
                    $auth_user->save();
                    return response()->json([
                        'connected' => false,
                        'authenticated' => true,
                        'reconnect' => true,
                        'type' => $auth_user->type
                    ],200);
                }
            }
            else{
                return response()->json([
                    'connected' => false,
                    'authenticated' => false
                ],200);
            }
        }
    }

    public function googleredirect(){
        $redirectUrl = Socialite::driver('google')->stateless()->redirect()->getTargetUrl();
        return response()->json([
            'redirectUrl' => $redirectUrl
        ],200);
    }

    public function googlecallback(Request $request){
        $google_user = Socialite::driver('google')->stateless()->user();
        $user = User::where('google_id', $google_user->id)->first();
        if($user){
            if (Auth::check()) {
                return response()->json([
                    'connected' => true,
                    'authenticated' => true,
                    'type' => Auth::user()->type
                ],200);
            }
            else{
                Auth::login($user);
                $token = $user->createToken('auth_token')->plainTextToken;
                if($user->hasVerifiedEmail()){
                    return response()->json([
                        'connected' => true,
                        'authenticated' => false,
                        'type' => $user->type,
                        'verified' => true,
                        'token' => $token
                    ],200);
                }
                else{
                    return response()->json([
                        'connected' => true,
                        'authenticated' => false,
                        'type' => $user->type,
                        'verified' => false,
                        'token' => $token
                    ],200);
                }
            }
        }
        else{
            if (Auth::check()) {
                $auth_user = Auth::user();
                if($auth_user->google_id){
                    return response()->json([
                        'connected' => false,
                        'authenticated' => true,
                        'reconnect' => false,
                        'type' => $auth_user->type
                    ],200);
                }
                else{
                    $auth_user->google_id = $google_user->id;
                    $auth_user->save();
                    return response()->json([
                        'connected' => false,
                        'authenticated' => true,
                        'reconnect' => true,
                        'type' => $auth_user->type
                    ],200);
                }
            }
            else{
                return response()->json([
                    'connected' => false,
                    'authenticated' => false
                ],200);
            }
        }
    }

    public function facebookremove(){
        $user = Auth::user();
        if($user->facebook_id){
            $user->facebook_id = null;
            $user->save();
            return response()->json([
                'removed' => true
            ],200);
        }
        else{
            return response()->json([
                'removed' => false
            ],200);
        }
    }

    public function githubremove(){
        $user = Auth::user();
        if($user->github_id){
            $user->github_id = null;
            $user->save();
            return response()->json([
                'removed' => true
            ],200);
        }
        else{
            return response()->json([
                'removed' => false
            ],200);
        }
    }
    
    public function googleremove(){
        $user = Auth::user();
        if($user->google_id){
            $user->google_id = null;
            $user->save();
            return response()->json([
                'removed' => true
            ],200);
        }
        else{
            return response()->json([
                'removed' => false
            ],200);
        }
    }
}

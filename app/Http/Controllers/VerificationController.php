<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Auth\Events\Verified;

class VerificationController extends Controller
{
    public function verify(Request $request){
        if ($request->user()->hasVerifiedEmail()) {
            return response()->json([
                'success' => true,
                'type' => $request->user()->type
            ],200);
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
            return response()->json([
                'success' => true,
                'type' => $request->user()->type
            ],200);
        }
    }

    public function resend(Request $request){
        if ($request->user()->hasVerifiedEmail()) {
            return response()->json([
                'verified' => true,
                'type' => $request->user()->type
            ],200);
        }

        $request->user()->sendEmailVerificationNotification();
        return response()->json([
            'verified' => false,
            'message' => 'A fresh verification link has been sent to your email address.'
        ],200);
    }
}

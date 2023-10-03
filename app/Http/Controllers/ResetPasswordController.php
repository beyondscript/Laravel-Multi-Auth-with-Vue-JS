<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;

class ResetPasswordController extends Controller
{
    public function showResetForm(Request $request){
        $token = $request->route()->parameter('token');
        return response()->json([
            'token' => $token,
            'email' => $request->email
        ],200);
    }

    public function reset(Request $request)
    {
        $request->validate($this->rules(), $this->validationErrorMessages());

        $response = $this->broker()->reset(
            $this->credentials($request), function ($user, $password) {
                $this->resetPassword($user, $password);
            }
        );

        return $response == Password::PASSWORD_RESET
                    ? $this->sendResetResponse($request)
                    : $this->sendResetFailedResponse($request, $response);
    }

    protected function rules()
    {
        return [
            'token' => 'required',
            'password' => ['confirmed']
        ];
    }

    protected function validationErrorMessages()
    {
        return [];
    }

    protected function credentials(Request $request)
    {
        return $request->only(
            'email', 'password', 'password_confirmation', 'token'
        );
    }

    protected function resetPassword($user, $password)
    {
        $this->setUserPassword($user, $password);

        $user->setRememberToken(Str::random(60));

        $user->save();

        event(new PasswordReset($user));
    }

    protected function setUserPassword($user, $password)
    {
        $user->password = bcrypt($password);
    }

    protected function sendResetResponse(Request $request)
    {
        Auth::attempt($request->only('email', 'password'));
        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;

        if($user->hasVerifiedEmail()){
            return response()->json([
                'type' => trans($user->type),
                'verified' => trans(true),
                'token' => trans($token)
            ],200);
        }
        else{
            return response()->json([
                'type' => trans($user->type),
                'verified' => trans(false),
                'token' => trans($token)
            ],200);
        }
    }

    protected function sendResetFailedResponse(Request $request, $response)
    {
        throw ValidationException::withMessages([
            'email' => [trans($response)],
        ]);
    }

    public function broker()
    {
        return Password::broker();
    }
}

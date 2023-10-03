<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;

class ForgotPasswordController extends Controller
{
    public function sendResetLinkEmail(Request $request)
    {
        $response = $this->broker()->sendResetLink(
            $this->credentials($request)
        );

        return $response == Password::RESET_LINK_SENT
                    ? $this->sendResetLinkResponse($request, $response)
                    : $this->sendResetLinkFailedResponse($request, $response);
    }

    protected function credentials(Request $request)
    {
        return $request->only('email');
    }

    protected function sendResetLinkResponse(Request $request, $response)
    {
        return new JsonResponse(['message' => trans($response)], 200);
    }

    protected function sendResetLinkFailedResponse(Request $request, $response)
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

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class CsrfCookieController extends Controller
{
    public function show(Request $request)
    {
        if ($request->expectsJson()) {
            return new JsonResponse(null, 204);
        }

        return new Response('', 204);
    }
}

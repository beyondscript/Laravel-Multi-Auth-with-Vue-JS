<?php

namespace App\Guards;

use Illuminate\Auth\SessionGuard;
use Illuminate\Support\Str;

class CustomSessionGuard extends SessionGuard
{
    public function getRecallerName()
    {
        return 'remember_me_'.Str::slug(env('APP_NAME'));
    }
}
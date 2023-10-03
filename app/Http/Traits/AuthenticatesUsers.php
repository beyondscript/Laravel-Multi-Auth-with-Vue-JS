<?php

namespace App\Http\Traits;

trait AuthenticatesUsers
{
    use ThrottlesLogins;

    public function username()
    {
        return 'email';
    }
}

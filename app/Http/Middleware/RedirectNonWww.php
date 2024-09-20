<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class RedirectNonWww
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if(env('APP_ENV') != 'local'){
            if (!$request->wantsJson() && !preg_match('/^www\./', $request->host())) {
                $wwwUrl = $request->getScheme() . '://www.' . $request->getHost() . $request->getRequestUri();
                return redirect()->to($wwwUrl, 301);
            }
        }
        
        return $next($request);
    }
}

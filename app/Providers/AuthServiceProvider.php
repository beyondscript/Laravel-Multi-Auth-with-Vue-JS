<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Auth;
use Illuminate\Auth\EloquentUserProvider;
use App\Guards\CustomSessionGuard;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Auth::extend(
            'custom_session_guard',
            function ($app) {
                $provider = new EloquentUserProvider($app['hash'], config('auth.providers.users.model'));
                $guard = new CustomSessionGuard('custom_session_guard', $provider, app()->make('session.store'), request());
                $guard->setCookieJar($this->app['cookie']);
                $guard->setDispatcher($this->app['events']);
                $guard->setRequest($this->app->refresh('request', $guard, 'setRequest'));
                return $guard;
            }
        );
    }
}

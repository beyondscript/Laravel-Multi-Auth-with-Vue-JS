<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if(Schema::hasTable('users')){
            if(!User::where('type', 'Admin')->exists()){
                User::create([
                    'name' => 'Admin',
                    'email' => 'admin@gmail.com',
                    'type' => 'Admin',
                    'email_verified_at' => now(),
                    'password' => Hash::make('12345678')
                ]);
            }
        }
    }
}

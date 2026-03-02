<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['www'])->group(function () {
    Route::get('/privacy-policy', function () {
        return view('privacyPolicy');
    });
  
    Route::get('/data-deletion-information', function () {
        return view('dataDeletionInformation');
    });

    Route::get('/{any}', function () {
        return view('index');
    })->where('any','.*');
});

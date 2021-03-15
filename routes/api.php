<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::namespace('Api')->name('api.')->group(function () {
//    Route::namespace('V1')->name('v1.')->prefix('v1')->group(function () {
//        Route::namespace('Auth')->name('auth.')->prefix('auth')->group(function () {
//            Route::post('identify', 'SessionController@identify')->name('identify');
//            Route::post('register-check', 'SessionController@registerCheck')->name('register.check');
//            Route::post('register', 'SessionController@register')->name('register');
//            Route::post('signin', 'SessionController@signin')->name('signin');
//
//            Route::middleware('auth:api')->group(function () {
//                Route::post('signout', 'SessionController@signout')->name('signout');
//                Route::post('refresh', 'SessionController@refresh')->name('refresh');
//                Route::post('user', 'SessionController@user')->name('user');
//            });
//
//            Route::name('password.')->prefix('password')->group(function () {
//                Route::post('request', 'ForgotPasswordController@sendResetLinkEmail')->name('request');
//                Route::patch('reset/{token}', 'ResetPasswordContoller@reset')->name('reset');
//            });
//        });

        // Route::middleware('auth:api')->group(function () {
        //     Route::namespace('Settings')->prefix('settings')->name('settings.')->group(function () {
        //         Route::patch('profile', 'ProfileController@update')->name('profile');

        //         Route::prefix('account')->name('account.')->group(function () {
        //             Route::patch('password', 'AccountController@updatePassword')->name('password');
        //             Route::patch('credentials', 'AccountController@updateCredentials')->name('credentials');
        //         });
        //     });

        //     Route::apiResource('users', 'UsersController');
        //     Route::prefix('users')->name('users.')->group(function () {
        //         Route::patch('{user}/restore', 'UsersController@restore')->name('restore');

        //         Route::prefix('{user}/avatar')->name('avatar.')->group(function () {
        //             Route::post('/', 'UsersController@storeAvatar')->name('store');
        //             Route::delete('/', 'UsersController@destroyAvatar')->name('destroy');
        //         });
        //     });
        // });
//    });
//});

Route::resource('/speechinput', App\Http\Controllers\SpeechInput::class);

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

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\Auth\SessionController;
use App\Http\Controllers\Api\V1\Settings\ProfileController;
use App\Http\Controllers\Api\V1\Settings\AccountController;

use App\Http\Controllers\Api\V1\Auth\ForgotPasswordController;
use App\Http\Controllers\Api\V1\Auth\ResetPasswordController;
use App\Http\Controllers\Api\V1\ProductsController;


Route::namespace('Api')->name('api.')->group(function () {
    Route::namespace('V1')->name('v1.')->prefix('v1')->group(function () {
        Route::namespace('Auth')->name('auth.')->prefix('auth')->group(function () {
            Route::post('identify', [SessionController::class, 'identify'])->name('identify');
            Route::post('register-check', [SessionController::class, 'registerCheck'])->name('register.check');
            Route::post('register', [SessionController::class, 'register'])->name('register');
            Route::post('signin', [SessionController::class, 'signin'])->name('signin');

            Route::middleware('auth:api')->group(function () {
                Route::post('signout', [SessionController::class, 'signout'])->name('signout');
                Route::post('refresh', [SessionController::class, 'refresh'])->name('refresh');
                Route::post('user', [SessionController::class, 'user'])->name('user');
            });

            Route::name('password.')->prefix('password')->group(function () {
                Route::post('request', [ForgotPasswordController::class, 'sendResetLinkEmail'])->name('request');
                Route::patch('reset/{token}', [ResetPasswordController::class, 'reset'])->name('reset');
            });
        });

        Route::middleware('auth:api')->group(function () {
            Route::namespace('Settings')->prefix('settings')->name('settings.')->group(function () {
                Route::patch('profile', [ProfileController::class,'update'])->name('profile');

                Route::prefix('account')->name('account.')->group(function () {
                    Route::patch('password', [AccountController::class, 'updatePassword'])->name('password');
                    Route::patch('credentials', [AccountController::class, 'updateCredentials'])->name('credentials');
                });
            });

        //     Route::prefix('users')->name('users.')->group(function () {
        //         Route::patch('{user}/restore', 'UsersController@restore')->name('restore');

        //         Route::prefix('{user}/avatar')->name('avatar.')->group(function () {
        //             Route::post('/', 'UsersController@storeAvatar')->name('store');
        //             Route::delete('/', 'UsersController@destroyAvatar')->name('destroy');
        //         });
        //     });
        });
    });
});
Route::middleware('auth:api')->prefix('v1')->group(function () {
    Route::apiResource('products', ProductsController::class);
});
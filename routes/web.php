<?php


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

Route::prefix('/{locale?}')->where(['locale' => 'en|fil'])->group(function () {
    Route::name('backoffice.')->group(function () {
        Route::get('/', function () {
            return view('__backoffice.welcome');
        })->name('welcome');
    });
});

Route::get('/test-output-transcribe', [App\Http\Controllers\SpeechAPI::class, 'test_output_transcribe']);

Route::get('/input-speech', [App\Http\Controllers\SpeechAPI::class, 'input_speech_page']);

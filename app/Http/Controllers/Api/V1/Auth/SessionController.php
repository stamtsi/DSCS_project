<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class SessionController extends Controller
{
    /**
     * Identify if the given email exists.
     *
     * @param Illuminate\Http\Request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function identify(Request $request) : JsonResponse
    {
        $request->validate([
            'email' => "required|exists:users,{$this->identifier($request)},deleted_at,NULL",
        ]);

        return response()->json(
            User::where(
                $this->identifier($request),
                $request->input('email')
            )->first()->email
        );
    }


    /**
     * Identify if the given email exists.
     *
     * @param Illuminate\Http\Request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function registerCheck(Request $request) : JsonResponse
    {
        $request->validate([
            'email' => "required|unique:users",
        ]);

        return response()->json(
            $request->email,
        );
    }

        /**
     * Identify if the given email exists.
     *
     * @param Illuminate\Http\Request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request) : JsonResponse
    {
        $request->validate([
            'email' => "required|unique:users",
            'name'  => "required|string",
            'password' => 'required|min:8'
        ]);
        
        $user = new User([
            'email'=>$request->email,
            'name'=>$request->name,
            'password' => bcrypt($request->password),
            'activation_token'=> null
        ]);
        
        if($user->save()){
            $token = $this->attempt($request);
            return $this->respondWithToken($token);
        }
        
        if ($token = $this->attempt($request)) {
            return $this->respondWithToken($token);
        }
    }
    /**
     * Authenticate the user and give the token data.
     *
     * @param Illuminate\Http\Request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function signin(Request $request) : JsonResponse
    {
        $request->validate([
            'email' => "required|exists:users,{$this->identifier($request)}",
            'password' => 'required'
        ]);

        if ($token = $this->attempt($request)) {
            return $this->respondWithToken($token);
        }

        throw ValidationException::withMessages([
            'password' => [trans('auth.failed')]
        ]);

        return response()->json(['error' => 'Unauthorized'], 401);
    }

    /**
     * Try to authenticate the user.
     *
     * @param Illuminate\Http\Request
     *
     * @return string/null
     */
    protected function attempt(Request $request) : ?string
    {
        return $this->guard()->attempt([
            $this->identifier($request) => $request->input('email'),
            'password' => $request->input('password'),
        ]);
    }

    /**
     * Get the identifier for the user.
     *
     * @param Illuminate\Http\Request
     *
     * @return string
     */
    protected function identifier(Request $request) : string
    {
        return filter_var(
            $request->input('email'),
            FILTER_VALIDATE_EMAIL
        ) ? 'email' : 'email';
    }

    /**
     * Get the authenticated user's Id.
     *
     * @param  string $authToken
     *
     * @return Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($authToken) : JsonResponse
    {
        $user = JWTAuth::setToken($authToken)->toUser();

        $this->saveAuthToken($authToken, $user);

        return response()->json(_token_payload($authToken));
    }

    /**
     * Save Auth Token.
     *
     * @param string $token
     * @param App\User $user
     *
     * @return bool
     */
    protected function saveAuthToken(string $token, User $user) : bool
    {
        $user->auth_token = $token;
        $user->last_signin = now();

        return $user->update();
    }

    /**
     * Get the authenticated user.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function user() : JsonResponse
    {
        return response()->json($this->guard()->user());
    }

    /**
     * Refresh the token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken($this->guard()->refresh());
    }

    /**
     * Sign the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function signout() : JsonResponse
    {
        $user = $this->guard()->user();

        $user->auth_token = null;
        $user->update();

        $this->guard()->logout();

        return response()->json(['message' => 'Successfully signed out']);
    }

    /**
     * Get the guard to be used during authentication.
     *
     * @return \Illuminate\Contracts\Auth\Guard
     */
    protected function guard() : Guard
    {
        return Auth::guard('api');
    }
}

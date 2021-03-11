<?php

namespace App\Http\Controllers\Api\V1\Settings;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;

class ProfileController extends Controller
{
    /**
     * Update User's profile
     *
     * @param Illuminate\Http\Request $request
     *
     * @return Illuminate\Http\JsonResponse
     */
    public function update(Request $request) : JsonResponse
    {
        $user = auth()->guard('api')->user();

        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $attributes = $request->all();
        unset($attributes['auth_token']);

        $user->fill($attributes);
        $user->update();

        return response()->json($user);
    }
}

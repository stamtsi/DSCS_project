<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;


class RecipeController extends Controller
{
    //
    public function index()
    {
        $user = Auth::id();
        $user_products = Product::where('added_by', $user)->get();
        $ingredients = "";
        foreach($user_products as $product){
            $ingredients .= $product->label.",";
        }
        $ingredients = substr($ingredients, 0, strlen($ingredients)-1);
        $recipes = Http::get("https://api.spoonacular.com/recipes/findByIngredients?ingredients=" . $ingredients . "&number=5&apiKey=19c252f996d147b7b50379018fa1b474&ranking=2");
        return response()->json([
            'success'=>true,
            'data'=>json_decode($recipes->body())
        ], 200); 
        
    }

    public function show($id)
    {
        $recipes = Http::get("https://api.spoonacular.com/recipes/".$id."/information?includeNutrition=false&apiKey=19c252f996d147b7b50379018fa1b474");
        return response()->json([
            'success'=>true,
            'data'=>json_decode($recipes->body())
        ], 200); 
        
    }
}

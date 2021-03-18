<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PickRecipe extends Controller
{


    public function return_recipes ($ingredients = 'apples,+flour,+sugar') {

        $arrIngredients = explode(' ', $ingredients);

        $strIngredientsToCall = $arrIngredients[0];
        unset($arrIngredients[0]);
        foreach($arrIngredients as $ingredient) {
            $strIngredientsToCall .= ',+' . $ingredient;
        }

        //$strUrl = "https://api.spoonacular.com/recipes/findByIngredients";
        $strUrl = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" . $strIngredientsToCall . "&number=10&apiKey=19c252f996d147b7b50379018fa1b474";
        $arrHeader = false;
        //$strResultJson = $this->callAPI("GET", $strUrl, $arrHeader);
//        $arrResult = json_decode($strResultJson, true);

        $data = array(
//            'recipes' => $arrResult,
            'url' => $strUrl
        );

        return view ('pages.PickRecipe')->with(print_r($data, true));

    }



    /**
     * Zorgt dat data per CURL verzonden kan worden
     * @param string $method 'GET'
     * @param string $url Full URL for end point to post to
     * @param string $data JSON-string to post
     */
    public function callAPI ($method = "GET", $url, $header = false, $data = false)
    {
        $curl = curl_init();

        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $header);

        $result = curl_exec($curl);

        curl_close($curl);

        return $result;
    }

}

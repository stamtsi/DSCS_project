<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Product::where('added_by',Auth::id())->paginate(50);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        //Check if the data is valid
        $validator = Validator::make($request->all(), [
            'label' => 'required|max:255',
            'quantity' => 'required',
            'experiation_date' => 'date',
            'metric'=> 'max:255'
            ]);
        if ($validator->fails()) {
            $response = ['success'=>false, 'data'=>$validator->messages()->first()];
            return response()->json($response, 422);
        }

        $product = new Product();
        $product->name = preg_replace('/\s+/', '_', strtolower($request->label));
        $product->label = $request->label;
        $product->added_by = Auth::id();    
        $product->quantity = $request->quantity;       
        $product->experiation_date = $request->experiation_date;
        $product->metric = $request->metric;

        if($product->save()){
            $response = ['success'=>true, 'data'=>$product];
            return response()->json($response, 201);
        }else{
            return response()->json([
                'success'=>false,
                'data'=>'Something went wrong.'
            ], 409);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
        try{
            $product = Product::findOrFail($product);
        }catch(\Illuminate\Database\Eloquent\ModelNotFoundException $exception){
            return response()->json([
                'success'=>false,
                'data'=>'Couldnt find a product with this id'
            ], 404);
        }
        return response()->json([
            'success'=>true,
            'data'=>$product
        ], 200);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        try{
            $product = Product::findOrFail($product);
        }catch(\Illuminate\Database\Eloquent\ModelNotFoundException $exception){
            return response()->json([
                'success'=>false,
                'data'=>'Couldnt find a product with this id'
            ], 404);
        }
        //Check if the data is valid
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'label' => 'required|max:255',
            'added_by' => 'required|integer',
            'quantity' => 'required',
            'experiation_date' => 'date',
            'metric'=> 'max:255'
            ]);
        if ($validator->fails()) {
            $response = ['success'=>false, 'data'=>$validator->messages()->first()];
            return response()->json($response, 422);
        }
        $product->name = $request->name;
        $product->label = $request->label;
        $product->added_by = $request->added_by;        
        $product->quantity = $request->quantity;       
        $product->experiation_date = $request->experiation_date;
        $product->metric = $request->metric;

        if($product->save()){
            $response = ['success'=>true, 'data'=>$product];
            return response()->json($response, 201);
        }else{
            return response()->json([
                'success'=>false,
                'data'=>'Something went wrong.'
            ], 409);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
        try{
            $product = Product::findOrFail($product);
        }catch(\Illuminate\Database\Eloquent\ModelNotFoundException $exception){
            return response()->json([
                'success'=>false,
                'data'=>'Couldnt find a product with this id'
            ], 404);
        }
        if($product->destroy()){
            return response()->json([
                'success'=>true,
                'data'=>'Product successfully deleted'
            ], 200);
        }else{
            return response()->json([
                'success'=>false,
                'data'=>'Something went wrong.'
            ], 409);
        }
    }
}

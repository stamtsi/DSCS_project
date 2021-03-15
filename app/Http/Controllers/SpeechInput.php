<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\SpeechAPI;

class SpeechInput extends Controller
{

    public function index () {

        return "index";
    }

    public function create () {

        return "create";
    }

    public function store (Request $request) {


        $data = $request->validate([
           'myblob' => 'required',
           'myblob2' => 'required'
        ]);

        $myblob = $data;

        $audio_upload = $data['myblob2'];
//        file_put_contents('/home/dscs/domains/dscs5.phitech.dev/storage/audio_upload.ogg', file_get_contents($audio_upload));
        $speechAPI = new SpeechAPI;
        $data['transcription'] = $speechAPI->speechapi_transcribe($audio_upload);

        $transcription = $data['transcription'];

        return $transcription;


    }




}

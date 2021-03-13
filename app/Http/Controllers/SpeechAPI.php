<?php

namespace App\Http\Controllers;

use Google\Cloud\Speech\V1\RecognitionConfig\AudioEncoding;
use Google\Cloud\Speech\V1\RecognitionConfig;
use Google\Cloud\Speech\V1\StreamingRecognitionConfig;
use Google\Cloud\Speech\V1\SpeechClient;
use Illuminate\Http\Request;

class SpeechAPI extends Controller
{


    public function test_output_transcribe () {

        $strTranscript = $this->speechapi_transcribe();

        $data = array(
            'transcript' => $strTranscript
        );

        return view ('pages.input_speech')->with($data);

    }


    public function speechapi_transcribe () {

        /* Initialise image client */
//        $client = new SpeechClient([
//            'credentials' => '/home/dscs/domains/dscs5.phitech.dev/iconic-glider-305609-28a8c6882466.json'
//        ]);

        /* Get the recording data */
//        $gcsURI = "/home/dscs/domains/dscs5.phitech.dev/opname.flac";
//        $content = file_get_contents($gcsURI);

        /* set string as audio content */
        $audio = (new RecognitionAudio())
             ->setContent($content);

        /* The audio file's encoding, sample rate and language */
        $config = new RecognitionConfig([
             'encoding' => AudioEncoding::FLAC,
             'sample_rate_hertz' => 48000,
             'language_code' => 'en-US',
             'audio_channel_count' => 2
         ]);

        /* Detects speech in the audio file */
         $response = $client->recognize($config, $audio);

        /* Print most likely transcription */
        foreach ($response->getResults() as $result) {
             $alternatives = $result->getAlternatives();
             $mostLikely = $alternatives[0];
             $transcript = $mostLikely->getTranscript();
             return $transcript;
         }

        /* Close client */
        $client->close();

    }
}

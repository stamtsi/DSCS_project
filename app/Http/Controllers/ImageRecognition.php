<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Google\Cloud\Vision\V1\ImageAnnotatorClient;

class ImageRecognition extends Controller
{


    public function test_output_annotate_image () {

        $annotations = print_r($this->annotate_image(), true);

        return view ('pages.TestOutputImageAnnotation')->compact('annotations');
    }



    public function annotate_image ($imageFilePath = '') {

        /* Initialise image client */
        $imageAnnotator = new ImageAnnotatorClient([
            'credentials' => '/home/dscs/domains/dscs5.phitech.dev/iconic-glider-305609-28a8c6882466.json'
        ]);

        /* Set default image file if not passed as parameter */
        if (!$imageFilePath) {
            //$path = "/home/dscs/domains/dscs5.phitech.dev/storage/image_001.jpg";
            $path = "https://lucasjohnston.nl/sites/default/files/styles/afbeelding_omslag_800_x_x_/public/2016-11/16566u.jpg?itok=CwwGlaoL";
        }
        else {
            $path = $imageFilePath;
        }

        /* annotate the image */
        $image = file_get_contents($path);
        $response = $imageAnnotator->objectLocalization($image);
        $objects = $response->getLocalizedObjectAnnotations();

        /* Make array of results */
        foreach ($objects as $object) {

            $arrAnnotations[]['name'] =  $object->getName();
            $arrAnnotations[]['score'] = $object->getScore();
            $vertices = $object->getBoundingPoly()->getNormalizedVertices();

//            printf('%s (confidence %f)):' . PHP_EOL, $name, $score);
//            print('normalized bounding polygon vertices: ');

            foreach ($vertices as $vertex) {
                $arrAnnotations[]['vertices']['x'] = $vertex->getX();
                $arrAnnotations[]['vertices']['y'] = $vertex->getY();
            }

        }

        $imageAnnotator->close();

        return $arrAnnotations;

    }
}

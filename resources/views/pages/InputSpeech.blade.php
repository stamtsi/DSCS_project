@extends('layouts.app')

@section('content')
    <h1>Input speech</h1>
    <p>Click record to start recording. When you're done click stop.</p>


    <button class="record">Record</button>
    <button class="stop">Stop</button>

    <script>

        /* Initialise variables */
        const record = document.querySelector('.record');
        const stop = document.querySelector('.stop');
        var chunks = [];
        var transcription = '';

        /*  */
        navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(function(stream) {

            /* Initiate MediaRecorder object */
            var mediaRecorder = new MediaRecorder(stream);

            /* Indien start wordt aangeklikt */
            record.onclick = function() {
                mediaRecorder.start();
                console.log(mediaRecorder.state);
                console.log("recorder started");
            }

            /* Indien stop wordt aangeklikt */
            stop.onclick = function() {
                mediaRecorder.stop();
                console.log(mediaRecorder.state);
                console.log("recorder stopped");
            }

            /* Indien van mediaRecorder stop methode wordt aangeroepen */
            mediaRecorder.onstop = function(e) {
                console.log("data available after MediaRecorder.stop() called.");
                // var blob = new Blob(chunks, {'type' : 'audio/ogg; codecs=opus'});
                // var blob = new Blob(chunks, { 'type' : 'audio/wav; codecs=0' });
                // var blob = new Blob(chunks, { 'type' : 'audio/wav; codecs=MS_PCM' });
                // chunks = [];
            }

            /* Zodra data (opname) beschikbaar is */
            mediaRecorder.ondataavailable = function(e) {
                chunks.push(e.data);
                var blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
                var formData = new FormData();

                formData.append("myblob", "I want my blob!");
                formData.append("myblob2", blob);
                const http = new XMLHttpRequest();
                const endpoint = 'https://dscs5.phitech.dev/api/speechinput';
                http.open ('POST', endpoint);
                http.setRequestHeader('Accept', 'application/octet-stream');
                http.send(formData);
                http.onreadystatechange=(e)=>{
                    var transcription = http.responseText;
                    console.log(transcription);
                    var para = document.createElement("P");
                    para.innerText = transcription;
                    document.body.appendChild(para);
                }
            }

        })

    </script>

@endsection

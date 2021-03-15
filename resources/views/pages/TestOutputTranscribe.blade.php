@extends('layouts.app')

@section('content')
    <h1>Speech Transcription Test Output</h1>
    <p>Below you'll find some test output for SpeechAPI controller, speech transcription by Google Speech to Text.</p>
    <p>Transcript of opname.flac: {{$transcript}}</p>

@endsection

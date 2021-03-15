@extends('layouts.app')

@section('content')
    <h1>Speech Transcription Test Output</h1>
    <p>Below you'll find some test output for SpeechAPI controller, speech transcription by Google Speech to Text.</p>
    <p>Transcript of opname.flac: {{$transcript}}</p>





    {{--    <p>Output searchResult = {{$searchResult}}</p>--}}
    {{--    <p>Output historicalData = {{$historicalData}}</p>--}}
    {{--    <p>Output dividendData = {{$dividendData}}</p>--}}
    {{--    <p>Output splitData = {{$splitData}}</p>--}}
    {{--    <p>Output exchangeRate = {{$exchangeRate}}</p>--}}
    {{--    <p>Output exchangeRate = {{$exchangeRates}}</p>--}}
    {{--    <p>Output quote = {{$quote}}</p>--}}
    {{--    <p>Output quotes = {{$quotes}}</p>--}}
    {{--    @if(count($services) > 0)--}}
    {{--        @foreach($services as $service)--}}
    {{--            {{$service}}<br>--}}
    {{--        @endforeach--}}
    {{--    @endif--}}
@endsection

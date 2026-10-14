@extends('layouts.app')
@section('content')
<body>
  	<div style="display: flex; height: 100vh; justify-content: center; align-items: center; padding-left: 10px; padding-right: 10px;">
  		<div style="text-align: center;">
			<img style="width: 260px;" src="{{ asset('images/404-not-found.webp') }}">
			<h3 style="text-transform: uppercase; margin-bottom: 0;">Page Not Found</h3>
			<p style="padding-bottom: 10px; padding-top: 5px; margin-bottom: 0;">The page you are looking for might have been removed or temporarily unavailable.</p>
			<a class="btn bg-gradient-primary w-100 my-4 mb-2" style="width: 260px !important; text-transform: uppercase; margin-top: 0 !important; margin-bottom: 0 !important;" href="{{route('welcome')}}">Go To Home</a>
		</div>
	</div>
@endsection
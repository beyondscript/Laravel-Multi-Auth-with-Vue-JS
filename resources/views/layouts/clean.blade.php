<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="robots" content="noindex, nofollow">
    <meta property="og:image" content="{{ asset('assets/img/facebookimage.png') }}">

    <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('assets/img/apple-icon.png') }}">
    <link rel="icon" type="image/png" href="{{ asset('assets/img/favicon.png') }}">
  
  	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/perfect-scrollbar/css/perfect-scrollbar.css" />

    <title>{{ config('app.name') }}</title>

    <style>
      	html {
          	height: 100%;
          	overflow: hidden;
      	}
      
        body {
          	height: 100%;
            font-family: Arial, sans-serif;
            line-height: 1.7;
            margin: 0;
            padding: 0;
            background: #f4f6f9;
            color: #333;
          	position: relative;
    		overflow: hidden;
        }
    </style>

    @yield('styles')
</head>
<body>
    @yield('content')
  
  	<script src="https://cdn.jsdelivr.net/npm/perfect-scrollbar/dist/perfect-scrollbar.min.js"></script>
  
  	<script>
    	var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
    	if(!isWindows){
      		document.getElementsByTagName('html')[0].style.overflow = 'auto'
            document.body.style.overflow = 'auto'
      		document.getElementById('sidenav-main').style.overflow = 'auto'
    	}
      	else{
          	const psBody = new PerfectScrollbar(document.body, {
                wheelSpeed: 1,
                wheelPropagation: true,
            });
        }
  	</script>
</body>
</html>
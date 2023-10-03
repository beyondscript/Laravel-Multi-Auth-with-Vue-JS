<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('assets/img/apple-icon.webp') }}">
  <link rel="icon" type="image/x-icon" href="{{ asset('assets/img/favicon.webp') }}">

  <title>{{ config('app.name') }}</title>

  <!--     Fonts and icons     -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  @vite('resources/css/app.css')

  <!-- Nucleo Icons -->
  @vite('public/assets/css/nucleo-icons.css')
  @vite('public/assets/css/nucleo-svg.css')
  <!-- Font Awesome Icons -->
  <script src="https://kit.fontawesome.com/42d5adcbca.js"></script>
  <!-- Material Icons -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Round">
  <!-- CSS Files -->
  @vite('public/assets/css/material-dashboard.min.css')
</head>

<body id="body">
  <!-- Contents -->
  @yield('content')

  @vite('resources/js/app.js')

  <!--   Core JS Files   -->
  @vite('public/assets/js/core/popper.min.js')
  <script src="{{ asset('assets/js/core/bootstrap.min.js') }}"></script>
  <script src="{{ asset('assets/js/plugins/perfect-scrollbar.min.js') }}"></script>
  <!-- Github buttons -->
  <script async defer src="https://buttons.github.io/buttons.js"></script>
  <!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc -->
  <script src="{{ asset('assets/js/material-dashboard.min.js') }}"></script>

  <script>
    function showPasswordSignIn() {
      var x = document.getElementById("password");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }
    function showPasswordSignUp() {
      var x = document.getElementById("password");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
      var y = document.getElementById("password-confirm");
      if (y.type === "password") {
        y.type = "text";
      } else {
        y.type = "password";
      }
    }
  </script>
  <script>
    function showPasswordChangeEmail() {
      var x = document.getElementById("current_password");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }
    function showPasswordChangePassword() {
      var x = document.getElementById("current_password");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
      var y = document.getElementById("password");
      if (y.type === "password") {
        y.type = "text";
      } else {
        y.type = "password";
      }
      var z = document.getElementById("password-confirm");
      if (z.type === "password") {
        z.type = "text";
      } else {
        z.type = "password";
      }
    }
  </script>
</body>

</html>
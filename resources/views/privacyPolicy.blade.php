@extends('layouts.clean')
@section('styles')
    <style>
        .container {
            max-width: 900px;
            margin: 50px auto;
            background: #fff;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }

        h1,
        h2 {
            color: #222;
        }

        h1 {
            margin-bottom: 20px;
        }

        h2 {
            margin-top: 30px;
        }

        p {
            margin-bottom: 15px;
        }

        ul {
            margin-left: 20px;
        }

        .footer {
            margin-top: 40px;
            font-size: 14px;
            color: #777;
        }
    </style>
@endsection

@section('content')
    <div style="display: flex; justify-content: center;">
        <div class="container" style="margin-left: 10px; margin-right: 10px;">
            <h1 style="text-align: center;">Privacy Policy</h1>

            <p style="text-align: center;">
                This privacy policy explains how we collect, use and protect your information when you use our web application.
            </p>

            <h2>1. Information We Collect</h2>

            <p>We may collect the following information:</p>

            <ul>
                <li>Name and email address</li>
                <li>Login credentials (encrypted)</li>
                <li>IP address and browser information</li>
                <li>Account role (e.g. User, Admin)</li>
                <li>Any data you submit within the application</li>
            </ul>

            <h2>2. How We Use Your Information</h2>

            <ul>
                <li>To create and manage your account</li>
                <li>To authenticate users securely (multi-auth system)</li>
                <li>To improve system functionality and performance</li>
                <li>To provide customer support</li>
                <li>To ensure security and prevent unauthorized access</li>
            </ul>

            <h2>3. Data Protection</h2>

            <p>
                We implement appropriate security measures to protect your personal information. Passwords are encrypted using secure hashing algorithms. Access to administrative areas is restricted based on user roles.
            </p>

            <h2>4. Cookies</h2>

            <p>
                Our application may use cookies to maintain login sessions and improve user experience. You may disable cookies in your browser settings but some features may not function properly.
            </p>

            <h2>5. Third-Party Services</h2>

            <p>
                We may use trusted third-party services (such as hosting providers or analytics tools) to operate our application. These services have their own privacy policies.
            </p>

            <h2>6. Data Retention</h2>

            <p>
                We retain your information as long as your account is active or as necessary to comply with legal obligations.
            </p>

            <h2>7. Your Rights</h2>

            <p>You may request to:</p>

            <ul>
                <li>Access your personal data</li>
                <li>Update or correct your information</li>
                <li>Delete your account</li>
            </ul>

            <h2>8. Changes To This Policy</h2>

            <p>
                We may update this privacy policy from time to time. Changes will be posted on this page.
            </p>

            <div class="footer" style="text-align: center;">
                ©{{ now()->year }} All rights reserved | {{ config('app.name') }}
            </div>
        </div>
    </div>
@endsection
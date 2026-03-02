@extends('layouts.clean')
@section('styles')
    <style>
        .container {
            max-width: 900px;
            margin: 50px auto;
            background: #fff;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }
        h1, h2 {
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
        a.button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            margin-top: 15px;
        }
        a.button:hover {
            background-color: #0056b3;
        }
    </style>
@endsection

@section('content')
    <div style="display: flex; justify-content: center;">
        <div class="container" style="margin-left: 10px; margin-right: 10px;">
            <h1 style="text-align: center;">Data Deletion Information</h1>

            <p style="text-align: center;">
                We respect your privacy and give you the right to request deletion of your account and personal data. This page explains the steps and what happens when you request data deletion.
            </p>

            <h2>1. How to Request Data Deletion</h2>

            <p>
                To request deletion of your account you can:
            </p>

            <ul>
                <li>Log in to your account and navigate to your profile settings.</li>
                @php
                    $admin = \App\Models\User::where('type', 'Admin')->first();
                @endphp

                <li>Click on the "Delete Account" button (if available) or contact us directly at <a style="text-decoration: none;" href="mailto:{{$admin->email}}"><strong>{{$admin->email}}</strong></a> with your request.</li>
            </ul>

            <h2>2. What Happens After Your Request</h2>

            <ul>
                <li>Your account will be deactivated immediately.</li>
                <li>All your personal data will be permanently deleted from our system.</li>
                <li>Some data may be retained for legal or compliance reasons but it will not be used for other purposes.</li>
            </ul>

            <h2>3. Confirmation</h2>

            <p>
                You will receive a confirmation email once your account and data have been successfully deleted.
            </p>

            <h2>4. Important Notes</h2>

            <ul>
                <li>This action is irreversible. Once deleted your account cannot be restored.</li>
                <li>Deleting your account may remove access to subscriptions saved data and settings.</li>
            </ul>

            <div class="footer" style="text-align: center;">
                ©{{ now()->year }} All rights reserved | {{ config('app.name') }}
            </div>
        </div>
    </div>
@endsection
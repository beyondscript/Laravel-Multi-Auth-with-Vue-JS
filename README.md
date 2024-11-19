<p align="center">
	<img src="https://github.com/beyondscript/Laravel-Multi-Auth-with-Vue-JS/blob/main/public/assets/img/favicon.png" width="60" height="60" margin-left="auto" margin-right="auto" alt="Logo">
	<br>
	Laravel Multi Auth with Vue JS
</p>

## About Laravel Multi Auth with Vue JS

Laravel Multi Auth with Vue JS is a web application which was designed by using HTML, CSS, JavaScript and Vue JS and developed by using PHP and Laravel framework.

This website was built for learning Laravel Multiple role based Authentication with Vue JS.

## How to use?

<strong>Step - 1:</strong>
<br>
Download or clone the repository

<strong>Step - 2:</strong>
<br>
Intall all the dependencies by running these commands "composer update" and "npm install"

<strong>Step - 3:</strong>
<br>
Copy the .env.example file from root directory to root directory then rename the copied file to .env

<strong>Step - 4:</strong>
<br>
Generate new application key by running the command "php artisan key:generate"

<strong>Step - 5:</strong>
<br>
Create a new database and import the laravelmultiauthwithvuejs.sql file

<strong>Step - 6:</strong>
<br>
Add the database details in the .env file by editing the .env file like below:

DB_DATABASE=database_name
<br>
DB_USERNAME=database_user_name
<br>
DB_PASSWORD=database_user_password

<strong>Step - 7:</strong>
<br>
Create a new email account and add the email account details in the .env file by editing the .env file like below:

MAIL_MAILER=smtp
<br>
MAIL_HOST=email_account_host.com
<br>
MAIL_PORT=465
<br>
MAIL_USERNAME=email_account_user_name
<br>
MAIL_PASSWORD=email_account_password
<br>
MAIL_ENCRYPTION=ssl
<br>
MAIL_FROM_ADDRESS=email_account
<br>
MAIL_FROM_NAME="${APP_NAME}"

<strong>Step - 8:</strong>
<br>
Add the application name in the .env file by editing the .env file like below:

APP_NAME="your_app_name"

<strong>Step - 9:</strong>
<br>
Add the application url in the .env file by editing the .env file like below

APP_URL=your_application_url

<strong>Step - 10:</strong>
<br>
Add Facebook, GitHub and Google OAuth credentials in the .env file by editing the .env file like below:

FACEBOOK_CLIENT_ID=facebook_client_id
<br>
FACEBOOK_CLIENT_SECRET=facebook_client_secret

GITHUB_CLIENT_ID=github_client_id
<br>
GITHUB_CLIENT_SECRET=github_client_secret

GOOGLE_CLIENT_ID=google_client_id
<br>
GOOGLE_CLIENT_SECRET=google_client_secret

<strong>Step - 11:</strong>
<br>
Build the assets by running the command "npm run build"

<strong>Step - 12:</strong>
<br>
Delete the node_modules folder from the root directory

## Note

<strong>Facebook Callback/Redirect Url:</strong>
<br>
your_application_url/api/auth/facebook-callback

<strong>GitHub Callback/Redirect Url:</strong>
<br>
your_application_url/api/auth/github-callback

<strong>Google Callback/Redirect Url:</strong>
<br>
your_application_url/api/auth/google-callback

<strong>Admin Credentials:</strong>
<br>
Admin email is: admin@gmail.com
<br>
Admin password is: 12345678

## When a problem is found?

Do not hesitate to message me when you found any problem.
<br>
<a href="https://www.facebook.com/engrmdnafiulislam.135/">Facebook</a>
<br>
<a href="https://www.instagram.com/engrmdnafiulislam/">Instagram</a>

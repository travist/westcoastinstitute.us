<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <title>{{ site.title }} | {{ page.title }}</title>

  <link rel="stylesheet" href="/assets/css/main.css">
  <!-- bower:css -->
  <link rel='stylesheet' href='../assets/lib/angular-ui-select/dist/select.css' />
  <link rel='stylesheet' href='../assets/lib/formio/css/formio.css' />
  <!-- endbower -->
  
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

  <!-- Favicons -->
  <link rel="apple-touch-icon" sizes="57x57" href="/assets/favicons/apple-touch-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="/assets/favicons/apple-touch-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="/assets/favicons/apple-touch-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="/assets/favicons/apple-touch-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="/assets/favicons/apple-touch-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="/assets/favicons/apple-touch-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="/assets/favicons/apple-touch-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/assets/favicons/apple-touch-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon-180x180.png">
  <link rel="icon" type="image/png" href="/assets/favicons/favicon-32x32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="/assets/favicons/android-chrome-192x192.png" sizes="192x192">
  <link rel="icon" type="image/png" href="/assets/favicons/favicon-96x96.png" sizes="96x96">
  <link rel="icon" type="image/png" href="/assets/favicons/favicon-16x16.png" sizes="16x16">
  <link rel="manifest" href="/assets/favicons/manifest.json">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="msapplication-TileImage" content="/assets/favicons/mstile-144x144.png">
  <meta name="theme-color" content="#ffffff">
  
  <!-- Fonts -->
  <link href='https://fonts.googleapis.com/css?family=Roboto:400,700,100,500,300' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Fira+Sans:400,500,700' rel='stylesheet' type='text/css'>

  <!-- bower:js -->
  <script src="../assets/lib/jquery/dist/jquery.js"></script>
  <script src="../assets/lib/URIjs/src/URI.js"></script>
  <script src="../assets/lib/anchor-js/anchor.js"></script>
  <script src="../assets/lib/jquery.maskedinput/dist/jquery.maskedinput.js"></script>
  <script src="../assets/lib/angular/angular.js"></script>
  <script src="../assets/lib/angular-ui-select/dist/select.js"></script>
  <script src="../assets/lib/angular-paginate-anything/dist/paginate-anything-tpls.js"></script>
  <script src="../assets/lib/moment/moment.js"></script>
  <script src="../assets/lib/angular-moment/angular-moment.js"></script>
  <script src="../assets/lib/signature_pad/signature_pad.js"></script>
  <script src="../assets/lib/angular-sanitize/angular-sanitize.js"></script>
  <script src="../assets/lib/bootstrap-ui-datetime-picker/dist/datetime-picker.min.js"></script>
  <script src="../assets/lib/angular-bootstrap/ui-bootstrap-tpls.js"></script>
  <script src="../assets/lib/formio/dist/formio.js"></script>
  <!-- endbower -->
  
  <script src="/assets/js/main.js"></script>
</head>
<body ng-app='formApp'{% if page.controller %} ng-controller='{{ page.controller }}'{% endif %}>
  <div id="content" class="container">
    {{ content }}
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    
    {% include analytics.html %}
    {% include footer.html %}
  </div>
</body>
</html>

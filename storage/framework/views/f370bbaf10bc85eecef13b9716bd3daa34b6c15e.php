<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
  <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->

  <title>cotriad.ai - AI powered Digital Signange Platform</title>

  <!-- Splash Screen/Loader Styles -->
  <link rel="stylesheet" type="text/css" href="<?php echo e(asset(mix('css/loader.css'))); ?>" />

  <!-- Styles -->
  <link rel="stylesheet" href="<?php echo e(asset(mix('css/core.css'))); ?>">

  <!-- Favicon -->
  <link rel="shortcut icon" href="<?php echo e(asset('logo.svg')); ?>">

  <!-- Font -->
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
    rel="stylesheet">
</head>

<body>
  <noscript>
    <strong>We're sorry but cotriad.ai - AI powered Digital Signange Platform doesn't work properly without
      JavaScript enabled. Please enable it to continue.</strong>
  </noscript>
  <div id="loading-bg">
    <div class="loading-logo">
      <img src="<?php echo e(asset('logo.svg')); ?>" alt="Logo" />
    </div>
    <div class="loading">
      <div class="effect-1 effects"></div>
      <div class="effect-2 effects"></div>
      <div class="effect-3 effects"></div>
    </div>
  </div>
  <div id="app">
  </div>

  <script src="<?php echo e(asset(mix('js/app.js'))); ?>"></script>

</body>

</html>
<?php /**PATH D:\xampp\htdocs\coding\vueFIver\starter_kit\resources\views/application.blade.php ENDPATH**/ ?>
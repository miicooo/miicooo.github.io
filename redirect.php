<?php
// List of target websites to redirect users to
$websites = array(
  'https://example1.com',
  'https://example2.com',
  'https://example3.com',
  // Add more websites as needed
);

// Generate a random alphanumeric character (A-Z, a-z, 0-9)
function generateRandomCharacter() {
  $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return $characters[rand(0, strlen($characters) - 1)];
}

// Generate a random subdirectory name with any letter and number
function generateRandomSubdirectory($length = 8) {
  $randomString = '';
  for ($i = 0; $i < $length; $i++) {
    $randomString .= generateRandomCharacter();
  }
  return $randomString;
}

// Redirect function
function redirectToRandomSubdirectory($websites) {
  $randomSubdirectory = generateRandomSubdirectory();
  $randomWebsite = $websites[array_rand($websites)];
  $redirectURL = $randomWebsite . '/' . $randomSubdirectory;
  header("Location: $redirectURL");
  exit;
}

// Call the redirection function
redirectToRandomSubdirectory($websites);
?>

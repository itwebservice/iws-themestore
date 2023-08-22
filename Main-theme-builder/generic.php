

<?php

define("BASE_URL_MAIN", "https://demo4.itourscloud.com/crm/");
define('BASE_URL_B2C', 'https://demo4.itourscloud.com/');

function getDataApi($apiUrlMain)
{
    $mainAPI = "https://demo4.itourscloud.com/frontendAPI8/public/api/";
    $apiUrl = $mainAPI . $apiUrlMain;
    // Set the API endpoint URL
    $returnData = [];

    // Initialize cURL
    $curl = curl_init();

    // Set the cURL options
    curl_setopt_array($curl, [
        CURLOPT_URL => $apiUrl,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
    ]);

    // Execute the cURL request
    $response = curl_exec($curl);

    // Check for errors
    if (curl_errno($curl)) {
        echo 'Error: ' . curl_error($curl);
    }

    // Close the cURL session
    curl_close($curl);

    // Process the API response
    if ($response) {
        // Convert the JSON response to an array
        $data = json_decode($response, true);

        // Access the response data
        $returnData = $data;
    } else {
        echo 'Error: No response from API.';
    }

    return $returnData;
}

?>
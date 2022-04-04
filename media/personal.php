<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Average</title>
</head>
<body>
    <?php
        $av1 = $_POST["av1"];
        $av2 = $_POST["av2"];
        $av3 = $_POST["av3"];
        $average = ($av1+$av2+$av3)/3;
        echo "<h1>A média é: $average</h1>";

    ?>
    <a href="./index.html">Voltar</a>
</body>
</html>
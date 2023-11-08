<?php
require_once "../models/drink.php";
$id = $_POST['id']; // Получаем id из POST-запроса, он приходит от клиента
echo json_encode(Drink::drinkInfo($id));
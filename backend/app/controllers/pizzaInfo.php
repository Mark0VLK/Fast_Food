<?php
require_once "../models/pizza.php";
$id = $_POST['id']; // Получаем id из POST-запроса, он приходит от клиента
echo json_encode(Pizza::pizzaInfo($id));
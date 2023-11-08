<?php
require_once "../models/snack.php";
$id = $_POST['id']; // Получаем id из POST-запроса, он приходит от клиента
echo json_encode(Snack::snackInfo($id));
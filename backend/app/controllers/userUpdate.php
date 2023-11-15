<?php

// Создание массива с данными пользователя из POST запроса
require_once "../models/user.php";
$arrayName = array(
    'name' => $_POST['name'],
    'surname' => $_POST['surname'],
    'birthDate' => $_POST['birthDate'],
    'email' => $_POST['email'],
    'phoneNumber' => $_POST['phoneNumber']);

// Вызов метода save класса User и преобразование результата в JSON
echo json_encode(User::update($arrayName));
<?php

// Создание массива с данными пользователя из POST запроса
require_once "../models/user.php";
$arrayName = array(
    'name' => $_POST['name'],
    'surname' => $_POST['surname'],
    'phoneNumber' => $_POST['phoneNumber'],
    'email' => $_POST['email'],
    'password' => $_POST['password']);

// Вызов метода save класса User и преобразование результата в JSON
echo json_encode(User::save($arrayName));
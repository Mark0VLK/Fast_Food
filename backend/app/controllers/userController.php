<?php

use app\models\User;

require_once "../models/user.model.php";
echo json_encode(User::findAll());
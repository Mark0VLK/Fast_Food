<?php
require_once "../models/drink.php";
echo json_encode(Drink::findAll());
<?php
require_once "../models/pizza.php";
echo json_encode(Pizza::findAll());
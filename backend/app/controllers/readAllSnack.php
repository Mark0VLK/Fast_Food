<?php
require_once "../models/snack.php";
echo json_encode(Snack::findAll());
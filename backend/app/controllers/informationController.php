<?php
require_once "../models/information.model.php";
echo json_encode(Information::findAll());
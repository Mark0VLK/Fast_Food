<?php
require_once "../models/user.php";
echo json_encode(User::delete());
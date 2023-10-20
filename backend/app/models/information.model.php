<?php

require_once "../config/connection.php";

class Information extends Connection
{
    public static function findAll()
    {
        try {
            $sql = "SELECT * FROM \"information\" WHERE category = 'пицца'";
            $stmt = Connection::getConnection()->prepare($sql);
            $stmt->execute();
            return $stmt->fetchAll();
        } catch (PDOException $th) {
            echo "Error1: " . $th->getMessage();
        }
    }
}
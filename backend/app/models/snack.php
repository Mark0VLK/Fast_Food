<?php

require_once "../config/connection.php";

class Snack extends Connection {

    public static function findAll() {
        try {
            $sql = "SELECT i.id, i.name, i.image, i.ingredients, s.price
                    FROM public.information i
                    JOIN public.snack s ON i.id = s.id_information";
            $stmt = Connection::getConnection()->prepare($sql);
            $stmt->execute();
            return $stmt->fetchAll();
        } catch (PDOException $th) {
            echo "Error: " . $th->getMessage();
        }
    }

    public static function snackInfo($id)
    {
        try {
            $sql = 'SELECT i.name, i.image, i.ingredients, i."energyValue", i.carb, i.proteins, i.far,
                    s.price, s.weight, s."numberOfPieces"
                    FROM public.information i
                    JOIN public.snack s ON i.id = s.id_information
                    where i.id = :id';
            $stmt = Connection::getConnection()->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_INT);
            $stmt->execute();
            return $stmt->fetchAll();
        } catch (PDOException $th) {
            echo "Error1: " . $th->getMessage();
        }
    }
}
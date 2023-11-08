<?php

require_once "../config/connection.php";

class Drink extends Connection {

    public static function findAll() {
        try {
            $sql = "SELECT i.id, i.name, i.image, i.ingredients, d.price
                    FROM public.information i
                    JOIN public.drinks d ON i.id = d.id_information
                    order by d.id";
            $stmt = Connection::getConnection()->prepare($sql);
            $stmt->execute();
            return $stmt->fetchAll();
        } catch (PDOException $th) {
            echo "Error: " . $th->getMessage();
        }
    }

    public static function drinkInfo($id)
    {
        try {
            $sql = 'SELECT i.name, i.image, i.ingredients, i."energyValue", i.carb, i.proteins, i.far,
                    d.price, d."volume"
                    FROM public.information i
                    JOIN public.drinks d ON i.id = d.id_information
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
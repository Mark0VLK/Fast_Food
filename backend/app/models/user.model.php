<?php

require_once "../config/connection.php";

class User extends Connection
{
    public static function findAll()
    {
        try {
            $sql = 'select * from "user"';
            $stmt = Connection::getConnection()->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchAll();
            return $result;
        } catch (PDOException $th) {
            echo "Error1: " . $th->getMessage();
        }
    }

    public static function findById($id)
    {
        try {
            $sql = 'select * from "user" where id = :id';
            $stmt = Connection::getConnection()->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetch();
            return $result;
        } catch (PDOException $th) {
            echo "Error2: " . $th->getMessage();
        }
    }

    public static function save($data)
    {
        try {
            $sql = 'INSERT INTO public."user" (name, surname, "phoneNumber", email, password, "birthDate", created, changed) VALUES (:name, :surname, :"phoneNumber", :email, :password, :"birthDate", :created, :changed)';
            $stmt = Connection::getConnection()->prepare($sql);
            $stmt->bindParam(':name', $data['name']);
            $stmt->bindParam(':surname', $data['surname']);
            $stmt->bindParam(':"phoneNumber"', $data['"phoneNumber"']);
            $stmt->bindParam(':email', $data['email']);
            $stmt->bindParam(':password', $data['password']);
            $stmt->bindParam(':"birthDate"', $data['"birthDate"']);
            $stmt->bindParam(':country', $data['country']);
            $stmt->bindParam(':created', $data['created']);
            $stmt->bindParam(':changed', $data['changed']);
            $stmt->execute();
            return true;
        } catch (PDOException $th) {
            echo "Error3: " . $th->getMessage();
        }
    }

    public static function update($data)
    {
        try {
            $sql = 'UPDATE public."user" SET name = :name, surname = :surname, "phoneNumber" = :"phoneNumber", email = :email, password = :password, "birthDate" = :"birthDate", created = :created, changed = :changed WHERE id = :id';
            $stmt = Connection::getConnection()->prepare($sql);
            $stmt->bindParam(':name', $data['name']);
            $stmt->bindParam(':surname', $data['surname']);
            $stmt->bindParam(':"phoneNumber"', $data['"phoneNumber"']);
            $stmt->bindParam(':email', $data['email']);
            $stmt->bindParam(':password', $data['password']);
            $stmt->bindParam(':"birthDate"', $data['"birthDate"']);
            $stmt->bindParam(':country', $data['country']);
            $stmt->bindParam(':created', $data['created']);
            $stmt->bindParam(':changed', $data['changed']);
            $stmt->execute();
            return true;
        } catch (PDOException $th) {
            echo "Error4: " . $th->getMessage();
        }
    }

    public static function delete($id)
    {
        try {
            $sql = 'DELETE FROM public."user" WHERE id = :id';
            $stmt = Connection::getConnection()->prepare($sql);
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            return true;
        } catch (PDOException $th) {
            echo "Error5: " . $th->getMessage();
        }
    }
}
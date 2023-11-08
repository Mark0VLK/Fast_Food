<?php

// класс Connection для управления соединением с базой данных
class Connection
{
    public $host = 'localhost';
    public $dbname = 'fastFood';
    public $port = '5432';
    public $user = 'postgres';
    public $password = 'postgres';
    public $driver = 'pgsql';
    public $connect; // переменная для хранения соединения

    // метод для получения соединения с базой данных
    public static function getConnection()
    {
        try {
            $connection = new Connection(); // создаем новый экземпляр класса Connection
            $connection->connect = new PDO( // создаем новый объект PDO для соединения с базой данных
                "{$connection->driver}:
            host={$connection->host};
            port={$connection->port}; 
            dbname={$connection->dbname}",
                $connection->user, $connection->password);
            $connection->connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $connection->connect;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }
}
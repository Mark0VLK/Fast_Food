<?php

require_once "../config/connection.php";

class User extends Connection
{
    public static $globalVar = 0;
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
        date_default_timezone_set('Europe/Minsk'); // устанавливаем таймзону Минска
        $currentDateTime = date('Y-m-d H:i:s');

        $password = $data['password']; // Получаем пароль из формы
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT); // Хэшируем пароль

        try {
            $sql = 'INSERT INTO public."user" (name, surname, "phoneNumber", email, password, created, changed) VALUES (:name, :surname, :phoneNumber, :email, :password, :created, :changed)';
            $stmt = Connection::getConnection()->prepare($sql);
            $stmt->bindParam(':name', $data['name']);
            $stmt->bindParam(':surname', $data['surname']);
            $stmt->bindParam(':phoneNumber', $data['phoneNumber']);
            $stmt->bindParam(':email', $data['email']);
            $stmt->bindParam(':password', $hashedPassword);
            $stmt->bindParam(':created', $currentDateTime);
            $stmt->bindParam(':changed', $currentDateTime);
            $stmt->execute();
            return true;
        } catch (PDOException $th) {
            echo "Error3: " . $th->getMessage();
        }
    }

    /**
     * @throws Exception
     */
    public static function findOne($data)
    {
        try {
            $email = $data['email']; // Получаем email из переданных данных
            $password = $data['password']; // Получаем пароль из переданных данных

            // Выполняем запрос к базе данных для поиска пользователя по email
            $sql = 'SELECT * FROM public."user" WHERE email = :email';
            $stmt = Connection::getConnection()->prepare($sql);
            $stmt->bindParam(':email', $email);
            $stmt->execute();
            $user = $stmt->fetch();

            if ($user) {
                // Пользователь найден, теперь нужно проверить пароль
                if (password_verify($password, $user['password'])) {

                    // Если пользователь найден и пароль верный, сохраняем идентификатор пользователя в сессии
                    session_start();
                    $_SESSION['user_id'] = $user['id']; // Предполагается, что $user['id'] содержит идентификатор пользователя
                    setcookie('user_id', $user['id'], time() + (86400 * 30), "/"); // Создание куки, которая будет храниться 30 дней


                    // Пароль верный, возвращаем данные пользователя
                    return $user;


                } else {
                    // Неверный пароль
                    throw new Exception('Неверный пароль');
                }
            } else {
                // Пользователь не найден
                throw new Exception('Пользователь не найден');
            }

        } catch (PDOException $th) {
            echo "Error404M: " . $th->getMessage();
        }
    }

    public static function update($data)
    {
        date_default_timezone_set('Europe/Minsk'); // устанавливаем таймзону Минска
        $currentDateTime = date('Y-m-d H:i:s');

        $user_id_from_cookie = $_COOKIE['user_id']; // Получение user_id из куки

        try {
            $sql = 'UPDATE public."user" SET name = :name, surname = :surname, "phoneNumber" = :phoneNumber, email = :email, "birthDate" = :birthDate, changed = :changed WHERE id = :id';
            $stmt = Connection::getConnection()->prepare($sql);
            $stmt->bindParam(':id', $user_id_from_cookie); // Привязываем id пользователя из сессии к запросу
            $stmt->bindParam(':name', $data['name']);
            $stmt->bindParam(':surname', $data['surname']);
            $stmt->bindParam(':phoneNumber', $data['phoneNumber']);
            $stmt->bindParam(':email', $data['email']);

            $birthDate = !empty($data['birthDate']) ? $data['birthDate'] : null; // Если строка дата рождения пустая, то добавляем null
            $stmt->bindParam(':birthDate', $birthDate);

            $stmt->bindParam(':changed', $currentDateTime);
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
-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июн 07 2023 г., 08:55
-- Версия сервера: 10.4.24-MariaDB
-- Версия PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `ivkhk_elektriki`
--

-- --------------------------------------------------------

--
-- Структура таблицы `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `refresh_token` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`, `email`, `refresh_token`) VALUES
(1, 'admin', '$2b$10$YK.LalXd9uyeSV96rqO/cumZqeFn.UyKF/xRp.Ni9fGmOhRd99QPe', 'admin@ayaya.dev', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGF5YXlhLmRldiIsImlhdCI6MTY4NjEyMDYxNSwiZXhwIjoxNjg2MjA3MDE1fQ.M_lXG9HTwsIQBiXgAznXB6adXzk_OeOidFSMQ80gDgc');

-- --------------------------------------------------------

--
-- Структура таблицы `application`
--

CREATE TABLE `application` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `id_code` varchar(11) NOT NULL,
  `date_of_birth` date NOT NULL,
  `education` enum('Среднее','Среднее специальное','Высшее') DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `approved` enum('Принято','Отклонено','На рассмотрении') NOT NULL DEFAULT 'На рассмотрении',
  `courses` enum('Электрик внутренних работ, 2 года','Электрик внутренних работ, 3 года') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `application`
--

INSERT INTO `application` (`id`, `name`, `surname`, `id_code`, `date_of_birth`, `education`, `address`, `city`, `email`, `phone`, `approved`, `courses`) VALUES
(1, 'Даниил', 'Васильев', '50401242227', '2004-01-24', 'Среднее', 'Ridaküla 13-15', 'Kohtla-Jarve', 'daniil.vassiljev@mail.ru', '59684175', 'На рассмотрении', 'Электрик внутренних работ, 3 года'),
(2, 'Даниил', 'Дивисенко', '50401275558', '2002-04-02', 'Высшее', 'Ayayaa-dev 17-21', 'Maardu', 'Divissenko@gmail.com', '5574812451', 'Принято', 'Электрик внутренних работ, 3 года'),
(3, 'Daniil', 'Vassiljev', '55040124222', '2004-01-24', 'Среднее', 'kaka 11-11', 'Kohtla-Jarve', 'daniil.vas@gmail.com', '55117584', 'На рассмотрении', 'Электрик внутренних работ, 2 года'),
(4, 'Daniil', 'Vassiljev', '55040124222', '2004-01-24', 'Среднее', 'kaka 11-11', 'Kohtla-Jarve', 'daniil.vas@gmail.com', '55117584', 'На рассмотрении', 'Электрик внутренних работ, 2 года'),
(5, 'Daniil', 'Vassiljev', '55040124222', '2004-01-24', 'Среднее', 'kaka 11-11', 'Kohtla-Jarve', 'daniil.vas@gmail.com', '55117584', 'На рассмотрении', 'Электрик внутренних работ, 2 года');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `application`
--
ALTER TABLE `application`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `application`
--
ALTER TABLE `application`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

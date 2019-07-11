-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-05-2019 a las 05:48:22
-- Versión del servidor: 10.1.10-MariaDB
-- Versión de PHP: 7.0.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `helados`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `helado`
--

CREATE TABLE `helado` (
  `sabor` varchar(30) NOT NULL,
  `tipo` varchar(20) NOT NULL,
  `kilos` int(11) NOT NULL,
  `imageUrl` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `helado`
--

INSERT INTO `helado` (`sabor`, `tipo`, `kilos`, `imageUrl`) VALUES
('chocolate', 'crema', 5, '../assets/chocolate.jpg'),
('frutilla', 'crema', 8, '../assets/frutilla.jpg'),
('limon', 'agua', 10, '../assets/limon.jpg'),
('durazno', 'agua', 15, '../assets/durazno.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

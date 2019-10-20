-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema monkeydevs
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema monkeydevs
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `monkeydevs` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `monkeydevs` ;

-- -----------------------------------------------------
-- Table `monkeydevs`.`Hilo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `monkeydevs`.`Hilo` (
  `idHilo` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(100) NOT NULL,
  `comunidad` VARCHAR(45) NOT NULL,
  `fechaCreacion` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fechaModificacion` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idHilo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `monkeydevs`.`Comentario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `monkeydevs`.`Comentario` (
  `idComentario` INT NOT NULL AUTO_INCREMENT,
  `texto` VARCHAR(450) NOT NULL,
  `fechaCreacion` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Hilo_idHilo` INT NOT NULL,
  PRIMARY KEY (`idComentario`, `Hilo_idHilo`),
  INDEX `fk_Comentario_Hilo_idx` (`Hilo_idHilo` ASC) VISIBLE,
  CONSTRAINT `fk_Comentario_Hilo`
    FOREIGN KEY (`Hilo_idHilo`)
    REFERENCES `monkeydevs`.`Hilo` (`idHilo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

insert into hilo(titulo, comunidad) values("Cádiz arde", "Andalucía");
insert into hilo(titulo, comunidad) values("Emergencia en Medina del Campo, se quema un pinar", "Castilla y León");
insert into hilo(titulo, comunidad) values("Fuego en Zaragoza, se necesitan voluntarios para apagarlo", "Aragón");

insert into comentario(texto, Hilo_idHilo) values("¿Dónde es el fuego?", 1);
insert into comentario(texto, Hilo_idHilo) values("¿Lo saben ya los bomberos?", 1);
insert into comentario(texto, Hilo_idHilo) values("El fuego está cerca de mi casa", 1);
insert into comentario(texto, Hilo_idHilo) values("¿Dónde es el fuego?", 2);
insert into comentario(texto, Hilo_idHilo) values("¿Lo saben ya los bomberos?", 2);
insert into comentario(texto, Hilo_idHilo) values("El fuego está cerca de mi casa", 2);
insert into comentario(texto, Hilo_idHilo) values("¿Dónde es el fuego?", 3);
insert into comentario(texto, Hilo_idHilo) values("¿Lo saben ya los bomberos?", 3);
insert into comentario(texto, Hilo_idHilo) values("El fuego está cerca de mi casa", 3);

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

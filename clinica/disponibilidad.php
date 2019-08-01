<?php
require_once ('AccesoDatos.php');
class Disponibilidad
{
	
	public $id_especialista;
	public $id_especialidad;
	public $dia_semana;
	public $horario_llegada;
	public $horario_salida;
	
	
    public function traerTodosTurnos($id){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT e.descripcion as 'especialidad', d.id_especialidad, d.dia_semana, d.horario_llegada, d.horario_salida FROM clinica.disponibilidadmedico as d JOIN especialidad as e ON(e.id_especialidad=d.id_especialidad) AND id_especialista=$id");
		$consulta->execute();
		$miArray = Array();
		while($i=$consulta->fetch()){
			array_push($miArray, $i);		
		}
		echo json_encode($miArray);
		
		
	}

	public function insertar($request){
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
			var_dump($request);
			$itemsTurno = $objetoAccesoDato->RetornarConsulta("INSERT into clinica.disponibilidadmedico (id_especialista, id_especialidad, dia_semana, horario_llegada, horario_salida) values (:id_especialista, :id_especialidad, :dia_semana, :horario_llegada, :horario_salida);");
			$itemsTurno->bindValue(':id_especialista', $request['id_especialista'], PDO::PARAM_INT);
			$itemsTurno->bindValue(':id_especialidad', $request['id_especialidad'], PDO::PARAM_INT);
			$itemsTurno->bindValue(':dia_semana', $request['dia_semana'], PDO::PARAM_INT);
			$itemsTurno->bindValue(':horario_llegada', $request['horario_llegada'], PDO::PARAM_STR);
			$itemsTurno->bindValue(':horario_salida', $request['horario_salida'], PDO::PARAM_STR);
			$itemsTurno->execute();		
	}

	public function modificarEstado($request){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$itemsTurno = $objetoAccesoDato->RetornarConsulta("UPDATE clinica.turnos SET estado=:estado where id_turno=:id_turno");
		$itemsTurno->bindValue(':id_turno', $request['id_turno'], PDO::PARAM_INT);
		$itemsTurno->bindValue(':estado', $request['estado'], PDO::PARAM_STR);
		$itemsTurno->execute();
	}

	public function traerDisponibilidad($fecha, $especialidad){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM clinica.disponibilidadmedico WHERE dia_semana='$fecha' and id_especialidad=$especialidad");
		$consulta->execute();
		$miArray = Array();
		while($i=$consulta->fetch()){
			array_push($miArray, $i);		
		}
		echo json_encode($miArray);	
	}


}
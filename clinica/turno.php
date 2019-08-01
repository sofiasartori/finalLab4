<?php
require_once ('AccesoDatos.php');
class Turno
{
	public $dia;
	public $hora;
	public $id_especialista;
	public $cliente;
	public $recepcionista;
	public $id_consultorio;
	public $estado;
	public $id_tratamiento;
	public $cantidad;

	
    public function traerTodosTurnos(){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
<<<<<<< HEAD
<<<<<<< HEAD
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM id9856454_clinica.turnos WHERE dia='$filtro'");
=======
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT t.dia, t.hora, u.email as id_especialista, t.cliente, t.recepcionista, t.id_consultorio, t.estado, a.descripcion as id_tratamiento FROM clinica.turnos as t LEFT JOIN usuarios as u ON (t.id_especialista=u.id_usuario) LEFT JOIN tratamientos as a ON (t.id_tratamiento=a.id_tratamiento)");
>>>>>>> 7cd0bc1372a8a3343d945db08c04e3be4a16cf95
=======
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT t.id_turno, t.dia, t.hora, u.email as id_especialista, t.cliente, t.recepcionista, t.id_consultorio, t.estado, a.descripcion as id_tratamiento FROM clinica.turnos as t LEFT JOIN usuarios as u ON (t.id_especialista=u.id_usuario) LEFT JOIN tratamientos as a ON (t.id_tratamiento=a.id_tratamiento)");
>>>>>>> df3bbb299270aa7a6c3901954e76ca84bb683ed0
		$consulta->execute();
		$miArray = Array();
		while($i=$consulta->fetch()){
			array_push($miArray, $i);		
		}
		echo json_encode($miArray);
		
		
	}

	public function insertarTurno($request){
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
			var_dump($request);
<<<<<<< HEAD
<<<<<<< HEAD
			$itemsTurno = $objetoAccesoDato->RetornarConsulta("INSERT into id9856454_clinica.turnos (dia, hora, id_especialista, cliente, id_consultorio, estado) values (:dia, :hora, :id_especialista, :cliente, :id_consultorio, 'asignado');");
=======
			$itemsTurno = $objetoAccesoDato->RetornarConsulta("INSERT into clinica.turnos (dia, hora, id_especialista, cliente, recepcionista, id_consultorio, estado, id_tratamiento) values (:dia, :hora, :id_especialista, :cliente, :recepcionista, :id_consultorio, 'asignado', :id_tratamiento);");
>>>>>>> 7cd0bc1372a8a3343d945db08c04e3be4a16cf95
=======
			$itemsTurno = $objetoAccesoDato->RetornarConsulta("INSERT into clinica.turnos (dia, hora, id_especialista, cliente, recepcionista, id_consultorio, estado, id_tratamiento, id_especialidad) values (:dia, :hora, :id_especialista, :cliente, :recepcionista, :id_consultorio, 'asignado', :id_tratamiento, :id_especialidad);");
>>>>>>> df3bbb299270aa7a6c3901954e76ca84bb683ed0
			$itemsTurno->bindValue(':dia', $request['dia'], PDO::PARAM_STR);
			$itemsTurno->bindValue(':hora', $request['hora'], PDO::PARAM_STR);
			$itemsTurno->bindValue(':id_especialista', $request['id_especialista'], PDO::PARAM_INT);
			$itemsTurno->bindValue(':cliente', $request['cliente'], PDO::PARAM_STR);
			$itemsTurno->bindValue(':recepcionista', $request['recepcionista'], PDO::PARAM_STR);
			$itemsTurno->bindValue(':id_consultorio', $request['id_consultorio'], PDO::PARAM_INT);
			$itemsTurno->bindValue(':id_tratamiento', $request['id_tratamiento'], PDO::PARAM_INT);
			$itemsTurno->bindValue(':id_especialidad', $request['id_especialidad'], PDO::PARAM_INT);
			$itemsTurno->execute();		
	}

	public function modificarEstado($request){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
<<<<<<< HEAD
		$itemsTurno = $objetoAccesoDato->RetornarConsulta("UPDATE id9856454_clinica.turnos SET estado='atendido' where id_turno=$id");
=======
		$itemsTurno = $objetoAccesoDato->RetornarConsulta("UPDATE clinica.turnos SET estado=:estado where id_turno=:id_turno");
		$itemsTurno->bindValue(':id_turno', $request['id_turno'], PDO::PARAM_INT);
		$itemsTurno->bindValue(':estado', $request['estado'], PDO::PARAM_STR);
>>>>>>> 7cd0bc1372a8a3343d945db08c04e3be4a16cf95
		$itemsTurno->execute();
	}

	public function traerTurnosFecha($filtro, $medico){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM clinica.turnos WHERE dia='$filtro' AND id_especialista=$medico");
		$consulta->execute();
		$miArray = Array();
		while($i=$consulta->fetch()){
			array_push($miArray, $i);		
		}
		echo json_encode($miArray);	
	}

	public function traerTurnosPaciente($filtro){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT t.id_turno, t.dia, t.hora, u.email as 'id_especialista', t.id_consultorio, t.estado FROM clinica.turnos as t JOIN clinica.usuarios as u ON (t.id_especialista=u.id_usuario) AND cliente='$filtro'");
		$consulta->execute();
		$miArray = Array();
		while($i=$consulta->fetch()){
			array_push($miArray, $i);		
		}
		echo json_encode($miArray);	
	}

	public function cantidadTurnosEspecialidad($especialidad, $response, $args){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT COUNT(*) as 'cantidad', u.email FROM clinica.turnos as t JOIN clinica.usuarios as u ON(t.id_especialista=u.id_usuario) AND id_especialidad=$especialidad and estado!='cancelado' ORDER BY t.id_especialista");
		$consulta->execute();
		$miArray = Array();
		while($i=$consulta->fetch()){
			array_push($miArray, $i);		
		}
		echo json_encode($miArray);	
	}

	public function buscarTurnosEspecialidad($especialidad, $response, $args){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT t.dia, t.hora, u.email as 'id_especialista', t.cliente, t.recepcionista, t.id_consultorio, t.estado, t.id_tratamiento FROM clinica.turnos as t JOIN clinica.usuarios as u ON(t.id_especialista=u.id_usuario) AND id_especialidad=$especialidad and estado!='cancelado' ORDER BY t.id_especialista");
		$consulta->execute();
		$miArray = Array();
		while($i=$consulta->fetch()){
			array_push($miArray, $i);		
		}
		echo json_encode($miArray);	
	}	

	public function buscarTurnosCEspecialidad($especialidad, $response, $args){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT t.dia, t.hora, u.email as 'id_especialista', t.cliente, t.recepcionista, t.id_consultorio, t.estado, t.id_tratamiento FROM clinica.turnos as t JOIN clinica.usuarios as u ON(t.id_especialista=u.id_usuario) AND id_especialidad=$especialidad and estado='cancelado' ORDER BY t.id_especialista");
		$consulta->execute();
		$miArray = Array();
		while($i=$consulta->fetch()){
			array_push($miArray, $i);		
		}
		echo json_encode($miArray);	
	}	

	public function cantidadTurnosFechas($fecha_desde, $fecha_hasta, $args){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$itemsTurno = $objetoAccesoDato->RetornarConsulta("SELECT COUNT(*) as 'cantidad' FROM clinica.turnos where dia BETWEEN '$fecha_desde' AND '$fecha_hasta'");
		$itemsTurno->execute();
		$miArray=Array();
		while($i=$itemsTurno->fetch()){
			array_push($miArray, $i);		
		}
		echo json_encode($miArray);
	}

	public function buscarVarios($request, $response, $quien){
		if($quien=='recepcionista'){
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
			$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM clinica.turnos where recepcionista !='' AND (estado='atendido' OR estado='finalizado')");
			$consulta->execute();
			$miArray = Array();
			while($i=$consulta->fetch()){
				array_push($miArray, $i);		
			}
			echo json_encode($miArray);	
		}
		else
		{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
			$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM clinica.turnos where recepcionista ='' AND (estado='atendido' OR estado='finalizado')");
			$consulta->execute();
			$miArray = Array();
			while($i=$consulta->fetch()){
				array_push($miArray, $i);		
			}
			echo json_encode($miArray);	
		}
	}

	public function buscarFechaEspecialidad($fecha, $especialidad, $args){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$itemsTurno = $objetoAccesoDato->RetornarConsulta("SELECT t.hora, t.id_especialista, t.estado, t.id_horario FROM clinica.turnos as t JOIN clinica.especialidadxusuario as eu where t.dia ='$fecha' and eu.id_especialidad=$especialidad and eu.id_usuario=t.id_especialista");
		$itemsTurno->execute();
		$miArray=Array();
		while($i=$itemsTurno->fetch()){
			array_push($miArray, $i);		
		}
		echo json_encode($miArray);
	}


}
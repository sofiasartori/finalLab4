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

	
    public function traerTodosTurnos(){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT t.dia, t.hora, u.email as id_especialista, t.cliente, t.recepcionista, t.id_consultorio, t.estado, a.descripcion as id_tratamiento FROM clinica.turnos as t LEFT JOIN usuarios as u ON (t.id_especialista=u.id_usuario) LEFT JOIN tratamientos as a ON (t.id_tratamiento=a.id_tratamiento)");
		$consulta->execute();
		

		/*$tabla ='<table style="border:1px solid black;"><tr><th>Sabor</th><th>Tipo</th><th>Kilos</th></tr>';
		while($i=$consulta->fetch()){
			$tabla = $tabla.'<tr><td>'.$i['sabor'].'</td>
					   <td>'.$i['tipo'].'</td>
					   <td>'.$i['kilos'].'</td></tr>';
		}
		$tabla =$tabla.'</table>';
		echo $tabla;*/
		$miArray = Array();
		while($i=$consulta->fetch()){
			array_push($miArray, $i);		
		}
		echo json_encode($miArray);
		
		
	}

	public function insertarTurno($request){
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
			var_dump($request);
			$itemsTurno = $objetoAccesoDato->RetornarConsulta("INSERT into clinica.turnos (dia, hora, id_especialista, cliente, recepcionista, id_consultorio, estado, id_tratamiento) values (:dia, :hora, :id_especialista, :cliente, :recepcionista, :id_consultorio, 'asignado', :id_tratamiento);");
			$itemsTurno->bindValue(':dia', $request['dia'], PDO::PARAM_STR);
			$itemsTurno->bindValue(':hora', $request['hora'], PDO::PARAM_STR);
			$itemsTurno->bindValue(':id_especialista', $request['id_especialista'], PDO::PARAM_INT);
			$itemsTurno->bindValue(':cliente', $request['cliente'], PDO::PARAM_STR);
			$itemsTurno->bindValue(':recepcionista', $request['recepcionista'], PDO::PARAM_STR);
			$itemsTurno->bindValue(':id_consultorio', $request['id_consultorio'], PDO::PARAM_INT);
			$itemsTurno->bindValue(':id_tratamiento', $request['id_tratamiento'], PDO::PARAM_INT);
			$itemsTurno->execute();		
	}

	public function modificarEstado($request){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$itemsTurno = $objetoAccesoDato->RetornarConsulta("UPDATE clinica.turnos SET estado=:estado where id_turno=:id_turno");
		$itemsTurno->bindValue(':id_turno', $request['id_turno'], PDO::PARAM_INT);
		$itemsTurno->bindValue(':estado', $request['estado'], PDO::PARAM_STR);
		$itemsTurno->execute();
	}

	public function traerTurnosFecha($filtro){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM clinica.turnos WHERE dia='$filtro'");
		$consulta->execute();
		

		/*$tabla ='<table style="border:1px solid black;"><tr><th>Sabor</th><th>Tipo</th><th>Kilos</th></tr>';
		while($i=$consulta->fetch()){
			$tabla = $tabla.'<tr><td>'.$i['sabor'].'</td>
					   <td>'.$i['tipo'].'</td>
					   <td>'.$i['kilos'].'</td></tr>';
		}
		$tabla =$tabla.'</table>';
		echo $tabla;*/
		$miArray = Array();
		while($i=$consulta->fetch()){
			array_push($miArray, $i);		
		}
		echo json_encode($miArray);	
	}

	public function traerTurnosPaciente($filtro){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM clinica.turnos WHERE cliente='$filtro'");
		$consulta->execute();
		

		/*$tabla ='<table style="border:1px solid black;"><tr><th>Sabor</th><th>Tipo</th><th>Kilos</th></tr>';
		while($i=$consulta->fetch()){
			$tabla = $tabla.'<tr><td>'.$i['sabor'].'</td>
					   <td>'.$i['tipo'].'</td>
					   <td>'.$i['kilos'].'</td></tr>';
		}
		$tabla =$tabla.'</table>';
		echo $tabla;*/
		$miArray = Array();
		while($i=$consulta->fetch()){
			array_push($miArray, $i);		
		}
		echo json_encode($miArray);	
	}



}
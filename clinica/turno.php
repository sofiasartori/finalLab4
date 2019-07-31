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

	
    public function traerTodosTurnos($filtro){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM id9856454_clinica.turnos WHERE dia='$filtro'");
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
			$itemsTurno = $objetoAccesoDato->RetornarConsulta("INSERT into id9856454_clinica.turnos (dia, hora, id_especialista, cliente, id_consultorio, estado) values (:dia, :hora, :id_especialista, :cliente, :id_consultorio, 'asignado');");
			$itemsTurno->bindValue(':dia', $request['dia'], PDO::PARAM_STR);
			$itemsTurno->bindValue(':hora', $request['hora'], PDO::PARAM_STR);
			$itemsTurno->bindValue(':id_especialista', $request['id_especialista'], PDO::PARAM_INT);
			$itemsTurno->bindValue(':cliente', $request['cliente'], PDO::PARAM_STR);
			$itemsTurno->bindValue(':id_consultorio', $request['id_consultorio'], PDO::PARAM_INT);
			$itemsTurno->execute();		
	}

	public function modificarEstado($id){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$itemsTurno = $objetoAccesoDato->RetornarConsulta("UPDATE id9856454_clinica.turnos SET estado='atendido' where id_turno=$id");
		$itemsTurno->execute();
	}

}
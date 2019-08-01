<?php
require_once ('AccesoDatos.php');
class Encuesta
{
	public $idTurno;
	public $cliente;
	public $dentista;
	public $clinica;
	public $comentario;
	
    public function traerTodos($request, $response, $args){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT id_consultorio, estado, atencion FROM clinica.consultorios");
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

	public function insertarEncuesta($request){
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
			var_dump($request);
			$itemsUsuario = $objetoAccesoDato->RetornarConsulta("INSERT into clinica.encuestas (id_turno, cliente, especialista, clinica, opinion) values (:id_turno, :cliente, :especialista, :clinica, :opinion);");
			$itemsUsuario->bindValue(':id_turno', $request['id_turno'], PDO::PARAM_INT);
			$itemsUsuario->bindValue(':cliente', $request['cliente'], PDO::PARAM_STR);
			$itemsUsuario->bindValue(':especialista', $request['especialista'], PDO::PARAM_INT);
			$itemsUsuario->bindValue(':clinica', $request['clinica'], PDO::PARAM_INT);
			$itemsUsuario->bindValue(':opinion', $request['opinion'], PDO::PARAM_STR);
			$itemsUsuario->execute();
		
	}
}
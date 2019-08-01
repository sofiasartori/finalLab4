<?php
require_once ('AccesoDatos.php');
class Especialidad
{
	public $id_especialidad;
	public $descripcion;
	
    public function traerTodos($request, $response, $args){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM clinica.especialidad");
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

	public function insertarEspecialidad($request){
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
			var_dump($request);
			$itemsUsuario = $objetoAccesoDato->RetornarConsulta("INSERT into clinica.especialidad (descripcion) values (:descripcion);");
			$itemsUsuario->bindValue(':descripcion', $request['descripcion'], PDO::PARAM_STR);
			$itemsUsuario->execute();
		
	}

	public function borrarUsuario($id){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("DELETE FROM clinica.usuarios where id=$id");
		$consulta->execute();
	}

	public function buscarUsuario($email, $password){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM clinica.usuarios where email='$email' AND password='$password'");
		$consulta->execute();
		$usuarioBuscado=$consulta->fetchObject('Usuario');
		return $usuarioBuscado;
	}

	public function modificarEstado($id, $estado, $atencion){
		if($atencion=='Proximo_a_ocupar'){
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("UPDATE clinica.consultorios set atencion='$atencion' WHERE id_consultorio=$id");
			$consulta->execute();	
		}
		else{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("UPDATE clinica.consultorios set estado='$estado', atencion='' WHERE id_consultorio=$id");
			$consulta->execute();
		}
		
		/*$usuarioBuscado=$consulta->fetchObject('Usuario');
		return $usuarioBuscado;*/
	}

	public function logConexion($email){
		$objetoAccesoDato= AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("UPDATE clinica.usuarios SET ult_conexion_dia = NOW(), ult_conexion_hora=CURRENT_TIMESTAMP() WHERE email='$email';");
		$consulta->execute();
	}

	public function masUsada(){
		$objetoAccesoDato= AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("SELECT e.descripcion as 'mas', COUNT(t.id_especialidad) from clinica.especialidad as e JOIN clinica.turnos as t ON(t.id_especialidad= e.id_especialidad) GROUP BY t.id_especialidad ORDER BY COUNT(t.id_especialidad) DESC");
		$consulta->execute();
		$miArray = Array();
		while($i=$consulta->fetch()){
			array_push($miArray, $i);		
		}
		echo json_encode($miArray);
	}

	public function menosUsada($request, $response, $args){
		$objetoAccesoDato= AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("SELECT e.descripcion as 'mas', COUNT(t.id_especialidad) from clinica.especialidad as e JOIN clinica.turnos as t ON(t.id_especialidad= e.id_especialidad) GROUP BY t.id_especialidad ORDER BY COUNT(t.id_especialidad) ASC");
		$consulta->execute();
		$miArray = Array();
		while($i=$consulta->fetch()){
			array_push($miArray, $i);		
		}
		echo json_encode($miArray);
	}

	public function mejorComentario(){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT sum(en.especialista+ en.clinica) as 'suma', en.opinion, e.descripcion, u.email from clinica.encuestas as en JOIN
			clinica.turnos as t ON (en.id_turno=t.id_turno) JOIN clinica.especialidad as e on (t.id_especialidad=e.id_especialidad) JOIN clinica.usuarios as u ON (t.id_especialista=u.id_usuario) group by en.id_turno ORDER by SUM(en.especialista+ en.clinica) DESC limit 1;");
		$consulta->execute();
		$miArray = Array();
		while($i=$consulta->fetch()){
			array_push($miArray, $i);		
		}
		echo json_encode($miArray);
	}

	public function peorComentario(){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT sum(en.especialista+ en.clinica) as 'suma', en.opinion, e.descripcion, u.email from clinica.encuestas as en JOIN
			clinica.turnos as t ON (en.id_turno=t.id_turno) JOIN clinica.especialidad as e on (t.id_especialidad=e.id_especialidad) JOIN clinica.usuarios as u ON (t.id_especialista=u.id_usuario) group by en.id_turno ORDER by SUM(en.especialista+ en.clinica) ASC limit 1;");
		$consulta->execute();
		$miArray = Array();
		while($i=$consulta->fetch()){
			array_push($miArray, $i);		
		}
		echo json_encode($miArray);
	}
}
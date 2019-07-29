<?php
require_once ('AccesoDatos.php');
class Historia
{
	public $cliente;
	public $dentista;
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

	public function insertarHistoria($request){
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
			var_dump($request);
			$itemsUsuario = $objetoAccesoDato->RetornarConsulta("INSERT into clinica.historia_clinica (cliente, dentista, comentario) values (:cliente, :dentista, :comentario);");
			$itemsUsuario->bindValue(':cliente', $request['cliente'], PDO::PARAM_STR);
			$itemsUsuario->bindValue(':dentista', $request['dentista'], PDO::PARAM_STR);
			$itemsUsuario->bindValue(':comentario', $request['comentario'], PDO::PARAM_STR);
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
}
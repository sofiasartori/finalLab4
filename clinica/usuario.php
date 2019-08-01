<?php
require_once ('AccesoDatos.php');
class Usuario
{
	public $email;
	public $password;
	public $tipo;
	public $foto;
	public $ult_conexion_dia;
	public $ult_conexion_hora;
	
    public function traerTodosUsuarios(){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM clinica.log_usuarios");
		$consulta->execute();
		$miArray = Array();
		while($i=$consulta->fetch()){
			array_push($miArray, $i);		
		}
		echo json_encode($miArray);
		
		
	}

	public function insertarUsuario($request){
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
			var_dump($request);
			$itemsUsuario = $objetoAccesoDato->RetornarConsulta("INSERT into clinica.usuarios (email, password, tipo, foto) values (:email, :password, :tipo, :foto);");
			$itemsUsuario->bindValue(':email', $request['email'], PDO::PARAM_STR);
			$itemsUsuario->bindValue(':password', $request['password'], PDO::PARAM_STR);
			$itemsUsuario->bindValue(':tipo', $request['tipo'], PDO::PARAM_STR);
			$itemsUsuario->bindValue(':foto', $request['foto'], PDO::PARAM_STR);
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

	public function logConexion($email){
		$objetoAccesoDato= AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("INSERT into clinica.log_usuarios SET ult_conexion_dia = NOW(), ult_conexion_hora=CURRENT_TIMESTAMP(), usuario='$email';");
		$consulta->execute();
	}

	public function traerId($email, $request, $args){
		$objetoAccesoDato= AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("SELECT id_usuario FROM clinica.usuarios WHERE email='$email';");
		$consulta->execute();
		$miArray=Array();
		while($i=$consulta->fetch()){
			array_push($miArray, $i);		
		}
		echo json_encode($miArray);
	}
}

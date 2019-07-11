<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';
require_once 'AccesoDatos.php';
require_once 'usuarioApi.php';
include_once 'usuario.php';
require_once 'mascotaApi.php';
include_once 'mascota.php';
require_once 'turnoApi.php';
include_once 'turno.php';
require_once 'MWparaCORS.php';
require_once 'jwt.php';
require_once 'mw.php';

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;
$app = new \Slim\App(["settings" => $config]);
$app->group('/usuarios', function () {

  $this->get('/', \UsuarioApi::class . ':traerTodos');
  $this->post('/alta/', \UsuarioApi::class . ':CargarUno');  
  $this->delete('/{id}', \UsuarioApi::class . ':borrarUno');
  $this->get('/{email}', \UsuarioApi::class . ':buscarUno')->add(\MWparaAutentificar::class . ':VerificarUsuario');
})->add(\MWparaCORS::class . ':HabilitarCORSTodos');

$app->post('/login/', function(Request $request, Response $response){
	$datos = $request->getParsedBody();
	$nombre=$datos['email'];
	$clave=$datos['password'];
	$usuario=new Usuario();
	$usuarioBuscado=$usuario->buscarUsuario($nombre, $clave);
	$tipoJWT = $usuarioBuscado->tipo;
	$data=array('Usuario'=>$nombre, 'Tipo'=>$tipoJWT);
	if(!isset($data['Tipo'])){
		$newResponse = $response->withJSON("Usted no pertenece al sistema", 400);
	}
	else{
		$token= JsonWToken::LogIn($data);
		$usuario->LogConexion($datos['ult_conexion_fecha'], $datos['ult_conexion_hora']);
  		$newResponse = $response->withJson($token, 200); 
	}
	return $newResponse;	  
	
})->add(\MWparaCORS::class . ':HabilitarCORS8080');

$app->group('/mascotas', function () {

  $this->get('/', \MascotaApi::class . ':traerTodos');
  $this->get('/{id}', \MascotaApi::class . ':buscarUno');
  $this->post('/alta/', \MascotaApi::class . ':CargarUno');  
  $this->put('/', \MascotaApi::class . ':ModificarUno');
})->add(\MWparaCORS::class . ':HabilitarCORSTodos');

$app->group('/turnos', function () {

  $this->get('/', \TurnoApi::class . ':traerTodos');
  $this->post('/alta/', \TurnoApi::class . ':CargarUno');  
})->add(\MWparaCORS::class . ':HabilitarCORSTodos');

$app->run();
?>

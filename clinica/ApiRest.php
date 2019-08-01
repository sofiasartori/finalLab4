<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';
require_once 'AccesoDatos.php';
require_once 'usuarioApi.php';
include_once 'usuario.php';
require_once 'especialistaApi.php';
include_once 'especialista.php';
require_once 'turnoApi.php';
include_once 'turno.php';
require_once 'consultorioApi.php';
include_once 'consultorio.php';
require_once 'historiaApi.php';
include_once 'historia.php';
require_once 'encuestaApi.php';
include_once 'encuesta.php';
require_once 'tratamientoApi.php';
include_once 'tratamiento.php';
require_once 'especialidadApi.php';
include_once 'especialidad.php';
require_once 'disponibilidadApi.php';
include_once 'disponibilidad.php';
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
  $this->get('/{email}', \UsuarioApi::class . ':buscarUno');
  $this->get('/id/{email}', \UsuarioApi::class . ':TraerId');
})->add(\MWparaCORS::class . ':HabilitarCORSTodos');

$app->post('/login/', function(Request $request, Response $response){
	$datos = $request->getParsedBody();
	$nombre=$datos['email'];
	$clave=$datos['password'];
	$usuario=new Usuario();
	$usuarioBuscado=$usuario->buscarUsuario($nombre, $clave);
	$tipoJWT = $usuarioBuscado->tipo;
  $fotoJWT = $usuarioBuscado->foto;
  $idJWT = $usuarioBuscado->id_usuario;
	$data=array('Usuario'=>$nombre, 'Tipo'=>$tipoJWT, 'Foto'=>$fotoJWT, 'ID'=>$idJWT);
	if(!isset($data['Tipo'])){
		$newResponse = $response->withJSON("Usted no pertenece al sistema", 400);
	}
	else{
		$token= JsonWToken::LogIn($data);
		$usuario->LogConexion($datos['email']);
  		$newResponse = $response->withJson($token, 200); 
	}
	return $newResponse;	  
	
})->add(\MWparaCORS::class . ':HabilitarCORS8080');

$app->group('/especialistas', function () {

  $this->get('/', \EspecialistaApi::class . ':traerTodos');
  $this->get('/clientes/', \EspecialistaApi::class . ':buscarUno');
  $this->post('/alta/', \MascotaApi::class . ':CargarUno');  
  $this->put('/', \MascotaApi::class . ':ModificarUno');
})->add(\MWparaCORS::class . ':HabilitarCORSTodos');

$app->group('/turnos', function () {

  $this->get('/', \TurnoApi::class . ':traerTodos');
  $this->post('/alta/', \TurnoApi::class . ':CargarUno');  
  $this->put('/', \TurnoApi::class . ':ModificarUno');
  $this->get('/especialista/{filtro}/{especialista}', \TurnoApi::class . ':buscarUno');
  $this->get('/cliente/{filtro}', \TurnoApi::class . ':buscarCliente');
  $this->get('/fecha/{especialidad}/{fecha}', \TurnoApi::class . ':buscarFechaEspecialidad');
  $this->get('/cantidad/{especialidad}', \TurnoApi::class . ':cantidadTurnosEspecialidad');
  $this->get('/cantidad/fechas/{fecha_desde}/{fecha_hasta}', \TurnoApi::class . ':cantidadTurnosFechas');
  $this->get('/quien/{quien}', \TurnoApi::class . ':buscarVarios');
  $this->get('/turnos/{especialidad}', \TurnoApi::class . ':buscarTurnosEspecialidad');
  $this->get('/turnos/cancelados/{especialidad}', \TurnoApi::class . ':buscarTurnosCEspecialidad');
})->add(\MWparaCORS::class . ':HabilitarCORSTodos');

$app->group('/disponibilidad', function () {

  $this->get('/{id}', \DisponibilidadApi::class . ':traerTodos');
  $this->post('/alta/', \DisponibilidadApi::class . ':CargarUno');  
  $this->get('/{fecha}/{especialidad}', \DisponibilidadApi::class . ':buscarUno');
})->add(\MWparaCORS::class . ':HabilitarCORSTodos');

$app->group('/consultorios', function () {

  $this->get('/', \ConsultorioApi::class . ':traerTodos');
  $this->put('/{id_consultorio}/{estado}/{atencion}', \ConsultorioApi::class . ':ModificarUno');  
})->add(\MWparaCORS::class . ':HabilitarCORSTodos');

$app->group('/historia', function () {

  $this->get('/{cliente}', \HistoriaApi::class . ':traerTodos');
  $this->post('/alta/', \HistoriaApi::class . ':CargarUno');  
})->add(\MWparaCORS::class . ':HabilitarCORSTodos');

$app->group('/encuesta', function () {

  $this->get('/', \HistoriaApi::class . ':traerTodos');
  $this->post('/alta/', \EncuestaApi::class . ':CargarUno');  
})->add(\MWparaCORS::class . ':HabilitarCORSTodos');

$app->group('/tratamiento', function () {

  $this->get('/', \TratamientoApi::class . ':traerTodos');
  $this->post('/alta/', \TratamientoApi::class . ':CargarUno');  
})->add(\MWparaCORS::class . ':HabilitarCORSTodos');

$app->group('/especialidad', function () {

  $this->get('/', \EspecialidadApi::class . ':traerTodos');
  $this->post('/alta/', \EspecialidadApi::class . ':CargarUno');  
  $this->get('/mas/', \EspecialidadApi::class . ':buscarUno');
  $this->get('/menos/', \EspecialidadApi::class . ':buscarMenos');
  $this->get('/mejor/', \EspecialidadApi::class . ':buscarMejor');
  $this->get('/peor/', \EspecialidadApi::class . ':buscarPeor');
})->add(\MWparaCORS::class . ':HabilitarCORSTodos');

$app->run();
?>

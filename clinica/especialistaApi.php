<?php
require ('especialista.php');
require_once ('IApiUsable.php');

class especialistaApi extends Especialista implements IApiUsable
{
    public function TraerTodos($request, $response, $args){
        $consulta= Especialista::traerTodosUsuarios();
    }

    public function CargarUno($request, $response, $args){
        $arrayParametro = $request->getParsedBody();
        $consulta = Usuario::insertarUsuario($arrayParametro);
        /*$response->getBody()->write($arrayParametro);
        return $response;*/
    }

    public function BorrarUno($request, $response, $args){
    	$id=$args['id'];
    	$consulta = Usuario::borrarUsuario($id);
    }

    public function BuscarUno($request, $response, $args){
    	$email=$args['email'];
    	$consulta = Usuario::buscarUsuario($email);
    }

    public function ModificarUno($request, $response, $args){
    }
}
?>

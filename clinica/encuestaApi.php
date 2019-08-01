<?php
require ('encuesta.php');
require_once ('IApiUsable.php');

class encuestaApi extends Encuesta implements IApiUsable
{
    public function TraerTodos($request, $response, $args){
        $consulta= Encuesta::traerTodos($request, $response, $args);
    }

    public function CargarUno($request, $response, $args){
        $arrayParametro = $request->getParsedBody();
        $consulta = Encuesta::insertarEncuesta($arrayParametro);
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
        $id=$args['id_consultorio'];
        $estado=$args['estado'];
        $atencion=$args['atencion'];
        $consulta=Consultorio::modificarEstado($id, $estado, $atencion);
    }
}
?>

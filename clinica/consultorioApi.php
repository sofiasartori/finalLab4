<?php
require ('consultorio.php');
require_once ('IApiUsable.php');

class consultorioApi extends Consultorio implements IApiUsable
{
    public function TraerTodos($request, $response, $args){
        $consulta= Consultorio::traerTodos($request, $response, $args);
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
        $id=$args['id_consultorio'];
        $estado=$args['estado'];
        $atencion=$args['atencion'];
        $consulta=Consultorio::modificarEstado($id, $estado, $atencion);
    }
}
?>

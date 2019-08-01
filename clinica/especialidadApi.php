<?php
require ('especialidad.php');
require_once ('IApiUsable.php');

class especialidadApi extends Especialidad implements IApiUsable
{
    public function TraerTodos($request, $response, $args){
        $consulta= Especialidad::traerTodos($request, $response, $args);
    }

    public function CargarUno($request, $response, $args){
        $arrayParametro = $request->getParsedBody();
        $consulta = Especialidad::insertarEspecialidad($arrayParametro);
        /*$response->getBody()->write($arrayParametro);
        return $response;*/
    }

    public function BorrarUno($request, $response, $args){
    	$id=$args['id'];
    	$consulta = Usuario::borrarUsuario($id);
    }

    public function BuscarUno($request, $response, $args){
    	$consulta = Especialidad::masUsada();
    }

    public function BuscarMenos($request, $response, $args){
        $consulta = Especialidad::menosUsada($request, $response, $args);
    }

    public function BuscarMejor($request, $response, $args){
        $consulta = Especialidad::mejorComentario($request, $response, $args);
    }

    public function BuscarPeor($request, $response, $args){
        $consulta = Especialidad::peorComentario($request, $response, $args);
    }

    public function ModificarUno($request, $response, $args){
        $id=$args['id_consultorio'];
        $estado=$args['estado'];
        $atencion=$args['atencion'];
        $consulta=Consultorio::modificarEstado($id, $estado, $atencion);
    }
}
?>

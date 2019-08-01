<?php
require ('disponibilidad.php');
require_once ('IApiUsable.php');

class disponibilidadApi extends Disponibilidad implements IApiUsable
{
    public function TraerTodos($request, $response, $args){
        $id=$args['id'];
        $consulta= Disponibilidad::traerTodosTurnos($id);
    }

    public function CargarUno($request, $response, $args){
        $arrayParametro = $request->getParsedBody();
        $consulta = Disponibilidad::insertar($arrayParametro);
        /*$response->getBody()->write($arrayParametro);
        return $response;*/
    }

    public function BorrarUno($request, $response, $args){}
    public function ModificarUno($request, $response, $args){
        $arrayParametro = $request->getParsedBody();
        $consulta = Disponibilidad::modificarEstado($arrayParametro);
    }

    public function BuscarUno($request, $response, $args){
        $fecha=$args['fecha'];
        $especialidad=$args['especialidad'];
        $consulta = Disponibilidad::traerDisponibilidad($fecha, $especialidad);
    }    
}
?>
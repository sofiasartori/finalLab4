<?php
require ('turno.php');
require_once ('IApiUsable.php');

class turnoApi extends Turno implements IApiUsable
{
    public function TraerTodos($request, $response, $args){
        $consulta= Turno::traerTodosTurnos();
    }

    public function CargarUno($request, $response, $args){
        $arrayParametro = $request->getParsedBody();
        $consulta = Turno::insertarTurno($arrayParametro);
        /*$response->getBody()->write($arrayParametro);
        return $response;*/
    }

    public function BorrarUno($request, $response, $args){}
    public function ModificarUno($request, $response, $args){
        $arrayParametro = $request->getParsedBody();
        $consulta = Turno::modificarEstado($arrayParametro);
    }

    public function BuscarUno($request, $response, $args){
        $filtro=$args['filtro'];
        $consulta = Turno::traerTurnosFecha($filtro);
    }    

    public function BuscarCliente($request, $response, $args){
        $filtro=$args['filtro'];
        $consulta = Turno::traerTurnosPaciente($filtro);
    }
}
?>
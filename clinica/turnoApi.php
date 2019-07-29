<?php
require ('turno.php');
require_once ('IApiUsable.php');

class turnoApi extends Turno implements IApiUsable
{
    public function TraerTodos($request, $response, $args){
        $dia=$args['filtro'];
        $consulta= Turno::traerTodosTurnos($dia);
    }

    public function CargarUno($request, $response, $args){
        $arrayParametro = $request->getParsedBody();
        $consulta = Turno::insertarTurno($arrayParametro);
        /*$response->getBody()->write($arrayParametro);
        return $response;*/
    }

    public function BorrarUno($request, $response, $args){}
    public function ModificarUno($request, $response, $args){
        $id=$args['id'];
        $consulta = Turno::modificarEstado($id);
    }

    public function BuscarUno($request, $response, $args){}    
}
?>
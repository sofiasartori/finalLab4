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
        $medico=$args['especialista'];
        $consulta = Turno::traerTurnosFecha($filtro, $medico);
    }    

    public function BuscarCliente($request, $response, $args){
        $filtro=$args['filtro'];
        $consulta = Turno::traerTurnosPaciente($filtro);
    }

    public function cantidadTurnosEspecialidad($request, $response, $args){
        $especialidad = $args['especialidad'];
        $consulta = Turno::cantidadTurnosEspecialidad($especialidad, $response, $args);
    }

    public function cantidadTurnosFechas($request, $response, $args){
        $fecha_desde=$args['fecha_desde'];
        $fecha_hasta=$args['fecha_hasta'];
        $consulta = Turno::cantidadTurnosFechas($fecha_desde, $fecha_hasta, $args);
    }    

    public function buscarVarios($request, $response, $args){
        $quien=$args['quien'];
        $consulta = Turno::buscarVarios($request, $response, $quien);
    } 

    public function buscarFechaEspecialidad($request, $response, $args){
        $fecha=$args['fecha'];
        $especialidad=$args['especialidad'];
        $consulta = Turno::buscarFechaEspecialidad($fecha, $especialidad, $args);
    }

    public function buscarTurnosEspecialidad($request, $response, $args){
        $especialidad=$args['especialidad'];
        $consulta = Turno::buscarTurnosEspecialidad($especialidad, $response, $args);
    }

    public function buscarTurnosCEspecialidad($request, $response, $args){
        $especialidad=$args['especialidad'];
        $consulta = Turno::buscarTurnosCEspecialidad($especialidad, $response, $args);
    }
}
?>
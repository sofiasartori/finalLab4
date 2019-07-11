<?php
require ('mascota.php');
require_once ('IApiUsable.php');

class mascotaApi extends Mascota implements IApiUsable
{
    public function TraerTodos($request, $response, $args){
        $consulta= Mascota::traerTodasMascotas();
    }

    public function CargarUno($request, $response, $args){
        $arrayParametro = $request->getParsedBody();
        $consulta = Mascota::insertarMascota($arrayParametro);
        /*$response->getBody()->write($arrayParametro);
        return $response;*/
    }

    public function ModificarUno($request, $response, $args){
    	$arrayParametro = $request->getParsedBody();
    	$consulta = Mascota::modificarMascota($arrayParametro);
    }

    public function BorrarUno($request, $response, $args){}

    public function BuscarUno($request, $response, $args){
        $id=$args['id'];
        $consulta = Mascota::buscarMascota($id);
    }    
    
}
?>
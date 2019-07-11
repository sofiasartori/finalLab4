<?php
interface IApiUsable{
   	public function TraerTodos($request, $response, $args);
   	public function BorrarUno($request, $response, $args);
   	public function BuscarUno($request, $response, $args);
   	public function ModificarUno($request, $response, $args);
}
?>

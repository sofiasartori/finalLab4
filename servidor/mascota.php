<?php
require_once ('AccesoDatos.php');
class Mascota
{
	public $animal;
	public $raza;
	public $nombre;
	public $edad;
	public $duenio;
	public $foto;
	
    public function traerTodasMascotas(){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM veterinaria.mascotas");
		$consulta->execute();
		

		/*$tabla ='<table style="border:1px solid black;"><tr><th>Sabor</th><th>Tipo</th><th>Kilos</th></tr>';
		while($i=$consulta->fetch()){
			$tabla = $tabla.'<tr><td>'.$i['sabor'].'</td>
					   <td>'.$i['tipo'].'</td>
					   <td>'.$i['kilos'].'</td></tr>';
		}
		$tabla =$tabla.'</table>';
		echo $tabla;*/
		$miArray = Array();
		while($i=$consulta->fetch()){
			array_push($miArray, $i);		
		}
		echo json_encode($miArray);
		
		
	}

	public function insertarMascota($request){
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
			var_dump($request);
			$itemsMascota = $objetoAccesoDato->RetornarConsulta("INSERT into veterinaria.mascotas (animal, raza, nombre, edad, duenio, foto) values (:animal, :raza, :nombre, :edad, :duenio, :foto);");
			$itemsMascota->bindValue(':animal', $request['animal'], PDO::PARAM_STR);
			$itemsMascota->bindValue(':raza', $request['raza'], PDO::PARAM_STR);
			$itemsMascota->bindValue(':nombre', $request['nombre'], PDO::PARAM_STR);
			$itemsMascota->bindValue(':edad', $request['edad'], PDO::PARAM_INT);
			$itemsMascota->bindValue(':duenio', $request['duenio'], PDO::PARAM_STR);
			$itemsMascota->bindValue(':foto', $request['foto'], PDO::PARAM_STR);
			$itemsMascota->execute();
		
	}


	public function modificarMascota($request){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("UPDATE veterinaria.mascotas SET animal=:animal, raza=:raza, nombre=:nombre, edad=:edad, duenio=:duenio, foto=:foto where id=:id");
		$consulta->bindValue(':id', $request['id'], PDO::PARAM_INT);
		$consulta->bindValue(':animal', $request['animal'], PDO::PARAM_STR);
		$consulta->bindValue(':raza', $request['raza'], PDO::PARAM_STR);
		$consulta->bindValue(':nombre', $request['nombre'], PDO::PARAM_STR);
		$consulta->bindValue(':edad', $request['edad'], PDO::PARAM_INT);
		$consulta->bindValue(':duenio', $request['duenio'], PDO::PARAM_STR);
		$consulta->bindValue(':foto', $request['foto'], PDO::PARAM_STR);
		$consulta->execute();
		$miArray = Array();
		while($i=$consulta->fetchObject('Mascota')){
			array_push($miArray, $i);		
		}
		echo json_encode($miArray);
	}

	public function buscarMascota($id){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta = $objetoAccesoDato->RetornarConsulta("SELECT * FROM veterinaria.mascotas WHERE id=$id");
		$consulta->execute();
		$miArray=Array();
		while ($i=$consulta->fetchObject('Mascota')){
			array_push($miArray, $i);
		}
		echo json_encode($miArray);
	}
}
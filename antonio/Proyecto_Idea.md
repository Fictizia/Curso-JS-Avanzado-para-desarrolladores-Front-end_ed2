# Git Project

[https://github.com/antonioMateos/js-project](https://github.com/antonioMateos/js-project)

### Proyecto: Alien or Human?

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

#### Objetivo_

Juego de mecánica lo más sencilla posible —> Boolean = Pregunta —> Respuesta (Acción / reacción)

#### Desc_

· Ceros o Unos. True or False.
· Mostramos imagen y una palabra asociada. El usuario debe decidir si es cierto o falso. “Si” o “No”. —> Tinder
· Aprovechamos como “miramos” y “leemos”.
· Posibles Usos // Aplicaciones
	—> Juego reconocer objetos.
	—> Juego reconocer pelis / fotogramas / gifs?.
	—> Obras de arte <> Autores // Monumentos <> Países // Geografía <> Países / Ciudades
	—> Actores / personajes.
	—> Idiomas —> Vocabulario.
	—> Circle / Triangle / Square + Colores
	—> Piedra / Papel / Tijera
	—> etc…	
	—> Versión Beta con Aliens y Humanos "dibujicos".

#### Mecánica Básica_

##### 1 - Partida Simple ==> Contra la máquina / General.

· 10 imágenes de Aliens y Humanos (5+5).
· Contrarreloj —> Partidas cortas —> 30s?
· Puntuación según aciertos en 1 partida. —> Aciertos * 100pts
· El único objetivo de jugar solo es ganar puntos para poder apostar en batallas contra otros usuarios.

	Jugada = [Imagen + palabra(true or false)].random —> Si o No (swipe) —> Se repite

		[P.E.] Img “Human” + Txt “Human” or “Alien”
	
			 Res > Acierto o Error
			 
			 > Random NO dirigido

	Partida = Número total de jugadas en 30segundos
		  PERFECT -> ALL aciertos -> Puntos extra
		  EPIC FAIL -> ALL fallos -> Resta puntos -> N Jugadas x 100pts en esa partida (SI menos de 0 te deja a 0)

##### 2 - Ranking.

	> + Simple —> Ranking según puntuaciones y además podemos ver % aciertos / fallos / Mejor Partida / etc…

		> + Datos > País / Ciudad.
		> Histórico de batallas con otros usuarios ?
		> Porcentaje según cantidad aciertos vs. total de jugadas
		> Porcentaje según batallas ganadas / perdidas
		> Perfects / Epic Fails

##### 3 - Modo batalla.

· 2 usuarios juegan la misma partida.
· Gana el que más aciertos tenga.
· En caso de empate —> XTRA time hasta desempate
· Apuestas de puntos —> Permitir apuestas desiguales?
· Streaming online de la partida por parte de otros usuarios.

	> Retar a otro usuario
		· Buscar en el ranking y seleccionar —> ¿cuántos puntos apuestas?
		· El otro usuario puede aceptar o rechazar la batalla.
		· El que gana se queda los puntos de la partida + los de la apuesta.

	> Permitir apuestas de puntos entre los demás usuarios? -> Espectadores de partidas?

##### 4 - Necesidades 

· App híbrida para Jugar + ranking / crear usuarios
· Landing —> Web para ranking / downloads / crear usuarios

· [BD] Usuarios

	· login —> facebook / tw + otros
	· login —> normal
	
· [BD] Imágenes

	id: {
		img: "src",
		type/word: "alien/human",
		stats: {
			usedTimes:NN,
			success:NN,
			fails:NN
		}
	}

##### 5 - XTras / Ideas

· Permitir comentarios de otros usuarios? -> No
· Seguir a otros usuarios?
· Notificaciones? —> De qué?
· Compartir? —> Dónde? El qué? El ranking? Tu puesto? El resultado de una partida?
· Likes / Dislikes a los usuarios? —> Puedes ser el mejor pero que te odien? (Ivan Drago)
· Likes / Dislikes de batallas?

##### 6 - Modo Vocabulario.

· "Aprende contigo".

	> Palabras que más veces fallas -> Te las preguntará más a menudo
	> Palabras que más aciertas -> Bajará la frecuencia
	> RANDOM dirigido.

##### - - - - - - - - - -

##### Pantallas / UI

###### APP

	0# Inicio
		0.1 -> Login
		0.2 -> Sign In

	1# User / Profile
		1.1 -> User Info [name, email, avatar, countryFlag, victoryMsg]
		1.2 -> User Games Statistics -> *Me* Rankings
		1.3 -> [BTN] -> Start Game / Normal = Solo
		1.4 -> [BTN] -> Challenge a User -> GoTo -> Ranking
		1.4 -> [BTN] -> Ir al ranking
		1.5 -> [BTN] -> BATALLAS / RETOS recibidos -> GoTo -> Cola de Batallas -> Burbuja si tienes retos pendientes
			1.5.1 -> Usuario que te reta 
			1.5.2 -> Puntos que se apuesta
			1.5.3 -> MSG del reto
			1.5.4 -> [BTN] Aceptar / Rechazar
		1.6 -> [BTN] -> LogOut

	2# Partida Simple
		2.0 -> [INI] Ready / Steady / Go!
		2.1 -> Tarjeta / Imagen
		2.2 -> Palabra
		2.3 -> Timer
		2.4 -> [BTN] -> Yes / No -> Swipe LR or Keyboard <- ->
		2.5 -> [END] Resumen de la partida -> Aciertos // Errores -> Perfect / Epic Fail
			2.5.1 -> [BTN] -> Otra ronda?
			2.5.2 -> [BTN] -> Back to profile
		
	3# Ranking
		3.1 -> Lista Usuarios por puntuación -> 10ºs -> Scroll // Pagination
		3.2 -> User info [countryFlag, name, status:online/offline, points, perfects,
			epicFails, % aciertosJugadas, % batallasGanadas]
		3.3 -> [BTN] Me -> Te busca en la lista y te muestra 5 arriba y 5 abajo
		3.4 -> [ACTION] -> Al seleccionar usuario [BTN] -> Retar? [Yes / No] -> Yes -> GoTo -> 4#
			3.4.1 -> Si el usuario retado no está en OnLine se le envia a la cola de Retos
		3.5 -> SOLO mostrar los 100 primeros, pero mostrarle a cada usuario su ranking
			
	4# Retar
		4.1 -> [Input] -> Apuesta / Puntos -> unidad mín 100pts
		4.2 -> [TextArea] -> Mensaje para el otro usuario
	
	5# Batalla
		5.0 -> [INI] Ready / Steady / Go!
		5.1 -> Tarjeta / Imagen
		5.2 -> Palabra
		5.3 -> Timer
		5.4 -> [BTN] -> Yes / No -> Swipe LR or Keyboard <- ->
		5.5 -> [END] Resumen de la partida -> Aciertos // Errores -> Perfect / Epic Fail
			2.5.1 -> "You Win / You Lose" Al perdedor se le muestra el vicotoryMessage del Ganador.
			2.5.2 -> [BTN] -> Otra ronda?
			2.5.3 -> [BTN] -> Back to profile

###### WEB

	1# Inicio / Landing -> [BTNS] -> Downloads
		1.1 -> Description
		1.2 -> Social Links
	2# Ranking
	3# Galería de Aliens y Humanos
	4# Crear Usuarios ?? -> Que lo hagan solo en la App

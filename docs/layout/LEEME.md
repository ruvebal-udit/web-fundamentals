# Guía Pedagógica: Introducción a la Maquetación con HTML y CSS3

## Objetivo

En esta guía aprenderemos los fundamentos de la maquetación web moderna usando HTML y CSS3. Cubriremos Normal Flow, Position, Float, Flexbox y Grid.

## Introducción

La maquetación web es el arte de estructurar y organizar los elementos de una página para que sean accesibles, atractivos y funcionales. En esta guía, exploraremos las bases fundamentales de HTML y CSS3 para lograr diseños modernos y eficientes.

Hoy en día, el diseño web no solo se trata de que una página “se vea bien”, sino de que sea intuitiva, accesible y responsive. Herramientas como Figma han revolucionado la forma en la que diseñamos, permitiendo prototipado rápido y colaborativo. Sin embargo, antes de recurrir a herramientas digitales, un simple cuaderno y lápiz puede ser suficiente para bocetar ideas y estructurar un diseño de manera lógica.

Lo más importante en la maquetación web es tener claro el diseño que queremos lograr. Para ello, primero debemos conocer qué es posible hacer con HTML y CSS3. Desde diseños básicos hasta interfaces complejas, todo es alcanzable con un conocimiento sólido de estos lenguajes.

Para profundizar en las tendencias actuales del diseño web, puedes revisar estos artículos:

The 29 Dominating Web Design Trends for 2024:

- https://blog.hubspot.com/marketing/web-design-trends-2017

A Guide to Responsive Web Design:

- https://kinsta.com/blog/responsive-web-design/

CSS Layout - MDN Web Docs:

- https://web.dev/learn/css/layout/

## 1. Conceptos Básicos de Maquetación

### Normal Flow

El flujo normal es el comportamiento predeterminado de los elementos en HTML:

- Los elementos en bloque (div, p, h1-h6, section) ocupan todo el ancho disponible y se apilan verticalmente.
- Los elementos en línea (span, a, strong) se ubican en la misma línea hasta que no haya espacio.

#### Ejemplo Práctico

Crea un archivo `/ejemplonormalflow.html` e incluye el siguiente código:

```html
<div>
	<p>Este es un párrafo.</p>
	<span>Texto en línea.</span>
</div>
```

Documentación: Normal Flow en MDN: https://developer.mozilla.org/es/docs/Web/CSS/normal_flow

---

### Position

Define la ubicación de los elementos con `static`, `relative`, `absolute` y `fixed`.

- **static** (por defecto, sigue el flujo normal)
- **relative** (se mueve respecto a su posición original)
- **absolute** (se mueve respecto al ancestro posicionado más cercano)
- **fixed** (se queda fijo en la pantalla)

#### Ejemplo Práctico

Crea un archivo `/ejemploposition.html` e incluye el siguiente código en el HTML:

```html
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Ejemplo Position</title>
		<link rel="stylesheet" href="/css/main.css" />
	</head>
	<body>
		<div class="caja"></div>
	</body>
</html>
```

Luego, en el archivo `/css/main.css`, agrega el siguiente código:

```css
.caja {
	width: 100px;
	height: 100px;
	background-color: lightblue;
	position: absolute;
	top: 50px;
	left: 50px;
}
```

Documentación: Position en MDN: https://developer.mozilla.org/es/docs/Web/CSS/position

---

### Float

Permite que los elementos floten a la izquierda o derecha, utilizado históricamente para diseños de columnas.

#### Ejemplo Práctico

Crea un archivo `/ejemplofloat.html` e incluye el siguiente código en el HTML:

```html
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Ejemplo Float</title>
		<link rel="stylesheet" href="/css/main.css" />
	</head>
	<body>
		<img src="/assets/images/imagen.jpg" class="imagen" />
		<p>Este texto fluirá alrededor de la imagen.</p>
	</body>
</html>
```

Luego, en el archivo `/css/main.css`, agrega el siguiente código:

```css
.imagen {
	float: left;
	margin-right: 10px;
}
```

https://developer.mozilla.org/es/docs/Web/CSS/float

---

## 2. Diseños Modernos: Flexbox y Grid

### Flexbox

Ideal para distribución de elementos en una sola dimensión (fila o columna).

#### Ejemplo de Menú Horizontal

Crea un archivo `/ejemplomenu.html` e incluye el siguiente código en el HTML:

```html
<nav class="menu">
	<a href="#">Inicio</a>
	<a href="#">Servicios</a>
	<a href="#">Contacto</a>
</nav>
```

Luego, en el archivo `/css/main.css`, agrega el siguiente código:

```css
.menu {
	display: flex;
	justify-content: space-around;
	background-color: #333;
	padding: 10px;
}
.menu a {
	color: white;
	text-decoration: none;
}
```

Documentación: Guía de Flexbox en MDN: https://developer.mozilla.org/es/docs/Web/CSS/flexbox

---

### Grid

Perfecto para diseños bidimensionales (filas y columnas).

#### Ejemplo de Galería de Imágenes

Crea un archivo `/ejemplogaleria.html` e incluye el siguiente código en el HTML:

```html
<div class="galeria">
	<img src="/assets/images/img1.jpg" />
	<img src="/assets/images/img2.jpg" />
	<img src="/assets/images/img3.jpg" />
</div>
```

Luego, en el archivo `/css/main.css`, agrega el siguiente código:

```css
.galeria {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
}
.galeria img {
	width: 100%;
	border-radius: 10px;
}
```

Documentación: Guía de Grid en MDN: https://developer.mozilla.org/es/docs/Web/CSS/grid

---

## 3. Proyecto Final: Diseño de una Tarjeta de Perfil

Crea un archivo `/profilecard.html` e incluye el siguiente código en el HTML:

```html
<div class="perfil">
	<img src="/assets/images/avatar.jpg" />
	<div>
		<h3>Nombre del Usuario</h3>
		<p>Diseñador Web</p>
	</div>
</div>
```

Luego, en el archivo `/css/main.css`, agrega el siguiente código:

```css
.perfil {
	display: flex;
	align-items: center;
	background: linear-gradient(135deg, #667eea, #764ba2);
	padding: 20px;
	border-radius: 15px;
	color: white;
}
.perfil img {
	width: 80px;
	height: 80px;
	border-radius: 50%;
	margin-right: 15px;
}
```

https://developer.mozilla.org/es/docs/Web/CSS

---

## Anexo: Animaciones con CSS

### Keyframes

```css
@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

.animado {
	animation: fadeIn 2s ease-in-out;
}
```

### Transitions

```css
.boton {
	background-color: blue;
	color: white;
	padding: 10px;
	transition: background-color 0.5s;
}

.boton:hover {
	background-color: red;
}
```

https://developer.mozilla.org/es/docs/Web/CSS/CSS_Animations

---

## Conclusión

El diseño web es una disciplina en constante evolución. En los últimos años, tendencias como el **diseño minimalista**, el **dark mode**, y el **neumorfismo** han demostrado cómo la estética puede mejorar la experiencia del usuario. Sin embargo, más allá de las modas, lo fundamental sigue siendo la claridad y la funcionalidad.

Uno de los errores más comunes al iniciarse en el diseño web es empezar directamente a escribir código sin un plan previo. La clave está en definir primero qué queremos lograr. Para ello, podemos recurrir a herramientas de prototipado como Figma, Adobe XD, o simplemente usar papel y lápiz para bocetar un esquema.

Saber qué es posible hacer en diseño web es el primer paso para tomar mejores decisiones. Con HTML y CSS3 podemos crear interfaces increíbles sin necesidad de complicadas tecnologías adicionales.

Esta guía es solo una introducción, pero con estos conocimientos ya puedes estructurar páginas web con una base sólida. La mejor forma de aprender es experimentar y construir, así que no dudes en probar diferentes diseños y mejorar tu capacidad de maquetación con la práctica constante.

Para seguir aprendiendo, aquí hay más referencias esenciales:

Complete Guide to CSS Grid - CSS Tricks:

- https://css-tricks.com/snippets/css/complete-guide-grid/

A Guide to Flexbox - CSS Tricks:

- https://css-tricks.com/snippets/css/a-guide-to-flexbox/

CSS Layout - Web.dev:

- https://web.dev/learn/css/layout/

¡El diseño web es un universo de posibilidades, y apenas estamos comenzando!

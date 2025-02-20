# Introducción a CSS3 y Guía Teórico-Práctica de Iniciación al Estilado Web

## 1. Introducción a CSS3

CSS3 (Cascading Style Sheets, nivel 3) es el estándar actual para definir la presentación y el diseño de páginas web. Su desarrollo está regulado por el W3C ([World Wide Web Consortium](https://www.w3.org/Style/CSS/)), asegurando la compatibilidad y evolución del lenguaje. Puedes consultar la especificación oficial aquí:

- **Especificación oficial**: [https://www.w3.org/TR/css/](https://www.w3.org/TR/css/)
- **Documentación de MDN Web Docs**: [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **Validador de CSS del W3C**: [https://jigsaw.w3.org/css-validator/](https://jigsaw.w3.org/css-validator/)

A diferencia de HTML, CSS no define la estructura de los documentos, sino su apariencia. Su sintaxis comparte características con lenguajes de programación gracias a conceptos como @functions, @keyframes, calc(), var(), entre otros, permitiendo estilos dinámicos y reutilizables.

## 2. Historia y la Revolución de CSS3 en el Diseño de Interfaces (UI)

CSS fue propuesto en 1996 y ha evolucionado hasta CSS3, que marcó un punto de inflexión en el diseño de interfaces de usuario (UI) al introducir herramientas que permitieron separar completamente la presentación de la estructura del contenido.

Gracias a innovaciones como Flexbox, Grid, transiciones, animaciones y variables personalizadas, los diseñadores dejaron de depender de imágenes estáticas y trucos con tablas para maquetar páginas web. La posibilidad de crear diseños responsivos sin necesidad de JavaScript revolucionó la accesibilidad y la experiencia de usuario, permitiendo interfaces más fluidas, adaptables y atractivas. Además, la adopción de efectos avanzados como sombras, filtros y tipografías personalizadas hizo que las aplicaciones web pudieran competir visualmente con el diseño gráfico tradicional, impulsando la evolución del diseño digital moderno.

## 3. Sintaxis de Selectores y Reglas en CSS

CSS utiliza una sintaxis basada en reglas, donde cada regla se compone de un selector y un bloque de declaraciones. Un selector indica a qué elementos se aplicará el estilo, mientras que el bloque de declaraciones contiene las propiedades y valores que definirán su apariencia.

Ejemplo de sintaxis:

```css
selector {
	propiedad: valor;
}
```

### Selectores Básicos

- **Por elemento:** `h1 { color: blue; }` → Aplica a todos los `<h1>`.
- **Por clase:** `.callToAction { font-weight: bold; }` → Aplica a todos los elementos con `class="callToAction"`.
- **Por ID:** `#titulo { font-size: 24px; }` → Aplica solo al elemento con `id="titulo"`.

### Selectores Avanzados

- **Descendiente:** `article p { color: gray; }` → Aplica a todos los `<p>` dentro de `<article>`.
- **Hijo directo:** `nav > ul { margin: 0; }` → Aplica solo a `<ul>` dentro de `<nav>`.
- **Primer hijo:** `p:first-child { text-transform: uppercase; }` → Aplica al primer `<p>` dentro de su contenedor.
- **Pseudoclases dinámicas:** `button:hover { background-color: red; }` → Aplica cuando el usuario pasa el cursor.

### Pseudoclases Dinámicas en CSS

Las pseudoclases dinámicas permiten modificar el estilo de los elementos según la interacción del usuario:

- `:hover` → Se activa cuando el usuario pasa el cursor sobre un elemento.
- `:focus` → Se activa cuando el elemento está enfocado (por ejemplo, en un input).
- `:active` → Se activa cuando el usuario mantiene presionado un elemento.
- `:visited` → Se aplica a enlaces ya visitados.
- `:checked` → Se activa en inputs tipo checkbox o radio cuando están seleccionados.
- `:disabled` → Se aplica a elementos de formulario deshabilitados.

## 4. Potencial y Ámbito de CSS

CSS no solo permite estilizar texto y estructuras básicas, sino que es una herramienta poderosa para diseño gráfico avanzado, incluyendo:

- **Diseño responsivo** con `@media` queries.
- **Estilización dinámica** mediante `:hover`, `:focus`, `:nth-child()`, etc.
- **Uso de variables y funciones personalizadas** (`var()`, `calc()`, `clamp()`).
- **Efectos visuales avanzados** como sombras (`box-shadow`, `text-shadow`), filtros (`filter`), y animaciones (`@keyframes`).
- **Diseño experimental y NetArt** con propiedades avanzadas de tipografía, blending modes, clipping, y efectos 3D.

### 🎨 Algunas referencias

- [CSS Zen Garden](http://www.csszengarden.com/)
- [Ana Travasos](https://anatravasos.com/) → Artista que explora interactividad y diseño gráfico con CSS3 y SVG.
- [Jen Simmons](https://labs.jensimmons.com/) → Evangelista de CSS Grid y diseño web moderno.
- [Chris Coyier](https://chriscoyier.net/) → Fundador de CSS-Tricks, un recurso esencial para aprender CSS.
- [CSS Design Awards](https://www.cssdesignawards.com/) → Premian la innovación en el uso de CSS y diseño gráfico digital.

## 5. Ejemplo Práctico con Selectores

Asumimos que el estudiante ya tiene un `index.html` que importa `css/index.css`, el cual a su vez importa `css/main.css`.

### 📌 Estructura HTML de Referencia

```html
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Guía CSS3</title>
		<link rel="stylesheet" href="css/index.css" />
	</head>
	<body>
		<header>
			<nav>
				<ul>
					<li><a href="#section1" id="inicio">Inicio</a></li>
					<li><a href="#section2">Sobre CSS</a></li>
					<li><a href="#section3">Ejemplos</a></li>
					<li><a href="#section4">Contacto</a></li>
				</ul>
			</nav>
		</header>
		<section id="section1">
			<h2>Inicio</h2>
			<p>Bienvenidos a la guía de CSS3.</p>
		</section>
		<section id="section2">
			<h2>Sobre CSS</h2>
			<p>CSS permite estilizar documentos web.</p>
		</section>
		<section id="section3">
			<h2>Ejemplos</h2>
			<p>Ejemplos avanzados de selectores.</p>
		</section>
		<section id="section4" class="callToAction">
			<h2>Contacto</h2>
			<p>Envíanos un mensaje.</p>
		</section>
	</body>
</html>
```

### 🎨 Estilos CSS (`css/main.css`)

```css
/* 📌 Estilos por elementos */
body {
	font-family: Arial, sans-serif;
	margin: 0;
	padding: 0;
	background-color: #f5f5f5;
}

h2 {
	color: #333;
	text-align: center;
}

nav ul {
	list-style-type: none;
	display: flex;
	justify-content: space-around;
	background-color: #333;
	padding: 10px;
}

nav ul li a {
	text-decoration: none;
	color: white;
	padding: 10px 20px;
	display: inline-block;
}

/* 📌 Estilos por clases */

.callToAction {
	transform: scale(1.5);
}

/* 📌 Estilos por ID */
#inicio {
	font-weight: bold;
}

/* 📌 Selectores avanzados */
nav ul li a:hover {
	background-color: #555;
	transition: background-color 0.3s ease;
}

nav ul li:first-child a {
	border-left: 3px solid yellow;
}

nav ul li:nth-child(even) a {
	font-style: italic;
}

section {
	padding: 50px;
	margin: 20px;
	background: white;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

section:target {
	background-color: lightblue;
	transition: background-color 0.5s ease;
}

/* 📌 Ejemplo de animación */
@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

h2 {
	animation: fadeIn 1s ease-in-out;
}
```

## Explicación de los Selectores Avanzados

- `#inicio` → Aplica un estilo solo al enlace con ID "inicio".
- `nav ul li a:hover` → Cambia el fondo al pasar el mouse.
- `nav ul li:first-child a` → Aplica borde amarillo al primer elemento.
- `nav ul li:nth-child(even) a` → Aplica estilo itálico a elementos pares.
- `section:target` → Resalta la sección cuando es el destino de un enlace.
- `@keyframes fadeIn` → Aplica una animación de aparición a los títulos.

## Explicación de la animación

El selector `:target` permite aplicar estilos a un elemento cuando es referenciado en la URL. En este ejemplo, si hacemos clic en un enlace que apunta a una sección, esta se resaltará con un color de fondo distinto.

Además, la animación `fadeIn` hace que los títulos `<h2>` aparezcan con un efecto de desvanecimiento al cargar la página.

## 6. Conclusión

CSS3 es una herramienta extremadamente poderosa que permite no solo mejorar la estética, sino crear experiencias interactivas sin necesidad de JavaScript. Con un uso avanzado de selectores y pseudo-clases, es posible lograr interfaces dinámicas y estilizadas que respondan al usuario de forma eficiente.

### 🎨 **Ejemplos Destacados de Interacción con CSS3**

1. **CSS Zen Garden** - Una colección de estilos completamente distintos aplicados a un mismo HTML.  
   🔗 [http://www.csszengarden.com/](http://www.csszengarden.com/)

2. **Only CSS: Dropdown Navigation** - Menú desplegable solo con CSS.  
   🔗 [https://codepen.io/philhoyt/pen/ujHzd](https://codepen.io/philhoyt/pen/ujHzd)

3. **Pure CSS Tooltips** - Uso de `:hover` para mostrar tooltips sin JS.  
   🔗 [https://css-tricks.com/css-only-tooltips/](https://css-tricks.com/css-only-tooltips/)

4. **CSS Grid & Flexbox Playground** - Experimentación con Grid y Flexbox.  
   🔗 [https://cssgridgarden.com/](https://cssgridgarden.com/)  
   🔗 [https://flexboxfroggy.com/](https://flexboxfroggy.com/)

5. **Puros Menús Desplegables con CSS** - Ejemplo de submenús animados sin JS.  
   🔗 [https://codepen.io/simoberny/pen/JjoPbwr](https://codepen.io/simoberny/pen/JjoPbwr)

6. **CSS Perspective Cards** - Tarjetas con efecto de rotación en 3D sin JS.  
   🔗 [https://codepen.io/nxworld/pen/ZYNOBZ](https://codepen.io/nxworld/pen/ZYNOBZ)

7. **CSS-Only Modal** - Un modal interactivo sin una sola línea de JavaScript.  
   🔗 [https://codepen.io/davidkpiano/pen/YqJjgO](https://codepen.io/davidkpiano/pen/YqJjgO)

8. **Puro CSS3 Loading Animations** - Animaciones de carga avanzadas sin JS.  
   🔗 [https://projects.verou.me/css3patterns/](https://projects.verou.me/css3patterns/)

9. **Efectos Hover con `:hover` y `:focus`** - Transiciones suaves sin necesidad de JavaScript.  
   🔗 [https://codepen.io/suez/pen/RwWjYGz](https://codepen.io/suez/pen/RwWjYGz)

10. **NetArt con CSS3: Ana Travasos** - Experimentación de CSS puro con arte digital.  
    🔗 [https://anatravasos.com/](https://anatravasos.com/)

### 🔥 **Ejemplo Extra de Interacción CSS-Only**

Si buscas inspiración más avanzada, echa un vistazo a este desafío de **Awwwards** sobre CSS interactivo:  
🔗 [https://www.awwwards.com/awwwards/collections/css-js-animations/](https://www.awwwards.com/inspiration/)

📌 **Todos estos ejemplos muestran cómo se pueden lograr experiencias interactivas avanzadas únicamente con CSS3, sin necesidad de JavaScript.** ¡Explóralos y experimenta con ellos! 🚀

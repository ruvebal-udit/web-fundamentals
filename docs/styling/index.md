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

## 4. Potencial y Ámbito de CSS

CSS no solo permite estilizar texto y estructuras básicas, sino que es una herramienta poderosa para diseño gráfico avanzado, incluyendo:

- **Diseño responsivo** con `@media` queries.
- **Diseño fluido** como con `clamp()`
- **Estilización dinámica** mediante `:hover`, `:focus`, `:nth-child()`, etc.
- **Uso de variables y funciones** (`var()`, `calc()`, etc.)
- **Efectos visuales avanzados** como sombras (`box-shadow`, `text-shadow`), filtros (`filter`), y animaciones (`@keyframes`).
- **Diseño experimental y NetArt** con propiedades avanzadas de tipografía, blending modes, clipping, y efectos 3D.

### 🎨 Algunas referencias

- [CSS Zen Garden](http://www.csszengarden.com/)
- [Ana Travasos](https://anatravasos.com/) → Artista que explora interactividad y diseño gráfico con CSS3 y SVG.
- [Jen Simmons](https://labs.jensimmons.com/) → Evangelista de CSS Grid y diseño web moderno.
- [Chris Coyier](https://chriscoyier.net/) → Fundador de CSS-Tricks, un recurso esencial para aprender CSS.
- [CSS Design Awards](https://www.cssdesignawards.com/) → Premian la innovación en el uso de CSS y diseño gráfico digital.

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

## 2. Cómo Relacionar CSS con HTML

Existen tres formas principales de incluir CSS en un documento HTML:

### 2.1 Usando la etiqueta `<link>` en el `<head>`

Esta es la forma recomendada para estructurar los estilos de un sitio web, ya que permite mantener el código HTML limpio y reutilizar la misma hoja de estilos en múltiples páginas.

```html
<head>
	<link rel="stylesheet" href="styles.css" />
</head>
```

📌 **Ventajas**:

- Separa la estructura (HTML) de la presentación (CSS), favoreciendo el mantenimiento.
- Permite reutilizar los estilos en varias páginas.
- Mejora el rendimiento, ya que los navegadores pueden almacenar en caché el CSS.

### 2.2 Usando la etiqueta `<style>` dentro del `<head>`

Permite escribir CSS directamente en el documento HTML. Se usa en casos puntuales o para estilos específicos que no se reutilizan.

```html
<head>
	<style>
		body {
			background-color: #f5f5f5;
			font-family: Arial, sans-serif;
		}
	</style>
</head>
```

📌 **Ventajas**:

- Útil para pruebas rápidas o estilos específicos de una sola página.
- No requiere cargar archivos externos.

📌 **Desventajas**:

- No es reutilizable en múltiples páginas.
- Puede hacer que el código HTML se vuelva desordenado.

### 2.3 Usando el atributo `style` en los elementos HTML

Permite aplicar estilos directamente a un solo elemento.

```html
<p style="color: blue; font-size: 18px;">Este es un párrafo con estilo en línea.</p>
```

📌 **Ventajas**:

- Es útil para aplicar estilos rápidos sin modificar la hoja de estilos.
- Puede utilizarse en dinámicas generadas por JavaScript.

📌 **Desventajas**:

- No es reutilizable.
- Dificulta la mantenibilidad del código.
- Puede generar conflictos si se usa junto con hojas de estilo externas.

💡 **Recomendación**: Para proyectos estructurados y escalables, **se recomienda usar `<link>` para importar hojas de estilo externas** y evitar el uso excesivo de `<style>` o `style=""` en línea.

CSS permite aplicar estilos visuales a los elementos HTML mediante **propiedades** y **valores**. A continuación, se presentan algunas de las propiedades más utilizadas para estilado de texto, colores, alineación y escalado de imágenes y videos.

### 3.1 Propiedades Básicas de Estilado de Texto

Estas propiedades afectan la apariencia del texto en la página:

```css
color: red; /* Cambia el color del texto */
font-size: 20px; /* Ajusta el tamaño de la fuente */
font-family: Arial, sans-serif; /* Define la familia tipográfica */
font-weight: bold; /* Define grosor de la fuente (bold, normal, etc.) */
text-align: center; /* Centra el texto */
line-height: 1.5; /* Ajusta el espaciado entre líneas */
letter-spacing: 2px; /* Ajusta el espacio entre letras */
text-transform: uppercase; /* Convierte el texto a mayúsculas */
text-decoration: underline; /* Subraya el texto */
```

🔹 **Ejemplo visual**: Prueba estas propiedades aplicándolas a un `h1` en una hoja de estilos:

```css
h1 {
	font-size: 32px;
	color: darkblue;
	text-align: center;
	text-transform: uppercase;
	font-family: 'Courier New', monospace;
}
```

📌 **Referencias sobre estilado de texto en CSS**:

- [MDN: text properties](https://developer.mozilla.org/en-US/docs/Web/CSS/text)

---

### 3.2 Propiedades para Juegos de Color

Estas propiedades permiten cambiar el color de fondo y aplicar efectos visuales.

```css
background-color: lightblue; /* Color de fondo sólido */
background-image: url('fondo.jpg'); /* Imagen de fondo */
background-size: cover; /* Ajusta el tamaño de la imagen */
background-repeat: no-repeat; /* Evita la repetición de la imagen */
opacity: 0.7; /* Ajusta la opacidad del elemento */
box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5); /* Aplica sombra al elemento */
filter: grayscale(100%); /* Convierte la imagen a escala de grises */
```

🔹 **Ejemplo práctico**: Aplicar un fondo degradado en `body`

```css
body {
	background: linear-gradient(to right, #ff7e5f, #feb47b);
}
```

📌 **Referencias sobre colores y efectos visuales en CSS**:

- [MDN: background properties](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
- [MDN: box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
- [MDN: filters](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)

---

### 3.3 Propiedades de Alineación y Espaciado

Estas propiedades ayudan a controlar la disposición y alineación de los elementos:

```css
display: flex; /* Habilita flexbox para alineación flexible */
justify-content: center; /* Centra horizontalmente el contenido */
align-items: center; /* Centra verticalmente el contenido */
margin: 20px auto; /* Agrega margen exterior, centrando el bloque */
padding: 10px; /* Agrega espacio interno alrededor del contenido */
```

🔹 **Ejemplo con alineación en flexbox**:

```css
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}
```

📌 **Referencias sobre alineación en CSS**:

- [MDN: flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)

---

### 3.4 Propiedades para Escalado de Imágenes y Videos

Estas propiedades permiten definir el tamaño y la proporción de imágenes y videos en la página.

```css
width: 300px; /* Define el ancho del elemento */
height: auto; /* Ajusta la altura automáticamente */
max-width: 100%; /* Evita que la imagen sobrepase el ancho del contenedor */
object-fit: cover; /* Recorta la imagen para llenar el contenedor */
```

🔹 **Ejemplo con imágenes escalables**:

```css
img {
	width: 100%;
	height: auto;
	max-width: 500px;
	display: block;
	margin: auto;
}
```

📌 **Referencias sobre escalado de imágenes y videos en CSS**:

- [MDN: width and height](https://developer.mozilla.org/en-US/docs/Web/CSS/width)
- [MDN: object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)

---

## 5. Manos a la obra

sumimos que tenemos un `index.html` que importa `css/index.css`, el cual a su vez importa `css/main.css`.

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

### 5.1 Explicación de los Selectores Avanzados

- `#inicio` → Aplica un estilo solo al enlace con ID "inicio".
- `nav ul li a:hover` → Cambia el fondo al pasar el mouse.
- `nav ul li:first-child a` → Aplica borde amarillo al primer elemento.
- `nav ul li:nth-child(even) a` → Aplica estilo itálico a elementos pares.
- `section:target` → Resalta la sección cuando es el destino de un enlace.
- `@keyframes fadeIn` → Aplica una animación de aparición a los títulos.

### 5.2 Explicación de la animación

El selector `:target` permite aplicar estilos a un elemento cuando es referenciado en la URL. En este ejemplo, si hacemos clic en un enlace que apunta a una sección, esta se resaltará con un color de fondo distinto.

Además, la animación `fadeIn` hace que los títulos `<h2>` aparezcan con un efecto de desvanecimiento al cargar la página.

💡 **Práctica** Experimenta combinaciones de propiedades en difentes `div` y `section`, aplicando diferentes valores para jugar con el impacto visual. ¡No tengas miedo con los colores, tipografías y efectos! 🎨✨

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

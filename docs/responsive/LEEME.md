# Guía Pedagógica: Diseño Web Responsive y Fluido

## Introducción y Contexto 🚀

([100,000+ Free Responsive Design & Design Images - Pixabay](https://pixabay.com/images/search/responsive%20design/))】 _Ejemplo de un diseño web adaptativo mostrado en varios dispositivos de distinto tamaño._

El **diseño web responsive** se refiere a la creación de sitios capaces de proporcionar una experiencia de usuario óptima en una amplia variedad de dispositivos, desde ordenadores de escritorio hasta teléfonos móvile ([La importancia del diseño web responsive en la era móvil | Pibeca Solutions](https://www.pibeca.com/2023/11/27/la-importancia-del-diseno-web-responsive-en-la-era-movil/#:~:text=El%20dise%C3%B1o%20web%20responsive%20se,audiencia%20cada%20vez%20m%C3%A1s%20m%C3%B3vil))】. En la actualidad, existen cientos de tamaños de pantalla diferentes utilizados por los usuarios; de hecho, en un sitio web con suficiente tráfico pueden registrarse **más de 1.000 resoluciones distintas\* ([El diseño web fluido](https://www.kingseo.es/post/el-diseno-web-fluido-2022#:~:text=Hoy%20en%20d%C3%ADa%2C%20en%20una,%E2%80%8D))】. Esta enorme diversidad —que incluye no solo PCs y smartphones, sino también tablets, televisores 4K, wearables y pantallas integradas en dispositivos del IoT— hace **indispensable** que los diseñadores adopten enfoques adaptativos. Un diseño que no se adapte a diferentes pantallas puede ofrecer una experiencia deficiente o incluso volverse inutilizable en ciertos dispositivos. Por ello, las técnicas de diseño **responsive** (adaptativo) y **fluido** se han vuelto fundamentales para garantizar la accesibilidad y usabilidad en el ecosistema web moderno.

**Objetivos de aprendizaje:**

- Comprender **por qué** surgió el diseño responsive y fluido, en el contexto del auge de dispositivos móviles y del Internet de las Cosas (IoT).
- Conocer la **evolución histórica** del diseño web adaptativo, desde los primeros _layouts_ fluidos y el uso de _media queries_ CSS, hasta técnicas modernas como la función `clamp()` de CSS.Com
- Aplicar de forma **práctica** técnicas modernas de CSS —`media queries`, función `clamp()`, unidades relativas (`em`, `rem`, `vw`, `vh`, `%`, etc.)— para crear diseños fluidos y adaptativos en HTML/CSS **sin usar frameworks**.
- Reflexionar sobre las **ventajas y limitaciones** de cada técnica (diseño responsive _vs_ fluido) y las posibilidades de **combinarlas** en proyectos reales.

## Sesión 1: Fundamentos del Diseño Responsive y Fluido 🖥️📱

### La necesidad del diseño adaptativo en la era multi-dispositivo

El crecimiento explosivo de dispositivos con acceso web a lo largo de las últimas dos décadas cambió por completo la forma de abordar el diseño de sitios. A inicios de los 2000, la mayoría de páginas se diseñaban pensando solo en monitores de escritorio con tamaños fijos; no se consideraba mayor variabilidad en las dimensiones de panta ([La importancia del diseño web responsive en la era móvil | Pibeca Solutions](https://www.pibeca.com/2023/11/27/la-importancia-del-diseno-web-responsive-en-la-era-movil/#:~:text=El%20dise%C3%B1o%20web%20ha%20experimentado,este%20enfoque%20ha%20cambiado%20dr%C3%A1sticamente))62】. Sin embargo, la llegada del **smartphone** (marcada por el lanzamiento del iPhone en 2007) inició una nueva era. En pocos años, millones de personas comenzaron a navegar en pantallas pequeñas y con orientación vertical, obligando a repensar los diseños web tradiciona ([El diseño web fluido](https://www.kingseo.es/post/el-diseno-web-fluido-2022#:~:text=Desde%20que%20sali%C3%B3%20el%20iPhone,%E2%80%8D))】. Pronto se sumaron **tablets**, lectores electrónicos, televisores inteligentes e incluso relojes, cada uno con distintas resoluciones y características de navegación.

Para 2015, el acceso móvil ya superaba al de escritorio en volumen de tráfico ([La importancia del diseño web responsive en la era móvil | Pibeca Solutions](https://www.pibeca.com/2023/11/27/la-importancia-del-diseno-web-responsive-en-la-era-movil/#:~:text=Este%20cambio%20hacia%20el%20dise%C3%B1o,a%20la%20audiencia%20en%20l%C3%ADnea))84】, y empresas como Google empezaron a penalizar en posicionamiento a los sitios no optimizados para móviles (el llamado _"Mobilegeddon"_ de 20 ([Responsive web design - Wikipedia](https://en.wikipedia.org/wiki/Responsive_web_design#:~:text=Responsive%20web%20design%20became%20more,13))28】. En este contexto, surgió la **necesidad imperiosa** de que los sitios web fueran capaces de “adaptarse” al entorno del usuario en vez de forzar al usuario a adaptarse al sitio (p. ej., haciendo _zoom_ constantemente en el móvil). Así, el diseño adaptativo se convirtió en una **estrategia crucial** para llegar y fidelizar a la audiencia moderna en la era multi-dispositivo ([La importancia del diseño web responsive en la era móvil | Pibeca Solutions](https://www.pibeca.com/2023/11/27/la-importancia-del-diseno-web-responsive-en-la-era-movil/#:~:text=Este%20cambio%20hacia%20el%20dise%C3%B1o,a%20la%20audiencia%20en%20l%C3%ADnea))85】.

### Breve evolución histórica: de layouts fijos a grids fluidos y _responsive design_

En los primeros días de la web, los layouts solían ser **estáticos o fijos**: definidos en píxeles, con un ancho rígido pensado para pantallas de ~800px o 1024px de ancho. Esto generaba experiencias pobres fuera de ese rango (barras de desplazamiento horizontal en pantallas pequeñas, o enormes márgenes vacíos en pantallas grandes).

A medida que aparecieron más tamaños de pantalla, se exploraron alternativas. Antes de la popularización del término _responsive_, hubo intentos de **diseño líquido o fluido** (_liquid layouts_), donde las anchuras se definían en porcentajes o en `em` (unidades relativas) en lugar de píxeles. La idea era que la página se estirara o encogiera para rellenar el espacio disponi ([¿Qué son los diseños web fluidos, adaptativos y responsivos?](https://blog.ida.cl/diseno/diferencias-diseno-web-fluido-adaptativo-responsivo/#:~:text=Dise%C3%B1o%20web%20l%C3%ADquido%20o%20fluido))】. Aunque este enfoque fluido funcionaba bien en ciertos rangos (ej. tablets o monitores medianos), se encontraron problemas en los extremos: en pantallas muy grandes las imágenes y elementos podían ampliarse excesivamente, y en pantallas muy pequeñas el texto resultaba diminuto e ilegi ([¿Qué son los diseños web fluidos, adaptativos y responsivos?](https://blog.ida.cl/diseno/diferencias-diseno-web-fluido-adaptativo-responsivo/#:~:text=En%20este%20tipo%20de%20dise%C3%B1o,textos%20son%20dif%C3%ADciles%20de%20leer)). Se intentó mejorar introduciendo anchuras máximas y mínimas para el contenedor, pero eso reintroducía zonas vacías en pantallas enormes o provocaba de nuevo _scroll_ horizontal en pantallas ultra peque ([¿Qué son los diseños web fluidos, adaptativos y responsivos?](https://blog.ida.cl/diseno/diferencias-diseno-web-fluido-adaptativo-responsivo/#:~:text=Como%20una%20forma%20de%20evitar,horizontal%20en%20las%20m%C3%A1s%20peque%C3%B1as))】. En paralelo, también surgió el llamado **diseño adaptativo (Adaptive Web Design)**, que consistía en preparar **plantillas estáticas múltiples** para diferentes tamaños (por ejemplo, un diseño específico para móvil, otro para tablet, otro para desktop) y elegir cuál mostrar según el dispositivo o el ancho detectado ([¿Qué son los diseños web fluidos, adaptativos y responsivos?](https://blog.ida.cl/diseno/diferencias-diseno-web-fluido-adaptativo-responsivo/#:~:text=Usa%20plantillas%20est%C3%A1ticas%20basadas%20en,se%20cambia%20a%20otro%20dise%C3%B1o)). Si bien el adaptativo permitía cierto grado de optimización por dispositivo, implicaba mantener varias versiones del sitio (mayor costo) y a menudo brindaba una experiencia inconsistente —por ejemplo, versiones móviles recortadas en contenido o funcionamiento ([¿Qué son los diseños web fluidos, adaptativos y responsivos?](https://blog.ida.cl/diseno/diferencias-diseno-web-fluido-adaptativo-responsivo/#:~:text=Esta%20aproximaci%C3%B3n%20podr%C3%ADa%20funcionar%20mejor,gana%20cada%20vez%20m%C3%A1s%20relevancia))—.

El gran salto ocurrió en **mayo de 2010**, cuando el diseñador Ethan Marcotte publicó en _A List Apart_ el artículo **"Responsive Web Design"**, acuñando el término y proponiendo una nueva metodolo ([El diseño web fluido](https://www.kingseo.es/post/el-diseno-web-fluido-2022#:~:text=En%20cualquier%20caso%2C%20como%20dec%C3%ADa%2C,%E2%80%8D)). Marcotte integró varias ideas: el uso de **grillas fluidas** y **imágenes flexibles** combinado con las recién estandarizadas **media queries de CSS3**. En un artículo previo (2009) ya había introducido el concepto de _fluid grids_, explicando cómo convertir un diseño de píxeles a porcentajes relativos tomando como base el tamaño del texto del navegador ([El diseño web fluido](https://www.kingseo.es/post/el-diseno-web-fluido-2022#:~:text=Pero%20la%20accesibilidad%20y%20la,%E2%80%8D)). Ahora, con las media queries, era posible aplicar diferentes reglas CSS según las características del dispositivo (ancho de pantalla, orientación, resolución, etc.). En resumen, **Responsive Web Design (RWD)** implicaba construir una sola página capaz de **reorganizar su layout y escalar sus elementos fluidamente** para verse bien en cualquier dispositivo ([La importancia del diseño web responsive en la era móvil | Pibeca Solutions](https://www.pibeca.com/2023/11/27/la-importancia-del-diseno-web-responsive-en-la-era-movil/#:~:text=La%20respuesta%20a%20este%20desaf%C3%ADo,desde%20el%20que%20se%20accede)).

Esta aproximación _“One Web”_ unificada resultó ser la más viable: en lugar de múltiples sitios, uno solo que “respondía” al entorno. Las técnicas clásicas de RWD se resumen en: **rejillas fluidas** (columnas dimensionadas en % en lugar de ([Responsive web design - Wikipedia](https://en.wikipedia.org/wiki/Responsive_web_design#:~:text=,to%20any%20device%20screen%20size))】, **imágenes flexibles** (imágenes con max-width: 100% para que no sobrepasen su contenedor ([Responsive web design - Wikipedia](https://en.wikipedia.org/wiki/Responsive_web_design#:~:text=,to%20any%20device%20screen%20size))18】, y **media queries CSS** para aplicar cambios de diseño en puntos de quiebre (_breakpoints_) específicos ([Responsive web design - Wikipedia](https://en.wikipedia.org/wiki/Responsive_web_design#:~:text=,to%20any%20device%20screen%20size))】. Esta filosofía se extendió rápidamente: para 2013–2015 se volvió un estándar de la industria, apoyada por metodologías como _mobile-first_ (diseñar primero para móvil e ir “escalando” hacia desktop) y frameworks populares (Bootstrap, Foundation, etc.) que incorporaron rejillas responsivas.

**Resumiendo la evolución:** empezamos con layouts fijos, luego vino el deseo de fluidos (pero con limitaciones), luego el diseño adaptativo con plantillas múltiples, y finalmente el **diseño responsivo** que combinó lo mejor de ambos mundos (fluidez + adaptabilidad por breakpoints).

### Diseño **Responsive** vs Diseño **Fluido**: ¿en qué se diferencian? 🤔

Es común confundir los términos, ya que ambos se refieren a lograr que la interfaz se adapte. En esta guía los distinguiremos así:

- **Diseño Fluido (o “líquido”)**: Todas las dimensiones en la hoja de estilo se definen con **unidades relativas** (%, `em`, `rem`, `vw`, etc.) en lugar de valores fijos en píxeles. De este modo, el diseño escala de forma continua cuando el usuario redimensiona la ventana o cambia de dispositivo. Un layout fluido _puro_ evita utilizar cualquier anchura fija mientras no sea necesario ([El diseño web fluido](https://www.kingseo.es/post/el-diseno-web-fluido-2022#:~:text=Responsive%20Fluido%3A))323】. Por ejemplo, una columna podría ocupar `50%` del ancho del contenedor en lugar de, digamos, `400px`. Si el contenedor crece, la columna crece proporcionalmente. La ventaja es un aprovechamiento máximo del espacio en cada tamaño y transiciones **suaves**, sin “saltos” bruscos. Sin embargo, como vimos, un fluido puro puede llevar al extremo de elementos desproporcionados (texto demasiado pequeño en móvil, líneas de texto excesivamente largas en pantallas XXL, etc.). La solución moderna incorpora **límites**: es habitual combinar el fluido con valores _mínimos_ y _máximos_ para ciertos elementos clave. Por ejemplo, se puede permitir que un título escale con la pantalla pero fijando un mínimo de 16px para que nunca sea ilegible en un telé ([El diseño web fluido](https://www.kingseo.es/post/el-diseno-web-fluido-2022#:~:text=El%20dise%C3%B1o%20fluido%20es%2C%20por,%E2%80%8D))324】. En suma, el diseño fluido busca que todo _fluya_ proporcionalmente al espacio disponible, manteniendo algunos topes para garantizar usabilidad.

- **Diseño Responsive (Responsivo o Adaptativo)**: En sentido estricto, _responsive web design_ es un enfoque amplio que engloba varias técnicas (de hecho, un buen diseño responsivo suele incluir componentes fluidos). A efectos de comparación, podemos definir el enfoque responsive típico como aquel que utiliza **puntos de corte (breakpoints)** con **media queries CSS** para reorganizar o redimensionar elementos en ciertos anchos predefinidos. Fuera de esos puntos, a veces las dimensiones permanecen fijas. Por ejemplo, un sitio podría mostrarse con un ancho fijo de 1200px en pantallas grandes, pero al bajar de 992px de ancho aplicaría una media query para pasar a un ancho de 100% (fluido) o a una columna; luego a menos de 768px otra media query para reorganizar aún más (menú colapsado, etc.). Este sería un enfoque _responsive adaptativo clásico_, a veces llamado **diseño adaptativo** en español cuando se enfatiza el uso de breakpoints. La web “salta” o **cambia de diseño en ciertos umbrales** en lugar de ajustar cada píxel continuamente. Bien ejecutado, el responsive puede ofrecer diseños muy optimizados por tramo de tamaños, mostrando u ocultando elementos según convenga a cada formato. No obstante, si se abusa de valores fijos y solo se confía en unos pocos breakpoints, es posible que entre esos puntos existan rangos subóptimos (por ejemplo, 801px ancho versus 799px podría dar experiencias bastante diferentes si solo hay un corte justo en 800px).

**Similitudes y combinación:** Tanto el diseño responsive como el fluido persiguen el mismo fin: que la página se **adapte a múltiples tamaños** de pantalla. De hecho, no son excluyentes, sino complementarios. El diseño responsivo _moderno_ suele incorporar fluidez en muchos elementos, y solo utiliza breakpoints cuando es necesario cambiar la disposición general. En palabras de algunos autores, el diseño fluido es realmente una forma de diseño responsive, en la cual se evitan tamaños fijos siempre que se pueda ([El diseño web fluido](https://www.kingseo.es/post/el-diseno-web-fluido-2022#:~:text=Responsive%20Fluido%3A))】. En la práctica, un enfoque recomendado es usar **fluidez por defecto** (layouts basados en porcentajes o `fr` de Grid, texto e imágenes escalables) y aplicar **media queries** para ajustes más drásticos de la estructura o para limitar esa fluidez en extremos. Gracias a esto obtenemos una experiencia más suave _entre_ breakpoints, evitando huecos muertos, y garantizamos a la vez una presentación apropiada en cada rango de dispositivos ([El diseño web fluido](https://www.kingseo.es/post/el-diseno-web-fluido-2022#:~:text=Mantendremos%20los%20breakpoints%20y%20la,%E2%80%8D))】.

**¿Cuándo usar uno u otro?** Realmente no se trata de escoger entre “responsive vs fluido”, sino de cuánto énfasis dar a cada estrategia. Si nuestro contenido es relativamente simple y puede reorganizarse en una sola columna en móvil, podríamos optar por un diseño muy fluido con mínimos breakpoints. Por otro lado, si diseñamos una interfaz muy compleja (ej: una aplicación web) podríamos necesitar múltiples breakpoints y ciertos elementos con tamaños fijos mínimos para mantener consistencia. En general, hoy en día se aconseja **combinar**: usar fluidez siempre que mejore la experiencia (tipografías, contenedores que escalen, etc.) y utilizar puntos de quiebre para cambios de layout o para mantener la legibilidad y la estética. Exploraremos cómo lograr esta combinación en la práctica.

### Ejemplo práctico 1: Layout responsivo básico con Flexbox y media queries 🎯

Para entender mejor el enfoque _responsive_, vamos a crear un pequeño ejemplo. Imaginemos un sitio con un encabezado, un contenido principal con tres columnas y un pie de página. En pantallas anchas queremos las tres columnas en una fila (layout de 3 columnas), pero en pantallas pequeñas las apilaremos en una sola columna vertical. Usaremos **Flexbox** para la disposición y **media queries** para el cambio de diseño.

**HTML:** Supondremos una estructura sencilla de `header`, `main` con tres `article` internos, y `footer`:

```html
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Ejemplo Responsive</title>
		<link rel="stylesheet" href="styles.css" />
	</head>
	<body>
		<header>
			<h1>Mi Sitio Web</h1>
		</header>
		<main class="contenedor">
			<article class="columna">Contenido 1</article>
			<article class="columna">Contenido 2</article>
			<article class="columna">Contenido 3</article>
		</main>
		<footer>&copy; 2025 Mi Sitio Web</footer>
	</body>
</html>
```

**CSS (archivo styles.css):**

```css
/* Estilos base (Mobile First) */
body {
	margin: 0;
	font-family: sans-serif;
}

header,
footer {
	background: #333;
	color: #fff;
	text-align: center;
	padding: 1rem;
}

.contenedor {
	display: flex;
	flex-wrap: wrap;
	max-width: 1200px;
	margin: auto;
	padding: 1rem;
}

.columna {
	/*
		Sintaxis: flex: [flex-grow] [flex-shrink] [flex-basis];
		- flex-grow:    1 → permite que crezca para ocupar espacio disponible
		- flex-shrink:  1 → permite que se reduzca si no cabe
		- flex-basis: 100% → ancho base deseado para esta columna
		En este caso: 1 columna por fila en móvil.
	*/
	flex: 1 1 100%;
	box-sizing: border-box;
	padding: 1rem;
}

.columna:nth-child(odd) {
	background: #f0f0f0;
}


```

Hasta aquí, definimos un contenedor flexible con una columna que ocupa todo del ancho gracias a `flex: 1 1 100%`. También hacemos que el contenedor no exceda 1200px (así tendrá margen a los lados en pantallas muy grandes, mejorando la legibilidad). Ahora añadimos las **media queries** para modificar la disposición en pantallas más grandes:

```css

/* Tablet (min-width: 600px) — 2 columnas */
@media (min-width: 600px) {
	.columna {
		/* 2 columnas por fila: cada una ~50% del ancho */
		flex: 1 1 50%;
	}
}

/* Desktop (min-width: 900px) — 3 columnas */
@media (min-width: 900px) {
	.columna {
		/* 3 columnas por fila: cada una ~33.33% del ancho */
		flex: 1 1 33.33%;
	}
}
```

**Cómo funciona:** Definimos dos puntos de corte. Cuando el ancho del viewport baja de 800px, cambiamos la base de las columnas a 50%, con lo cual Flexbox acomodará probablemente dos columnas por fila (dando un layout 2 columnas). Cuando baja de 500px, forzamos la dirección del _flex container_ a columna, de modo que ahora las tres `.columna` se apilen (layout de 1 columna). El resultado es un sitio que presenta 3 columnas en desktop, 2 en tablet, 1 en móvil, adaptándose de forma elegante.

Puedes probar este código abriendo el HTML en un navegador y redimensionando la ventana o usando las _DevTools_ (herramientas de desarrollador) para simular distintos dispositivos.

> **Ejercicio 1:** _Responsive sin Frameworks_ – Tomando el código anterior como base, personaliza el layout: por ejemplo, añade una barra de navegación en el header que cambie a un menú desplegable en móvil, o cambia las columnas de contenido por tarjetas con imágenes y texto. El objetivo es practicar el uso de **media queries** y propiedades flexibles. Sube tu resultado a un repositorio en GitHub (o GitHub Pages) para revisión. Asegúrate de comentar tu código explicando cómo cada media query está adaptando el diseño.


## Sesión 2: Técnicas Modernas para Diseño Fluido 🌊

En esta segunda parte, nos enfocaremos en herramientas más recientes de CSS que permiten lograr diseños fluidos de manera eficiente, reduciendo la dependencia de múltiples breakpoints. Asimismo, exploraremos cómo manejar imágenes y otros elementos para que todo el contenido de la página sea adaptable.

### Unidades relativas en CSS: la base del diseño fluido

Para lograr fluidez, es fundamental entender y utilizar las **unidades relativas** en CSS. A diferencia de las unidades absolutas (como `px` o `cm`), las unidades relativas se dimensionan en relación a alguna referencia, lo que permite que cambien de valor según el contexto. Las más usadas en diseño adaptativo son:

- **`%` (porcentaje):** relativo al contenedor padre inmediato. Por ejemplo, `width: 50%` hace que un elemento ocupe la mitad del ancho de su padre. Si el padre cambia de tamaño, el elemento en % también. Esta es quizás la unidad más típica en _layouts_ fluidos.
- **`em`:** relativo al tamaño de fuente (`font-size`) del elemento **padre**. Muy usada para _padding_, _margin_ o fuentes, ya que escala si se cambia el tamaño del texto del contenedor. Por ejemplo, si el elemento padre tiene `font-size: 20px`, entonces `1em` en un hijo equivaldrá a 20px.
- **`rem`:** relativo al tamaño de fuente de la raíz (`<html>`). Es consistente en toda la página (a menos que se cambie el font-size del `html`). Suele usarse para fuentes base y espaciamientos globales, ya que garantiza uniformidad. Por ejemplo, si definimos `html { font-size: 16px; }`, entonces `1rem = 16px` en cualquier parte.
- **`vw` y `vh`:** porcentajes relativos al **viewport** (ventana gráfica). `1vw` es 1% del ancho de la ventana del navegador, y `1vh` es 1% del alto. Con estos podemos dimensionar elementos en función del tamaño actual de la pantalla. Por ejemplo, `font-size: 5vw` significa que el texto siempre medirá el 5% del ancho de la pantalla (lo cual lo hace crecer en pantallas grandes y reducirse en pequeñas). Un uso común es crear **títulos fluidos**: `font-size: 10vw` podría hacer que un título ocupe aproximadamente el 10% del ancho de la ventana, viéndose enorme en desktop y pequeño en móvil. **Cuidado:** usar `vw`/`vh` puramente puede llevar a tamaños excesivos o minúsculos, por eso a menudo se combina con límites o se usa la función `clamp()` que veremos pronto.
- **Otras unidades relativas:** `vmin` y `vmax` (relativas al lado menor o mayor del viewport), unidades de la fuente como `ex` (altura de _x_) o `ch` (anchura de carácter "0"), etc. En la práctica, `%`, `em`, `rem`, `vw` y `vh` cubren la mayoría de necesidades de diseño responsive/fluid.

**Ejemplo:** supongamos que queremos un contenedor que sea fluido pero no demasiado ancho en pantallas grandes para mantener legibilidad. Podríamos combinar `%` con `rem` así:

```css
.container {
	width: 90%; /* por defecto ocupa 90% del ancho de la ventana/padre */
	max-width: 60rem; /* pero no crece más allá de ~60rem (960px si 1rem=16px) */
	margin: 0 auto; /* centrado horizontal cuando sea más estrecho que su contenedor padre */
}
```

En este caso `.container` será líquido hasta un máximo (aprox 960px), proporcionando una experiencia fluida en tamaños intermedios pero evitando líneas de texto demasiado largas en monitores enormes.

Igualmente, podríamos definir fuentes con unidades `rem` para que el usuario pueda escalar toda la interfaz ajustando la fuente base en su navegador (mejora de accesibilidad), o usar `em` en componentes específicos para que, por ejemplo, si tenemos un panel con `font-size` mayor, sus márgenes y paddings en `em` escalen acorde a ese cambio local.

### Tipografía fluida con CSS `clamp()`: textos que se adaptan sin saltos ✨

Uno de los desafíos clásicos del diseño responsive era manejar el tamaño de **tipografía**. Con media queries, se solía aumentar o disminuir el tamaño de letra en ciertos breakpoints: por ejemplo, tener un `<h1>` de 2rem en móvil, 3rem en desktop. Esto funcionaba pero producía **saltos bruscos**: la diferencia entre 799px y 800px de ancho podía significar que un título pase de 2rem a 3rem de golpe, un cambio n ([Diseño web responsive: Tipografía fluida con CSS clamp • Silo Creativo](https://www.silocreativo.com/diseno-web-responsive-tipografia-fluida-con-css-clamp/#:~:text=La%20tipograf%C3%ADa%20fluida%20tiene%20una,de%20media%20queries%20con%20diferentes))1-L59】. Para lograr fuentes más **escalonadas suavemente**, antes había que definir múltiples breakpoints intermedios o usar complejas fórmulas con `calc()` y `vw`.

Afortunadamente CSS nos brinda una solución elegante: la función `clamp()`. Introducida alrededor de 2020, `clamp()` permite combinar en **una sola línea** lo mejor de ambos mundos (valores fluidos + límites fijo) sin necesidad de varias media q ([clamp() - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp#:~:text=Note%20that%20using%20,the%20use%20of%20media%20queries))L1234】.

**¿Qué es `clamp()`?** Es una función CSS que recibe **tres valores**: un **mínimo**, un **valor preferido** y un \**máximo ([Diseño y tipografía fluida con CSS: Cómo aplicarlo a tu web con clamp](https://utopigstudio.com/es/blog/diseno/tipografia-fluida-css-clamp#:~:text=Esta%20funci%C3%B3n%20toma%20tres%20argumentos%3A))1-L99】. La sintaxis es `clamp(min, preferido, max)`. Lo que hace es *restringir* (de ahí su nombre, "clamp" = sujetar/restringir) el valor preferido dentro del rango dado por el mínimo y el ([Diseño y tipografía fluida con CSS: Cómo aplicarlo a tu web con clamp](https://utopigstudio.com/es/blog/diseno/tipografia-fluida-css-clamp#:~:text=Pst%3A%20Clamp%20como%20verbo%20en,que%20el%20nombre%20tiene%20sentido)) ([Diseño y tipografía fluida con CSS: Cómo aplicarlo a tu web con clamp](https://utopigstudio.com/es/blog/diseno/tipografia-fluida-css-clamp#:~:text=Esta%20funci%C3%B3n%20toma%20tres%20argumentos%3A))1-L99】. En la práctica, el valor preferido suele ser una expresión con unidades relativas (por ejemplo `5vw`), de modo que *crezca* o *disminuya\* según el tamaño del viewport; mientras que el mínimo y máximo suelen ser valores en `px` o `rem` que marcan el tope inferior y superior.

**Ejemplo sencillo:**

```css
h1 {
	font-size: clamp(1.5rem, 5vw, 3rem);
}
```

En este caso, el tamaño de fuente de `h1` será flexible:

- **Valor mínimo:** `1.5rem` (p.ej. ~24px) – nunca será más pequeño que eso.
- **Valor preferente (fluido):** `5vw` – el 5% del ancho del viewport.
- **Valor máximo:** `3rem` (p.ej. ~48px) – nunca excederá ese tamaño.

Entonces, en un móvil pequeño (digamos 360px de ancho), `5vw` = 18px, pero el mínimo es 24px, así que el h1 se quedará en 1.5rem (24px) para mantener legibilidad. En un escritorio muy grande, `5vw` podría ser, por ejemplo, 96px en una pantalla de 1920px, pero el máximo fijado es ~48px, así que no crecerá más allá de eso. En tamaños intermedios (tablet, laptop), el `5vw` irá generando valores graduales entre 24px y 48px. **Resultado:** el título se escala fluidamente con el tamaño de pantalla, pero siempre dentro de límites razo ([El diseño web fluido](https://www.kingseo.es/post/el-diseno-web-fluido-2022#:~:text=El%20dise%C3%B1o%20fluido%20es%2C%20por,%E2%80%8D))-L324】.

Como comenta Alfonso Serrano en su tutorial de _tipografía fluida_, esta técnica evita tener que definir múltiples breakpoints manualmente y logra que **no haya saltos perceptibles** en el tamaño del texto al cambiar de tamaño de v ([Diseño web responsive: Tipografía fluida con CSS clamp • Silo Creativo](https://www.silocreativo.com/diseno-web-responsive-tipografia-fluida-con-css-clamp/#:~:text=La%20tipograf%C3%ADa%20fluida%20tiene%20una,de%20media%20queries%20con%20diferentes)) ([Diseño web responsive: Tipografía fluida con CSS clamp • Silo Creativo](https://www.silocreativo.com/diseno-web-responsive-tipografia-fluida-con-css-clamp/#:~:text=Con%20las%20tipograf%C3%ADas%20fluidas%2C%20hacemos,m%C3%ADnimo%20de%20tama%C3%B1o%20de%20fuente))3-L70】.

**Aplicaciones de `clamp()` más allá de la fuente:** Podemos usar `clamp()` para _márgenes_, _padding_, _anchos de columna_, etc. Por ejemplo, podríamos querer que un margen lateral sea mínimo de 1rem, típico de 5vw, y máximo de 3rem. O un hero (banner principal) que tenga una altura flexible con límites. La función `clamp()` nos da mucha versatilidad para diseñar componentes que **se autoajustan** dentro de un rango.

Veamos un ejemplo práctico integrando unidades relativas y `clamp()` en CSS:

```css
/* Ejemplo: estilo de cabecera fluido */
header {
	padding: clamp(1rem, 2vw, 2.5rem) clamp(2rem, 5vw, 4rem);
	/* Esto ajusta el padding vertical entre 1rem y 2.5rem (según viewport),
     y el padding horizontal entre 2rem y 4rem */
	text-align: center;
}
header h1 {
	font-size: clamp(1.8rem, 4vw, 3rem);
	/* Título que crece entre ~1.8rem y 3rem según ancho */
}
```

Con este código, nuestra cabecera tendrá **espaciados** más pequeños en móviles y más amplios en desktop sin necesitar escribir `@media` a mano; igualmente el tamaño del título se escalará.

**Soporte y sintaxis:** `clamp()` está soportado ampliamente en navegadores modernos (Chrome, Firefox, Safari, Edge actuales). Por si acaso, se puede complementar con una regla `@supports` para dar un _fallback_ en navegadores antiguos. Por ejemplo:

```css
@supports not (font-size: clamp(1rem, 2vw, 2rem)) {
	/* Fallback: si clamp() no es soportado */
	h1 {
		font-size: 2rem;
	}
}
```

Sin embargo, dado que todos los navegadores principales lo implementan desde 2020, en la práctica es seguro usarlo hoy.

> **Ejercicio 2:** _Tipografía fluida_ – En un documento HTML con contenido real (por ejemplo, un artículo con varios encabezados y párrafos), aplica la técnica de tipografía fluida. Define estilos para `h1, h2, p` utilizando `clamp()` de manera que se vea bien en móvil (font-sizes suficientemente grandes) pero también en desktop (tampoco excesivamente enormes). Haz _commit_ de tus cambios en GitHub y prueba la página con GitHub Pages o VSCode Live Server para ver la diferencia al redimensionar.

### Layouts fluidos con CSS Grid y más técnicas modernas

Hasta ahora hablamos de fluidos principalmente en términos de escalado continuo de tamaños. Pero **fluidez** también se puede aplicar a la composición general de la página utilizando las nuevas capacidades de CSS Layout:

- **CSS Grid Auto-fill/auto-fit:** Grid Layout nos permite crear rejillas **responsivas sin media queries** en ciertos casos. Por ejemplo, podemos tener un contenedor de tarjetas y queremos tantas columnas como quepan de 200px de ancho cada una. Usando `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));` logramos que el grid meta automáticamente más columnas fluidamente a medida que el espacio lo permite, y reduzca el número de columnas cuando el espacio es menor (colocando las tarjetas restantes en nuevas filas). Cada tarjeta en ese ejemplo tendría un mínimo de 200px (para no hacerse demasiado estrecha) y un máximo de 1fr (para llenar el espacio disponible). Esta técnica produce un efecto de reflujo adaptativo sin especificar puntos de corte explícitos.

- **Flexbox con `flex-basis` en `%` o `auto`:** En el ejemplo de la sesión 1 usamos `flex: 1 1 33%` para las columnas. Eso ya es un comportamiento fluido: entre 1200px y 800px de ancho, las columnas pasaron de ~400px a ~266px automáticamente. Flexbox distribuía el espacio según las proporciones. Otro ejemplo: un menú de navegación horizontal donde los ítems usan `flex: 1 1 auto;` hará que se ajusten el tamaño según su contenido y espacio disponible, envolviéndose si es necesario.

- **Unidades `fr` en Grid:** La unidad fracción (`fr`) de CSS Grid es especialmente útil para layouts fluidos. Por ejemplo, `grid-template-columns: 2fr 1fr;` define dos columnas que siempre ocuparán 2/3 y 1/3 del contenedor respectivamente (fluido). Combinado con `minmax()` podemos asegurar mínimos. Ej: `grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));` creará tantas columnas de mínimo 15rem como quepan, distribuyendo el resto del espacio equitativamente (1fr cada una).

**Ejemplo práctico 3:** supongamos un portafolio de proyectos con tarjetas. Queremos que en desktop se vean 4 por fila, en tablet ~2 o 3, en móvil 1 por fila. Podemos lograrlo con CSS Grid fácilmente **sin media queries**:

***

### Portafolio con tarjetas responsive (Grid)

```html
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Ejemplo Práctico 3: Portafolio Responsive con CSS Grid</title>
	<link rel="stylesheet" href="styles.css" />
</head>
<body>
	<header>
		<h1>Mi Portafolio</h1>
	</header>

	<main class="projects-grid">
		<article class="project-card">Proyecto 1</article>
		<article class="project-card">Proyecto 2</article>
		<article class="project-card">Proyecto 3</article>
		<article class="project-card">Proyecto 4</article>
		<article class="project-card">Proyecto 5</article>
		<article class="project-card">Proyecto 6</article>
	</main>

	<footer>&copy; 2025 Mi Portafolio</footer>
</body>
</html>
```

***

###  Diseño fluido con Grid sin media queries

```css
/* Estilos base */
body {
	margin: 0;
	font-family: sans-serif;
}

header,
footer {
	background: #222;
	color: white;
	text-align: center;
	padding: 1rem;
}

/* Grid responsive */
.projects-grid {
	display: grid;

	/* Repetir tantas columnas como quepan, cada una con un mínimo de 250px */
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

	gap: 1rem;
	padding: 1rem;
	max-width: 1200px;
	margin: auto;
}

/* Tarjeta de proyecto */
.project-card {
	background: #eee;
	padding: 1.5rem;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	transition: transform 0.2s ease;
}

.project-card:hover {
	transform: translateY(-4px);
	background: #f5f5f5;
}
```

***

### 🧠 ¿Qué se enseña aquí?

* **`grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`**:

  * `auto-fit`: rellena el contenedor con tantas columnas como quepan.

  * `minmax(250px, 1fr)`: cada columna tiene un mínimo de 250px y puede expandirse si sobra espacio. En un contenedor grande, entrarán 4 (4 _ 250px = 1000px mínimo requerido, si el container es más ancho se distribuye el sobrante). Si la pantalla es más pequeña, quizás solo caben 2 de 250px antes de que el resto salte a nueva fila, etc. En móviles estrechos, probablemente solo 1 por fila (porque 2 _ 250px excedería el ancho). 

* El layout es **intrínsecamente fluido**: cambia el número de columnas automáticamente según el ancho del viewport.

* **No se necesita ninguna media query** 🧼

* El código es **escalable y limpio**: perfecto para portafolios, catálogos, grids de imágenes, etc.

***

### Imágenes y otros elementos gráficos responsivos 📷

Adaptar el **contenido visual** es tan importante como el layout o la tipografía:

- **Imágenes flexibles:** La regla de oro para hacer una imagen (etiqueta `<img>`) fluida es aplicarle `max-width: 100%; height: auto;`. Con esto, una imagen se encogerá proporcionalmente si el contenedor es más estrecho que ella, evitando desbordamiento ([Images - Bootstrap](https://getbootstrap.com/docs/4.0/content/images/#:~:text=Images%20,scales%20with%20the%20parent%20element))31-L39】. Por ejemplo, en una columna flexible podemos incluir `<img src="foto.jpg" alt="..." style="max-width:100%; height:auto;">` para que esa imagen nunca exceda el ancho de la columna. Esto resuelve que en móvil la imagen se vea más pequeña automáticamente y en desktop se vea a su tamaño natural (hasta su 100%). Hoy día muchos _reset/normalize CSS_ o frameworks incluyen `.img-fluid { max-width:100%; height:auto; }` por defecto.

- **Imágenes responsivas (srcset):** Aunque escapa un poco del enfoque “solo CSS” de la clase, es bueno mencionar que HTML5 ofrece atributos como `srcset` y el elemento `<picture>` para servir automáticamente imágenes de diferentes resoluciones o recortes según el dispositivo. Esto mejora rendimiento y adecuación visual (por ejemplo, cargar una versión más pequeña de una foto en pantallas móviles Retina). En nuestros ejercicios nos centraremos en CSS, pero sepan que es una técnica complementaria esencial para **responsive images**.

- **SVGs y gráficos vectoriales:** Los SVG (gráficos vectoriales) son intrínsecamente escalables. Un SVG insertado en la página puede comportarse como “imagen flexible” sin pérdida de calidad. Asegúrense de darles atributos de ancho/alto relativos o estilos CSS adecuados. Un truco: si embebemos SVG directamente en HTML, podemos usar CSS para controlar su tamaño como a cualquier elemento (ej: `width: 50%;`). Los iconos en SVG, por ejemplo, pueden ser coloreados o dimensionados con `em` para que acompañen al texto fluidamente.

- **Elementos embebidos (iframes, videos):** Para hacer un video de YouTube o un mapa de Google _responsive_, se suele envolver en un contenedor de relación de aspecto. Esto implica un poco más de CSS (usando porcentajes en padding para la relación 16:9, etc.). Es un detalle avanzado, pero mencionable: hay técnicas con `aspect-ratio` en CSS moderno que facilitan definir que un elemento debe mantener cierta proporción al redimensionar.

En nuestros ejemplos prácticos, nos enfocaremos en imágenes simples y SVG. Asegúrense siempre de probar cómo se comportan sus imágenes cuando la pantalla cambia de tamaño. Una imagen demasiado pequeña con `max-width:100%` puede pixelarse en pantallas grandes; una demasiado grande puede sobrepasar contenedores sin esa regla. **Verifiquen ambos extremos.**

### Tendencias actuales: ¿diseño fluido vs responsive? ¿Hacia dónde vamos? 📈

En el panorama de 2024-2025, vemos una convergencia interesante: tras años de consolidación del diseño responsive, están ganando protagonismo enfoques que podríamos llamar “fluidos” o **diseño _intrínsecamente_ responsivo**. Esto no significa desechar los breakpoints, sino que muchas cosas que antes solo se resolvían con media queries hoy se logran con técnicas fluidas o nuevas funcionalidades de CSS:

- **Fluidez en tipografía y espaciados:** Como ya practicamos, el uso de `clamp()` con unidades relativas ha reducido la necesidad de escribir varias media queries para cosas como ajustar el tamaño de letra, márgenes o anchos de columna. Esto simplifica el CSS y crea transiciones más suaves. En cierto modo, el **diseño fluido está sustituyendo parcialmente al responsive tradicional** en esos aspectos micro: ya no necesitamos breakpoints para cada tamaño de texto, porque las fuentes son líquidas por na ([Diseño web responsive: Tipografía fluida con CSS clamp • Silo Creativo](https://www.silocreativo.com/diseno-web-responsive-tipografia-fluida-con-css-clamp/#:~:text=tama%C3%B1o%20adecuado,referimos%20a%20la%20tipograf%C3%ADa%20fluida))L43-L49】. Muchos sitios modernos adoptan esta “tipografía fluida” para mejorar la consistencia visual en cualquier dispositivo sin saltos notables.

- **Container Queries (Consultas a contenedores):** Una de las adiciones más esperadas a CSS (ya disponibles en navegadores modernos) son las _container queries_. Si las media queries tradicionales basan las condiciones en el viewport (global), las container queries permiten que un componente adapte su estilo según el tamaño de su **contenedor padre** específico. Esto es revolucionario para diseño _responsive_ de componentes reutilizables. Por ejemplo, un widget de card podría tener diferentes disposiciones de sus elementos internos si su contenedor es ancho o estrecho, independientemente del tamaño global de la página. Las container queries complementan al diseño fluido, haciendo posible un responsive _contextual_. A medida que se estandaricen, veremos patrones de diseño aún más modulables.

- **Otras tendencias:** El _Responsive Web Design_ sigue evolucionando con la tecnología: el aumento de dispositivos plegables (foldables), por ejemplo, introduce conceptos de diferentes ventanas en un mismo dispositivo; la integración con plataformas de TV o vehículos requiere pensar en distancias de visualización distintas; y la accesibilidad enfatiza adaptar no solo al tamaño sino a las necesidades del usuario (zoom, contrastes, motion preferences). También, la llegada de herramientas como **CSS Nesting**, **CSS Layers**, etc., facilitan manejar CSS complejo de forma organizada, lo cual es útil cuando combinamos muchas condiciones responsivas.

En resumen, **lo fluido no reemplaza a lo responsive, sino que lo enriquece**. Seguiremos definiendo breakpoints para cambios de layout mayores, pero probablemente necesitaremos menos breakpoints “menores” porque dejaremos que CSS haga el trabajo continuo por nosotros en cuestiones de tamaños relativos. La tendencia es lograr interfaces más “**elastic**” (término que a veces se usa), que se sientan naturales en cualquier entorno sin evidenciar puntos de corte bruscos.

### Ventajas y limitaciones: comparativa de enfoques 🔍

Para afianzar conceptos, hagamos una **comparativa** de las ventajas, desventajas y consideraciones de cada técnica:

- **Media Queries (Responsive clásico):**

  - _Ventajas:_ Permiten **control granular**: podemos reordenar, mostrar/ocultar elementos, cambiar estilos completamente en diferentes rangos de pantalla. Son muy poderosas para adaptar el **layout** y contenido a cada contexto (ej: un menú diferente en móvil). Fácil de entender: “a tal ancho, aplica estos estilos”.
  - _Limitaciones:_ Requieren anticipar puntos de corte; si aparece un nuevo tamaño intermedio puede que tengamos que ajustar el CSS. Pueden generar experiencias _discretas_ (saltos). Un abuso de media queries complica el mantenimiento (CSS largo y fragmentado por breakpoints). No resuelven bien la adaptación _continua_ dentro de un rango (solo antes/después del corte).
  - _Cuándo usarlas:_ Siempre que necesitemos **cambios drásticos** de layout o estilos que no se logren solo con valores fluidos. Por ejemplo, cambiar de un menú horizontal a uno tipo hamburguesa en móvil, o pasar de un diseño multi-columna a uno de una columna. También para aplicar estilos totalmente diferentes en orientación paisaje vs retrato, etc.

- **Diseño Fluido (unidades relativas, %):**

  - _Ventajas:_ **Simplicidad** en muchos casos: usar % y dejar que el navegador calcule. Garantiza uso óptimo del espacio a cualquier resolución (no hay “espacios muertos” fuera de breakpoints). Menos CSS condicionado; a veces con una sola regla en % logras adaptarte a mil tamaños. Mejora la sensación visual, evitando que el usuario note cambios abruptos. Ideal para elementos **proporcionales** (ej. un gráfico que siempre debe ocupar el 100% del contenedor).
  - _Limitaciones:_ Sin puntos de anclaje, puede provocar **problemas de usabilidad** en extremos: si todo es completamente líquido, en pantallas enormes el contenido puede volverse demasiado expandido (líneas de texto muy largas, imágenes gigantes) y en pantallas minúsculas todo se aprieta ([¿Qué son los diseños web fluidos, adaptativos y responsivos?](https://blog.ida.cl/diseno/diferencias-diseno-web-fluido-adaptativo-responsivo/#:~:text=En%20este%20tipo%20de%20dise%C3%B1o,textos%20son%20dif%C3%ADciles%20de%20leer))†L55-L63】. Requiere pensar en **límites** (min/max) para no romper el diseño. Además, no puede por sí solo reorganizar profundamente el layout (por ej., no convierte automáticamente un menú horizontal en vertical; eso necesita una media query o flex-direction condicional).
  - _Cuándo usarlo:_ En **componentes escalables** donde una adaptación continua es deseable: textos, cajas, márgenes, elementos que simplemente deben agrandarse o achicarse según espacio. Úsalo para el _99% del tiempo_ en que la página está entre los breakpoints principales. En general, comienza tus estilos usando unidades relativas y solo añade breakpoints si detectas que en cierto punto algo deja de verse bien.

- **Función `clamp()` y unidades viewport (`vw`, etc.):**
  - _Ventajas:_ Traen lo mejor del fluido con la seguridad de límites. `clamp()` en particular reduce muchas media queries a ([clamp() - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp#:~:text=Note%20that%20using%20,the%20use%20of%20media%20queries))26-L1234】. Facilita la creación de componentes truly **responsive-by-definition** (ej: un título con `clamp()` ya “sabe” adaptarse en cualquier escenario). Las unidades de viewport permiten relacionar elementos con el tamaño real de pantalla (útil para fullscreen sections, por ejemplo un banner que siempre ocupa 100vh del viewport).
  - _Limitaciones:_ Pueden ser un poco **contraintuitivas** al inicio (hay que elegir bien los valores de vw y límites para lograr el efecto deseado, a veces ensayo y error). Abusar de unidades de viewport en elementos dentro de contenedores pequeños podría llevar a incoherencias (ej: usar `vw` para algo dentro de un sidebar estrecho no tiene en cuenta el sidebar, mejor usar `%` en ese caso). En navegadores móviles, `vh` puede tener comportamientos peculiares debido a la barra de direcciones dinámica.
  - _Cuándo usarlos:_ `clamp()` para cualquier propiedad que quieras que sea fluida pero **acotada**. _Viewport units_ para dimensiones globales o elementos que dependan del tamaño de ventana completo (fondos, tipografías principales, etc.), con precaución de combinar con `clamp` o `minmax` según necesites.

En la práctica, un **buen diseño responsivo** combinará todo esto: usarás unidades relativas y clamp para muchas cosas, y tendrás algunas media queries estratégicas. El resultado debe ser un sitio que **responde** al entorno (responsive) pero de manera **flexible** (fluid) en todo momento.

### Reflexión: adoptando la mentalidad responsive/fluid 🤔

Para cerrar la sesión, planteamos algunas preguntas de **reflexión comparativa** que el estudiante debe poder responder o discutir, evidenciando la comprensión profunda del tema:

- **¿Por qué** es importante ofrecer una experiencia unificada en distintos dispositivos? (Pista: piensa en la satisfacción del usuario, SEO, alcance de audiencia, etc.).
- Analiza un sitio web conocido (por ejemplo, Wikipedia o Twitter) y describe **qué partes** de su diseño parecen fluidas y cuáles responden a breakpoints. ¿Notas saltos? ¿Podrías mejorar algo con técnicas aprendidas?
- Considera un elemento de UI complejo (por ej., una tabla de datos grande). ¿Qué combinación de técnicas usarías para hacerlo usable en móvil sin perder funcionalidad en desktop?
- Reflexiona sobre las **limitaciones**: ¿hay casos en que un diseño responsive/fluid _no_ es la mejor solución? (Pista: piensa en aplicaciones web muy especializadas que quizás requieran tamaños fijos, o en la carga de diseñar para “todos los dispositivos” vs diseñar solo para un target específico).

Estas preguntas buscan que los estudiantes internalicen la toma de decisiones de diseño, más allá de solo aplicar código.

### Mini proyecto integrador (Final de Sesión 2) 🎉

Como cierre del aprendizaje, se propone un mini-proyecto que reúna todos los conceptos vistos. La idea es desarrollar una **página web sencilla, responsiva y fluida**, sin frameworks, usando HTML5 + CSS3 puro:

**Proyecto:** _Landing Page Adaptativa_ – Diseñar la página de aterrizaje de un producto o servicio imaginario. Debe incluir: un header con logo y navegación, una sección de hero (por ejemplo, con un título y subtítulo llamativos y quizás una imagen de fondo), secciones de contenido con 2-3 columnas de texto e imágenes, y un footer. Requisitos técnicos:

- Utilizar al menos **dos media queries** para reorganizar el layout en diferentes breakpoints (por ejemplo: navegación horizontal en desktop que pase a menú hamburguesa en móvil; secciones multi-columna que colapsen a una columna en móvil).
- Aplicar **tipografía fluida** con `clamp()` para los títulos principales y texto base.
- Usar **unidades relativas** en la mayoría de elementos (evitar valores fijos innecesarios). Por ejemplo, anchos en %, paddings en `rem`, etc.
- Incluir imágenes que escalen correctamente (propiedad `max-width` para hacerlas fluidas). Si usas imágenes de diferentes tamaños, considera usar atributos `width/height` correctos o `srcset` si te animas.
- El diseño debe verse **consistente** y **estético** tanto en una pantalla móvil (~375px de ancho) como en una de escritorio (≥1200px). No se exige un diseño gráfico sofisticado, sino la correcta adaptación.
- Sube el código a GitHub en un repositorio (incluyendo README si deseas explicar tu enfoque). Puedes desplegarlo via GitHub Pages para mostrar el resultado.

**Criterios de evaluación:** Se revisará que el código HTML/CSS esté bien estructurado (uso adecuado de selectores, semántica básica en HTML5), que efectivamente existan las media queries requeridas y las reglas fluidas (`clamp`, unidades %, vw, etc.), y que al probar la página en diferentes tamaños no aparezcan problemas de usabilidad (texto demasiado pequeño, elementos desbordados, etc.). Además, se valorará la creatividad en la combinación de técnicas: por ejemplo, uso de Grid auto-fit, usos ingeniosos de `clamp()`, etc., según lo visto en clase.

Al completar este proyecto, el estudiante habrá demostrado su capacidad para **construir desde cero** una interfaz web adaptable a cualquier dispositivo, aplicando tanto principios consolidados de _Responsive Web Design_ como técnicas modernas de **diseño fluido**. ¡Esta es una habilidad altamente demandada en el desarrollo web actual, así que enhorabuena por avanzar en su dominio! 🚀

**Referencias utilizadas:** (lecturas recomendadas para profundizar)

- Ethan Marcotte, _Responsive Web Design_, A List Apart (2010) – [alistapart.com](https://alistapart.com/article/responsive-web-design/)
- Ethan Marcotte, _Fluid Grids_, A List Apart (2009) – [alistapart.com](https://alistapart.com/article/fluid-grids/)
- Blog IDA: \*¿En qué se diferencian el diseño web fluido, adaptativo y respons ([¿Qué son los diseños web fluidos, adaptativos y responsivos?](https://blog.ida.cl/diseno/diferencias-diseno-web-fluido-adaptativo-responsivo/#:~:text=Dise%C3%B1o%20web%20l%C3%ADquido%20o%20fluido)) ([¿Qué son los diseños web fluidos, adaptativos y responsivos?](https://blog.ida.cl/diseno/diferencias-diseno-web-fluido-adaptativo-responsivo/#:~:text=Usa%20plantillas%20est%C3%A1ticas%20basadas%20en,se%20cambia%20a%20otro%20dise%C3%B1o))】
- Silo Creativo: _Tipografía fluida con CSS clamp_ (Tut ([Diseño web responsive: Tipografía fluida con CSS clamp • Silo Creativo](https://www.silocreativo.com/diseno-web-responsive-tipografia-fluida-con-css-clamp/#:~:text=tama%C3%B1o%20adecuado,referimos%20a%20la%20tipograf%C3%ADa%20fluida)) ([Diseño web responsive: Tipografía fluida con CSS clamp • Silo Creativo](https://www.silocreativo.com/diseno-web-responsive-tipografia-fluida-con-css-clamp/#:~:text=La%20tipograf%C3%ADa%20fluida%20tiene%20una,de%20media%20queries%20con%20diferentes))
- MDN Web Docs: _CSS clamp()_ – Definició ([Diseño y tipografía fluida con CSS: Cómo aplicarlo a tu web con clamp](https://utopigstudio.com/es/blog/diseno/tipografia-fluida-css-clamp#:~:text=Esta%20funci%C3%B3n%20toma%20tres%20argumentos%3A)) ([Diseño y tipografía fluida con CSS: Cómo aplicarlo a tu web con clamp](https://utopigstudio.com/es/blog/diseno/tipografia-fluida-css-clamp#:~:text=property%3A%20clamp))7†L101-L108】
- King SEO Blog: _El diseño web fluido_ (art ([El diseño web fluido](https://www.kingseo.es/post/el-diseno-web-fluido-2022#:~:text=Responsive%20Fluido%3A)) ([El diseño web fluido](https://www.kingseo.es/post/el-diseno-web-fluido-2022#:~:text=Mantendremos%20los%20breakpoints%20y%20la,%E2%80%8D))8†L327-L334】
- Píbeca Blog: \*La importancia del diseño web responsive en la era m ([La importancia del diseño web responsive en la era móvil | Pibeca Solutions](https://www.pibeca.com/2023/11/27/la-importancia-del-diseno-web-responsive-en-la-era-movil/#:~:text=La%20respuesta%20a%20este%20desaf%C3%ADo,desde%20el%20que%20se%20accede)) ([La importancia del diseño web responsive en la era móvil | Pibeca Solutions](https://www.pibeca.com/2023/11/27/la-importancia-del-diseno-web-responsive-en-la-era-movil/#:~:text=Este%20cambio%20hacia%20el%20dise%C3%B1o,a%20la%20audiencia%20en%20l%C3%ADnea))4†L177-L185】
- Documentación Bootstrap (ejemplo de imáge ([Images - Bootstrap](https://getbootstrap.com/docs/4.0/content/images/#:~:text=Images%20,scales%20with%20the%20parent%20element))



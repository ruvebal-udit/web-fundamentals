# 👌 Desarrollo Web con HTML – Organización y Buenas Prácticas

## 🔹 Reminder: HTML5 como estándar actual

HTML5 es la versión más reciente y estandarizada del lenguaje de marcado HTML. Define la estructura y contenido de las páginas web de manera más eficiente, flexible y accesible. **Todas las prácticas en este curso están alineadas con la especificación oficial de HTML5:**

🔗 **Especificación HTML5 – WHATWG**: [https://html.spec.whatwg.org/](https://html.spec.whatwg.org/)

---

## 🔹 Nota previa: ¿Por qué usamos MDN como referencia?

En este curso, utilizaremos **MDN Web Docs** como referencia principal para HTML, CSS y JavaScript. **MDN (Mozilla Developer Network)** es una de las fuentes más confiables para desarrolladores web, ya que:

👉 Está mantenida por **Mozilla**, una organización sin fines de lucro que impulsa estándares abiertos.  
👉 Se actualiza constantemente con las mejores prácticas y compatibilidad con navegadores.  
👉 Proporciona documentación clara, ejemplos y explicaciones detalladas.

🔗 **Referencias clave:**

- **HTML básico – MDN**: [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **CSS – MDN**: [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **Meta tags SEO – MDN**: [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)

---

## 🔹 1. Estructura de Proyecto

Antes de escribir código HTML, organizaremos nuestra estructura de archivos y carpetas para mantener ordenado el proyecto.

📂 **Estructura recomendada:**

```
/proyecto-web
│── index.html
│── css/
│   └── index.css
│── assets/
│   ├── images/
│   └── icons/
│       └── favicon.svg
│── js/
│   └── main.js
```

👉 **Explicación:**

- **css/** → Contendrá hojas de estilo.
- **assets/** → Almacén de imágenes e íconos.
- **js/** → Archivos JavaScript (si los necesitamos).
- **index.html** → Punto de entrada del sitio web.
  - 💡 **Nota:** `index.html` también será el archivo por defecto servido si se solicita un directorio.

🛠️ **Ejercicio práctico:**

1. Crear esta estructura en **Visual Studio Code**.
2. Crear un archivo `index.html`.
3. Usar **Copilot** para autocompletar la estructura de `index.css` (📄 **Ver Anexo: Uso de Copilot en VSC**).

---

## 🔹 2. Estructura HTML y valor de `index.html`

💡 **El archivo `index.html` es clave en la web** porque es el archivo predeterminado que se carga cuando visitamos un sitio sin especificar una página (por ejemplo, `https://midominio.com/`).

🛠️ **Ejercicio práctico:**

1. Abrir `index.html` y agregar esta estructura base:
   ```html
   <!DOCTYPE html>
   <html lang="es">
   	<head>
   		<meta charset="UTF-8" />
   		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
   		<title>Mi Primera Página Web</title>
   	</head>
   	<body>
   		<h1>¡Hola, mundo!</h1>
   	</body>
   </html>
   ```
2. Guardar y visualizar con **Live Server** en VSC.
3. Usar **Copilot** para completar la estructura semántica de la página.

🔗 **MDN - Estructura HTML**: [https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)

## **3️⃣ Meta Tags para SEO**

### **🔹 ¿Qué es SEO y por qué es importante?**

SEO (**Search Engine Optimization**, Optimización para Motores de Búsqueda) es un conjunto de técnicas para mejorar la visibilidad de un sitio web en buscadores como Google. Los **meta tags** en HTML ayudan a los motores de búsqueda a comprender el contenido de una página y a indexarla correctamente.

### **🔹 Meta Tags esenciales**

Ejemplo de **meta tags básicos** para mejorar el SEO:

```html
<meta name="description" content="Aprende HTML y desarrollo web con las mejores prácticas." />
<meta name="keywords" content="HTML, CSS, desarrollo web, SEO, accesibilidad" />
<meta name="author" content="Tu Nombre" />
<meta name="robots" content="index, follow" />
```

🔹 **Explicación de cada meta tag:**

- **`description`** → Descripción breve del contenido de la página. Aparece en los resultados de búsqueda.
- **`keywords`** → Palabras clave relevantes (ya no es un factor importante para Google, pero sigue siendo útil).
- **`author`** → Nombre del autor del contenido.
- **`robots`** → Indica a los buscadores si deben indexar y seguir los enlaces de la página.

🛠 **Ejercicio práctico:**

1. Añadir estos meta tags en `<head>`.
2. Usar la herramienta **"Inspeccionar" (F12) → Elements → Head"** para ver si están cargando correctamente.

🔗 **MDN - Meta Tags SEO**: [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)

---

## **4️⃣ El `<body>` y la estructura semántica**

### **🔹 ¿Qué es HTML semántico y por qué es importante?**

El **HTML semántico** utiliza etiquetas con significado, lo que hace que el código sea más accesible, fácil de entender y mejor para SEO.

📌 **Tim Berners-Lee**, creador de la web, introdujo el concepto de **Web Semántica**, que busca estructurar el contenido para que sea comprensible tanto por humanos como por máquinas. En palabras de W3C:

> _"The Semantic Web is about making links meaningful, enabling software agents to locate and understand information more effectively."_  
> **(La Web Semántica trata de hacer que los enlaces sean significativos, permitiendo que los agentes de software localicen y comprendan la información de manera más efectiva.)**

### **🔹 Estructura semántica recomendada**

Ejemplo correcto de estructura HTML semántica:

```html
<body>
	<header>
		<h1>Mi Página Web</h1>
		<nav>
			<ul>
				<li><a href="#">Inicio</a></li>
				<li><a href="#">Contacto</a></li>
			</ul>
		</nav>
	</header>

	<main>
		<section>
			<h2>Sobre Nosotros</h2>
			<p>Bienvenido a nuestra página.</p>
		</section>
	</main>

	<footer>
		<p>&copy; 2025 Mi Web</p>
	</footer>
</body>
```

🔹 **Explicación de cada etiqueta:**

- **`<header>`** → Encabezado principal con título y navegación.
- **`<nav>`** → Agrupa los enlaces de navegación del sitio.
- **`<main>`** → Contenido principal de la página (solo debe haber uno por documento).
- **`<section>`** → Agrupa contenido relacionado dentro de la página.
- **`<footer>`** → Contiene información secundaria como derechos de autor y enlaces adicionales.

🔗 **MDN - HTML Semántico**: [https://developer.mozilla.org/en-US/docs/Glossary/Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)

---

## **5️⃣ Inserción de Recursos Multimedia**

### **📌 5.1 Cargar imágenes y videos desde local**

Ejemplo con imágenes dentro de `assets/images/`:

```html
<img src="assets/images/foto.jpg" alt="Descripción de la imagen" />
```

Ejemplo con video en `assets/videos/`:

```html
<video controls>
	<source src="assets/videos/video.mp4" type="video/mp4" />
	Tu navegador no soporta la etiqueta de video.
</video>
```

🛠 **Ejercicio práctico:**

1. Subir una imagen a `assets/images/`.
2. Insertarla en HTML con la etiqueta `<img>`.
3. Cargar un video local y probarlo en el navegador.

🔗 **MDN - Imágenes en HTML**: [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)  
🔗 **MDN - Video en HTML**: [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)

---

### **📌 5.2 Por qué no almacenar archivos grandes o binarios en GitHub**

📌 **GitHub no está diseñado para almacenar archivos grandes o binarios.**  
Razones principales:

- **Límites de almacenamiento**: GitHub limita el tamaño de los archivos y repositorios.
- **Problemas de rendimiento**: Archivos grandes hacen que `git pull` y `git clone` sean más lentos.
- **Alternativa recomendada**: Usar un **CDN o servicio de almacenamiento externo** (ejemplo: ImageKit.io, Cloudinary, Firebase Storage).

---

### **📌 5.3 Insertar imágenes vía API (ejemplo: ImageKit.io)**

Para cargar imágenes optimizadas desde un servicio externo:

```html
<img src="https://ik.imagekit.io/tu_usuario/imagen.jpg" alt="Imagen externa" />
```

🛠 **Ejercicio práctico:**

1. Crear una cuenta en **[https://imagekit.io/](https://imagekit.io/)**.
2. Subir una imagen y obtener la URL.
3. Insertarla en HTML.

🔗 **MDN - Carga de imágenes remotas**: [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes)

---

## **Anexo: Uso de Copilot en VSC**

📌 **Cómo instalar y configurar Copilot en Visual Studio Code:**

1. **Abrir Visual Studio Code.**
2. **Ir a la pestaña de Extensiones (`Ctrl + Shift + X`).**
3. **Buscar "GitHub Copilot"** e instalar la extensión oficial.
4. **Iniciar sesión en GitHub** cuando lo solicite.
5. **Activar Copilot en archivos HTML y CSS:**
   - Ir a **Configuración (`Ctrl + ,`)**.
   - Buscar `Copilot: Enable` y asegurarse de que está activado para HTML y CSS.

📌 **Ejemplo de uso en HTML:**

- Escribir `<header>` y Copilot sugerirá la estructura completa.
- Escribir `nav>ul>li*3` y aceptar la sugerencia para generar una lista automáticamente.

📌 **Ejemplo de uso en CSS:**

- Escribir `body {` y Copilot completará con propiedades de diseño comunes.

🛠 **Ejercicio práctico:**

1. Escribir una estructura HTML y ver cómo Copilot sugiere etiquetas.
2. Usar Copilot para autocompletar estilos en `css/index.css`.

🔗 **GitHub Copilot - Documentación Oficial**: [https://github.com/features/copilot](https://github.com/features/copilot)

---

✅ **Resultado esperado:**  
Los estudiantes podrán estructurar correctamente documentos HTML, incluir favicons, mejorar SEO con meta tags, aplicar estilos con CSS y gestionar imágenes de manera eficiente.

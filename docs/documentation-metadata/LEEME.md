# 📖 Documentación Esencial en un Repositorio Web

📂 **README, Favicon, Licencia, .gitignore y Manifest: Documentación y Metadatos en Repositorios Web**

## 📑 **Tabla de Contenidos**

1. [README.md](#-1-readmemd)
2. [Favicon: Identidad Visual](#-2-favicon-identidad-visual-del-proyecto)
3. [LICENSE: Términos de Uso](#-3-license-definiendo-los-términos-de-uso-del-código)
4. [Archivo .gitignore](#-4-archivo-gitignore)
5. [Manifest.json: Configuración para Web Apps](#-5-manifestjson-configuración-para-web-apps)
6. [Elementos Adicionales para Documentación](#-6-elementos-adicionales-para-documentación)
7. [Conclusión y Aplicación Práctica](#-conclusión-y-aplicación-práctica)

---

## **🎯 Objetivo:**

Comprender la importancia de la documentación y los metadatos en un proyecto web, aprendiendo a incorporar correctamente un archivo `README.md`, un `favicon`, un `LICENSE` y un `manifest.json` en un repositorio.

---

# 📝 1. README.md

## **¿Qué es un README.md?**

Un `README.md` es un archivo escrito en **Markdown** que actúa como la documentación principal de un proyecto. Generalmente se coloca en la raíz del repositorio y proporciona información esencial a usuarios y colaboradores.

📌 **Estructura básica de un README.md:**

1. **Descripción del Proyecto**: Breve introducción sobre qué es y qué hace el proyecto.
2. **Instrucciones de Instalación**: Guía paso a paso para configurar y ejecutar el proyecto (prerrequisitos y dependencias).
3. **Modo de Uso**: Explicaciones y ejemplos de uso del proyecto, incluyendo comandos o flujos de trabajo.
4. **Guía de Contribución**: Normas para contribuir al código, estándares de codificación y procesos de pull request.
5. **Licencia**: Información sobre los derechos de uso, modificación y distribución del código.
6. **Contacto**: Datos de contacto de los mantenedores del proyecto.
7. **Recursos Adicionales**: Enlaces a documentación relevante, sitios web o tutoriales relacionados.

🔗 **Enlace de referencia:**

- Documentación Markdown: [https://commonmark.org/](https://commonmark.org/)

🛠 **Herramienta recomendada para editar Markdown:**

- **Dillinger** (editor en la nube, compatible con almacenamiento offline): [https://dillinger.io/](https://dillinger.io/)

📌 **Importante:**

- Incluye en el _Readme_ la URL de tu sitio publicado mediante _GitHub Pages_

---

# 🎨 2. Favicon: Identidad Visual del Proyecto

## **¿Qué es un favicon?**

Es un pequeño icono asociado a un sitio web. Se muestra en:

- La barra de direcciones del navegador.
- Las pestañas del navegador.
- La lista de marcadores.
- Aplicaciones específicas que usan iconos personalizados.

📌 **Dónde se integra un favicon:**

1. En el `<head>` del archivo HTML:
   ```html
   <link rel="icon" href="favicon.ico" type="image/x-icon" />
   ```
2. En el archivo `manifest.json` (para Progressive Web Apps - PWAs):
   ```json
   {
   	"icons": [
   		{
   			"src": "favicon-192.png",
   			"sizes": "192x192",
   			"type": "image/png"
   		}
   	]
   }
   ```

🔗 **Referencias Oficiales:**

- Especificación HTML: [https://html.spec.whatwg.org/multipage/links.html#rel-icon](https://html.spec.whatwg.org/multipage/links.html#rel-icon)

🛠 **Herramientas para generar favicons:**

- [https://realfavicongenerator.net/](https://realfavicongenerator.net/)
- [https://thenounproject.com/icons/](https://thenounproject.com/icons/)

---

# 📜 3. LICENSE: Definiendo los Términos de Uso del Código

## **¿Qué es un archivo LICENSE?**

Es un archivo de texto en la raíz del proyecto que especifica los términos legales para el uso del código.

📌 **Elementos clave de una licencia:**

- **Atribución**: Se debe dar crédito al autor original.
- **Derechos y Permisos**: Qué se puede hacer con el código (usar, modificar, redistribuir, etc.).

🔗 **Especificación HTML sobre licencias:**
[https://html.spec.whatwg.org/multipage/links.html#link-type-license](https://html.spec.whatwg.org/multipage/links.html#link-type-license)

📌 **Tipos de Licencias de Código Abierto Populares:**

#### **Licencia MIT:**

- Una licencia permisiva que permite la reutilización con **pocas restricciones**. Puedes **usar, copiar, modificar, fusionar, publicar y distribuir** el software, siempre que la licencia original esté incluida en todas las copias o partes sustanciales del software.
- **Caso de uso**: Ideal para proyectos donde se desea **máxima libertad para los usuarios**.

#### **Licencia Apache 2.0:**

- Similar a la Licencia MIT, pero incluye una **concesión explícita de derechos de patente** de los contribuyentes a los usuarios. También establece requisitos para que las **modificaciones sean documentadas**.
- **Caso de uso**: Adecuada para proyectos que pueden involucrar **reclamaciones de patentes** o donde se desea garantizar que las **contribuciones sigan siendo abiertas**.

#### **Licencia GNU General Public License (GPL):**

- Una licencia de **copyleft** que exige que **todas las versiones modificadas del proyecto** también sean de código abierto y estén licenciadas bajo la GPL. Esto garantiza que los **trabajos derivados sigan siendo libres y abiertos**.
- **Caso de uso**: Ideal para proyectos que buscan **mantener el código libre y abierto para todos los usuarios**.

#### **Licencia BSD:**

- Una licencia permisiva **similar a la Licencia MIT**, pero con cláusulas adicionales sobre **publicidad y reconocimiento del autor original**.
- **Caso de uso**: Comúnmente utilizada en proyectos que buscan **maximizar la libertad** de los usuarios, **pero requiriendo atribución**.

#### **Licencias Creative Commons:**

- Se utilizan principalmente para **trabajos creativos en lugar de software**. Ofrecen **diferentes niveles de permisos** sobre el uso, modificación y compartición de contenido.
- **Caso de uso**: Excelentes para documentación, **recursos de diseño** y otro contenido que **no sea código**.

🛠 **Generador de Licencias:**

- [https://choosealicense.com/](https://choosealicense.com/)

## **Modos de inclusión de la licencia en un sitio web**

Además del archivo `LICENSE` en la raíz del repositorio, es recomendable incluir referencias a la licencia en:

1. **El `<head>` de cada documento HTML:**
   ```html
   <link rel="license" href="LICENSE.txt" />
   ```
2. **Imágenes y contenido multimedia** usando `figure` y `figcaption`:
   ```html
   <figure>
   	<img src="imagen.jpg" alt="Descripción de la imagen" />
   	<figcaption>
   		Imagen licenciada bajo
   		<a rel="license" href="LICENSE.txt">MIT License</a>
   		.
   	</figcaption>
   </figure>
   ```
3. **Archivos CSS y JavaScript:** Agregar comentarios en la parte superior del archivo.

   ```css
   /*
   * Archivo de estilos
   * Licencia: MIT License
   * Ver LICENSE.txt para más detalles.
   */
   ```

   ```javascript
   //
   // Archivo de scripts
   // Licencia: MIT License
   // Ver LICENSE.txt para más detalles.
   ```

📌 **Ejercicio práctico:**

1. **Crea un archivo `index.html` e incluye la referencia a la licencia en el `<head>`.**
2. **Añade una imagen dentro de `figure` con `figcaption` referenciando la licencia.**
3. **Crea un archivo `styles.css` e incluye el comentario con la licencia.**
4. **Crea un archivo `script.js` e incluye el comentario con la licencia.**
5. **Sube estos archivos a un repositorio en GitHub y verifica que la información sea clara y accesible.**

---

# 📂 4. Archivo .gitignore

📌 **¿Qué es un `.gitignore`?**
Un archivo que excluye ciertos archivos del control de versiones en Git.

📌 **Ejemplo de `.gitignore` para proyectos web:**

```
# Archivos del sistema (Ejemplo: MacOS)
.DS_Store

# Dependencias
node_modules/
package-lock.json

# Archivos compilados
/dist/
/build/

# Variables de entorno
.env
```

---

# 📜 4. Manifest.json: Configuración para Web Apps

## **¿Qué es el archivo manifest.json?**

Define metadatos esenciales para **Progressive Web Apps (PWAs)**, permitiendo configurar cómo se comporta la app cuando es instalada en dispositivos.

📌 **Ejemplo básico de manifest.json:**

```json
{
	"name": "Mi App",
	"short_name": "App",
	"start_url": "/index.html",
	"display": "standalone",
	"background_color": "#ffffff",
	"theme_color": "#000000",
	"icons": [
		{
			"src": "icon.png",
			"sizes": "512x512",
			"type": "image/png"
		}
	]
}
```

🔗 **Referencias Oficiales:**

- W3C Web App Manifest: [https://www.w3.org/TR/appmanifest/](https://www.w3.org/TR/appmanifest/)
- Mozilla MDN Docs: [https://developer.mozilla.org/en-US/docs/Web/Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- Especificación HTML: [https://html.spec.whatwg.org/multipage/links.html#link-type-manifest](https://html.spec.whatwg.org/multipage/links.html#link-type-manifest)

---

# 📖 6. Elementos Adicionales para Documentación

## 📂 `CONTRIBUTING.md`

Define las reglas para contribuir al proyecto.
📌 **Ejemplo:**

```
1. Realiza un fork del repositorio.
2. Crea una rama: `git checkout -b feature-nueva`
3. Sigue la guía de estilo en `.editorconfig`
4. Envía un Pull Request.
```

## 📜 `SECURITY.md`

Define cómo reportar vulnerabilidades de seguridad.
📌 **Ejemplo:**

```
# Política de Seguridad
Si encuentras una vulnerabilidad, repórtala a security@proyecto.com.
```

## 📖 Carpeta `docs/`

Almacena documentación extendida.
📌 **Ejemplo:**

```
docs/
├── arquitectura.md
├── endpoints.md
├── estructura_proyecto.md
```

## 🤖 `robots.txt` y `sitemap.xml`

- **`robots.txt`**: Indica qué partes del sitio pueden ser indexadas.
- **`sitemap.xml`**: Ayuda a los motores de búsqueda a indexar el sitio.

📌 **Ejemplo de `robots.txt`:**

```
User-agent: *
Disallow: /admin/
Allow: /
```

📌 **Ejemplo de `sitemap.xml`:**

```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2024-01-01</lastmod>
  </url>
</urlset>
```

---

# 🎯 **Conclusión y Aplicación Práctica**

📌 **Ejercicio para los estudiantes:**

1. Nos ubicamos en nuestro repositorio de GitHub.
2. Añadir un archivo `README.md` con los elementos clave mencionados.
3. Generar un `favicon` y vincularlo en el `<head>` de su HTML.
4. Elegir una licencia apropiada y agregar un archivo `LICENSE` en la raíz.
5. Crear un archivo `manifest.json` básico y vincularlo en su HTML.

🔍 **Reflexión final:** ¿Por qué es importante documentar y configurar correctamente estos archivos? ¿Cómo impacta en la accesibilidad y usabilidad del proyecto?

- **Mejora la accesibilidad**: Un buen README y metadatos bien definidos facilitan la navegación y comprensión del proyecto.
- **Facilita la colaboración**: Documentar contribuye a que más personas puedan entender y mejorar el código.
- **Asegura compatibilidad**: Un manifest bien configurado permite que la app funcione correctamente en múltiples dispositivos y navegadores.
- **Protege los derechos de autor**: Una licencia clara evita malentendidos legales y define el uso permitido del código.

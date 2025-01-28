# **Guía para Configurar un Entorno de Desarrollo Web para Estudiantes**

---

## **Índice**

1. [Por qué configurar un entorno de desarrollo](#por-qué-configurar-un-entorno-de-desarrollo)
2. [Entornos de desarrollo: Local vs. Live](#entornos-de-desarrollo-local-vs-en-vivo)
3. [Pasos para configurar el entorno de desarrollo](#pasos-para-configurar-el-entorno-de-desarrollo)
   - [Instalar Visual Studio Code](#1-instalar-visual-studio-code)
   - [Instalar Git](#2-instalar-git)
   - [Crear un archivo `index.html` con Copilot](#3-crear-un-archivo-indexhtml-con-copilot)
   - [Conectar Visual Studio Code con GitHub](#4-conectar-visual-studio-code-con-github)
   - [Desarrollo local con Live Server](#5-desarrollo-local-con-live-server)
   - [Desarrollo Live con GitHub Pages](#6-desarrollo-en-vivo-con-github-pages)
4. [Glosario de conceptos](#glosario-de-conceptos)
   - [Términos del sistema](#términos-del-sistema)
   - [Términos de red](#términos-de-red)
   - [Términos de Git y repositorios](#términos-de-git-y-repositorios)
5. [Apéndice: Instalando Homebrew en macOS](#apéndice-instalando-homebrew-en-macos)
6. [Referencias finales](#referencias-finales)

---

## **Por qué configurar un entorno de desarrollo**

Configurar un entorno de desarrollo permite a los estudiantes:

1. **Desarrollar localmente**: Escribir y probar proyectos web en tu ordenador utilizando herramientas como **VS Code Live Server**.
2. **Colaborar**: Compartir tu trabajo con compañeros e instructores usando Git y GitHub.
3. **Publicar Live**: Subir tus proyectos en línea para recibir retroalimentación o mostrar tu trabajo a través de GitHub Pages.

Aprender este flujo de trabajo ayuda a adoptar prácticas profesionales y sentar las bases para proyectos más avanzados en el futuro.

---

## **Entornos de desarrollo: Local vs Live**

### **1. Desarrollo local**

- **Qué es**: El desarrollo local se realiza en tu ordenador, donde escribes y pruebas código utilizando herramientas como **VS Code** y previsualizas el proyecto en tu navegador con **Live Server**.
- **Propósito**: Permite experimentar y realizar cambios rápidos sin afectar la versión pública de tu proyecto.

### **2. Desarrollo Live**

- **Qué es**: El desarrollo Live implica subir tu código a un **repositorio remoto** (por ejemplo, GitHub). GitHub Pages hace que tu sitio sea accesible en línea.
- **Propósito**: Compartir y mostrar tu proyecto, colaborar con otros y construir un portafolio profesional.

---

## **Pasos para configurar el entorno de desarrollo**

### **1. Instalar Visual Studio Code**

- **Propósito**: VS Code es un editor de código potente con integración incorporada con Git.
- Descárgalo aquí:  
  **https://code.visualstudio.com/**

#### **Instalar extensiones**

- **Live Server**: Para previsualizar en tiempo real tus proyectos HTML/CSS/JS.  
  Instálalo aquí:  
  **https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer**
- **GitLens**: Mejora la experiencia de Git mostrando el historial de commits y anotaciones de cambios.  
  Instálalo aquí:  
  **https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens**

---

### **2. Instalar Git**

#### **Instalación en Windows**

1. Descarga el instalador de Git:  
   **https://git-scm.com/download/win**
2. Ejecuta el instalador y sigue las instrucciones.
3. Usa **Git Bash** como tu terminal predeterminada. Esto viene incluido con Git.
4. Verifica la instalación abriendo Git Bash y ejecutando:
   ```bash
   git --version
   ```

#### **Instalación en macOS**

1. **Instala Homebrew** (requerido para instalar Git):

   - Homebrew es un gestor de paquetes para macOS. Los detalles de instalación están en el [apéndice](#apéndice-instalando-homebrew-en-macos).
   - Nota: Este proceso descarga las **Xcode Command Line Tools**, que pueden ocupar mucho espacio y tardar bastante tiempo.
   - Después de instalar Homebrew, asegúrate de agregarlo al path ejecutando los comandos indicados al final de la instalación (detallados en el apéndice).

2. **Instala Git usando Homebrew**:
   ```bash
   brew install git
   ```
3. Verifica la instalación:
   ```bash
   git --version
   ```

---

### **3. Crear un archivo `index.html` con Copilot**

#### **Instala GitHub Copilot en VS Code**

1. Ve a la pestaña de Extensiones en VS Code.
2. Busca **"GitHub Copilot"** e instálalo.
3. Inicia sesión con tu cuenta de GitHub.

#### **Genera una estructura HTML**

1. Crea un nuevo archivo llamado `index.html`.
2. Usa Copilot para generar la estructura básica:
   - Escribe `!` y presiona **Tab**. Copilot generará el boilerplate.
   - Personalízalo para incluir elementos semánticos:
     ```html
     <!DOCTYPE html>
     <html lang="es">
     	<head>
     		<meta charset="UTF-8" />
     		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
     		<title>Mi Sitio Web</title>
     	</head>
     	<body>
     		<header>
     			<h1>Bienvenido a Mi Sitio Web</h1>
     		</header>
     		<nav>
     			<ul>
     				<li><a href="#about">Sobre mí</a></li>
     				<li><a href="#contact">Contacto</a></li>
     			</ul>
     		</nav>
     		<main>
     			<section id="about">
     				<h2>Sobre mí</h2>
     				<p>Esta es una introducción simple.</p>
     			</section>
     		</main>
     		<footer>
     			<p>© 2025 Mi Sitio Web</p>
     		</footer>
     	</body>
     </html>
     ```

---

### **4. Conectar Visual Studio Code con GitHub**

1. Ve a la pestaña **Source Control** (el icono con forma de rama) en VS Code.
2. Haz clic en **Initialize Repository** para empezar a rastrear cambios con Git.
3. Publica tu repositorio local en GitHub:
   - Haz clic en el botón **Publish to GitHub**.
   - Inicia sesión en GitHub y sigue las instrucciones para crear un nuevo repositorio.

---

### **5. Desarrollo local con Live Server**

1. Abre tu proyecto en VS Code.
2. Haz clic derecho en tu archivo `index.html` y selecciona **Open with Live Server**.
3. Abre Chrome y navega a la URL proporcionada por Live Server (normalmente `http://127.0.0.1:5500`).

#### **Usar las DevTools de Chrome**

1. Pulsa **F12** o **Cmd + Option + I** (Mac) / **Ctrl + Shift + I** (Windows) para abrir las DevTools.
2. Ve a la pestaña **Network**.
3. Marca la opción **Disable Cache** para asegurarte de que el navegador siempre cargue la versión más reciente de tu proyecto.
4. Observa los cambios en tiempo real mientras actualizas tu código.

---

### **6. Desarrollo Live con GitHub Pages**

1. **Haz un commit de los cambios**:

   - En la pestaña Source Control, selecciona los archivos haciendo clic en el botón `+`.
   - Escribe un mensaje de commit (por ejemplo, “Initial commit”) y haz clic en el check para confirmar.

2. **Sube los cambios a GitHub**:

   - Una vez confirmado el commit, haz clic en **Sync Changes** para subir los cambios al repositorio remoto.

3. **Activa GitHub Pages**:
   - En GitHub, ve a **Settings** > **Pages** en tu repositorio.
   - Selecciona la rama (por ejemplo, `main`) y guarda los cambios.
   - Tu sitio estará en vivo en:  
     `https://tu-usuario.github.io/tu-repositorio/`

---

## **Glosario de conceptos**

### **Términos del sistema**

1. **Terminal**: Interfaz de línea de comandos para interactuar con tu ordenador.
   - **macOS**: Abre el Terminal presionando **Cmd + Espacio**, escribe "Terminal" y pulsa **Enter**.
   - **Windows**: Usa Git Bash (se instala con Git).
2. **Comandos**: Instrucciones que escribes en el terminal para realizar tareas (por ejemplo, `ls`, `mkdir`).
3. **Ruta (Path)**: Ubicación de un archivo o carpeta en tu ordenador (por ejemplo, `/Usuarios/tu-nombre/proyecto`).
4. **Directorio**: Una carpeta que contiene archivos u otras carpetas.

### **Términos de red**

1. **HTTP**: Protocolo para transferir páginas web y archivos.
2. **HTTPS**: Versión segura de HTTP con cifrado.
3. **Localhost**: Se refiere a tu ordenador en una red (por ejemplo, `127.0.0.1`).
4. **Dirección IP**: Dirección única para dispositivos en una red.
5. **DNS**: Traduce nombres de dominio (por ejemplo, `github.com`) en direcciones IP.

### **Términos de Git y repositorios**

1. **Repositorio**: Ubicación para almacenar tu código y su historial.
   - Local: En tu ordenador.
   - Remoto: En GitHub.
2. **Commit**: Una captura del estado actual de tu proyecto.
3. **Push**: Subir cambios al repositorio remoto.
4. **Branch**: Una versión del proyecto para experimentar o desarrollar características.

---

## **Apéndice: Instalando Homebrew en macOS**

### **Qué es Homebrew**

Homebrew es un gestor de paquetes para macOS que simplifica la instalación de software como Git.

### **Pasos para instalar Homebrew**

1. Abre el Terminal: **Cmd + Espacio**, escribe "Terminal" y pulsa **Enter**.
2. Ejecuta el comando:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
3. Sigue las instrucciones. Se instalarán las **Xcode Command Line Tools** (requiere tiempo y espacio en disco).
4. Añade Homebrew al path:
   ```bash
   echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
   eval "$(/opt/homebrew/bin/brew shellenv)"
   ```
5. Verifica la instalación:
   ```bash
   brew --version
   ```

---

## **Referencias finales**

- **Visual Studio Code**:  
  https://code.visualstudio.com/
- **Live Server Extension**:  
  https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
- **GitLens Extension**:  
  https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens
- **Git**:  
  https://git-scm.com/
- **GitHub**:  
  https://github.com/
- **GitHub Pages Documentation**:  
  https://docs.github.com/en/pages
- **Homebrew (para macOS)**:  
  https://brew.sh/

---

¡Listo! 😊

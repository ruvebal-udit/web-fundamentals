# **Guía para Configurar un Entorno de Desarrollo Web para Estudiantes**

### **Rubén Vega Balbás PhD <ruben.vega@udit.es>**

## **Índice**

1. [Por qué configurar un entorno de desarrollo](#por-qué-configurar-un-entorno-de-desarrollo)
2. [Entornos de desarrollo: Local vs. Live](#entornos-de-desarrollo-local-vs-en-vivo)
3. [Pasos para configurar el entorno de desarrollo](#pasos-para-configurar-el-entorno-de-desarrollo)
   - [Instalar Visual Studio Code](#1-instalar-visual-studio-code)
   - [Instalar Git](#2-instalar-git)
   - [Crear un repositorio en GitHub y clonarlo en Visual Studio Code](#3-crear-un-repositorio-en-github-y-clonarlo-en-visual-studio-code)
   - [Crear un archivo `index.html` en el repositorio clonado](#4-crear-un-archivo-indexhtml-en-el-repositorio-clonado)
   - [Desarrollo local con Live Server](#5-desarrollo-local-con-live-server)
   - [Desarrollo Live con GitHub Pages](#6-desarrollo-en-vivo-con-github-pages)
4. [Flujo diario de trabajo](#flujo-diario-de-trabajo)
5. [Glosario de conceptos](#glosario-de-conceptos)
   - [Términos del sistema](#términos-del-sistema)
   - [Términos de red](#términos-de-red)
   - [Términos de Git y repositorios](#términos-de-git-y-repositorios)
6. [Apéndice: Instalando Homebrew en macOS](#apéndice-instalando-homebrew-en-macos)
7. [Referencias finales](#referencias-finales)

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

---

#### **Instalación en Windows**

1. **Descarga el instalador de Git:**  
   [https://git-scm.com/download/win](https://git-scm.com/download/win)

2. **Ejecuta el instalador:**

   - Haz clic en el archivo descargado y sigue las instrucciones del asistente de instalación.
   - Durante la instalación, se recomienda seleccionar **Git Bash** como terminal predeterminada.

3. **Verifica la instalación:**

   - Abre **Git Bash** desde el menú de inicio.
   - Escribe el siguiente comando para confirmar la instalación:
     ```bash
     git --version
     ```

4. **Configura tu nombre y email para Git:**  
   Después de instalar Git, es importante configurar tu identidad para registrar correctamente tus contribuciones.

   - **Configura tu nombre:**  
     Ejecuta este comando, reemplazando `Tu Nombre` por tu nombre real:

     ```bash
     git config --global user.name "Tu Nombre"
     ```

   - **Configura tu email:**  
     Ejecuta este comando, reemplazando `tu.email@example.com` por tu dirección de correo electrónico:

     ```bash
     git config --global user.email "tu.email@example.com"
     ```

   - **Verifica la configuración:**  
     Ejecuta el siguiente comando para comprobar que los datos se guardaron correctamente:
     ```bash
     git config --global --list
     ```
     El resultado debería mostrar algo similar a:
     ```
     user.name=Tu Nombre
     user.email=tu.email@example.com
     ```

5. **Nota importante:**
   - Durante la instalación y uso de Git en la terminal, tu contraseña no será visible al escribirla. Esto es un comportamiento normal para mejorar la seguridad.

---

#### **Instalación en macOS**

1. **Instala Homebrew (si no lo tienes):**

   - Abre la **Terminal** y ejecuta el siguiente comando para instalar Homebrew:
     ```bash
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```
   - Homebrew es un gestor de paquetes que facilita la instalación de software en macOS.
   - Al instalar Homebrew, se descargarán automáticamente las **Xcode Command Line Tools**, lo cual puede tardar varios minutos.

2. **Instala Git usando Homebrew:**

   - Una vez instalado Homebrew, ejecuta:
     ```bash
     brew install git
     ```

3. **Verifica la instalación:**

   - Escribe el siguiente comando para comprobar que Git se ha instalado correctamente:
     ```bash
     git --version
     ```

4. **Configura tu nombre y email para Git:**

   - **Configura tu nombre:**

     ```bash
     git config --global user.name "Tu Nombre"
     ```

   - **Configura tu email:**

     ```bash
     git config --global user.email "tu.email@example.com"
     ```

   - **Verifica la configuración:**
     ```bash
     git config --global --list
     ```

---

### **3. Crear un repositorio en GitHub y clonarlo en Visual Studio Code**

#### **Desde la web de GitHub**

1. Inicia sesión en tu cuenta de GitHub.
2. Haz clic en el botón **New** para crear un nuevo repositorio.
3. Asigna un nombre al repositorio (por ejemplo, `mi-proyecto-web`).
4. Elige la configuración pública o privada según tu preferencia.
5. No añadas ningún archivo inicial (como `README.md`).
6. Haz clic en **Create repository**.

#### **Clonar el repositorio en VS Code**

1. Copia la URL del repositorio (HTTPS o SSH).
2. Abre VS Code y ve a **Source Control**.
3. Haz clic en **Clone Repository** e introduce la URL copiada.
4. Selecciona una carpeta local donde deseas guardar el repositorio.

**Nota**: Internamente, VS Code ejecuta el comando equivalente:

```bash
git clone <URL-del-repositorio>
```

Además, VS Code realiza un **pull** automático al abrir un repositorio clonado para sincronizar cualquier cambio remoto.

---

### **4. Crear un archivo `index.html` en el repositorio clonado**

1. Crea un archivo nuevo llamado `index.html` en el repositorio.
2. Escribe la estructura HTML básica utilizando **GitHub Copilot**:
   - Escribe `!` y presiona **Tab** para generar el boilerplate HTML.
   - Personaliza el archivo, por ejemplo:
     ```html
     <!DOCTYPE html>
     <html lang="es">
     	<head>
     		<meta charset="UTF-8" />
     		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
     		<title>Mi Sitio Web</title>
     	</head>
     	<body>
     		<h1>Bienvenido a Mi Sitio Web</h1>
     	</body>
     </html>
     ```

---

### **5. Desarrollo local con Live Server**

1. Abre tu proyecto en VS Code.
2. Haz clic derecho en el archivo `index.html` y selecciona **Open with Live Server**.
3. Abre el navegador y navega a `http://127.0.0.1:5500`.

#### **Usar las DevTools de Chrome**

1. Pulsa **F12** o **Cmd + Option + I** (Mac) / **Ctrl + Shift + I** (Windows) para abrir las DevTools.
2. Ve a la pestaña **Network**.
3. Marca la opción **Disable Cache** para asegurarte de que el navegador siempre cargue la versión más reciente de tu proyecto.
4. Observa los cambios en tiempo real mientras actualizas tu código.

5. Abre tu proyecto en VS Code.
6. Haz clic derecho en el archivo `index.html` y selecciona **Open with Live Server**.
7. Abre el navegador y navega a `http://127.0.0.1:5500`.

---

### **6. Desarrollo Live con GitHub Pages**

1. Haz un **commit** de los cambios:

   - En la pestaña **Source Control**, selecciona los archivos y haz clic en el botón `+`.
   - Escribe un mensaje de commit (por ejemplo, "Initial commit") y haz clic en el check.

2. **Push** los cambios al repositorio remoto:

   - Haz clic en **Sync Changes**.

   **Comandos equivalentes**:

   ```bash
   git add .
   git commit -m "Initial commit"
   git push
   ```

3. Activa GitHub Pages:
   - En GitHub, ve a **Settings** > **Pages**.
   - Selecciona la rama y guarda los cambios.
   - Tu sitio estará en vivo en: `https://tu-usuario.github.io/tu-repositorio/`.

---

## **Flujo diario de trabajo**

### **Pasos para el desarrollo diario**

1. **Actualiza tu repositorio local**:

   - Abre VS Code y ve a la pestaña **Source Control**.
   - Haz clic en **Pull** para traer los últimos cambios del repositorio remoto.

   **Comando equivalente:**

   ```bash
   git pull
   ```

2. **Realiza cambios en tu código**:

   - Edita los archivos necesarios en el proyecto.
   - Guarda los cambios.

3. **Previsualiza los cambios localmente**:

   - Usa **Live Server** para ver los cambios en tiempo real.

4. **Haz un commit de tus cambios**:

   - Ve a **Source Control**, selecciona los archivos modificados y haz clic en el botón `+`.
   - Escribe un mensaje de commit describiendo los cambios y haz clic en el check.

   **Comandos equivalentes:**

   ```bash
   git add .
   git commit -m "Descripción de los cambios"
   ```

5. **Sube los cambios al repositorio remoto**:

   - Haz clic en **Sync Changes**.

   **Comando equivalente:**

   ```bash
   git push
   ```

6. **Revisa tu sitio en GitHub Pages** (si está habilitado).
   - Asegúrate de que los cambios se reflejen correctamente.

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

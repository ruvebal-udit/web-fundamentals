### **📌 Sistemas de Archivos, Rutas y Jerarquías en Desarrollo Web**  

El manejo de sistemas de archivos y rutas es fundamental en el desarrollo web, ya que los archivos HTML, CSS, JavaScript y otros recursos deben organizarse correctamente para que el sitio funcione sin problemas. La comprensión de las rutas absolutas y relativas, junto con la jerarquía del sistema de archivos, permite estructurar correctamente los proyectos y evitar errores al referenciar archivos.

---

## **1️⃣ ¿Qué es un Sistema de Archivos?**  

Un sistema de archivos es la estructura utilizada por los sistemas operativos para organizar, gestionar y almacenar datos en dispositivos como discos duros, SSDs o memorias USB. Define cómo se crean, modifican, acceden y eliminan archivos.

### 🔹 **Jerarquía del Sistema de Archivos**  

Los sistemas de archivos tienen una estructura en forma de árbol jerárquico. Cada nodo en este árbol puede ser:  

- **📁 Directorio** (o carpeta): Puede contener archivos u otros directorios.  
- **📄 Archivo**: Puede ser un documento, imagen, programa o cualquier otro tipo de dato almacenado.  

La parte superior del árbol es el **directorio raíz**, representado como:  
- **`/` en Unix/Linux/Mac**  
- **`C:\` en Windows**  

Desde este punto, todos los archivos y directorios dependen de esta estructura.

---

## **2️⃣ Tipos de Sistemas de Archivos**  

Diferentes sistemas operativos utilizan distintos tipos de sistemas de archivos:

### **📌 Sistemas de Archivos en Windows**  
- **NTFS (New Technology File System):** Soporta permisos avanzados, encriptación y recuperación de errores.  
- **FAT32 (File Allocation Table, 32 bits):** Compatible con múltiples dispositivos, pero con límite de 4 GB por archivo.  
- **exFAT (Extended File Allocation Table):** Supera las limitaciones de FAT32 y es compatible con varias plataformas.  

### **📌 Sistemas de Archivos en macOS**  
- **APFS (Apple File System):** Optimizado para SSDs, soporta encriptación y gestión avanzada del espacio.  
- **HFS+ (Hierarchical File System Plus):** Utilizado antes de APFS.  
- **exFAT:** Compatible con dispositivos externos y múltiples sistemas operativos.  

### **📌 Sistemas de Archivos en Android y Linux**  
- **ext4 (Fourth Extended Filesystem):** Estándar en muchas distribuciones de Linux.  
- **F2FS (Flash-Friendly File System):** Diseñado para mejorar el rendimiento en almacenamiento flash.  
- **exFAT:** Utilizado para compartir datos entre distintas plataformas.  

---

## **3️⃣ ¿Qué es Formatear un Disco?**  

Formatear un disco prepara el dispositivo de almacenamiento para ser utilizado. Este proceso:  
✅ **Elimina los datos existentes.**  
✅ **Crea una estructura organizada para el almacenamiento de archivos.**  
✅ **Asigna un sistema de archivos (NTFS, FAT32, APFS, etc.).**  

Es importante elegir el sistema de archivos adecuado según el sistema operativo y el uso del dispositivo.

---

## **4️⃣ ¿Qué es una Ruta?**  

Una ruta describe la ubicación de un archivo o directorio dentro del sistema de archivos. Existen dos tipos principales de rutas:  

### **🔹 Ruta Absoluta**  

Comienza desde el **directorio raíz** (`/` en Unix/Linux/Mac o `C:\` en Windows) e indica la ubicación exacta de un archivo o carpeta.

📌 **Ejemplos:**  
- Unix/Linux/Mac:  
  ```
  /home/usuario/documentos/reporte.docx
  ```
- Windows:  
  ```
  C:\Usuarios\usuario\Documentos\reporte.docx
  ```

### **🔹 Ruta Relativa**  

Comienza desde el **directorio actual** y no incluye el directorio raíz. Es útil cuando se trabaja dentro de un mismo proyecto o estructura de carpetas.

📌 **Ejemplo:**  
Si estamos en `/home/usuario/`, la ruta relativa `documentos/reporte.docx` hace referencia al archivo dentro de la carpeta `documentos`.

---

## **5️⃣ Símbolos Especiales en Rutas**  

| **Símbolo** | **Descripción** |
|------------|---------------|
| `/`        | Directorio raíz en Unix/Linux/Mac |
| `C:\`      | Directorio raíz en Windows |
| `.`        | Directorio actual |
| `..`       | Directorio padre (un nivel arriba) |

📌 **Ejemplo de uso de `..`:**  
Si estamos en `/home/usuario/documentos/` y queremos acceder a un archivo en `/home/usuario/imagenes/`, podemos usar la ruta relativa:
```
../imagenes/foto.jpg
```
El `..` nos mueve un nivel arriba (`/home/usuario/`), y luego entramos en `imagenes/`.

---

## **6️⃣ Diferencias entre Rutas Absolutas y Relativas**  

| **Ruta Absoluta** | **Ruta Relativa** |
|------------------|------------------|
| Comienza desde el directorio raíz. | Comienza desde el directorio actual. |
| Siempre apunta a la misma ubicación. | Puede cambiar según el directorio actual. |
| **Ejemplo:** `/home/usuario/archivo.txt` | **Ejemplo:** `../archivo.txt` |

✅ **Las rutas relativas son preferibles en desarrollo web** porque permiten que el código funcione independientemente de la configuración del servidor.

---

## **7️⃣ Rutas en Desarrollo Web**  

En el desarrollo web, el manejo de rutas absolutas y relativas puede ser confuso debido a las diferencias entre el entorno local y el servidor remoto.

### 🔹 **Diferencias en entornos locales y remotos**  

1. **Entorno local:**  
   - Cuando servimos un proyecto con `Live Server`, `http-server` o `Apache`, la raíz del servidor web puede ser el directorio del proyecto.  
   - 📌 **Ejemplo:** Si tenemos un proyecto en:
     ```
     /Users/ruvebal/projects/congresodelaluz
     ```
     Y usamos Live Server, la URL `http://localhost/` apunta a ese directorio.

2. **Servidor remoto:**  
   - La raíz del servidor web puede estar en un directorio específico, por ejemplo:
     ```
     /var/www/html/congresodelaluz
     ```
   - Si accedemos a `https://midominio.com/`, el contenido servido es el de ese directorio.

### **🔹 Ejemplo de rutas en HTML**  

**📌 Ruta absoluta en HTML:**
```html
<img src="/assets/images/logo.png">
```
Esto busca la imagen en la raíz del servidor web.

**📌 Ruta relativa en HTML:**
```html
<img src="images/logo.png">
```
Esto busca la imagen dentro del directorio donde está el archivo HTML actual.

---

## **8️⃣ Actividad Práctica**  

🎯 **Objetivo:** Explorar rutas en la terminal y en un proyecto web.  

✅ **Parte 1: Explorando rutas en la terminal**  
1. **Abrir la terminal o símbolo del sistema**  
2. **Navegar entre directorios con `cd`**  
   ```bash
   cd /home/usuario/documentos
   ```
3. **Listar archivos en un directorio**  
   - Unix/Mac: `ls`  
   - Windows: `dir`  
4. **Probar rutas absolutas y relativas en la terminal**  

✅ **Parte 2: Explorando rutas en un proyecto web**  
1. Crear un archivo `index.html` en un directorio raíz.  
2. Agregar imágenes con rutas relativas y absolutas.  
3. Probar en `Live Server` para verificar las rutas.  

---

### **📌 Conclusión**  
✔️ Los sistemas de archivos organizan los datos en una jerarquía de carpetas y archivos.  
✔️ Las rutas absolutas son fijas y parten del directorio raíz.  
✔️ Las rutas relativas dependen del directorio actual y son más flexibles.  
✔️ En desarrollo web, las rutas relativas son preferibles para facilitar la portabilidad del código.  

🔹 **Comprender estos conceptos es clave para evitar errores de carga de archivos en proyectos web.**
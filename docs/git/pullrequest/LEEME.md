# 📌 **Guía: Cómo Hacer un Pull Request desde un Fork en GitHub**

Un **Pull Request (PR)** permite proponer cambios en un repositorio público, generalmente para contribuir a un proyecto de código abierto. Para hacer esto, necesitamos **crear un "fork"** del repositorio original, hacer cambios en él y luego enviar esos cambios como un PR.

---
Fork y Clone: Diferencias

✏️ Fork:

    Función de GitHub para crear una copia de un repositorio remoto.
    La réplica es independiente del original.
    Puedes modificarla sin permiso del propietario original.

✏️ Clone:

    Crea una copia local de un repositorio remoto.
    Usa el comando git clone <URL>.
    Mantiene una conexión con el repositorio remoto.

    
## **🔹 Paso 1: Forkear el Repositorio en GitHub**

🔹 **(Después de loguearte con tu user en GitHub)**

1. Ir al repositorio en GitHub (ejemplo: `https://github.com/original-owner/repo`).
2. Hacer clic en el botón **Fork** (ubicado en la parte superior derecha).
3. Esperar a que se cree la copia del repositorio en nuestra cuenta (ejemplo: `https://github.com/tu-usuario/repo`).

---

## **🔹 Paso 2: Clonar el Repositorio Forkeado**

### **🖥️ Método CLI (Línea de Comandos)**

Abrir una terminal y ejecutar:

```sh
git clone https://github.com/tu-usuario/repo.git
cd repo
```

### **🖥️ Método GUI (Visual Studio Code)**

1. Abrir **Visual Studio Code**.
2. Presionar `Ctrl + Shift + P` (Windows/Linux) o `Cmd + Shift + P` (Mac) para abrir la barra de comandos.
3. Escribir **"Git: Clone"** y seleccionar la opción.
4. Pegar la URL del repositorio (`https://github.com/tu-usuario/repo.git`).
5. Elegir una carpeta para guardar el repositorio y abrirlo en VSC.

---

## **🔹 Paso 3: Agregar el Repositorio Original como "Upstream" (Opcional)**

Esto permite mantener sincronizado nuestro fork con el repositorio original.
Es necesario si quieres:

- ✅ Mantener tu fork actualizado con el repositorio original.
- ✅ Hacer múltiples contribuciones sin errores de sincronización.
- ✅ Evitar conflictos cuando el repositorio original recibe muchas actualizaciones.

No es necesarios si solo planeas:

- ✅ Hacer un cambio puntual en un fork sin preocuparte por actualizaciones futuras.
- ✅ Crear una nueva rama basada en el estado actual de tu fork.
- ✅ Enviar un PR rápido sin sincronizar tu fork con cambios recientes del repo original.

### **🖥️ Método CLI**

Ejecutar:

```sh
git remote add upstream https://github.com/original-owner/repo.git
git remote -v  # Verificamos que el upstream se agregó correctamente
```

### **🖥️ Método GUI**

1. Abrir **Visual Studio Code**.
2. Ir a la pestaña **Fuente Control (Source Control)**.
3. Abrir el terminal dentro de VSC (`Ctrl + ñ` en Windows/Linux, `Cmd + ñ` en Mac).
4. Ejecutar el mismo comando de CLI arriba.

---

## **🔹 Paso 4: Crear una Nueva Rama para los Cambios**

Siempre es recomendable trabajar en una nueva rama en lugar de modificar `main`.

### **🖥️ Método CLI**

```sh
git checkout -b nombre-de-la-rama
```

_(Ejemplo: `git checkout -b fix-typo-documentation`)_

### **🖥️ Método GUI**

1. En Visual Studio Code, hacer clic en la parte inferior izquierda donde aparece la rama actual (`main`).
2. Seleccionar **"Crear nueva rama"**.
3. Escribir el nombre de la nueva rama (`fix-typo-documentation`).
4. Cambiará automáticamente a la nueva rama.

---

## **🔹 Paso 5: Hacer Cambios en el Código**

Realizar los cambios necesarios en los archivos.

---

## **🔹 Paso 6: Confirmar (Commit) y Enviar los Cambios (Push)**

### **🖥️ Método CLI**

1. Ver los cambios pendientes:
   ```sh
   git status
   ```
2. Agregar los archivos modificados:
   ```sh
   git add .
   ```
3. Hacer un commit con un mensaje descriptivo:
   ```sh
   git commit -m "Corrige error tipográfico en la documentación"
   ```
4. Enviar la nueva rama a GitHub:
   ```sh
   git push origin nombre-de-la-rama
   ```

### **🖥️ Método GUI**

1. Ir a la pestaña **Source Control** en VSC.
2. Ver la lista de archivos modificados.
3. Hacer clic en `+` para agregarlos o usar `git add .`.
4. Escribir un mensaje de commit y hacer clic en `✔` o usar `git commit -m "mensaje"`.
5. Hacer clic en **Push** para enviar los cambios a GitHub.

---

## **🔹 Paso 7: Crear el Pull Request en GitHub**

🔹 **(Logueado con tu user en gitHub))**

1. Ir a GitHub (`https://github.com/tu-usuario/repoforkeado`).
2. Veremos un mensaje diciendo que se subió una nueva rama y un botón **"Compare & Pull Request"**. Hacer clic en él.
3. Revisar los cambios y escribir un título y descripción del PR.
4. Seleccionar la rama de origen (ejemplo: `fix-typo-documentation`) y la rama de destino (`main` del repositorio original).
5. Hacer clic en **Create Pull Request**.

---

## **🔹 Paso 8: Mantener el Fork Actualizado**

Si el repositorio original cambia, debemos actualizar nuestro fork.
🔥 Ojo, esto es ó´lo posible si has definido el Upstream en el paso 3.

### **🖥️ Método CLI**

```sh
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

### **🖥️ Método GUI**

1. Cambiar a la rama `main` en VSC.
2. Abrir terminal y ejecutar los mismos comandos de arriba.
3. Hacer clic en **Push**.

---

## **🚀 Conclusión**

✅ **Crear una rama nueva antes de modificar código.**  
✅ **Sincronizar con el repositorio original (upstream).**  
✅ **Usar commits claros y descriptivos.**  
✅ **Hacer pull requests organizados.**

---

## **📌 Resumen en una Tabla**

| Paso                | CLI                                         | Visual Studio Code (GUI)             |
| ------------------- | ------------------------------------------- | ------------------------------------ |
| 1️⃣ Forkear repo     | GitHub web                                  | GitHub web                           |
| 2️⃣ Clonar repo      | `git clone`                                 | `Git: Clone` en la barra de comandos |
| 3️⃣ Agregar upstream | `git remote add upstream`                   | Terminal en VSC                      |
| 4️⃣ Crear rama       | `git checkout -b rama`                      | Crear nueva rama en VSC              |
| 5️⃣ Hacer cambios    | Editar archivos                             | Editar archivos en VSC               |
| 6️⃣ Commit & Push    | `git add . && git commit -m "" && git push` | Usar `✔` y luego `Push`              |
| 7️⃣ Crear PR         | GitHub web                                  | GitHub web                           |
| 8️⃣ Mantener fork    | `git fetch upstream && git merge`           | Terminal en VSC                      |

---
[https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
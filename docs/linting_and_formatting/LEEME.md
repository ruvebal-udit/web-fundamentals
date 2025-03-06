# Tabla de Contenidos

1. **Propósito del Formateo y Linting en el Desarrollo**

   - 1.1. ¿Qué es el Formateo?
     - Beneficios Claves del Formateo
     - Ejemplos de Formateo
   - 1.2. ¿Qué es el Linting?
     - Beneficios Claves del Linting
     - Ejemplos de Linting
   - 1.3. ¿Cómo se Complementan el Formateo y el Linting?
   - 1.4. ¿Por qué Usar Formateo y Linting Juntos?

2. **Guía Paso a Paso para Estudiantes: Instalación y Configuración de Herramientas**

   - 2.1. Instalar Prettier
     - Definición y Propósito de Prettier
     - Configurar Prettier en VS Code
   - 2.2. Instalar HTMLHint
     - Definición y Propósito de HTMLHint
     - Configurar HTMLHint en VS Code
   - 2.3. Instalar Stylelint
     - Definición y Propósito de Stylelint
     - Configurar Stylelint en VS Code
   - 2.4. Instalar ESLint
     - Definición y Propósito de ESLint
     - Configurar ESLint en VS Code
   - 2.5. Probar la Configuración
   - 2.6. Resolución de Problemas

3. **Configuración de Extensiones en Diferentes Niveles**
   - 3.1. Configuración por Proyecto
   - 3.2. Configuración a Nivel de Usuario
   - 3.3. Configuración Global

---

# **1. Propósito del Formateo y Linting en el Desarrollo**

En el desarrollo web moderno, el **formateo** y el **linting** juegan un papel fundamental en el mantenimiento de un código limpio, consistente y libre de errores. Estas prácticas mejoran la calidad del código, la colaboración en equipo y la facilidad de mantenimiento.

## **1.1. ¿Qué es el Formateo?**

El formateo consiste en organizar y estructurar el código de manera uniforme y visualmente clara, facilitando su lectura, escritura y comprensión.

### **Beneficios Claves del Formateo:**

- **Legibilidad**: Un código bien formateado es más fácil de entender.
- **Consistencia**: Uniformiza el estilo del código en un equipo.
- **Automatización**: Las herramientas de formateo eliminan la necesidad de hacerlo manualmente.

### **Ejemplos de Formateo:**

- Uso consistente de espacios e indentaciones.
- Definir una misma estructura para llaves `{}` y saltos de línea.
- Mantener una organización clara en los archivos HTML y CSS.

---

## **1.2. ¿Qué es el Linting?**

El linting analiza el código para detectar errores potenciales, aplicar estándares de codificación y fomentar mejores prácticas.

### **Beneficios Claves del Linting:**

- **Prevención de errores**: Detecta problemas comunes como etiquetas mal cerradas.
- **Aplicación de estándares**: Asegura que el código siga reglas de estilo establecidas.
- **Mejora de la calidad**: Facilita el mantenimiento y robustez del código.

### **Ejemplos de Linting:**

- Identificación de variables no utilizadas en JavaScript.
- Detección de etiquetas incorrectas en HTML.
- Reglas de mejor práctica en CSS.

---

## **2. Guía Paso a Paso para Estudiantes: Instalación y Configuración de Herramientas**

### **2.1. Instalar Prettier**

#### **Definición y Propósito de Prettier**

Prettier es una herramienta de formateo de código que aplica reglas de estilo predefinidas para mantener la coherencia en todos los archivos.

#### **Configurar Prettier en VS Code**

1. Instalar la extensión **Prettier - Code formatter** en el Marketplace de VS Code.
2. Ir a **Configuración (`Ctrl + ,`)** y buscar `Editor: Default Formatter`, seleccionando **Prettier**.
3. Activar la opción **Format on Save** para que el código se formatee automáticamente al guardar.

---

### **2.2. Instalar HTMLHint**

#### **Definición y Propósito de HTMLHint**

HTMLHint es un linter para código HTML que detecta errores comunes y ayuda a mejorar la calidad del código.

#### **Configurar HTMLHint en VS Code**

1. Instalar la extensión **HTMLHint** en el Marketplace de VS Code.
2. Al abrir archivos HTML, el linter mostrará advertencias y errores en la pestaña de **Problemas**.

---

### **2.3. Instalar Stylelint**

#### **Definición y Propósito de Stylelint**

Stylelint es un linter de CSS que ayuda a detectar errores y mantener una estructura uniforme en los estilos.

#### **Configurar Stylelint en VS Code**

1. Instalar la extensión **Stylelint** en el Marketplace de VS Code.
2. Abrir la configuración de VS Code y asegurarse de que **Stylelint** esté activado.
3. Stylelint revisará los archivos CSS y mostrará errores en la pestaña de **Problemas**.

---

### **2.4. Instalar ESLint**

#### **Definición y Propósito de ESLint**

ESLint es un linter para JavaScript que detecta errores de sintaxis y promueve mejores prácticas.

#### **Configurar ESLint en VS Code**

1. Instalar la extensión **ESLint** en el Marketplace de VS Code.
2. Asegurarse de que la opción `eslint.enable` esté activada en la configuración.
3. Al escribir código JavaScript, ESLint mostrará advertencias en tiempo real.

---

### **2.5. Probar la Configuración**

Para asegurarse de que todas las herramientas funcionan correctamente, abre archivos HTML, CSS y JavaScript con errores intencionales y verifica que las extensiones los detecten.

### **2.6. Resolución de Problemas**

1. Asegurar que las extensiones están correctamente instaladas y habilitadas en VS Code.
2. Reiniciar VS Code después de instalar extensiones.
3. Revisar la pestaña de **Problemas** para ver advertencias y errores específicos.

---

# **3. Configuración de Extensiones en Diferentes Niveles**

En el desarrollo, las herramientas de formateo y linting pueden configurarse en diferentes niveles: a nivel de **proyecto**, a nivel de **usuario** en el editor de código (VS Code) o de manera **global** en el sistema. Cada enfoque tiene ventajas y desventajas dependiendo del contexto de trabajo.

## **3.1. Configuración por Proyecto**

Esta configuración se almacena dentro del repositorio y se comparte con todos los colaboradores del proyecto. Se definen archivos de configuración como `.prettierrc`, `.eslintrc.json`, `.stylelintrc.json` y `.htmlhintrc`.

Alternativamente, también dentro del mismo repositorio, pueden existir configuraciones específicas de VS Code en `.vscode/settings.json`.

**Diferencia entre Configuración por Proyecto y Configuración por Espacio de Trabajo (VSC Workspace Settings)**

- **Configuración por Proyecto**: Abarca configuraciones de herramientas como Prettier, ESLint, Stylelint, HTMLHint, que son independientes del editor utilizado.

  **_Ventajas:_**

  - Garantiza que todos los desarrolladores utilicen las mismas reglas.
  - Permite mantener consistencia en el código del proyecto.
  - Se puede versionar con el control de versiones (Git).

- **Configuración por Espacio de Trabajo con VSCode (Workspace Settings)**: Se guarda dentro de `.vscode/settings.json` y es específica para los desarrolladores que usan VS Code.

  **_Desventajas:_**

  - Si los desarrolladores usan diferentes editores, deberán configurarlos para que respeten las reglas del proyecto.

## **3.2. Configuración a Nivel de Usuario en VS Code**

Esta configuración se aplica a nivel personal dentro del entorno de desarrollo del usuario. En **VS Code**, se define en `settings.json`.

**Opciones disponibles en VS Code:**

- **Configuración Global (User Settings)**: Aplica a todos los proyectos del usuario en ese entorno de desarrollo.
- **Configuración por Espacio de Trabajo (Workspace Settings)**: Se guarda dentro de `.vscode/settings.json` y aplica solo al proyecto actual.

Ejemplo de configuración en `settings.json` para habilitar Prettier y ESLint:

```json
{
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"editor.formatOnSave": true,
	"eslint.validate": ["javascript", "typescript", "html"]
}
```

**Ventajas:**

- Personaliza las reglas de formateo y linting según las preferencias del usuario.
- No interfiere con configuraciones específicas del proyecto.

**Desventajas:**

- No garantiza que todos los miembros del equipo usen las mismas configuraciones.

## **3.3. Configuración Global con npm/npx**

Esta configuración se aplica a todo el sistema y afecta todos los proyectos sin necesidad de archivos locales. Se configura en la instalación global de las herramientas.

Para instalar herramientas globalmente, usa:

```bash
npm install -g prettier eslint stylelint htmlhint
```

Esto permite ejecutar:

```bash
prettier --write "src/**/*.js"
eslint "src/**/*.js"
stylelint "src/**/*.css"
htmlhint "src/**/*.html"
```

**¿Es necesario instalar las extensiones en VS Code si se usa este método?**

- **No es obligatorio**, ya que se pueden ejecutar las herramientas desde la terminal.
- **Sin embargo**, si se desea integración directa dentro de VS Code (como corrección automática o resaltado de errores), sí es recomendable instalar las extensiones correspondientes.

**Ventajas:**

- Conveniente para desarrolladores que trabajan en múltiples proyectos con reglas comunes.
- No requiere archivos de configuración en cada proyecto.

**Desventajas:**

- Puede causar inconsistencias si un proyecto necesita configuraciones específicas.

## **3.4. Ejemplos de Configuración de Archivos**

Ejemplo de configuración típica de `.prettierrc`:

```json
{
	"semi": true, // Usar punto y coma al final de cada línea
	"singleQuote": true, // Usar comillas simples en lugar de dobles
	"tabWidth": 2, // Tamaño de la indentación con espacios
	"trailingComma": "es5", // Agregar comas finales en estructuras de datos
	"printWidth": 100 // Máximo de caracteres por línea
}
```

Ejemplo de `.eslintrc.json`:

```json
{
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": "eslint:recommended",
	"rules": {
		"semi": ["error", "always"], // Forzar uso de punto y coma
		"quotes": ["error", "single"], // Usar comillas simples
		"eqeqeq": ["error", "always"], // Usar siempre triple igualdad
		"no-unused-vars": "warn" // Avisar sobre variables no utilizadas
	}
}
```

Ejemplo de `.stylelintrc.json`:

```json
{
	"extends": "stylelint-config-standard",
	"rules": {
		"indentation": 2, // Indentación de 2 espacios
		"string-quotes": "double", // Usar comillas dobles
		"color-hex-length": "short", // Preferir valores hexadecimales cortos
		"max-nesting-depth": 3 // Límite de anidación de selectores
	}
}
```

Ejemplo de `.htmlhintrc`:

```json
{
	"attr-lowercase": true, // Atributos en minúsculas
	"attr-value-double-quotes": true, // Valores de atributos con comillas dobles
	"doctype-first": true, // Requiere que el doctype sea la primera línea
	"id-unique": true, // No permitir IDs duplicados
	"tag-pair": true // Exigir etiquetas de cierre en elementos que lo requieran
}
```

Al elegir entre configuraciones por proyecto, usuario o global, es recomendable priorizar configuraciones **por proyecto** para mantener la consistencia y evitar conflictos entre entornos.

# Table of Contents

1. **Purpose of Formatting (Prettier) and Linting (HTMLHint)**

   - 1.1. Prettier: Code Formatting
     - Purpose of Prettier
     - Prettier Example
   - 1.2. HTMLHint: Code Linting
     - Purpose of HTMLHint
     - HTMLHint Example
   - 1.3. How Prettier and HTMLHint Complement Each Other
     - Focus Areas
     - Workflow Synergy
     - Automation and Quality
     - Error Prevention
   - 1.4. Scenario: Working Together
     - Before Prettier and HTMLHint
     - Final Code After Fixes
   - 1.5. Why Both Are Necessary

2. **Step-by-Step Guide for Students to Install and Configure Prettier and HTMLHint in Visual Studio Code**
   - 2.1. Install Prettier
     - Steps
     - Configuration
     - Optional Prettier Config File
   - 2.2. Install HTMLHint
     - Steps
     - Configuration
   - 2.3. Test the Setup
   - 2.4. Verify Extensions Are Working
   - 2.5. Encourage Best Practices
   - 2.6. Troubleshooting

---

# **Purpose of Formatting (Prettier) and Linting (HTMLHint)**

Formatting and linting are essential practices in software development to maintain **readable, consistent, and error-free code**. While they serve different purposes, they complement each other to improve the quality and maintainability of a codebase.

### **1.1 Prettier: Code Formatting**

**Prettier** is a **code formatter** that automatically enforces consistent styling in your code. It focuses purely on formatting without checking for potential bugs or enforcing coding standards beyond style.

#### **Purpose of Prettier:**

- **Consistent Code Style**:

  - Ensures all developers on a team write code in the same style, regardless of personal preferences.
  - Example: Converts single quotes to double quotes, ensures consistent indentation, and enforces line wrapping.

- **Increased Readability**:

  - Formats code to make it clean and easy to read for humans, reducing cognitive load.
  - Example: Properly aligning elements in HTML or function arguments in JavaScript.

- **Automation**:

  - Removes the need for manual code formatting by applying rules automatically when saving a file or running a command.

- **Avoiding Arguments About Style**:
  - By adhering to a predefined style guide, Prettier eliminates debates over formatting choices in a team setting.

#### **Prettier Example:**

**Before Formatting:**

```html
<html>
	<head>
		<title>Test</title>
	</head>
	<body>
		<h1>Hello World</h1>
	</body>
</html>
```

**After Formatting:**

```html
<html>
	<head>
		<title>Test</title>
	</head>
	<body>
		<h1>Hello World</h1>
	</body>
</html>
```

---

### **1.2. HTMLHint: Code Linting**

**HTMLHint** is a **code linter** that identifies and enforces best practices for writing HTML. It flags errors, warnings, or deviations from coding standards that may cause bugs or inconsistencies.

#### **Purpose of HTMLHint:**

- **Error Detection**:

  - Highlights common errors like missing tags, invalid attributes, or duplicate IDs.
  - Example: Detects a missing `alt` attribute in an `<img>` tag.

- **Enforcing Standards**:

  - Ensures that code adheres to web development standards and best practices.
  - Example: Flags uppercase tag names, which are non-compliant with HTML5 standards.

- **Improved Accessibility**:

  - Encourages practices that improve the accessibility of websites.
  - Example: Ensures all `<img>` tags include `alt` attributes.

- **Avoiding Browser Inconsistencies**:
  - Helps avoid potential rendering issues by ensuring valid and clean HTML structure.

#### **HTMLHint Example:**

**HTML with Issues:**

```html
<HTML>
  <HEAD>
    <TITLE>Test Page</Title>
  </Head>
  <body>
    <h1>Welcome</h2>
    <img src="image.jpg">
  </body>
</HTML>
```

**HTMLHint Flags:**

- Tag `<HTML>` should be lowercase.
- Tag `<HEAD>` should be lowercase.
- `<TITLE>` and `<h1>` tags are improperly closed.
- `<img>` tag is missing the `alt` attribute.

---

### **1.3. How Prettier and HTMLHint Complement Each Other**

1. **Focus Areas**:

   - **Prettier** focuses on **styling** the code (indentation, spacing, alignment).
   - **HTMLHint** focuses on **validity** and **best practices** (errors, missing attributes, semantic correctness).

2. **Workflow Synergy**:

   - **Prettier** ensures the code looks clean and consistent.
   - **HTMLHint** ensures the code is written correctly and adheres to standards.

3. **Automation and Quality**:

   - With Prettier, developers don’t have to worry about manual formatting.
   - HTMLHint catches logical or structural issues that Prettier doesn't address.

4. **Error Prevention**:
   - **Prettier Example**: Aligns a closing `</body>` tag properly for readability.
   - **HTMLHint Example**: Flags missing closing tags altogether.

---

### **1.4. Scenario: Working Together**

#### **Before Prettier and HTMLHint:**

```html
<HTML>
  <Head>
    <title>Test Page</Title>
  </head>
  <body>
    <h1>Welcome to My Page</h2>
    <img src="example.jpg">
  </body>
</HTML>
```

- **Prettier Fixes**:

  - Reformats the document for better readability.

  ```html
  <html>
  	<head>
  		<title>Test Page</title>
  	</head>
  	<body>
  		<h1>Welcome to My Page</h1>
  		<img src="example.jpg" />
  	</body>
  </html>
  ```

- **HTMLHint Flags Remaining Issues**:
  - Alerts:
    - Tag `<h1>` and `<h2>` mismatch.
    - Missing `alt` attribute in `<img>`.

#### **Final Code After Fixes:**

```html
<html>
	<head>
		<title>Test Page</title>
	</head>
	<body>
		<h1>Welcome to My Page</h1>
		<img src="example.jpg" alt="example image" />
	</body>
</html>
```

### **1.5. Why Both Are Necessary**

- **Prettier**: Focuses on **how** the code looks.
- **HTMLHint**: Focuses on **what** the code does and if it’s correct.

Together, they ensure **clean, readable, and error-free HTML code**, resulting in better collaboration, reduced bugs, and a smoother development workflow.

---

# **Step-by-Step Guide for Students to Install and Configure Prettier and HTMLHint in Visual Studio Code**

How to install and set up **Prettier** and **HTMLHint** in Visual Studio Code for code formatting and linting:

### **2.1. Install Prettier**

Prettier is a code formatter that ensures consistent formatting.

#### **Steps:**

1. Open Visual Studio Code.
2. Go to the **Extensions Marketplace**:
   - Click the **Extensions icon** on the left sidebar or press `Ctrl + Shift + X` (`Cmd + Shift + X` on macOS).
3. Search for **"Prettier - Code formatter"**.
4. Click **Install**.

#### **Configuration:**

1. Open the **Settings**:
   - Press `Ctrl + ,` (Windows/Linux) or `Cmd + ,` (macOS).
2. Search for "Default Formatter."
3. Set the default formatter to **Prettier**:

   - Search for `Editor: Default Formatter`.
   - Select `esbenp.prettier-vscode` from the dropdown.

4. Enable Format on Save:
   - Search for `Editor: Format On Save`.
   - Check the box to enable it.

#### **Configure Prettier for Specific Languages**

You can explicitly set Prettier as the formatter for CSS, JavaScript, and HTML files by adding the following settings to your settings.json file:

Open the Command Palette:

    Press Ctrl + Shift + P (Windows/Linux) or Cmd + Shift + P (macOS).

Type and select Preferences: Open Settings (JSON).
Add or update the following settings:

```json
{
	"editor.formatOnSave": true,
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"[javascript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[css]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[html]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	}
}
```

#### **Optional Prettier Config File:**

- Students can create a `.prettierrc` file in their project to customize formatting:
  ```json
  {
  	"semi": true,
  	"singleQuote": true,
  	"tabWidth": 2,
  	"useTabs": false,
  	"trailingComma": "es5"
  }
  ```

---

### **2.2. Install HTMLHint**

HTMLHint is a linter for detecting issues in HTML code.

#### **Steps:**

1. Go to the **Extensions Marketplace** in Visual Studio Code.
2. Search for **"HTMLHint"**.
3. Click **Install**.

#### **Configuration:**

1. Create an `.htmlhintrc` file in the project root directory for custom rules:

   ```json
   {
   	"doctype-first": true,
   	"tagname-lowercase": true,
   	"attr-lowercase": true,
   	"attr-value-double-quotes": true,
   	"tag-pair": true,
   	"alt-require": true,
   	"id-unique": true,
   	"src-not-empty": true,
   	"href-not-empty": true,
   	"space-tab-mixed-disabled": true,
   	"head-script-disabled": true,
   	"inline-style-disabled": true,
   	"inline-script-disabled": true,
   	"csslint": true,
   	"htmlhint-max-errors": 50
   }
   ```

2. Optionally, add global rules to the user settings:
   - Open **Settings**.
   - Search for `HTMLHint`.
   - Add custom rules if needed.

---

### **2.3. Test the Setup**

1. **Prettier:**

   - Open an HTML, CSS, or JavaScript file.
   - Save the file and observe automatic formatting.
   - Run `Format Document` manually by pressing `Shift + Alt + F` (Windows) or `Shift + Option + F` (macOS).

2. **HTMLHint:**
   - Open an HTML file with issues (e.g., missing closing tags or improper attribute cases).
   - Check for underlined warnings or errors in the editor.
   - View detailed issues in the **Problems** tab (usually at the bottom of VS Code).

---

### **2.4. Verify Extensions Are Working**

- Use a simple HTML file to test both Prettier and HTMLHint:
  ```html
  <!DOCTYPE html>
  <html>
  	<head>
  		<title>Test Page</title>
  	</head>
  	<body>
  		<h1>Hello World</h1>
  		<img src="" />
  	</body>
  </html>
  ```
- Prettier will format the file, and HTMLHint will flag issues like:
  - Incorrect capitalization of tags (`Head`, `Title`).
  - Missing `alt` attribute in the `<img>` tag.

---

### **2.5. Encourage Best Practices**

- Ensure students understand the purpose of formatting (Prettier) and linting (HTMLHint).
- Show them how to fix issues flagged by HTMLHint manually.

---

### **2.6. Troubleshooting**

- If Prettier or HTMLHint doesn’t work:
  - Check the file association (ensure the file is recognized as HTML, CSS, or JavaScript).
  - Ensure there are no conflicting extensions (e.g., other formatters or linters).
  - Verify that `Editor: Format On Save` is enabled.

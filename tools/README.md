# Table of Contents

1. **The Purpose of Formatting and Linting in Development**

   - 1.1. What Is Formatting?
     - Key Benefits of Formatting
     - Examples of Formatting
   - 1.2. What Is Linting?
     - Key Benefits of Linting
     - Examples of Linting
   - 1.3. How Formatting and Linting Complement Each Other
   - 1.4. Why Use Formatting and Linting Together?

2. **Step-by-Step Guide for Students to Install and Configure Tools**
   - 2.1. Install Prettier
     - Definition and Purpose of Prettier
     - Option 1: Configure Prettier Using VS Code
     - Option 2: Configure Prettier Using npx CLI
   - 2.2. Install HTMLHint
     - Definition and Purpose of HTMLHint
     - Option 1: Configure HTMLHint Using VS Code
     - Option 2: Configure HTMLHint Using npx CLI
   - 2.3. Install Stylelint
     - Definition and Purpose of Stylelint
     - Option 1: Configure Stylelint Using VS Code
     - Option 2: Configure Stylelint Using npx CLI
   - 2.4. Install ESLint
     - Definition and Purpose of ESLint
     - Option 1: Configure ESLint Using VS Code
     - Option 2: Configure ESLint Using npx CLI
   - 2.5. Test the Setup
   - 2.6. Troubleshooting

---

# **1. The Purpose of Formatting and Linting in Development**

In modern web development, **formatting** and **linting** play complementary roles in maintaining clean, consistent, and error-free code. These practices are essential for improving code quality, collaboration, and maintainability.

#### **1.1. What Is Formatting?**

Formatting refers to organizing and structuring code in a consistent and visually appealing manner. It ensures the code is easy to read, write, and understand, both for the original developer and for others working on the same project.

##### **Key Benefits of Formatting:**

- **Readability**:
  - Properly formatted code is easier to navigate, reducing the cognitive load on developers.
- **Consistency**:
  - Uniform styling helps teams maintain the same coding standards across files.
- **Automation**:
  - Automated formatting tools save time by eliminating the need for manual formatting.

##### **Examples of Formatting:**

- Ensuring consistent indentation and spacing.
- Enforcing a standard for line breaks, brackets, and quotes.
- Aligning elements in HTML or properties in CSS for better visual structure.

---

#### **1.2. What Is Linting?**

Linting involves analyzing code to detect potential errors, enforce coding standards, and encourage best practices. A linter reviews the codebase and highlights problematic patterns or violations, ensuring that it adheres to predefined guidelines.

##### **Key Benefits of Linting:**

- **Error Prevention**:
  - Identifies common errors like missing closing tags, unused variables, or invalid syntax.
- **Standards Enforcement**:
  - Encourages adherence to coding conventions and project-specific rules.
- **Code Quality**:
  - Improves the overall reliability and maintainability of the code.

##### **Examples of Linting:**

- Highlighting invalid HTML attributes or tags.
- Detecting JavaScript syntax errors, such as undeclared variables.
- Enforcing best practices in CSS, like avoiding duplicate selectors.

---

#### **1.3. How Formatting and Linting Complement Each Other**

While formatting ensures the code looks consistent and is easy to read, linting ensures the code works correctly and adheres to standards.

- **Formatting Focuses on**:

  - **How the code looks.**
  - E.g., Indentation, line breaks, and spacing.

- **Linting Focuses on**:
  - **What the code does.**
  - E.g., Correctness, validity, and best practices.

---

### **1.4. Why Use Formatting and Linting Together?**

By combining formatting and linting tools, developers can ensure their code is both clean and functional:

- **Improves Collaboration**:
  - Consistent formatting and adherence to standards make it easier for teams to work together.
- **Reduces Debugging Time**:
  - Early detection of issues through linting prevents bugs from going unnoticed.
- **Boosts Productivity**:
  - Automated tools handle repetitive tasks, allowing developers to focus on more complex problems.

---

# **2. Step-by-Step Guide for Students to Install and Configure Tools**

Here’s an improved version of **Section 2**, which includes instructions for configuring tools using both **Visual Studio Code (VS Code)** extensions and **npx CLI commands**. This way, students can choose their preferred method based on their comfort level.

---

## **2. Step-by-Step Guide for Students to Install and Configure Tools**

---

### **2.1. Install Prettier**

**Prettier** is a code formatter that ensures consistent styling across your codebase automatically.

#### **Definition and Purpose of Prettier**

- **Definition**: Prettier is an opinionated code formatter that enforces a consistent style by parsing your code and reprinting it with its own rules, considering maximum line length and other settings.
- **Purpose**:
  - **Consistency**: Ensures all files in a project follow the same style.
  - **Readability**: Makes code easier to read and understand.
  - **Automation**: Eliminates manual formatting, saving time and effort.

#### **Option 1: Configure Prettier Using VS Code**

1. Install the **Prettier - Code formatter** extension:

   - Open **VS Code**.
   - Go to the Extensions Marketplace (`Ctrl + Shift + X` / `Cmd + Shift + X`).
   - Search for **"Prettier - Code formatter"** and click **Install**.

2. Configure Prettier:

   - Open **Settings** (`Ctrl + ,` / `Cmd + ,`).
   - Search for `Editor: Default Formatter`.
   - Set the value to **"esbenp.prettier-vscode"**.
   - Enable **Format on Save**:
     - Search for `Editor: Format On Save` and check the box.

3. Test Prettier:
   - Open a file with inconsistent formatting.
   - Save the file and verify that Prettier formats it automatically.

#### **Option 2: Configure Prettier Using npx CLI**

1. Install Prettier:

   - Run the following command to install Prettier locally:
     ```bash
     npm install prettier --save-dev
     ```

2. Create a Prettier configuration file:

   - Add a `.prettierrc` file to your project with custom settings, e.g.:
     ```json
     {
     	"semi": true,
     	"singleQuote": true,
     	"tabWidth": 2
     }
     ```

3. Add a `.prettierignore` file:

   - Specify files or folders to exclude from formatting, e.g.:
     ```plaintext
     node_modules/
     dist/
     ```

4. Test Prettier:
   - Format files directly from the terminal:
     ```bash
     npx prettier --write "src/**/*.js"
     ```

---

### **2.2. Install HTMLHint**

**HTMLHint** is a static code analysis tool specifically for HTML files.

#### **Definition and Purpose of HTMLHint**

- **Definition**: HTMLHint is a linter for HTML that identifies syntax errors, enforces coding standards, and helps improve the quality of HTML code.
- **Purpose**:
  - **Error Detection**: Flags issues like missing tags, invalid attributes, or duplicate IDs.
  - **Standards Compliance**: Ensures HTML adheres to best practices and coding standards.
  - **Accessibility**: Encourages practices like using `alt` attributes for images.

#### **Option 1: Configure HTMLHint Using VS Code**

1. Install the **HTMLHint** extension:

   - Open **VS Code**.
   - Go to the Extensions Marketplace and search for **"HTMLHint"**.
   - Click **Install**.

2. Configure HTMLHint:

   - Use the default rules provided by the extension or create a `.htmlhintrc` file in your project root (see Option 2 below).

3. Test HTMLHint:
   - Open an HTML file with issues and verify that the Problems tab in VS Code shows warnings or errors.

#### **Option 2: Configure HTMLHint Using npx CLI**

1. Install HTMLHint locally:

   - Run the following command:
     ```bash
     npm install htmlhint --save-dev
     ```

2. Create an HTMLHint configuration file:

   - Add a `.htmlhintrc` file to the root of your project:
     ```json
     {
     	"tagname-lowercase": true,
     	"attr-lowercase": true,
     	"attr-value-double-quotes": true,
     	"doctype-first": true,
     	"id-unique": true,
     	"src-not-empty": true,
     	"tag-pair": true
     }
     ```

3. Test HTMLHint:
   - Use the terminal to lint an HTML file:
     ```bash
     npx htmlhint src/index.html
     ```

---

### **2.3. Install Stylelint**

**Stylelint** is a CSS linter that enforces consistent styling and detects errors in stylesheets.

#### **Definition and Purpose of Stylelint**

- **Definition**: Stylelint is a modern CSS linter that enforces consistent styling and catches errors in your stylesheets.
- **Purpose**:
  - **Error Detection**: Identifies invalid CSS properties and syntax errors.
  - **Consistent Styling**: Ensures CSS adheres to a consistent format.
  - **Maintainability**: Promotes clean, structured CSS.

#### **Option 1: Configure Stylelint Using VS Code**

1. Install the **Stylelint** extension:

   - Open **VS Code**.
   - Go to the Extensions Marketplace and search for **"Stylelint"**.
   - Click **Install**.

2. Use the extension’s default settings or create a configuration file (see Option 2 below).

#### **Option 2: Configure Stylelint Using npx CLI**

1. Install Stylelint:

   ```bash
   npm install stylelint stylelint-config-standard stylelint-config-prettier --save-dev
   ```

2. Create a `.stylelintrc.json` file:

   ```json
   {
   	"extends": ["stylelint-config-standard", "stylelint-config-prettier"],
   	"rules": {
   		"indentation": 2,
   		"string-quotes": "double"
   	}
   }
   ```

3. Test Stylelint:
   - Run Stylelint to check your CSS files:
     ```bash
     npx stylelint "src/**/*.css"
     ```
   - Fix issues automatically:
     ```bash
     npx stylelint "src/**/*.css" --fix
     ```

---

### **2.4. Install ESLint**

**ESLint** is a JavaScript linter that enforces coding conventions and catches bugs.

#### **Definition and Purpose of ESLint**

- **Definition**: ESLint is a static analysis tool for JavaScript that identifies problematic patterns and enforces coding standards.
- **Purpose**:
  - **Error Detection**: Highlights syntax errors and potential bugs.
  - **Consistency**: Ensures JavaScript code adheres to standards.
  - **Customizability**: Provides flexible configuration for project-specific needs.

#### **Option 1: Configure ESLint Using VS Code**

1. Install the **ESLint** extension:

   - Open **VS Code**.
   - Go to the Extensions Marketplace and search for **"ESLint"**.
   - Click **Install**.

2. Use the default settings provided by the extension or configure ESLint (see Option 2 below).

#### **Option 2: Configure ESLint Using npx CLI**

1. Install ESLint:

   ```bash
   npm install eslint --save-dev
   ```

2. Initialize ESLint:

   - Run the following command to create a configuration file:
     ```bash
     npx eslint --init
     ```
   - Follow the prompts to configure ESLint for your project.

3. Create an `.eslintrc.json` file:

   ```json
   {
   	"env": {
   		"browser": true,
   		"es2021": true
   	},
   	"extends": "eslint:recommended",
   	"parserOptions": {
   		"ecmaVersion": 12,
   		"sourceType": "module"
   	},
   	"rules": {
   		"semi": ["error", "always"],
   		"quotes": ["error", "single"]
   	}
   }
   ```

4. Test ESLint:
   - Use the terminal to lint JavaScript files:
     ```bash
     npx eslint "src/**/*.js"
     ```
   - Fix issues automatically:
     ```bash
     npx eslint "src/**/*.js" --fix
     ```

---

### **2.5. Test the Setup**

- Create sample files for HTML, CSS, and JavaScript with intentional errors.
- Test each tool to ensure it works as expected:
  - Prettier should format code.
  - HTMLHint should flag HTML issues.
  - Stylelint should catch CSS errors.
  - ESLint should highlight JavaScript problems.

---

### **2.6. Troubleshooting**

1. Ensure extensions are installed in Visual Studio Code.
2. Verify configuration files (`.prettierrc`, `.htmlhintrc`, `.stylelintrc.json`, `.eslintrc.json`) are correctly set up.
3. Restart Visual Studio Code to apply changes.
4. Run CLI commands for detailed error messages (e.g., `npx eslint`, `npx stylelint`).

---

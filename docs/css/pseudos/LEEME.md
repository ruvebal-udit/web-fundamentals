# Pseudo-Elements and State-Based Styling: Critical Approaches to Dynamic CSS

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:

- Distinguish between pseudo-classes and pseudo-elements and their roles in modern CSS
- Implement state-based styling to enhance user interface feedback
- Create dynamic UI elements without relying on JavaScript
- Apply critical thinking to accessibility considerations in interactive styles
- Evaluate the impact of pseudo-selectors on performance and maintainability

## 🤔 Critical Context

Pseudo-classes and pseudo-elements represent the intersection of user interaction, visual feedback, and semantic HTML structure. While powerful for creating dynamic interfaces, they raise important questions about:

- Accessibility: How do state-based styles impact users relying on assistive technologies?
- Progressive Enhancement: When should we use CSS pseudo-states vs. JavaScript?
- Performance: What are the rendering implications of heavy pseudo-selector usage?
- Maintainability: How can we organize state-based styles in a scalable way?

## 🛠️ Hands-on Workshop

This lesson follows an incremental approach where we'll build a real-world component that showcases various pseudo-selectors. We'll create an accessible dropdown menu with hover states, focus management, and dynamic content.

### 🏗️ Project Setup

1. In your project repository, create a new branch:

```bash
git checkout -b feature/state-based-dropdown
```

2. Create a new component file structure:

```
components/
  dropdown/
    index.html
    styles.css
```

### 💡 Understanding Pseudo-Classes

Pseudo-classes select elements based on their:

They don't create new elements but apply styles conditionally based on these characteristics.

### 🎨 Building the Dropdown Component

[View complete dropdown demo](demo/dropdown.html)

#### Step 1: Base HTML Structure with ARIA

```html
<div class="dropdown" role="navigation">

	<button class="dropdown__trigger" aria-haspopup="true" aria-expanded="false">Menu</button>

	</ul>
</div>
```

#### Step 2: State-Based Styling

```css
/* Base styles with CSS custom properties for theming */
.dropdown {
	--dropdown-bg: #ffffff;
	--dropdown-border: #e2e8f0;
	--dropdown-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
	position: relative;
}

/* Interactive states with pseudo-classes */
.dropdown__trigger:hover,
.dropdown__trigger:focus {
	background-color: var(--dropdown-bg-hover);
	outline: 2px solid currentColor;
	outline-offset: 2px;
}

/* 🤔 Critical discussion: Why use :focus-visible instead of just :focus? */
.dropdown__trigger:focus-visible {
	outline: 2px solid var(--focus-ring-color);
	outline-offset: 2px;
}
```

#### Step 3: Structural Pseudo-classes

```css
/* Styling alternate items for visual rhythm */
.dropdown__content li:nth-child(odd) {
	background-color: var(--dropdown-bg-alt);
}

/* 🔍 Exercise: Why might this be better than using even/odd classes? */

/* Target all items except the last for consistent spacing */
.dropdown__content li:not(:last-child) {
	border-bottom: 1px solid var(--dropdown-border);
}

/* 💭 Discussion: How does :not() improve maintainability? */
```

#### Step 4: Pseudo-elements for Enhanced UI

```css
/* Add visual cues with ::before */
.dropdown__trigger::before {
	content: '▾';
	margin-right: 0.5em;
	transition: transform 0.2s ease;
}

/* Rotate indicator when expanded */
.dropdown[aria-expanded='true'] .dropdown__trigger::before {
	transform: rotate(180deg);
}
```

/_ 🎯 Practice: Create a custom indicator using ::after _/

## 🤝 Collaborative Exercises

### Exercise 1: State Management Audit

Work in pairs to:

1. Review each other's dropdown implementations
2. Test all interactive states (hover, focus, active)
3. Verify keyboard navigation
4. Check ARIA state changes

### Exercise 2: Progressive Enhancement Challenge

Create a dropdown that:

- Works without JavaScript
- Uses CSS-only transitions
- Maintains accessibility
- Provides clear visual feedback

## 🎭 Critical Reflections

### Performance Considerations

- How do complex selectors affect rendering performance?
- When should we use CSS-only solutions vs. JavaScript?
- What are the trade-offs of heavy pseudo-selector usage?

### Accessibility Impact

- How do our state-based styles affect screen readers?
- Are our hover effects excluding mobile users?
- Do our focus states meet WCAG requirements?

## ✅ Commit Guidelines

When committing your dropdown component:

````bash
git add components/dropdown
git commit -m "feat(dropdown): implement state-based styling with pseudo-classes

- Add accessible dropdown structure
- Implement hover and focus states
- Include progressive enhancement
- Document accessibility considerations

Fixes #123"

## 📊 Assessment Criteria

Your implementation will be evaluated on:

1. **Technical Implementation**
   - Correct usage of pseudo-classes and pseudo-elements
   - Progressive enhancement approach
   - Clean, maintainable CSS
   - Proper git commit history

2. **Accessibility**
   - Keyboard navigation
   - ARIA attributes
   - Focus management
   - Screen reader compatibility

3. **Critical Thinking**
   - Documentation of design decisions
   - Performance considerations
   - Accessibility rationale
   - Thoughtful code comments

## 📚 Additional Resources

### Documentation
- [MDN Web Docs: Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- [WCAG: Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)
- [CSS-Tricks: All About Pseudo-Elements](https://css-tricks.com/pseudo-element-roundup/)

### Tools
- [Can I Use: Pseudo-classes](https://caniuse.com/?search=pseudo-class)
- [Interactive CSS Pseudo-classes Demo](https://codepen.io/web-dot-dev/pen/pseudo-classes)
- [Accessibility Testing Tools](https://www.w3.org/WAI/ER/tools/)

## � Next Steps

1. Complete the dropdown component
2. Add it to your portfolio project
3. Document your implementation choices
4. Share in next week's peer review session

Remember: The goal isn't just to make it work, but to understand why and how it works for all users.

---

<details>
<summary>💡 Common Pitfalls to Avoid</summary>

- Relying solely on hover states for critical interactions
- Forgetting keyboard navigation
- Using content in pseudo-elements that should be in HTML
- Over-complicated selector chains
- Missing focus states
- Not testing with assistive technologies

</details>

[View typography examples demo](demo/typography.html)

📌 **Practice:** Add decorative emojis before and after `<h1>` elements.

#### 🔹 **`::first-letter` (Styling the First Letter of a Paragraph)**

Enhance typography by enlarging or changing the style of the first letter.

```css
p::first-letter {
	font-size: 2rem;
	color: red;
}
````

📌 **Practice:** Apply a drop cap effect to paragraphs.

#### 🔹 **`::first-line` (Styling the First Line of Text)**

Apply styles only to the first line of a paragraph.

```css
p::first-line {
	font-weight: bold;
}
```

📌 **Practice:** Highlight the first line of each paragraph.

#### 🔹 **`::selection` (Styling Selected Text)**

Change the appearance of text when selected by the user.

```css
::selection {
	background: yellow;
	color: black;
}
```

📌 **Practice:** Customize the highlighted text color.

---

## **4. Advanced Techniques with Pseudo-Classes and Pseudo-Elements**

### **4.1. Tooltips with `::after` and `:hover`**

[View tooltip demo](demo/tooltip.html)

Create tooltips using CSS only.

```css
.tooltip {
	position: relative;
	display: inline-block;
	cursor: pointer;
}

.tooltip::after {
	content: 'Tooltip';
	position: absolute;
	bottom: 100%;
	left: 50%;
	transform: translateX(-50%);
	background: black;
	color: white;
	padding: 5px;
	border-radius: 5px;
	opacity: 0;
	transition: opacity 0.3s;
}

.tooltip:hover::after {
	opacity: 1;
}
```

📌 **Practice:** Implement a tooltip on a button.

---

## **5. Practice in Your GitHub Repository**

[View all exercises demo](demo/exercises.html)

### 🏗 **Exercise 1: Navigation Bar with Pseudo-Classes**

1. Create a `navigation.css` file and import it into your main CSS.
2. Apply `:hover`, `:focus`, and `:nth-child()` to highlight menu items.

### 🏗 **Exercise 2: Responsive Cards with Pseudo-Elements**

1. Create a `cards.css` file and import it into your main CSS.
2. Use `::before` and `::after` to add decorative details.

### 🏗 **Exercise 3: Dynamic Button with Animated Effects**

1. Create a `buttons.css` file and import it into your project.
2. Use `::before` to add an animation effect to the button.

---

## **6. Conclusion**

Pseudo-classes and pseudo-elements enable creating **interactive and attractive designs using CSS only**.

### **🔹 Key Points:**

✅ Pseudo-classes modify elements based on their state (`:hover`, `:focus`, `:nth-child()`).
✅ Pseudo-elements allow styling specific parts (`::before`, `::after`, `::selection`).
✅ Combining them enables creating **animations, tooltips, and UI enhancements**.

Now, apply these techniques in your **GitHub repositories**, experiment with different styles, and share your results. 🚀

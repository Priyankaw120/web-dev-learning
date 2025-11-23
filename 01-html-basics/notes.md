# HTML Basics — Notes

This folder contains my foundational learning for HTML: structure, semantics, forms, accessibility, and best practices.  
These notes are short, practical, and focused on real-world expectations.

---

## 1. What HTML Does
HTML defines the **structure** and **meaning** of a webpage.  
Browsers read HTML → build the **DOM** → CSS styles it → JavaScript adds behavior.

---

## 2. HTML Boilerplate (Know This Cold)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>My Page</title>
</head>
<body>
</body>
</html>

```
---

**Key points:**
- `lang` improves accessibility + SEO  
- `meta viewport` = mobile responsive  
- `charset="utf-8"` supports all characters  

---

## 3. Semantic HTML (Extremely Important)

Use tags that describe **meaning**, not just layout:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<aside>`
- `<footer>`

**Why use them?**
- Better accessibility  
- Better SEO  
- Cleaner DOM structure  

---

## 4. Links & Images — Best Practices

### Link example
```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit</a>
```
- `noopener` prevents security risks  
- Use meaningful link text (never “click here”)  

### Image example
```html
<img src="img/photo.jpg" alt="Sunset image" loading="lazy" />
```
- `alt` text is mandatory  
- `loading="lazy"` improves performance  

---

## 5. Forms — Clean & Accessible

```html
<form>
  <label for="email">Email</label>
  <input id="email" type="email" required />

  <label for="msg">Message</label>
  <textarea id="msg" required></textarea>

  <button type="submit">Send</button>
</form>
```

**Guidelines:**
- Always link labels to inputs with `for` + `id`
- Use correct input types (`email`, `tel`, `password`)
- Don’t rely only on placeholders

---

## 6. Accessibility Essentials

- Add meaningful `alt` text to every image  
- Follow heading hierarchy (h1 → h2 → h3)  
- Ensure the page works with keyboard navigation (Tab, Shift+Tab)  
- Prefer semantic tags instead of `<div>` soup  
- Buttons must have visible, readable text (not only icons)  
- Use ARIA attributes only when semantic HTML cannot express meaning  

---

## 7. Good HTML Practices

- Keep markup simple and minimal  
- Avoid inline CSS/JS — use external files  
- Use meaningful, consistent class names  
---
## 8. Mini-Project for This Section

### **simple-blog-v1**
A small one-page blog layout demonstrating:
- Semantic structure (`header`, `main`, `article`, `aside`, `footer`)  
- Accessible content  
- Clean readable markup  
- Beginner-friendly but production-style HTML foundation  

Find it in:  
`01-html-basics/mini-projects/simple-blog-v1/index.html`

---

- Keep your structure semantic  
- Add comments only when necessary  
- Avoid unnecessary wrappers or nested `<div>`s  

---

## 10. Helpful Resources

- **MDN HTML Guide:** https://developer.mozilla.org/en-US/docs/Web/HTML  
- **WebAIM (Accessibility):** https://webaim.org/techniques/  
- **Chrome Lighthouse (Audits):** Chrome DevTools → Lighthouse  
- **HTML Living Standard (reference):** https://html.spec.whatwg.org  

---



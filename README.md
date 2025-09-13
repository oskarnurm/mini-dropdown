# mini-dropdown

Mini dropdown with vanilla js and css

## Installation

```bash
npm install mini-dropdown
```

## This is the minimal structure the package expects:

```html
<div class="dropdown">
  <button class="dropdown-btn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
```

## Import CSS + init function in your entry file (e.g., main.js):

```js
import "mini-dropdown/styles.css";
import { initDropdown } from "mini-dropdown";

const dropdown = document.querySelector(".dropdown");
initDropdown(dropdown);
```

## Override CSS variables globally or per container:

```css
:root {
  --dd-bg: #1e293b;
  --dd-fg: #f1f5f9;
  --dd-hover: #334155;
  --dd-radius: 6px;
  --dd-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

| Variable         | Default                      | Description             |
| ---------------- | ---------------------------- | ----------------------- |
| `--dd-bg`        | `#fff`                       | Background color        |
| `--dd-fg`        | `#111`                       | Text color              |
| `--dd-hover`     | `#eee`                       | Hover background        |
| `--dd-radius`    | `8px`                        | Border radius           |
| `--dd-shadow`    | `0 6px 20px rgba(0,0,0,0.1)` | Box shadow              |
| `--dd-padding`   | `16px`                       | Button padding          |
| `--dd-padding-y` | `8px`                        | Vertical item padding   |
| `--dd-padding-x` | `10px`                       | Horizontal item padding |
| `--dd-font`      | `system-ui, sans-serif`      | Font family             |

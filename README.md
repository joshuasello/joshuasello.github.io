# Personal Academic Portfolio Site

Lightweight static portfolio for Joshua Sello, published with GitHub Pages.

## Local development

From the project root, start a simple local server and open the shown URL in your browser.

### Option 1: Python (no extra dependencies)

```bash
python3 -m http.server 8000
```

Then visit: `http://localhost:8000`

### Option 2: Node.js (if installed)

```bash
npx serve .
```

Then open the local URL printed in the terminal.

## Updating content

Most academic content lives in `assets/js/content.js`:

- Research themes are in the `research` array.
- Peer-reviewed work is in the `publications` array.
- Working papers and public drafts are in the `preprints` array.
- News items are in the `updates` array.

Profile text and contact links are in `index.html`, while visual styling lives in `assets/css/styles.css`.

## File structure

```text
.
├── index.html
├── assets
│   ├── css
│   │   └── styles.css
│   └── js
│       ├── content.js
│       └── main.js
├── CNAME
└── README.md
```

Adding a new publication or preprint is usually just a copy, paste, and edit inside `assets/js/content.js`.

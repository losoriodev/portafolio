# Portafolio — Luis Osorio

Astro 7 + Tailwind 4. Bilingüe (ES en `/`, EN en `/en/`). Tema oscuro/claro.

## Desarrollo

```sh
nvm use 22
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Dónde editar

- `src/data/profile.ts` — TODO el contenido (bio, experiencia, proyectos, skills, certificaciones). Busca los `TODO`.
- `src/i18n/ui.ts` — textos de interfaz (títulos, botones) en ambos idiomas.
- `src/styles/global.css` — paleta de colores (`:root` y `[data-theme="light"]`).
- `public/avatar.svg` — reemplázalo por tu foto (`public/avatar.png`) y actualiza `profile.avatar`.
- `astro.config.mjs` — cambia `site` por tu dominio.

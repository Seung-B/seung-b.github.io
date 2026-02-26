## Cursor Cloud specific instructions

This is a Jekyll-based academic portfolio website (Academic Pages template). There is one service: the Jekyll dev server.

### Running the site

```bash
bundle exec jekyll serve -l -H localhost --port 4000
```

Site is served at `http://localhost:4000/`. LiveReload is active on port 35729. Editing `_config.yml` requires a server restart; all other file changes are auto-reloaded.

### JS asset build (optional)

Only needed if modifying files under `assets/js/`:

```bash
npm run build:js
```

### Key notes

- Ruby gems are installed to `vendor/bundle` (configured via `bundle config set --local path 'vendor/bundle'`). This path is `.gitignore`-safe via Jekyll's exclude list.
- The `github-pages` gem pins Jekyll to v3.x; do not try to upgrade to Jekyll 4 without also changing the Gemfile.
- There are no automated test suites or linters configured in this repository. Validation is done by building the site (`bundle exec jekyll build`) and visually inspecting pages.
- Python scripts in `markdown_generator/` are optional content-generation utilities, not part of the build pipeline.

import { copyFile } from 'node:fs/promises'

// GitHub Pages has no SPA fallback, so unknown paths (e.g. /about on a hard
// refresh or direct link) would 404. Serving the app shell as 404.html lets
// the client router render the right page instead.
await copyFile('dist/index.html', 'dist/404.html')

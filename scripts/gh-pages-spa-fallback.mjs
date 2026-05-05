import { copyFileSync } from "node:fs";

/** GitHub Pages serves 404.html for unknown paths — copy SPA shell so /contact loads the app */
copyFileSync("dist/index.html", "dist/404.html");

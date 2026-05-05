/** URLs for files in `/public`; prefix Vite BASE_URL so GitHub Pages project paths work */
export function publicAsset(path: string): string {
  const normalized = path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${normalized}`;
}

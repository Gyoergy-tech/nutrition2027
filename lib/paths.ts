export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function path(url: string) {
  if (!url.startsWith("/")) {
    return url;
  }

  return `${basePath}${url}`;
}
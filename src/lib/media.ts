import fs from "node:fs";
import path from "node:path";

const MEDIA_DIR = path.join(process.cwd(), "public", "media");

function findFile(names: string[]): string | null {
  for (const name of names) {
    if (fs.existsSync(path.join(MEDIA_DIR, name))) return `/media/${name}`;
  }
  return null;
}

/**
 * Resolves the hero portrait at build time. Returning null when no file exists
 * lets the hero fall back to the agent visual instead of rendering a broken
 * image, so dropping a photo into /public/media is the only step required.
 */
export function getPortrait(): string | null {
  return findFile(["portrait.png", "portrait.webp", "portrait.jpg", "portrait.jpeg", "portrait.avif"]);
}

/**
 * Resolves a project demo by slug, so adding a video is a file drop rather than
 * a code change. An optional poster frame of the same name is picked up too.
 */
export function getDemo(slug: string): { src: string; poster?: string } | null {
  const src = findFile([`${slug}.mp4`, `${slug}.webm`]);
  if (!src) return null;

  const poster = findFile([`${slug}-poster.jpg`, `${slug}-poster.png`, `${slug}-poster.webp`]);
  return poster ? { src, poster } : { src };
}

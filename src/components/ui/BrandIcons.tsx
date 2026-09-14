/**
 * Lucide v1 removed brand marks, and the official logos are the only correct
 * way to render these. Two inline paths beat a second icon dependency.
 */

type Props = { size?: number; className?: string };

export function GithubIcon({ size = 15, className }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden className={className}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.4 7.4 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 15, className }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden className={className}>
      <path d="M3.6 1.5a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM2.2 5.9H5v8.6H2.2V5.9Zm4.6 0h2.7v1.17h.04c.37-.67 1.28-1.38 2.63-1.38 2.82 0 3.34 1.79 3.34 4.12v4.69h-2.79v-4.16c0-.99-.02-2.27-1.42-2.27-1.42 0-1.64 1.08-1.64 2.2v4.23H6.8V5.9Z" />
    </svg>
  );
}

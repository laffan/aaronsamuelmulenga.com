#!/usr/bin/env bash
set -euo pipefail

SITE_DIR="${1:-_site}"
SRC="$SITE_DIR/images"
DEST="$SITE_DIR/images/thumbs"
SIZE=400

find "$SRC" -maxdepth 1 -type f -name '*.webp' | while read -r f; do
  name=$(basename "$f")
  mkdir -p "$DEST"
  magick "$f" -resize "${SIZE}x${SIZE}>" -quality 75 "$DEST/$name"
done

for subdir in "$SRC"/exhibitions/*/; do
  [ -d "$subdir" ] || continue
  slug=$(basename "$subdir")
  outdir="$DEST/exhibitions/$slug"
  mkdir -p "$outdir"
  find "$subdir" -maxdepth 1 -type f -name '*.webp' | while read -r f; do
    name=$(basename "$f")
    magick "$f" -resize "${SIZE}x${SIZE}>" -quality 75 "$outdir/$name"
  done
done

echo "Thumbnails generated in $DEST"

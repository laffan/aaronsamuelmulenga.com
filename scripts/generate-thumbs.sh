#!/usr/bin/env bash
set -euo pipefail

SITE_DIR="${1:-_site}"
SRC="$SITE_DIR/images"
DEST="$SITE_DIR/images/thumbs"
SIZE=800

find "$SRC" -maxdepth 1 -type f -name '*.webp' | while read -r f; do
  name=$(basename "$f")
  mkdir -p "$DEST"
  convert "$f" -resize "${SIZE}x${SIZE}>" -quality 75 "$DEST/$name"
done

# Every subfolder (exhibitions/<slug>, home, ...) except thumbs itself.
find "$SRC" -mindepth 1 -type d -not -path "$DEST" -not -path "$DEST/*" | while read -r subdir; do
  rel="${subdir#"$SRC"/}"
  outdir="$DEST/$rel"
  find "$subdir" -maxdepth 1 -type f -name '*.webp' | while read -r f; do
    mkdir -p "$outdir"
    name=$(basename "$f")
    convert "$f" -resize "${SIZE}x${SIZE}>" -quality 75 "$outdir/$name"
  done
done

echo "Thumbnails generated in $DEST"

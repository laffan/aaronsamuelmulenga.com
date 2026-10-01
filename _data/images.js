const fs = require("fs");
const path = require("path");

const IMAGES_DIR = path.join(__dirname, "..", "public", "images");
const EXTENSIONS = new Set([".webp", ".jpg", ".jpeg", ".png", ".gif", ".svg"]);

function walk(dir, baseDir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "thumbs") continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walk(fullPath, baseDir));
    } else if (EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      const file = path.relative(baseDir, fullPath).split(path.sep).join("/");
      results.push({
        file,
        name: path.basename(file, path.extname(file)),
        group: path.dirname(file) === "." ? "" : path.dirname(file),
        src: "/images/" + file,
        thumb: "/images/thumbs/" + file,
      });
    }
  }
  return results;
}

module.exports = () => {
  const images = walk(IMAGES_DIR, IMAGES_DIR);
  images.sort((a, b) => a.group.localeCompare(b.group) || a.name.localeCompare(b.name));
  return images;
};

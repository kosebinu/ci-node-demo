const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "..", "dist");
const outFile = path.join(distDir, "build-info.txt");

if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);

const content =
  `Build generated at: ${new Date().toISOString()}\n` +
  `Commit SHA (if provided by CI): ${process.env.GITHUB_SHA || "local"}\n`;

fs.writeFileSync(outFile, content, "utf8");

console.log("✅ Build output created:", outFile);
console.log(content);

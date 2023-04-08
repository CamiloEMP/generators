const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  installDependencies() {
    this.spawnCommandSync("pnpm", [
      "add",
      "-D",
      "tailwindcss",
      "postcss",
      "autoprefixer",
    ]);
  }

  tailwind() {
    this.fs.copy(this.templatePath("tailwind.config.js"), this.destinationPath("tailwind.config.js"));

    this.fs.copy(this.templatePath("postcss.config.cjs"), this.destinationPath("postcss.config.cjs"));
  }

  css() {
    this.fs.delete(this.destinationPath("src/index.css"));
    this.fs.copy(this.templatePath("index.css"), this.destinationPath("src/index.css"));
  }
}
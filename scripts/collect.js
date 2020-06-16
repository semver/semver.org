const { promises: fs } = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const yaml = require("js-yaml");
const semver = require('semver')

const REPO_LINK = "https://github.com/semver/semver.git";
const ORIGINAL_DIR = path.resolve(__dirname, "semver");
const ORIGINAL_FILE = path.resolve(ORIGINAL_DIR, "semver.md");
const TARGET_DIR = path.resolve(__dirname, "../spec");
const CONFIG_FILE = path.resolve(__dirname, "../_config.yml");

const cloneRepository = (repoLink, targetPath) =>
  execSync(`git clone ${repoLink}`, {
    stdio: [0, 1, 2],
    cwd: path.resolve(__dirname, targetPath || ""),
  });

const parseVersion = async (filePath) => {
  const content = await fs.readFile(filePath, "utf8");
  return content.match(/Semantic Versioning (.+)\n/)[1];
};

const checkOrUpdateYaml = async (originalVersion) => {
  const yamlConfig = await fs.readFile(CONFIG_FILE);
  const config = yaml.safeLoad(yamlConfig);
  if (!config.versions.includes(originalVersion)) {
    config.versions = [originalVersion, ...config.versions];
  }
  if (semver.gt(originalVersion, config.current_version)) {
    config.current_version = originalVersion;
  }
  const updatedYamlConfig = yaml.safeDump(config, { lineWidth: 120 });
  return fs.writeFile(CONFIG_FILE, updatedYamlConfig);
};

const collect = async () => {
  cloneRepository(REPO_LINK);
  const version = await parseVersion(ORIGINAL_FILE);
  await fs.copyFile(ORIGINAL_FILE, path.resolve(TARGET_DIR, `v${version}.md`));
  await fs.rmdir(ORIGINAL_DIR, { recursive: true });
  await checkOrUpdateYaml(version);
};

collect();

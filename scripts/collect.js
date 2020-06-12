const { promises: fs } = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const REPO_LINK = "https://github.com/semver/semver.git";
const ORIGINAL_DIR = path.resolve(__dirname, "semver");
const ORIGINAL_FILE = path.resolve(ORIGINAL_DIR, "semver.md");
const TARGET_DIR = path.resolve(__dirname, "../spec");

const cloneRepository = (repoLink, targetPath) =>
  execSync(`git clone ${repoLink}`, {
    stdio: [0, 1, 2],
    cwd: path.resolve(__dirname, targetPath || ""),
  });

const parseVersion = async (filePath) => {
  const content = await fs.readFile(filePath, "utf8");
  return content.match(/Semantic Versioning (.+)\n/)[1];
};

const collect = async () => {
  await cloneRepository(REPO_LINK);
  const version = await parseVersion(ORIGINAL_FILE);
  await fs.copyFile(ORIGINAL_FILE, path.resolve(TARGET_DIR, `v${version}.md`));
  await fs.rmdir(ORIGINAL_DIR, { recursive: true });
};

collect();

// const download = require("download");
// const walk = require("walk-sync");
// const { difference } = require("lodash");

// const getVersions = require("./getVersions");
// const { supportedVersions } = require("../package.json");

// const contentDir = path.join(__dirname, "content");
// const originalSourceLocale = "en-US";

// collect();

// async function collect() {
//   const nodeVersions = await getVersions(supportedVersions);
//   for (const major in nodeVersions) {
//     const version = nodeVersions[major];
//     await getDocsForNodeVersion(major, version).catch((err) => {
//       console.error(`problem fetching version: ${version}`);
//       console.error(err);
//     });
//   }
// }

// async function getDocsForNodeVersion(major, version) {
//   const docDir = path.join(contentDir, major, originalSourceLocale);
//   const downloadOptions = {
//     extract: true,
//     strip: 1,
//     filter: (file) =>
//       path.extname(file.path) === ".md" && file.path.startsWith("doc"),
//   };

//   // clean out english translations to ensure old files are removed
//   fs.remove(docDir);

//   // download repo bundle and extract
//   const tarballUrl = `https://github.com/semver/semver/archive/${version}.tar.gz`;
//   console.log("downloading", tarballUrl);
//   await download(tarballUrl, docDir, downloadOptions);
//   await cleanupTranslations(major);
// }

// const cleanupTranslations = async (version) => {
//   const languages = fs.readdirSync(path.join(contentDir, version));
//   const originalPath = path.join(
//     contentDir,
//     version,
//     originalSourceLocale,
//     "doc"
//   );
//   const originalFiles = walk(originalPath, { directories: false });
//   await Promise.all(
//     languages.map((language) => {
//       const translatedPath = path.join(contentDir, version, language, "doc");
//       const translatedFiles = walk(translatedPath, {
//         directories: false,
//       });
//       const translatedOriginDiff = difference(translatedFiles, originalFiles);
//       return Promise.all(
//         translatedOriginDiff.map((filePath) => {
//           const fileToRemovePath = path.join(translatedPath, filePath);
//           console.log("Removed:", fileToRemovePath);
//           return fs.remove(fileToRemovePath);
//         })
//       );
//     })
//   );
// };

const fs = require('fs');
const path = require('path');

// The main directory where all image folders are stored (safezone)
const baseDir = path.join(__dirname, 'project_cs/safezone');
const manifestFile = path.join(__dirname, 'manifest.json');

// Function to recursively get all .jpg files grouped by their folder names
function getJpgFilesGroupedByFolder(dir) {
  const manifest = {};

  // Read all items in the current directory
  const folders = fs.readdirSync(dir);

  // Loop through each folder
  folders.forEach(folder => {
    const fullFolderPath = path.join(dir, folder);
    const stat = fs.statSync(fullFolderPath);

    if (stat.isDirectory()) {
      // Get all .jpg files in the current folder
      const jpgFiles = fs.readdirSync(fullFolderPath).filter(file => file.endsWith('.jpg'));

      // If there are jpg files, add them under the folder's name
      if (jpgFiles.length > 0) {
        manifest[folder] = jpgFiles; // Add the list of images to this folder key
      }
    }
  });

  return manifest;
}

// Get all .jpg files grouped by folder name from the baseDir
const jpgFilesByFolder = getJpgFilesGroupedByFolder(baseDir);

// Write the manifest.json
fs.writeFileSync(manifestFile, JSON.stringify(jpgFilesByFolder, null, 2));

console.log('manifest.json updated successfully!');
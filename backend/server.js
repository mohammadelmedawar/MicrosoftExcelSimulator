const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Base URL for GitHub Pages
const BASE_URL = 'https://mohammadelmedawar.github.io/MicrosoftExcelSimulator';

// Directory containing lesson folders
const lessonsDirectory = path.join(__dirname, '../MicrosoftExcelSimulator');

// Read folder names dynamically
let folderMapping = {};

try {
  const folders = fs.readdirSync(lessonsDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map((dirent, index) => ({ id: index + 1, name: dirent.name }));

  folderMapping = Object.fromEntries(folders.map(folder => [folder.id, folder.name]));
} catch (error) {
  console.error('Error reading lesson folders:', error);
}

app.get('/lesson/:id', (req, res) => {
  const lessonId = parseInt(req.params.id);

  // Validate lessonId
  if (isNaN(lessonId) || !folderMapping[lessonId]) {
    return res.status(404).send('Lesson does not exist');
  }

  // Get folder name from mapping
  const folderName = folderMapping[lessonId];

  // Construct the URL
  const lessonURL = `${BASE_URL}/${folderName}/story.html`;

  // Redirect to the constructed URL
  res.redirect(lessonURL);
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

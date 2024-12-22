const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

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

  // Get the folder name
  const folderName = folderMapping[lessonId];

  // Path to the story.html file
  const filePath = path.join(lessonsDirectory, folderName, 'story.html');

  // Serve the file
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(404).send('File not found');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

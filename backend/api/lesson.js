const express = require('express');
const path = require('path');
const app = express();

// Путь к папке с уроками
const lessonsDirectory = path.join(__dirname, '../../MicrosoftExcelSimulator');

// Обработка запроса на урок
app.get('/lesson/:id', (req, res) => {
  const lessonId = parseInt(req.params.id);

  if (isNaN(lessonId) || lessonId < 1 || lessonId > 285) {
    return res.status(404).send('Урок не существует');
  }

  const folderName = `lesson${lessonId}`;
  const filePath = path.join(lessonsDirectory, folderName, 'story.html');

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(404).send('Файл не найден');
    }
  });
});

// Экспортируем для Vercel
module.exports = app;

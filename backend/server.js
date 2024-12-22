const express = require('express');
const app = express();
const PORT = 3000;

const BASE_URl = 'https://mohammadelmedawar.github.io/MicrosoftExcelSimulator';

app.get('/lesson/:id', (req, res) => {
  const lessonId = req.params.id;

  if(isNaN(lessonId) || lessonId < 1 || lessonId > 284) {
    return res.status(404).send('Lesson dose not exist');
  }
  
  const lessonURL = `${BASE_URL}/lesson${lessonId}/story.html`;
  res.redirect(lessonURL);
});

app.listen(PORT, () => {
  console.log(`Sever started in http://localhost:${PORT}`);
});
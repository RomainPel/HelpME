const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT_NO || 3000;


app.use(express.static('public'));

// Définir le moteur de vues
app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/aaaa', (req, res) => {
  res.render('index', { title: 'Bienvenue sur HelpMe' });
});


app.get('/', (req, res) => {
  res.render('liste-tickets');
});


app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

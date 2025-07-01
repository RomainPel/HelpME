const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT_NO || 3000;

// Définir le moteur de vues
app.set('view engine', 'ejs');
app.set('views', './views');

// Route de test
app.get('/', (req, res) => {
  res.render('index', { title: 'Bienvenue sur HelpMe' });
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

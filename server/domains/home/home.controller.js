// Actions methods
// GET "/"
// GET "/index"
const home = (req, res) => {
  const iconSet = ['⭐', '🤖', '🍉'];
  const icon = iconSet[Math.floor(Math.random() * 3)];
  res.render('index', { title: 'DWPCII-2023A', icon });
};

// Get "/index"
const about = (req, res) => {
  res.send('🪓 Under construction: get /about 🪓');
};

// Controlador Home
export default {
  home,
  about,
};

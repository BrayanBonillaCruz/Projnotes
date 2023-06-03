// Actions methods
// GET "/project"
const showDashboard = (req, res) => {
  res.send('🪓 Under construction: get /project 🪓');
};

// GET "/project/add"
const add = (req, res) => {
  res.render('project/addView');
};

// POST "project/add"
const addPost = (req, res) => {
  // Extrayendo la informacion
  // del formulario
  const { name, description } = req.body;
  // Regresando al cliente la informaciónrecabada
  res.status(200).json({
    name,
    description,
  });
};

// Controlador user
export default {
  // Action methods
  showDashboard,
  add,
  addPost,
};

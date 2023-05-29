// Actions methods
// GET "/project"
const showDashboard = (req, res) => {
  res.send('🪓 Under construction: get /project 🪓');
};

// GET "/project/add"
const add = (req, res) => {
  res.render('project/addView');
};

// Controlador user
export default {
  // Action methods
  showDashboard,
  add,
};

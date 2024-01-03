const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('public')); // Serve static files from the 'public' directory

app.listen(port, () => {
  console.log(`Server started on port ${port}`); // Use template literal for cleaner formatting
});
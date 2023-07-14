const app = require('express')();
const cookieParser = require('cookie-parser');
const authMiddleware = require('./middlewares/authMiddleware');

const PORT  = require('./config/config').PORT;

require('./config/express')(app);
app.use(cookieParser());
app.use(authMiddleware.authentication);
require('./config/routes')(app);
require('./config/database')();

app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
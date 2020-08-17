import UserController from './UserController'
import WorkshopController from './WorkshopController'

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <title>A JavaScript project</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <h1>A JavaScript project</h1>
</body>
</html>`;

function Controller(app) {
  console.log("app")
  app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200).send(html);
  });

  UserController(app)
  WorkshopController(app)
}

export default Controller
//so what we do is that the main is app.js in which when we use app.use the section will act as an middlware for handling the request then the loginc for the request will be handled by the controller, complex but makes the code neat and easy to read

export const wow = (req, res) => {
      res.send("Hello Wworld");
}
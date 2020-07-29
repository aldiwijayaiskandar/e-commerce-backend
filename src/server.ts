import express from "express";
import path from "path";
import routes from "./routes";
import middlewares from "./middleware/middlewares";

const app: express.Application = express();

app.use(
  "/admin",
  express.static(path.join(__dirname, "../", "web_admin/build_admin"))
);

app.get("/admin/*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../", "web_admin/build_admin", "index.html")
  );
});

app.use("/privacy", express.static(path.join(__dirname, "../", "privacy")));

app.get("/privacy", express.static(path.join(__dirname, "../", "privacy")));

app.use(
  "/",
  express.static(path.join(__dirname, "../", "web_main/build_main"))
);

middlewares(app, express);

routes(app);

app.listen(8080, () => {
  console.log("Running at port 8080");
});

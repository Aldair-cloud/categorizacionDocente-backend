app.use(express.json());
app.use(cors());

app.use(morgan("dev"));

app.get("/", function (req, res, next) {
  res.send("Bienvenido a Node JS...!");
});

app.use("");

export default app;

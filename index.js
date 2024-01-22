import express from "express";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js"
import AuthRoute from "./routes/AuthRoute.js"
dotenv.config()

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db
})

//Untuk mengenerate tabel otomatis
// (async()=> {
//   await db.sync();
// })();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: 'auto'
    }
}));
app.use(cors({
  //Agar frontend bisa mengirimkan request beserta cookie dengan
  //menyertakan credentials nya 
  credentials: true,
  //Ini adalah domain yang kita izinkan untuk dapat mengakses API kita
  origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);

// store.sync();

app.listen(process.env.APP_PORT, () => {
    console.log("Server up and running...")
});
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

const flowName = process.env.FLOW_NAME || 'DefaultOAuthFlow';
console.log(`Iniciando el flujo de autenticación: ${flowName}`);

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
  },
  async (accessToken, refreshToken, profile, done) => {
    //verificar si el usuario ya existe en la base de datos.
    //buscar al usuario en la base de datos utilizando `profile.id`
    
    const usuario = await findOrCreateUser(profile); // Una función para buscar o crear un usuario en tu DB
    done(null, usuario); // Pasamos el usuario a Passport
  }
));

// Serializar y deserializar el usuario para la sesión
passport.serializeUser((user, done) => {
  done(null, user.id); // Usamos el id del usuario para la sesión
});

passport.deserializeUser(async (id, done) => {
  const user = await getUserById(id); // Función para obtener el usuario de la DB
  done(null, user);
});

// Función para buscar o crear el usuario en la base de datos
async function findOrCreateUser(profile) {
  // Aquí deberías conectar con tu base de datos y buscar un usuario con el profile.id
  let user = await Usuarios.findOne({ oauth_id: profile.id });
  
  if (!user) {
      user = await Usuarios.create({
          nombre: profile.displayName,
          email: profile.emails[0].value,
          oauth_provider: 'google',
          oauth_id: profile.id
      });
  }
  return user;
}

// Función para buscar un usuario por su ID
async function getUserById(id) {
  return await Usuarios.findByPk(id);
}

module.exports = passport;
const User = require('../models/User');
const jwtUtils = require('../utils/jwtUtils');

exports.authenticateUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error('Usuario no encontrado');
  
  const isValid = await user.validPassword(password);
  if (!isValid) throw new Error('Credenciales inválidas');
  
  return jwtUtils.generateToken({
    id: user.id_usuario,
    email: user.email,
    rol: user.rol,
    nombre: user.nombre,
    apellido: user.apellido
  });
};

exports.registerUser = async (userData) => {
  if (await User.findOne({ where: { email: userData.email } })) {
    throw new Error('El email ya está registrado');
  }
  
  // Verificar que sean solo campos validos de la tabla
  const allowedFields = [
    'nombre', 'apellido', 'email', 'password', 
    'rol', 'tipo_referencia', 'id_referencia'
  ];
  
  const filteredData = {};
  allowedFields.forEach(field => {
    if (userData[field] !== undefined) {
      filteredData[field] = userData[field];
    }
  });
  
  return await User.create(filteredData);
};
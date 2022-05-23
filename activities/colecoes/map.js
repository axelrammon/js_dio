function getAdmins(map) {

  let admins = [];

  for ([key, value] of map) {
    if (value === 'Admin') {
      admins.push(key);
    }
  }

  return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Axel', 'Admin');
usuarios.set('Natália', 'Admin');
usuarios.set('Jorge', 'User');

console.log(getAdmins(usuarios));
function getAdmins( map){
    let admins = [];
    
    for([key, value] of map){
        if(value =='admin') {
            admins.push(key);
        }
    }
    return admins;
}
const usuarios = new Map();

usuarios.set('Hallyson', 'Carinha do T.I');
usuarios.set('Barbara', 'Admin');
usuarios.set('Barbara', 'Admin');
usuarios.set('Sulamita', 'User');

console.log(getAdmins(usuarios));


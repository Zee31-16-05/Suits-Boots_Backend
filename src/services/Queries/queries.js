module.exports = {

    // User Table queries 
    createUser: 'INSERT INTO user (id, userName, email, phone, password) VALUES (?, ?, ?, ?, ?)',
    readUsers: 'SELECT * FROM users',
    updateUser: 'UPDATE users SET name = ?, email = ? WHERE id = ?',
    deleteUser: 'DELETE FROM users WHERE id = ?',

};

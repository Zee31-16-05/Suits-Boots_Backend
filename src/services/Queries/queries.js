module.exports = {

    // User Table queries 
    // createUser: 'INSERT INTO users (id, username, emailId, phone, password) VALUES (?, ?, ?, ?, ?)',
    readUsers: 'SELECT * FROM users',
    updateUser: 'UPDATE users SET name = ?, email = ? WHERE id = ?',
    deleteUser: 'DELETE FROM users WHERE id = ?',

};

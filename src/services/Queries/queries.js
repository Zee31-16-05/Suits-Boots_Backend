module.exports = {

    // User Table queries 
    createUser: 'INSERT INTO user (id, userName, email, phone, password) VALUES (?, ?, ?, ?, ?)',
    readUsers: 'SELECT * FROM user',
    updateUser:(updates) => {
        const setClause = Object.keys(updates).map((field) => `${field} = ?`).join(', ');
        return `UPDATE user SET ${setClause} WHERE id = ?`;
    },
    deleteUser: 'DELETE FROM user WHERE id = ?',
    getUserById: `SELECT * FROM user WHERE id = ?`,

};

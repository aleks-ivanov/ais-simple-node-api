const express = require('express');
const port = process.env.PORT || 8000;
const app = express();

let profile = {
	name: 'admin',
	email: 'admin@admin.com',
	password: '123456'
};

app.get('/', (req, res) => {
    res.send(profile);
});

app.listen(port, () => { console.log('Our App Is Up And Running!'); });

module.exports = app
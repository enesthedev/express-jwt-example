const express = require("express");
const chalk = require("chalk");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
const secret = "jwt-secret";

const users = [
    {
        username: 'Enes',
        password: 'pwdadmin',
        role: 'admin'
    }, {
        username: 'Armut',
        password: 'pwdmember',
        role: 'member'
    }
];

app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        const accessToken = jwt.sign({ username: user.username,  role: user.role }, secret);

        res.json({
            accessToken
        });
    } else {
        res.send('Username or password incorrect');
    }
});

app.listen(3000, () => {
    process.stdout.write("\033c");
    console.log(
        chalk.yellow.bold("Express JWT Example\n") +
        chalk.white("Port: ") +
        chalk.white.bold("3000")
    );
});

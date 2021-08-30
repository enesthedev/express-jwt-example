const express = require("express")
const bodyparser = require("body-parser")
const jwt = require("jsonwebtoken")

const app = express()
const secret = "jwt-secret"

const users = [
    {
        username: 'Enes',
        password: 'pwdadmin',
        role: 'admin'
    },
    {
        username: 'Armut',
        password: 'pwdmember',
        role: 'member'
    }
]

app.use(bodyparser.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.status(200)
    .json({
        message: "Create post request with username and password fields for generate JWT access-token."
    })
)

app.post('/verify', (req, res) => {
    const { accessToken } = req.body

    try {
        const credentials = jwt.verify(accessToken, secret)
        const user = users.find(u => {
                return u.username === credentials.username
            }
        )
        res.status(200)
            .json(user)
    } catch (e) {
        res.status(401)
            .json( { message: "JWT does not verified" })
    }
})

app.post('/login', (req, res) => {
    const { username, password } = req.body

    const user = users.find(u => {
            return u.username === username && u.password === password
        }
    )

    try {
        if (user) {
            res.status(200)
                .json({ accessToken: jwt.sign({ username: user.username }, secret) })
        } else {
            throw new Error("password.wrong")
        }
    } catch (e) {
        res.status(401)
            .json({ message: "Username or password incorrect" })
    }
})

app.listen(3000, () => {
    process.stdout.write("\033c")
    console.log("Express JWT Example <www.github.com/enesbayrktar/express-jwt-example>")
})

const Auth = require('../services/authService');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const AuthController = () => {

    // login the user.
    const loginUser = async (req, res, next) => {

        const user = await User.findOne({where: { email: req.body.email }});
        if (!user) return res.status(400).send("Email or password incorrect");

        const validPass = await bcrypt.compare(req.body.password, user.password);
        if (!validPass) return res.status(400).send("Email or password incorrect");

        // create and assign token
        const token = jwt.sign({uuid: user.uuid}, process.env.TOKEN_SECRET);

        res.header('auth-token', token).send(token);
    };


    // register the user.
    const registerUser = async (req, res, next) => {
        const correctPassword = await req.body.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/i);
        if (!correctPassword) return res.status(400).send('password must have a minimum eight and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character');

        const salt = await bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        });

        try {
            const savedUser = await Auth.loginUser(user);
            if (savedUser != null) {
                return res.status(200);
            }
        }
        catch (e) {
            res.status(400).send(e);
        }
    };
    return {
        login: loginUser,
        register: registerUser,
    }
}
export default AuthController();

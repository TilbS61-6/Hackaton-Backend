const AuthService = () => {
     exports.registerUser = async (Usr) => {
            return await Usr.save();
    }
    exports.loginUser = async (Usr) => {

    }
}
module.exports = AuthService;

const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports.signUp = function(request, response){
    return response.render('sign_up.ejs',{
        title: 'Sign Up'
    });
};

module.exports.signIn = function(request, response){
    return response.render('sign_in.ejs',{
        title: 'Sign In'
    });
};

// user sign in
module.exports.userSession = async (request, response)=>{

    try{
        let user = await User.findOne({email: request.body.email});
        console.log(user.password);
        let passValid = await bcrypt.compare(request.body.password, user.password);
        
        if(!passValid){
            return response.redirect('/user/sign_in');
        }
        return response.render('landingPage.ejs',{
            title: 'User Session'
        });

    }catch(e){
        console.log(e);
        return response.redirect('back');
    }
}

// create user sign up
module.exports.create = (req, res) => {
    console.log(req.body);
    if(req.body.password != req.body.Confirm_password){
        return res.redirect('back');
    }
    let hashPassword = bcrypt.hashSync(req.body.password, 10);
    User.findOne({email: req.body.email},(error,user)=>{
        if(error){
            console.log(error);
            return;
        }
        if(!user){
            User.create({
                email: req.body.email,
                name: req.body.name,
                password: hashPassword
            }, (error)=>{
                if(error){
                    console.log(error,'ksdlfsdlkfsldfjls');
                }
                console.log('created successfully');
                return res.render('sign_in.ejs',{
                    title: 'User Session'
                });
            })
        }
    });
}
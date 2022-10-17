const userModel = require('../models/user_models')
const bcrybt = require("bcrypt")
const Jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET
const R_JWT_SECRET = process.env.R_JWT_SECRET
let refreshtokns = []

const nodemailer=require("nodemailer")

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "13fc8ab34e2e80",
      pass: "02219f17de331b"
    }
  });


//generate access token
const generateAccessToken = function (user) {
    return Jwt.sign({
        id: user.id, password: user.password
    }, "JWT_SECRET", { expiresIn: "10m" })
}

//generate refreshtoken

const generateRefreshtoken = function (user) {
    return Jwt.sign({
        id: user.id, login: user.login
    }, "R_JWT_SECRET", { expiresIn: "20m" })

}

module.exports = {

    register:function(req,res){
        const user= new userModel(req.body)
        user.save(req.body, function (err, item) {
            if (err) {
                res.status(404).json({ success: false, message: "created user faide" +err, data: null })     
            } else {
                transport.sendMail({
                    from: "myapp@gmail.com",
                    to: item.email,
                    cc: 'ferchichirim69@gmail.com',
                    bcc: "Ferchichiabir12@gmail.com",
                    subject: "Welcome " ,
                    text: "bonjour mr ",
                    html: `<!DOCTYPE html>
                    <html>
                    <head>
                      <meta charset="utf-8">
                      <meta http-equiv="x-ua-compatible" content="ie=edge">
                      <title>Welcome Email</title>
                    </head>
                    <body>
                      <h2>Hello! </h2>
                      <p>We're glad to have you on board at ${item.email}. </p>
                      <p>We're glad to have you on board at it gate</p>
                    
                    </body>
                    </html>`,
                }, function(err, info) {
                    if (err) {
                        console.log("error:", err)
                    } else {
                        console.log("Email Send successufly:", info + reponse)
                    }
                })

                res.status(201).json({ success: true, message: "user created successfly", data: item })
            }
        })

    },
    login: function(req, res) {
		userModel.findOne({ email: req.body.email }, function(err, user) {
			if (err) {
				res.status(406).json({ success: false, message: 'err login', data: null });
			} else {
				if (user != null) {
					// fama item ma3naha fama email s7i7  bich nthabtou m3a l password

					if (bcrybt.compareSync(req.body.password, user.password)) {

						const AccessToken = generateAccessToken(user)
						const RefreshAccessToken = generateRefreshtoken(user)
						//refreshtoken 7othouli f tableau refreshtokens
						refreshtokns.push(RefreshAccessToken)




                     // accesToken ma3naha bich iraja3li m3a kol login token
						res.status(201).json({ success: true, message: 'hello dear',data:user,AccessToken,RefreshAccessToken });
					} else {
						res.status(406).json({ success: true, message: 'incorrect password', data: null });
					}
					// l email w password mich m tab9in 
				} else {
					res.status(406).json({ success: false, message: 'incorrect email', data: null });
				}
			}
		});
	},
    refreshtoken: function (req, res, next) {

        //take the refresh token from user
        const refreshToken = req.body.token
        // send error if there is not token or its invalid

        if (!refreshToken) {

            return res.status(401).json("you are not authenticated")
        }
        if (!refreshtokns.includes(refreshToken)) {
            return res.status(403).json("refresh token is not valid")
        }

        Jwt.verify(refreshToken, "R_JWT_SECRET", function (err, user) {

            err && console.log(err)

            // bech ifas5ha mel tableau
            refreshtokns = refreshtokns.filter((token) => token !== refreshToken)

            const newAccessToken = generateAccessToken(user)

            const newrefreshToken = generateRefreshtoken(user)

            refreshtokns.push(newrefreshToken)

            res.status(200).json({ AccessToken:newAccessToken,refreshToken:newrefreshToken })

        })

    },
    lagout: function (req, res) {
        const refreshToken = req.body.token
        refreshtokns = refreshtokns.filter((token) => token !== refreshToken)
        res.status(200).json("you logged out successufly")
    },

getAll: function (req, res) {
    userModel.find(function (err, items) {
        if (err) {
            res.status(406).json({ success: false, message: "cannot got all users ", data: null })
            console.log(err)
        } else {
            res.status(201).json({ success: true, message: "list of users", data: items })
        }
    })
}, 
getID: function (req, res) {
    const id =req.params.id;
    userModel.findById(id, function (err, item) {
        if (err) {
            res.status(406).json({ success: false, message: "failed to get enseignant by id", data: null })
        } else {
            res.status(201).json({ success: true, message: "enseignant founded", data: item })
        }
    })
},
update: function (req, res) {
    userModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, item) {
        if (err) {
            res.status(406).json({ success: false, message: "failed to update user", data: null })
        } else {
            res.status(200).json({ success: true, message: "User update successfuly", data: item })
        }
    })
},
delete: function (req, res) {
    userModel.findByIdAndDelete(req.params.id, function (err, item) {
        if (err) {
            res.status(406).json({ success: false, message: "failed to deleted user", data: null })
        } else {
            res.status(201).json({ success: true, message: "user deleted successfuly", data: item })
        }
    })
}

}        

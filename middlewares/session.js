const mid = (req, res, next) => {
    //jika ada user langsung next()
    // console.log(req.session)
    if(req.session.user) {
        console.log(req.session.user)
        next()
    } else {
        //jika tidak maka diarahkan ke home
        res.redirect('/home?errors=You must login first')
    }
}

module.exports = mid
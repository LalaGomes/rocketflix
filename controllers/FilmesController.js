const FilmesController = {
    index: (req,res)=>{
        res.render('index.ejs')
    },
    filme: (req,res)=>{
        res.render('filme.ejs')
    }
}


module.exports = FilmesController;
import express from 'express'
const router = express.Router()

router.get('/films', async (req, res) => {
    try{
        res.send("Films")
    }catch(e){
        res.send(e)
    }
    
})

module.exports = router
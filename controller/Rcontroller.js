const Shantidetails= require("../modal/Modal")

const Shanti_all= async(req,res)=>
    {
        try{
            const shanti=await Shantidetails.find()
            res.status(200).json(shanti)
        }
        catch(err){
            res.status(500).json({
                message: err.message || "Some error occurred while retrieving"
            })
        }
    }
    const Shanti_create= async (req, res) => {
        try{
            const shanti=await Shantidetails.create(req.body);
            res.status(200).json(shanti)
        }
        catch(err){
            res.status(500).json({
                message: err.message || "Some error occurred while retrieving"
            })
        }
    
    }
    const Shanti_post = async (req, res) => {
        try {
          const contact = await Shantidetails(req.body);
          await contact.save();
          res.status(201).json({ message: 'Your message has been sent successfully!' });
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      };

    module.exports=
    {
        Shanti_all,
       Shanti_create,
       Shanti_post
    }
import Contact from '../Model/ContactModel.js'

export const sendMessage = async(req, res)=>{
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            })
        }

        if(!email.includes("@")){
            return res.json({
            message:"Invalid Email"
        })
        }
        
         const contact = await Contact.create({
            name,
            email,
            password
        })

         return res.status(201).json({
            message: "Message sent successfully",
            success: true,
            contact
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            message: "Error sending message",
            success: false
        })
    }
}

export const getMessage = async(req, res)=> {
    try {
        const contact = await Contact.find()
        return res.status(200).json({
            message: "Data Found",
            success: true,
            contact
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            message: "Error getting message",
            success: false
        })
    }
}

export const deleteMessage = async(req, res) => {
    try {
        const deletedData = await Contact.findByIdAndDelete(req.params.id)

        if (!deletedData) {
            return res.status(404).json({
                message: "Data not found",
                success: false
            })
        }

        return res.status(200).json({
            message: "Data Deleted",
            success: true
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            message: "Error deleting data",
            success: false
        })
    }
}
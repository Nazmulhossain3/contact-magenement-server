const { Contacts } = require("./contact.model")


const createContact = async(req,res)=> {
    try {
        const newContact = new Contacts(req.body)
        const result = await newContact.save()
        res.status(200).json({
            result
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}


const getAllContract = async(req,res)=> {
    try {
        const result = await Contacts.find()
        res.status(500).json({
            result
        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}


const updateContact = async (req, res) => {
    const { id } = req.params;

    try {
        // Use findByIdAndUpdate to update the contact
        const updatedContact = await Contacts.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!updatedContact) {
            return res.status(404).json({
                message: "Contact not found",
            });
        }

        res.status(200).json({
            message: "Contact updated successfully",
            result: updatedContact,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};





module.exports = {
    createContact,
    getAllContract,
    updateContact
}
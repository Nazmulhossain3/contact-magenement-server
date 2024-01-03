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
        res.status(200).json({
            result
        })
    } catch (error) {
        res.status(500).json({
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


const deleteContact = async (req, res) => {
    const { id } = req.params;

    try {
        // Use findByIdAndDelete to find and delete the contact
        const deletedContact = await Contacts.findByIdAndDelete(id);

        if (!deletedContact) {
            return res.status(404).json({
                message: "Contact not found",
            });
        }

        res.status(200).json({
            message: "Contact deleted successfully",
            result: deletedContact,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};




const makeFavourite = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedContact = await Contacts.findByIdAndUpdate(
            id,
            { isFavorite: req.body.isFavorite },
            { new: true, runValidators: true }
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
    updateContact,
    deleteContact,
    makeFavourite
}
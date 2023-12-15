const mongoose = require('mongoose');
const Guest = require('./guest.model');


const getAllGuests = async (req, res) => {
  try {
    const guests = await Guest.find();
    res.json(guests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getGuestById = async (req, res) => {
  const { id } = req.params;
  try {
    // This is to Find a guest by the specified ID
    const guest = await Guest.findOne({ guestId: id });

    // To Check if the guest is found
    if (!guest) {
      return res.status(404).json({ message: 'Guest not found' });
    }

    res.json(guest);
  } catch (error) {
    console.error('Error fetching guest by ID:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


let lastGuestId = 10; // Update this with the actual last guest ID from your database

const addNewGuest = async (req, res) => {
  try {
    const { name, email, phone} = req.body;

    // Checking for Input validation
    if (!name || !email || !phone ) {
      return res.status(400).json({ error: 'All fields (name, email, phone, booking_history) are required' });
    }

    
    const existingGuest = await Guest.findOne({ email });
    if (existingGuest) {
      return res.status(400).json({ error: 'Email already exists. Please use a different email.' });
    }

    
    lastGuestId++;

    const newGuest = new Guest({
      guestId: `guest-${lastGuestId}`,
      name,
      email,
      phone
    });

    // Saving new guest to the database
    const savedGuest = await newGuest.save();

    
    res.status(201).json(savedGuest);
  } catch (error) {
    console.error('Error adding new guest:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const updateGuestById = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const updatedGuest = await Guest.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, email },
      { new: true }
    );
    if (!updatedGuest) {
      return res.status(404).json({ message: 'Guest not found' });
    }
    res.json(updatedGuest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteGuestById = async (req, res) => {
  try {
    const deletedGuest = await Guest.findByIdAndRemove(req.params.id);
    if (!deletedGuest) {
      return res.status(404).json({ message: 'Guest not found' });
    }
    res.json({ message: 'Guest deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllGuests,
  getGuestById,
  addNewGuest,
  updateGuestById,
  deleteGuestById,
};

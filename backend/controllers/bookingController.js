import Booking from '../models/Booking.js';

export const createBooking = async (req, res) => {
  try {
    // Validate data before saving to the database
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();
    
    res.status(201).json({ success: true, message: 'Your tour is booked', data: savedBooking });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ success: false, message: 'Internal server error', error: err.message });
  }
};

export const getBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Booking.findById(id);

    if (!book) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    res.status(200).json({ success: true, message: 'Successfully retrieved booking', data: book });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal server error', error: err.message });
  }
};

export const getAllBooking = async (req, res) => {
  try {
    const books = await Booking.find();
    res.status(200).json({ success: true, message: 'Successfully retrieved all bookings', data: books });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal server error', error: err.message });
  }
};

const mongoose = require('mongoose');
const Payment = require('./payments.model');


const getAllPayments = async (req, res) => {
  try {
    const pay = await Payment.find();
    res.json(pay);
  } catch (error) {
    console.error('Error fetching payments:', error);
    res.status(500).send('Internal Server Error');
  }
};
  

const getPaymentById = async (req, res) => {
  const paymentId = req.params.id;

  try {
    const payment = await Payment.findById(paymentId);

    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    res.json(payment);
  } catch (error) {
    console.error('Error fetching payment by ID:', error);
    res.status(500).send('Internal Server Error');
  }
};



const addNewPayment = async (req, res) => {
  try {
    const { guestId, propertyId, amount, payment_date, payment_method } = req.body;

    const newPayment = new Payment({
      guestId,
      propertyId,
      amount,
      payment_date,
      payment_method,
      // You may include other properties as needed
    });

    const savedPayment = await newPayment.save();
    res.status(201).json(savedPayment);
  } catch (error) {
    console.error('Error adding a new payment:', error);
    res.status(500).send('Internal Server Error');
  }
};

const updatePaymentById = async (req, res) => {
  const paymentId = req.params.id;

  try {
    const updatedPayment = await Payment.findByIdAndUpdate(paymentId, req.body, { new: true });

    if (!updatedPayment) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    res.json(updatedPayment);
  } catch (error) {
    console.error(`Error updating payment by ID ${paymentId}:`, error);
    res.status(500).send('Internal Server Error');
  }
};

const deletePaymentById = async (req, res) => {
  const paymentId = req.params.id;

  try {
    const deletedPayment = await Payment.findByIdAndDelete(paymentId);

    if (!deletedPayment) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    res.json(deletedPayment);
  } catch (error) {
    console.error(`Error deleting payment by ID ${paymentId}:`, error);
    res.status(500).send('Internal Server Error');
  }
};
  
module.exports = {
  getAllPayments,
  getPaymentById,
  addNewPayment,
  updatePaymentById,
  deletePaymentById,
};
  
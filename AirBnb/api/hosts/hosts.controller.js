const Host = require('./hosts.model');

const getAllHosts = (req, res) => {
  Host.find()
    .then((hosts) => {
      res.json(hosts);
    })
    .catch((error) => {
      console.error('Error fetching hosts:', error);
      res.status(500).send('Internal Server Error');
    });
};


const getHostById = async (req, res) => {
  try {
    const { id } = req.params;

    const host = await Host.findOne({ hostId: id });

    if (!host) {
      return res.status(404).json({ message: 'Host not found' });
    }

    res.json(host);
  } catch (error) {
    console.error('Error fetching host by ID:', error);
    res.status(500).send('Internal Server Error');
  }
};



const addNewHost = async (req, res) => {
  try {
    
    const { name, email, phone, properties_managed } = req.body;
    
    
    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Invalid request body. Ensure name, email, and phone are provided.' });
    }

    
    const newHost = await Host.create({
      name,
      email,
      phone,
      properties_managed: properties_managed || [], 
    });

    res.status(201).json(newHost);
  } catch (error) {
    console.error('Error adding a new host:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



const updateHostById = async (req, res) => {
  const hostId = req.params.id;
  const updatedHostData = req.body;

  try {
    const updatedHost = await Host.findByIdAndUpdate(hostId, updatedHostData, { new: true });
    if (!updatedHost) {
      return res.status(404).json({ message: 'Host not found' });
    }
    res.json(updatedHost);
  } catch (error) {
    console.error('Error updating host by ID:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Delete host by ID
const deleteHostById = async (req, res) => {
  const hostId = req.params.id;

  try {
    const deletedHost = await Host.findByIdAndDelete(hostId);
    if (!deletedHost) {
      return res.status(404).json({ message: 'Host not found' });
    }
    res.json(deletedHost);
  } catch (error) {
    console.error('Error deleting host by ID:', error);
    res.status(500).send('Internal Server Error');
  }
};


module.exports = {
  getAllHosts,
  getHostById,
  addNewHost,
  updateHostById,
  deleteHostById,
};

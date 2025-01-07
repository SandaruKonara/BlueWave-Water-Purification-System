const Maintenance = require('../models/maintenance'); // Adjust the path as necessary

// Create a new maintenance record
exports.createMaintenance = async (req, res) => {
  try {
    const maintenance = new Maintenance(req.body);
    await maintenance.save();
    res.status(201).json({
      message: 'Maintenance record created successfully',
      data: maintenance
    });
  } catch (error) {
    res.status(400).json({
      message: 'Error creating maintenance record',
      error: error.message
    });
  }
};

// Get all maintenance records
exports.getAllMaintenanceRecords = async (req, res) => {
  try {
    const maintenanceRecords = await Maintenance.find();
    res.status(200).json({
      message: 'Maintenance records fetched successfully',
      data: maintenanceRecords
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching maintenance records',
      error: error.message
    });
  }
};

// Get a single maintenance record by ID
exports.getMaintenanceById = async (req, res) => {
  try {
    const maintenance = await Maintenance.findById(req.params.id);
    if (!maintenance) {
      return res.status(404).json({
        message: 'Maintenance record not found'
      });
    }
    res.status(200).json({
      message: 'Maintenance record fetched successfully',
      data: maintenance
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching maintenance record',
      error: error.message
    });
  }
};

// Update a maintenance record by ID
exports.updateMaintenance = async (req, res) => {
  try {
    const { status, date, priority, technician } = req.body; // Destructure the fields from the request body
    const maintenance = await Maintenance.findByIdAndUpdate(
      req.params.id,
      { status, date, priority, technician }, // Update multiple fields
      { new: true } // Return the updated document
    );

    if (!maintenance) {
      return res.status(404).json({
        message: 'Maintenance record not found',
      });
    }

    res.status(200).json({
      message: 'Maintenance record updated successfully',
      data: maintenance, // Return the updated record
    });
  } catch (error) {
    res.status(400).json({
      message: 'Error updating maintenance record',
      error: error.message,
    });
  }
};



// Delete a maintenance record by ID
exports.deleteMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByIdAndDelete(req.params.id);
    if (!maintenance) {
      return res.status(404).json({
        message: 'Maintenance record not found'
      });
    }
    res.status(200).json({
      message: 'Maintenance record deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting maintenance record',
      error: error.message
    });
  }
};

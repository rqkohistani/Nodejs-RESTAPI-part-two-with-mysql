import { HttpError } from '../../errors';
import customerService from './customer.service';
// TODO: Handle error for all routes

const getAllCustomers = async (req, res) => {
  try {
    const customers = await customerService.getAllCustomers();
    if (!customers[0]) {
      throw new HttpError(404, 'No customers found');
    }
    const [customersObject] = customers;
    res.send(customersObject);
  } catch (error) {
    res.status(error.status || 500).send(error.message);
  }
};

const getCustomer = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const customers = await customerService.getCustomer(id);
    if (!customers[0]) {
      throw new HttpError(404, 'No customers found');
    }
    const [customersObject] = customers[0];
    res.send(customersObject);
  } catch (error) {
    res.status(error.status || 500).send(error.message);
  }
};

const createCustomer = async (req, res) => {
  try {
    const customer = await customerService.createCustomer(req.body);
    if (!customer[0]) {
      throw new HttpError(404, 'No customer found');
    }
    const [customersObject] = customer[0];
    res.send(customersObject);
  } catch (error) {
    res.status(error.status || 500).send(error.message);
  }
};

const updateCustomer = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const customer = await customerService.updateCustomer(id, req.body);
    if (!customer[0]) {
      throw new HttpError(404, 'No customer found');
    }
    const [customersObject] = customer[0];
    res.send(customersObject);
  } catch (error) {
    res.status(error.status || 500).send(error.message);
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const Customer = await customerService.deleteCustomer(id);
    if (!Customer[0]) {
      throw new HttpError(404, 'No Customer found');
    }
    const [customersObject] = Customer[0];
    res.send(customersObject);
  } catch (error) {
    res.status(error.status || 500).send(error.message);
  }
};

const CustomerController = {
  getAllCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};

export default CustomerController;
export { getAllCustomers, getCustomer, createCustomer, updateCustomer, deleteCustomer };

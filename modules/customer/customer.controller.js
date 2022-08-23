import { HttpError } from '../../errors';
import customerService from './customer.service';

const getAllCustomers = async (req, res, next) => {
  try {
    const customers = await customerService.getAllCustomers();
    if (!customers[0]) {
      throw new HttpError(404, 'No customer found');
    }
    const [customersObject] = customers;
    res.status(200).json(customersObject);
  } catch (error) {
    next(error);
  }
};

const getCustomer = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const customer = await customerService.getCustomer(id);
    if (customer[0].length === 0) {
      throw new HttpError(404, 'No customer found');
    }
    const [customersObject] = customer[0];
    res.status(200).json(customersObject);
  } catch (error) {
    next(error);
  }
};

const createCustomer = async (req, res, next) => {
  try {
    const customer = await customerService.createCustomer(req.body);
    if (!customer[0]) {
      throw new HttpError(404, 'No customer created');
    }
    res.status(200).json({ message: 'Customer created', database: customer[0] });
  } catch (error) {
    next(error);
  }
};

const updateCustomer = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const customer = await customerService.updateCustomer(id, req.body);
    if (customer[0].affectedRows === 0) {
      throw new HttpError(404, 'No customer found');
    }
    res.status(200).json({ message: 'Customer updated', database: customer[0] });
  } catch (error) {
    next(error);
  }
};

const deleteCustomer = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const customer = await customerService.deleteCustomer(id);
    if (customer[0].affectedRows === 0) {
      throw new HttpError(404, 'No customer found');
    }
    res.status(200).json({ message: 'Customer deleted', database: customer[0] });
  } catch (error) {
    next(error);
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

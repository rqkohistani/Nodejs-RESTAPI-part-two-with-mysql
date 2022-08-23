import bcrypt from 'bcrypt';
import con from '../../dbConnection';

// TODO: update the customer's updateAt field when updating a customer

const getAllCustomers = async () => {
  const query = 'SELECT * FROM customers';
  const customers = await con.promise().query(query);
  return customers;
};

const getCustomer = async (id) => {
  const query = 'SELECT * FROM customers WHERE id = ?';
  const customer = await con.promise().query(query, [id]);
  return customer;
};

const createCustomer = async (customer) => {
  const query = 'INSERT INTO customers SET ?';
  const newCustomer = {
    ...customer,
    password: await bcrypt.hash(customer.password, 10),
  };
  const data = await con.promise().query(query, [newCustomer]);
  return data;
};

const updateCustomer = async (customerId, upadateCustomer) => {
  const query = 'UPDATE customers SET ? WHERE id = ?';
  const oldCustomer = await getCustomer(customerId);
  if (oldCustomer) {
    const customerData = {
      ...upadateCustomer,
      password: await bcrypt.hash(upadateCustomer.password, 10),
      updatedAt: new Date(),
    };
    const data = await con.promise().query(query, [customerData, customerId]);
    return data;
  }
  return null;
};

const deleteCustomer = async (id) => {
  const query = 'DELETE FROM customers WHERE id = ?';
  const deleteCustomer = await con.promise().query(query, id);
  return deleteCustomer;
};

const customerService = {
  getAllCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};

export default customerService;

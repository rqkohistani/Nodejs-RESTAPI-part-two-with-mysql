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
  const newCustomer = await con.promise().query(query, customer);
  return newCustomer;
};

const updateCustomer = async (customerId, customer) => {
  const query = 'UPDATE customers SET ? WHERE id = ?';
  const updatedCustomer = await con.promise().query(query, [customer, customerId]);
  return updatedCustomer;
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

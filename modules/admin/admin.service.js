import bcrypt from 'bcrypt';
import con from '../../dbConnection';

const getAllAdmins = async () => {
  const query = 'SELECT * FROM admins';
  const [rows] = await con.promise().query(query);
  return rows;
  // returns admins withouth password
  // const admins = await con.promise().query(query);
  // return admins[0].map((admin) => {
  //   const { password, ...adminWithoutPassword } = admin;
  //   return adminWithoutPassword;
  // });
};

const getAdmin = async (id) => {
  const query = 'SELECT * FROM admins WHERE id = ?';
  const [rows] = await con.promise().query(query, [id]);
  return rows;
  // returns admin withouth password
  // const admin = await con.promise().query(query, [id]);
  // return admin[0].map((admin) => {
  //   const { password, ...adminWithoutPassword } = admin;
  //   return adminWithoutPassword;
  // });
};

const createAdmin = async (admin) => {
  const query = 'INSERT INTO admins SET ?';
  const newAdmin = {
    ...admin,
    password: await bcrypt.hash(admin.password, 10),
  };
  const [rows] = await con.promise().query(query, [newAdmin]);
  return rows;
};

const deleteAdmin = async (id) => {
  const query = 'DELETE FROM admins WHERE id = ?';
  const [rows] = await con.promise().query(query, id);
  return rows;
};

const updateAdmin = async (adminId, updateAdmin) => {
  const query = 'UPDATE admins SET ? WHERE id = ?';
  const oldAdmin = await getAdmin(adminId);
  if (oldAdmin) {
    const adminDdata = {
      ...updateAdmin,
      password: await bcrypt.hash(updateAdmin.password, 10),
      updatedAt: new Date(),
    };
    const [rows] = await con.promise().query(query, [adminDdata, adminId]);
    return rows;
  }
  return null;
};

const getAdminByEmail = async (email) => {
  const query = 'SELECT * FROM admins WHERE email = ?';
  const [rows] = await con.promise().query(query, [email]);
  return rows;
};

const adminService = {
  createAdmin,
  getAllAdmins,
  getAdmin,
  deleteAdmin,
  updateAdmin,
  getAdminByEmail,
};

export default adminService;

import rolesAndPermissions from '../../roles.json';

const checkPermission = async (req, res, next) => {
  const role = req.currentAdmin?.userRole;
  if (['superAdmin', 'admin', 'user'].includes(role)) return next(); // superAdmin, admin  and have access to certain routes

  const requiredPermission = `${req.method}${req.baseUrl}${req.route?.path}`;

  const permissionsForAdmin = rolesAndPermissions[role]?.routes;

  // check if the required permission is in the permissions for the admin role in the roles.json file and return next()
  // if it is or throw an error if it is not found in the permissions for the admin role in the roles.json file.
  if (permissionsForAdmin?.includes(requiredPermission)) return next();
  // throw new HttpError(403, 'Forbidden');
  return res.status(403).send({ message: 'No permission' });
};

export default checkPermission;

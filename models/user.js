module.exports = function(connection, DataTypes) {
  var User = connection.define("User", {
    email: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    distance: DataTypes.STRING,
    password: DataTypes.STRING,
    picture: DataTypes.STRING
  });
  return User;
};

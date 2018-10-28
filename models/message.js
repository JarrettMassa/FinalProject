module.exports = function(connection, DataTypes) {
  var Message = connection.define("Message", {
    to_user: DataTypes.STRING,
    from_user: DataTypes.STRING,
    message: DataTypes.STRING
  });
  return Message;
};

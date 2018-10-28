// Routes
// =============================================================
module.exports = function(app,db) {
  // GET route for getting all of the todos

  app.get("/seed", function(req, res) {

    db.User.create({
      email: 'danbuckland@gmail.com',
      first_name: 'Dan',
      last_name: 'Buckland',
      distance: '24',
      password: '123',
      picture: 'https://media.licdn.com/dms/image/C5103AQGjtQ0m9PX_yg/profile-displayphoto-shrink_800_800/0?e=1545264000&v=beta&t=dGpwVaSn2x--4cHoUHD3_3deAquCWQIeMJM9r9tK4OY'
    }).then(function(dbUser) {
    });

    db.User.create({
      email: 'crystalespaillat@gmail.com',
      first_name: 'Crystal',
      last_name: 'Espaillat',
      distance: '24',
      password: '123',
      picture: "https://media.licdn.com/dms/image/C5603AQGlI32cdFplNw/profile-displayphoto-shrink_800_800/0?e=1545868800&v=beta&t=1WvpEENDTm2ujRN2ixwV1r1lebu_4ACsYgFOz66Jxkk"
    }).then(function(dbUser) {
    });

    db.User.create({
      email: 'kristinerosette@gmail.com',
      first_name: 'Kristine',
      last_name: 'Rosette',
      distance: '36',
      password: '123',
      picture: "https://media.licdn.com/dms/image/C5103AQH45k4g80uJRg/profile-displayphoto-shrink_800_800/0?e=1545868800&v=beta&t=tkcsVdHrvJQgJRAKPA5ecJT9YEIqjkbpkXwYaHsJsZQ"
    }).then(function(dbUser) {
    });

    db.User.create({
      email: 'anthonymaddatu@gmail.com',
      first_name: 'Anthony',
      last_name: 'Maddatu',
      distance: '0',
      password: '123',
      picture: "https://media.licdn.com/dms/image/C4D03AQHFtc6iqGmp_w/profile-displayphoto-shrink_800_800/0?e=1545868800&v=beta&t=otk6eXxcyHh1MqH7IqfZnQWPNHHqsvDvl8CkmZlq-Es"
    }).then(function(dbUser) {
    });


    db.User.create({
      email: 'susantamozumder@gmail.com',
      first_name: 'Susanta',
      last_name: 'Mozumder',
      distance: '34',
      password: '123',
      picture: "https://media.licdn.com/dms/image/C4E03AQG5RXrt4P0DoA/profile-displayphoto-shrink_800_800/0?e=1545868800&v=beta&t=LeDOZe-pihN7Y0-ukv-X14xnepD9E831ZIEJSw-QHGw"
    }).then(function(dbUser) {
    });

    db.User.create({
      email: 'ronakray@gmail.com',
      first_name: 'Ronak',
      last_name: 'Ray',
      distance: '24',
      password: '123',
      picture: "https://media.licdn.com/dms/image/C4D03AQHz08RQx5qNlg/profile-displayphoto-shrink_800_800/0?e=1545868800&v=beta&t=N7QR21jlb30k1wgzB0BYaC-NGxVXQBIZMPu7CruyiU0"
    }).then(function(dbUser) {
    });

    db.User.create({
      email: 'deborahridgard@gmail.com',
      first_name: 'Deborah',
      last_name: 'Ridgard',
      distance: '30',
      password: '123',
      picture: "https://media.licdn.com/dms/image/C4D03AQG7pkU8JG2Yaw/profile-displayphoto-shrink_800_800/0?e=1545868800&v=beta&t=o7KsFZhwFUuXsdPM-3iHqtdygUqKBVMJURjlXs74hFU"
    }).then(function(dbUser) {
    });


    db.User.create({
      email: 'jasongoncalves@gmail.com',
      first_name: 'Jason',
      last_name: 'Goncalves',
      distance: '30',
      password: '123',
      picture: "https://media.licdn.com/dms/image/C5603AQENojMrP7YfUA/profile-displayphoto-shrink_800_800/0?e=1545868800&v=beta&t=qK13w5e3iLsiOTCWKnTk7ytPoV9dUicadRL9W6zYPHc"
    }).then(function(dbUser) {
    });

    db.User.create({
      email: 'charlesmainegra@gmail.com',
      first_name: 'Charles',
      last_name: 'Mainegra',
      distance: '32',
      password: '123',
      picture: "https://media.licdn.com/dms/image/C4D03AQHtGzJ38MJHzg/profile-displayphoto-shrink_800_800/0?e=1545868800&v=beta&t=HH-zkj20pkVZnScB2ZRu54TNOrfomc_MAY_BNc1STX0"
    }).then(function(dbUser) {
    });

    db.User.create({
      email: 'kunlebabatunde@gmail.com',
      first_name: 'Kunle',
      last_name: 'Babatunde',
      distance: '34',
      password: '123',
      picture: "https://media.licdn.com/dms/image/C4E03AQHKNyFKDSqKgw/profile-displayphoto-shrink_800_800/0?e=1545868800&v=beta&t=xs23pWfLB3p0c8xY8HrZwExYdYq0rF6BrEH8apF3lIw"
    }).then(function(dbUser) {
    });


    db.User.create({
      email: 'michaelpeng@gmail.com',
      first_name: 'Michael',
      last_name: 'Peng',
      distance: '24',
      password: '123',
      picture: "https://media.licdn.com/dms/image/C5603AQEtixG2LtFg_A/profile-displayphoto-shrink_800_800/0?e=1545868800&v=beta&t=0SdQwwNKRS2UmoVUrqzzuDvKS9_Nm-7A_aUv7LNurAE"
    }).then(function(dbUser) {
    });

    db.User.create({
      email: 'fundaistvan@gmail.com',
      first_name: 'Funda',
      last_name: 'Istvan',
      distance: '30',
      password: '123',
      picture: "https://media.licdn.com/dms/image/C4E03AQF4OAjdNVKLUQ/profile-displayphoto-shrink_800_800/0?e=1545868800&v=beta&t=tR_vylYMDFFluzUKiZcwoDz5AyTvSbMBpBB3A9D860o"
    }).then(function(dbUser) {
    });

    db.User.create({
      email: 'kellyquinn@gmail.com',
      first_name: 'Kelly',
      last_name: 'Quinn',
      distance: '30',
      password: '123',
      picture: "https://media.licdn.com/dms/image/C4E03AQHiK-eh8ugVHQ/profile-displayphoto-shrink_800_800/0?e=1545868800&v=beta&t=0C8k7R0UavtaLpsnHzI9Ke9jjDUEqzNUM2uJ3jl56FY"
    }).then(function(dbUser) {
    });

    res.json("Seeded!");

  }); // End app.get seed



};


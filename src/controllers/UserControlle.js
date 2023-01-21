const User = require('../Models/Use')

const UserControlle = {
  async index(req, res) {
    const { id } = req.params;
    const user =  await User.findByPk(id);

    if(user ) {
      return res.json({
        name: user.name,
        email: user.email,
        status: user.status
      })
    }
    return res.status(404).json({
      messeger: 'User is not found'
    });

  },
  async show(req, res) {
    const user = await User.findAll();
    console.log("All users:", JSON.stringify(user, null, 2));
    return res.json(user)
  },
  async create(req, res) {
    const { name, email, status } = req.body

    const emailExist = await User.findOne({
      where: {
        email: email
      }
    })
    if (!emailExist) {
      const user = await User.create({
        name,
        email,
        status
      })
      return res.status(201).json(user)
    }
    return res.status(401).json({
      messager: 'Email already exists'
    })
  },

  async update(req, res) {
    const { id } = req.params;
    const { status } = req.body;

    await User.update({
      status,
    }, {
      where: {
        id: id
      }
    })
    return res.status(201).json({
      messager: 'Status updated successfully'
    })

  },
  async delete(req, res) {
    const { id } = req.params;
    const userExists = await User.findOne({
      where: {
        id: id
      }
    })
    if(userExists) {
      await User.destroy({
        where: {
          id: id
        }
      });
      return res.status(201).json({
        messager: "User deleted on sucesses"
      })
    } else {
      return res.status(401).json({
        messager: "User not found"  
      })
    }
  }
}
module.exports = UserControlle

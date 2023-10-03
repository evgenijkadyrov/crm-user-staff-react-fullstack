const {prisma} = require('../prisma/prisma-client')

const allEmployees = async (req, res) => {
    try {
        const employees = await prisma.employee.findMany()
        res.status(200).json({message: employees})
    } catch (err) {
        res.status(500).json({message: 'Сотрудники не получены'})
    }

}
const addEmployee = async (req, res) => {
    try {
        const data = req.body
        if (!data.firstName || !data.lastName || !data.age || !data.adress) {
            res.status(400).json({message: 'Заполните все поля'})
        }
        const employee = await prisma.employee.create({

            data: {
                ...data,
                userId: req.user.id
            }

        })
        return res.status(201).json(employee)
    } catch (err) {
        res.status(500).json({message: 'что то не так'})
    }
}
module.exports = {
    allEmployees,
    addEmployee
}
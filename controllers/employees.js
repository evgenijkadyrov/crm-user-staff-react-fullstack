const {prisma} = require('../prisma/prisma-client')

const allEmployees = async (req, res) => {
    try {
        const employees = await prisma.employee.findMany()
        res.status(200).json(employees)
    } catch (err) {
        res.status(500).json({message: 'Сотрудники не получены'})
    }

}
const addEmployee = async (req, res) => {
    try {
        const data = req.body
        if (!data.firstName || !data.lastName || !data.age || !data.adress) {
           return res.status(400).json({message: 'Заполните все поля'})
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
const remove = async (req, res) => {
    const {id} = req.body
    try {
        await prisma.employee.delete({
            where: {
                id
            }
        })
        res.status(204).json('Ok')
    } catch (err) {
        res.status(500).json({message: 'что то не так'})
    }
}
const edit = async (req, res) => {
    const {data} = req.body
    const {id} = data.id
    try {
        await prisma.employee.update({
            where: {
                id,
                data
            }
        })
        res.status(204).json('Ok')
    } catch (err) {
        res.status(500).json({message: 'не удалось редактировать сотрудника'})
    }
}
const employee = async (req, res) => {
    const {id} = req.params
    try {
        const employee = await prisma.employee.findUnique({
            where: {
                id
            }
        })
        res.status(200).json(employee)
    } catch (err) {
        res.status(500).json({message: 'не удалось получить сотрудника'})
    }
}
module.exports = {
    allEmployees,
    addEmployee, remove, edit, employee
}
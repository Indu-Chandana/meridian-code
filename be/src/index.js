import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const app = express();
const prisma = new PrismaClient()

app.use(cors({ origin: 'http://localhost:3000', methods: ['GET', 'POST', 'PATCH', 'DELETE'] }));
app.use(express.json())

app.post('/todo', async (req, res) => {

    try {
        const { title, progress } = req.body;
        const newTodo = await prisma.todo.create({ data: { title, progress } })
        res.status(201).json(newTodo)
    } catch (error) {
        res.status(400).json({ message: 'todo not added to DB' })
    }
})

app.get('/todo', async (req, res) => {
    try {
        const allTodos = await prisma.todo.findMany()
        res.status(200).json(allTodos)
    } catch (error) {
        res.status(400).json({ message: 'something going wrong.' })
    }
})


const PORT = 8000
app.listen(PORT, () => console.log(`server runnning on PORT ${PORT}`))
const prisma = new PrismaClient()

export default async function handler(req, res) {
  await prisma.task.create({
    title: 'task db'
  })
  const tasks = await prisma.task.findMany()
  res.status(200).json(tasks)
}

import prisma from '@/utils/db'

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: 'wake up',
    },
  })
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })

  return allTasks
}

const Prisma = async () => {
  const tasks = await prismaHandlers()
  return (
    <div>
      <h1 className='text-3xl font-medium mb-4'>Prisma Example </h1>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className='text-xl py-2'>
            😬 {task.content}
          </h2>
        )
      })}
    </div>
  )
}
export default Prisma

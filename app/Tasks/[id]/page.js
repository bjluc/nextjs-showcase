import EditForm from '@/components/EditForm'
import { getTask } from '@/utils/actions'
import Link from 'next/link'
const TaskPage = async ({ params }) => {
  const task = await getTask(params.id)

  return (
    <>
      <div className='mb-16'>
        <Link href='/tasks' className='btn btn-accent'>
          Back to Tasks
        </Link>
      </div>
      <EditForm task={task} />
    </>
  )
}
export default TaskPage

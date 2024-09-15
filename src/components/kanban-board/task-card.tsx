import { Id, Task } from "@/types"
import { Button } from "../ui/button"
import { Trash2 } from "lucide-react"
import { useState } from "react"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from '@dnd-kit/utilities';


interface Props {
    task: Task,
    deleteTask: (id: Id) => void
}

const TaskCard = ({ task, deleteTask }: Props) => {
    const [mouseIsOver, setMouseIsOver] = useState(false);

    const {
        setNodeRef,
        attributes,
        listeners,
        transform,
        transition,
        isDragging
    } = useSortable({
        id: task.id,
        data: {
            type: "Task",
            task,
        },
    });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }

    if (isDragging) {
        return <div
            ref={setNodeRef}
            style={style}
            className="opacity-50 bg-slate-50 p-2.5 h-[100px] min-h-[100px] items-center justify-between flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab"
        >
        </div>
    }


    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="bg-slate-50 p-2.5 h-[100px] min-h-[100px] items-center justify-between flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab"
            onMouseEnter={() => setMouseIsOver(true)}
            onMouseLeave={() => setMouseIsOver(false)}
        >
            {task.content}
            {
                mouseIsOver &&
                <Button
                    className="opaticy-60 hover:opacity-100"
                    variant={'ghost'}
                    onClick={() => deleteTask(task.id)}
                >
                    <Trash2 size={14} strokeWidth={1} />
                </Button>
            }
        </div>
    )
}

export default TaskCard
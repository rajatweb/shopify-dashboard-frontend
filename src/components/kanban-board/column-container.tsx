import { Column, Id, Task } from '@/types';
import { CirclePlus, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useMemo, useState } from 'react';
import { Input } from '../ui/input';
import TaskCard from './task-card';


interface Props {
    column: Column
    deleteColumn: (id: Id) => void,
    updateColumn: (id: Id, title: string) => void,
    createTask: (columnId: Id) => void,
    deleteTask: (id: Id) => void,
    tasks: Task[]
}

const ColumnContainer = (props: Props) => {
    const { column, deleteColumn, updateColumn, createTask, tasks, deleteTask } = props;
    const [editMode, setEditMode] = useState(false);

    const tasksIds = useMemo(() => tasks.map(task => task.id), [tasks]);

    const {
        setNodeRef,
        attributes,
        listeners,
        transform,
        transition,
        isDragging
    } = useSortable({
        id: column.id,
        data: {
            type: "Column",
            column,
        },
        disabled: editMode
    });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }

    if (isDragging) {
        return <div
            ref={setNodeRef}
            style={style}
            className='bg-gray-200 opacity-40 border-red-400 border-2 w-[350px] h-[350px] max-h-[500px] rounded-md flex flex-col mx-1'></div>
    }
    return (
        <div
            ref={setNodeRef}
            style={style}
            className='bg-gray-200 w-[350px] h-[350px] max-h-[500px] rounded-md flex flex-col mx-1'>
            <div
                {...attributes}
                {...listeners}
                onClick={() => setEditMode(true)}
                className='bg-slate-50 text-md h-[60px] cursor-grab rounded-md rounder-b-none p-3 font-bold border-black-50 border-4 flex justify-between items-center'>
                <div className='flex gap'>
                    <div className='flex justify-center items-center bg-gray-100 px-2 py-1 text-sm rounded-full'> 0</div>
                    {!editMode && column.title}
                    {editMode &&
                        <Input
                            value={column.title}
                            onChange={(e) => updateColumn(column.id, e.target.value)}
                            autoFocus
                            onBlur={() => setEditMode(false)}
                            onKeyDown={(e) => {
                                if (e.key !== "enter") return;
                                setEditMode(false)
                            }}
                        />
                    }
                </div>
                <div className=''>
                    <Button
                        onClick={() => { deleteColumn(column.id) }}
                        variant={'ghost'}
                    >
                        <Trash2 size={18} strokeWidth={1} />
                    </Button>
                </div>
            </div>
            <div className='flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto'>
                <SortableContext items={tasksIds}>
                {tasks.map(task => (
                    <TaskCard 
                        key={task.id} 
                        task={task} 
                        deleteTask={deleteTask}    
                    />
                ))}
                </SortableContext>
            </div>
            <Button
                size={"sm"}
                className='flex gap-2 items-centers border-2 rounded-md'
                onClick={() => createTask(column.id)}
            ><CirclePlus size={14} /> Add Task</Button>
        </div>
    )
}

export default ColumnContainer;

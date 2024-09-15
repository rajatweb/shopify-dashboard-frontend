import React, { useState } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
    DragOverlay,
    DragStartEvent,
} from '@dnd-kit/core';
import {
    SortableContext,
    rectSortingStrategy,
    arrayMove,
    useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface Item {
    id: string;
}
type ContainerItems = {
    [key: string]: Item[];
};

const initialContainers: ContainerItems = {
    container1: [{ id: 'Item 1' }, { id: 'Item 2' }, { id: 'Item 3' }],
    container2: [{ id: 'Item 4' }, { id: 'Item 5' }, { id: 'Item 6' }],
};

const MultipleContainersOld: React.FC = () => {
    const [items, setItems] = useState<ContainerItems>(initialContainers);
    const [activeId, setActiveId] = useState<string | null>(null);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor)
    );

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(String(event.active.id));
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!over) {
            setActiveId(null);
            return;
        }

        const [activeContainer, activeIndex] = findContainerAndIndex(String(active.id));
        const [overContainer, overIndex] = findContainerAndIndex(String(over.id));
        console.log("🚀 ~ handleDragEnd ~ activeContainer:", activeContainer)
        console.log("🚀 ~ handleDragEnd ~ overContainer:", overContainer)

        if (activeContainer && overContainer && activeIndex !== -1 && overIndex !== -1) {
            if (activeContainer === overContainer) {
                // Reorder items within the same container
                setItems((prevItems) => ({
                    ...prevItems,
                    [activeContainer]: arrayMove(prevItems[activeContainer], activeIndex, overIndex),
                }));
            } else {
                // Move item to a different container
                setItems((prevItems) => {
                    const activeItems = [...prevItems[activeContainer]];
                    const overItems = [...prevItems[overContainer]];

                    const [movedItem] = activeItems.splice(activeIndex, 1);
                    overItems.splice(overIndex, 0, movedItem);

                    return {
                        ...prevItems,
                        [activeContainer]: activeItems,
                        [overContainer]: overItems,
                    };
                });
            }
        }
        setActiveId(null);
    };

    const findContainerAndIndex = (id: string): [string, number] => {
        for (const [container, containerItems] of Object.entries(items)) {
            const index = containerItems.findIndex((item) => item.id === id);
            if (index !== -1) {
                return [container, index];
            }
        }
        return ['', -1];
    };

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {Object.keys(items).map((containerId) => (
                    <Container key={containerId} id={containerId}>
                        <SortableContext
                            items={items[containerId].map((item) => item.id)}
                            strategy={rectSortingStrategy}
                        >
                            {items[containerId].map((item) => (
                                <SortableItem key={item.id} id={item.id} />
                            ))}
                        </SortableContext>
                    </Container>
                ))}
            </div>

            <DragOverlay>
                {activeId ? <SortableItem id={activeId} isOverlay /> : null}
            </DragOverlay>
        </DndContext>
    );
};

export default MultipleContainersOld;

interface SortableItemProps {
    id: string;
    isOverlay?: boolean;
}

const SortableItem: React.FC<SortableItemProps> = ({ id, isOverlay = false }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition: transition ?? 'transform 200ms ease',
        padding: '10px',
        margin: '5px',
        backgroundColor: isDragging || isOverlay ? '#f0f0f0' : '#ffffff',
        borderRadius: '4px',
        border: '1px solid #ccc',
        opacity: isDragging || isOverlay ? 0.8 : 1,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {id}
        </div>
    );
};

interface ContainerProps {
    id: string;
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ id, children }) => {
    return (
        <div style={{ padding: '20px', border: '1px solid black', width: '200px' }}>
            <h4>{id}</h4>
            <div>{children}</div>
        </div>
    );
};

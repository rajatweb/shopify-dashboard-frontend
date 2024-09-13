"use client";
import React, { useState } from "react";
import CardWrapper from "@/components/atoms/card/Card-wrapper";
import Card from "@/components/atoms/card/Card";
import { Button } from "@/components/ui/button";
import { Grip, CirclePlus, Ellipsis } from "lucide-react";
import Dashboardlayout from "@/components/layout/dashboard-layout";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core"
import {SortableContext } from "@dnd-kit/sortable"


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { eventNames } from "process";


const page = () => {
  const [cards, setCards] = useState([
    { id: "Card-1", num: 1 },
    { id: "Card-2", num: 2 },
    { id: "Card-3", num: 3 },]
  );
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setCards((cards) => {
        const activeIndex = cards.findIndex((card) => card.id === active.id);
        const overIndex = cards.findIndex((card) => card.id === over.id);
        const newCards = [...cards];
        newCards.splice(overIndex, 0, newCards.splice(activeIndex, 1)[0]);
        return newCards;
      });
    }
  };



  return (
    <Dashboardlayout>
      <nav className="flex  justify-between items-center">
        {/* 1 */}
        <div className="flex ml-[10px]">
          <button className="flex items-center ">
            <Grip size={18} className="dark:text-[#fff]" />
            <p className="ml-1 text-[15px] font-semibold text-[#1C1D22] dark:text-[#fff]">
              Board view
            </p>
          </button>
          <div className="ml-[20px] flex items-center text-[12px] font-semibold text-[#c2c2c2] dark:text-[#ffffff]">
            <Dialog>
              <CirclePlus size={20} strokeWidth={0.75} />
              <DialogTrigger asChild>
                <span className="ml-1 text-[15px] font-semibold text-[#c2c2c2] dark:text-[#ffffff]">
                  Add view
                </span>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="flex items-center">
                  <DialogTitle className="text-[20px] font-bold text-[#1C1D22] dark:text-[#fff]">
                    ADD NEW TASKS
                  </DialogTitle>
                  <DialogDescription>
                    {`Make changes to your tasks list here. Click save when you're
                    done.`}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      defaultValue="@peduarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter className="flex ">
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        {/* 2 */}
        <ul className="flex items-center">
          <li className="text-[15px] font-semibold text-[#1C1D22] dark:text-[#fff]">
            Filter
          </li>
          <li className="ml-[20px] text-[15px] font-semibold text-[#c2c2c2]">
            Sort
          </li>
          <li className="ml-[20px] flex justify-center items-center w-[26px] h-[26px] rounded-[50%] bg-[#ffffff] border-[.5px] border-[#c2c2c2]">
            <Ellipsis size={20} strokeWidth={0.75} />
          </li>
          <Button className="ml-[20px] w-[140px] h-[38px] rounded-[19px] bg-black text-[#ffffff] text-[14px]">
            New Template
          </Button>
        </ul>
      </nav>
      <div className="flex ">

        <CardWrapper>
          {/* nav */}
          <nav className=" text-[14px]">
            <div className="flex justify-between items-center py-2 px-4">
              <button className="font-black text-[#a2a3a4]"> To Do (4)</button>
              <button className="font-black flex ">
                <Dialog>
                  <CirclePlus
                    size={20}
                    strokeWidth={0.75}
                    className="dark:text-[#fff]"
                  />
                  <DialogTrigger asChild>
                    <span className="dark:text-[#fff]">Add New Task</span>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader className="flex items-center">
                      <DialogTitle className="text-[20px] font-bold text-[#1C1D22] dark:text-[#fff]">
                        ADD NEW TASKS
                      </DialogTitle>
                      <DialogDescription>
                        {`Make changes to your tasks list here. Click save when you're
                    done.`}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="name"
                          defaultValue="Pedro Duarte"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Username
                        </Label>
                        <Input
                          id="username"
                          defaultValue="@peduarte"
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter className="flex ">
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </button>
            </div>
          </nav>
          {/* card */}
          <DndContext onDragEnd={handleDragEnd}>
            <SortableContext items={cards}>
            {cards.map((card) => (
                <Card
                  key={card.id}
                  num={card.num}
                  id={card.id}
                />
            ))}
            </SortableContext>
          </DndContext>

        </CardWrapper>

      </div>

    </Dashboardlayout>
  );
};

export default page;

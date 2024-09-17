import { IconCalendarUp, IconNewSection, IconUserPlus} from "@tabler/icons-react"
import { AnimatedPin } from "./AnimatedPin"
import { useState } from "react"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "./ui/button"




const MeetingTypeList = () => {
  const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>(undefined);
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 items-center justify-center z-0">
       <AnimatedPin
        icon={<IconNewSection height={27} width={27} className=" text-white dark:text-neutral-300"/>}
        title="New Meeting"
        className="bg-slate-600"
        description="Start an instant meeting"
        handleClick={() => setMeetingState('isInstantMeeting')}
      />
       <AnimatedPin
        icon={<IconUserPlus height={27} width={27} className=" text-white dark:text-neutral-300"/>}
        title="Join Meeting"
        className="bg-green-400"
        description="Via invitation link"
        handleClick={() => setMeetingState('isJoiningMeeting')}
      />
       <AnimatedPin
        icon={<IconCalendarUp height={27} width={27} className=" text-white dark:text-neutral-300"/>}
        title="Shedule Meeting"
        className="bg-blue-400"
        description="Plan Your Meetings"
        handleClick={() => setMeetingState('isScheduleMeeting')}
      />
      {meetingState==='isInstantMeeting' ? (
        <Drawer open={meetingState==='isInstantMeeting'}>
          <DrawerTrigger>Open</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="flex flex-col items-center justify-center">
              <DrawerTitle className="text-center">Start An Instant Meeting</DrawerTitle>
              <Button className="w-32 text-center items-center justify-center">Start Meeting</Button>
              <DrawerClose onClick={()=> setMeetingState(undefined)}>
                <Button variant="default">Cancel</Button>
              </DrawerClose>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>

      ):(
        <div className=""></div>
      )}
      {meetingState==='isJoiningMeeting' ? (
        <Drawer open={meetingState==='isJoiningMeeting'}>
          <DrawerTrigger>Open</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="flex flex-col items-center justify-center">
              <DrawerTitle className="text-center">Start An Instant Meeting</DrawerTitle>
              <Button className="w-32 text-center items-center justify-center">Start Meeting</Button>
              <DrawerClose onClick={()=> setMeetingState(undefined)}>
                <Button variant="default">Cancel</Button>
              </DrawerClose>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>

      ):(
        <div className=""></div>
      )}
      {meetingState==='isScheduleMeeting' ? (
        <Drawer open={meetingState==='isScheduleMeeting'}>
          <DrawerTrigger>Open</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="flex flex-col items-center justify-center">
              <DrawerTitle className="text-center">Start An Instant Meeting</DrawerTitle>
              <Button className="w-32 text-center items-center justify-center">Start Meeting</Button>
              <DrawerClose onClick={()=> setMeetingState(undefined)}>
                <Button variant="default">Cancel</Button>
              </DrawerClose>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>

      ):(
        <div className=""></div>
      )}
    </div>
  )
    }
    
    
export default MeetingTypeList
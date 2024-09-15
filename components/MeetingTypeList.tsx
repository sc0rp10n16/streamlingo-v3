import { IconCalendarUp, IconNewSection, IconUserPlus} from "@tabler/icons-react"
import { AnimatedPin } from "./AnimatedPin"



const MeetingTypeList = () => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 mb-4 items-center justify-center">
       <AnimatedPin
        icon={<IconNewSection height={27} width={27} className=" text-white dark:text-neutral-300"/>}
        title="New Meeting"
        className="bg-slate-600"
        description="Start an instant meeting"
        handleClick={() => console.log("New Meeting")}
      />
       <AnimatedPin
        icon={<IconUserPlus height={27} width={27} className=" text-white dark:text-neutral-300"/>}
        title="Join Meeting"
        className="bg-green-400"
        description="Via invitation link"
        handleClick={() => console.log("Joined Meeting")}
      />
       <AnimatedPin
        icon={<IconCalendarUp height={27} width={27} className=" text-white dark:text-neutral-300"/>}
        title="Shedule Meeting"
        className="bg-blue-400"
        description="Plan Your Meetings"
        handleClick={() => console.log("Shedueld Meeting")}
      />
      
    </div>
  )
}
export default MeetingTypeList
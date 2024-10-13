'use client'
import { Button } from "@/components/ui/button"
import { useSocket } from "@/providers/SocketProvider"
import { useState, useCallback, useEffect, FormEvent } from "react"
import { useRouter } from "next/navigation"

const MeetingHomePage: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [meetingId, setMeetingId] = useState<string>('')

  const socket = useSocket();
  const router = useRouter();

  const handleSubmitForm = useCallback((e: FormEvent) => {
    e.preventDefault()
    if (socket) {
      socket.emit('meet:join', { name, meetingId })
    }
  }, [name, meetingId, socket])
  const handleJoinRoom = useCallback((data: any) => {
    const { name, meetingId } = data;
    router.push(`/meeting/${meetingId}`)
  },[])
  useEffect(() => {
    if (socket) {
      socket.on('meet:join', handleJoinRoom)
      return () => {
        socket.off('meet:join', handleJoinRoom)
      }
    }
  }, [handleJoinRoom,socket])

  return (
    <div className="flex flex-col max-w-full max-h-full items-center justify-center">
      <h1>Join or Create Meeting</h1>
      <form className="flex flex-col w-60 justify-center items-center mt-4 gap-5 text-black" onSubmit={handleSubmitForm}>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          id="meeting-id"
          placeholder="Enter Meeting ID"
          value={meetingId}
          onChange={e => setMeetingId(e.target.value)}
        />
        <Button type="submit">Join Meeting</Button>
      </form>
    </div>
  )
}

export default MeetingHomePage
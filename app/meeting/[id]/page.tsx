'use client';
import { Button } from "@/components/ui/button";
import { useSocket } from "@/providers/SocketProvider";
import { useCallback, useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import peer from "@/service/peer";

interface MeetingRoomPageProps {
  params: {
    id: string;
  };
}

interface UserJoinedPayload {
  name: string;
  id: string;
}

interface IncomingCallPayload {
  from: string;
  offer: RTCSessionDescriptionInit;
}

interface CallAcceptedPayload {
  from: string;
  ans: RTCSessionDescriptionInit;
}

const MeetingRoomPage: React.FC<MeetingRoomPageProps> = ({ params: { id } }) => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState<string | null>(null);
  const [myStream, setMyStream] = useState<MediaStream | null>(null);

  const handleUserJoined = useCallback(({ name, id }: UserJoinedPayload) => {
    console.log('User Joined', name, "to meet ID", id);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true
    });
    const offer = await peer.getOffer();
    socket?.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
  }, [remoteSocketId, socket]);

  const handleIncomingCall = useCallback(async ({ from, offer }: IncomingCallPayload) => {
    setRemoteSocketId(from);
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true
    });
    setMyStream(stream);
    console.log(`Incoming call from ${from} ${offer}`);
    const ans = await peer.getAnswer(offer);
    socket?.emit("call:accepted", { to: from, ans });
  }, [socket]);

  const handleCallAccepted = useCallback(async ({ from, ans }: CallAcceptedPayload) => {
    await peer.setLocalDescription(ans);
    console.log("Call Accepted");
  }, []);

  useEffect(() => {
    socket?.on('user:joined', handleUserJoined);
    socket?.on('incoming:call', handleIncomingCall);
    socket?.on("call:accepted", handleCallAccepted);
    return () => {
      socket?.off('user:joined', handleUserJoined);
      socket?.off('incoming:call', handleIncomingCall);
      socket?.off("call:accepted", handleCallAccepted);
    };
  }, [socket, handleUserJoined, handleIncomingCall, handleCallAccepted]);

  return (
    <div className="flex flex-col justify-center items-center text-center">
      Meeting Room Page
      Meeting ID: {id}
      <div className="gap-5">
        <p>{remoteSocketId ? `connected` : "no one in the meeting"}</p>
        {remoteSocketId && <Button onClick={handleCallUser}>Join Meeting</Button>}
        {myStream &&
          <>
            <h1>My Stream</h1>
            <ReactPlayer height="300px" width="500px" playing muted url={myStream} />
          </>
        }
      </div>
    </div>
  );
};

export default MeetingRoomPage;
import React from 'react';
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
import {useParams} from 'react-router-dom'

const Room = () => {
    const {roomId} = useParams();

    const videoCall = async(Element) => {
        const appId = 1899130194;
        const serverSecret = "bd470e45a4c66679aec20d783feec025";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId,serverSecret,roomId,Date.now().toString(), "Enter Your Name");
        const vCall = ZegoUIKitPrebuilt.create(kitToken);
        vCall.joinRoom({
            container: Element,
            sharedLinks: [{
                name: 'Copy Link',
                url: `http://localhost:3000/room/${roomId}`
            }],
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
            showScreenSharingButton: true,
        })
    }
  return <div>
    <div ref={videoCall}/>
  </div>
}

export default Room;
import React from 'react';

import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage=(props)=>{
  return (
    <div style={{ height: '100vh' }}>
    <PrettyChatWindow
      projectId="eb8bd462-b557-40bc-a347-26b8974759c0"
      username={props.user.username}
      secret={props.user.secret}
      
    />
    </div>
  );
}

export default ChatsPage;
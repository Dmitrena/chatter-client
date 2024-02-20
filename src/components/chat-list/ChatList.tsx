import { Divider, Stack } from '@mui/material';
import List from '@mui/material/List';
import { useState } from 'react';
import { useGetChats } from '../../hooks/useGetChats';
import ChatListAdd from './chat-list-add/ChatListAdd';
import ChatListHeader from './chat-list-header/ChatListHeader';
import ChatListItem from './chat-list-item/ChatListItem';

const ChatList = () => {
  const [chatListAddVisible, setChatListAddVisible] = useState(false);
  const { data } = useGetChats();
  return (
    <>
      <ChatListAdd open={chatListAddVisible} handleClose={() => setChatListAddVisible(false)} />
      <Stack>
        <ChatListHeader handleAddChat={() => setChatListAddVisible(true)} />
        <Divider />
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            maxHeight: '80vh',
            overflow: 'auto',
          }}
        >
          {data?.chats.map((chat) => (
            <ChatListItem name={chat.name} />
          ))}
        </List>
      </Stack>
    </>
  );
};

export default ChatList;

import {
  Avatar,
  Box,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import router from '../../Routes';
import { Chat } from '../../../gql/graphql';
import './ChatListItem.css';

interface ChatListItemProps {
  chat: Chat;
  selected: boolean;
}

const ChatListItem = ({ chat, selected }: ChatListItemProps) => {
  return (
    <>
      <ListItem alignItems="flex-start" disablePadding>
        <ListItemButton
          onClick={() => router.navigate(`/chats/${chat._id}`)}
          selected={selected}
        >
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={chat.latestMessage?.user.imageUrl} />
          </ListItemAvatar>
          <ListItemText
            primary={chat.name}
            secondary={
              <Box
                sx={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}
              >
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: 'text.primary', display: 'inline' }}
                >
                  {chat.latestMessage?.user.username || ''}
                </Typography>
                <div className="content">
                  {' ' + (chat.latestMessage?.content || '')}
                </div>
              </Box>
            }
          />
        </ListItemButton>
      </ListItem>
      <Divider variant="inset" />
    </>
  );
};

export default ChatListItem;

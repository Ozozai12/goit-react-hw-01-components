import {
  OnlineStatus,
  FriendsImage,
  FriendsName,
} from '../FriendListItem/FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <OnlineStatus active={isOnline === true}>{isOnline}</OnlineStatus>
      <FriendsImage
        className="avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <FriendsName>{name}</FriendsName>
    </div>
  );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
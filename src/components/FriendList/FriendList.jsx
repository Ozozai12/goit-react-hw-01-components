import {
  OnlineStatus,
  FriendListContainer,
  FriendBadge,
  FriendsImage,
  FriendsName,
} from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(friend => {
        return (
          <FriendBadge key={friend.id}>
            <OnlineStatus active={friend.isOnline === true}>
              {friend.isOnline}
            </OnlineStatus>
            <FriendsImage
              className="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <FriendsName>{friend.name}</FriendsName>
          </FriendBadge>
        );
      })}
    </FriendListContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};



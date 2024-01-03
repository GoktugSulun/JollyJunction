import React from 'react';
import * as S from '../Style/Dashboard.style';
import { useSelector } from 'react-redux';
import Loading from '../../../Core/Components/Loading/Loading';
import { FriendSkeleton } from '../../../Components/Skeletons';
import Friend from './Friend';


const FriendList = () => {
  const { friends, loading } = useSelector((state) => state.Dashboard);

  return (
    <S.FriendList>
      <div className="title"> Friend List </div>
      <div className="friend-list">
        {
          !friends.length && loading?.getFriends === false
            ? <div className="no-friend"> Click &quot;Add Friend&quot; Icon on the top right of the post in order to add friend. </div>
            : friends.map((obj, idx) => <Friend key={idx} data={obj} isLastElement={friends.length - 1 === idx} />)
        }
        { loading?.getFriends && <FriendSkeleton count={2} /> }
        { loading?.getFriends && <Loading margin="20px" /> }
      </div>
    </S.FriendList>
  );
};

export default FriendList;
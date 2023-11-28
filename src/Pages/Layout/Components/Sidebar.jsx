import React from 'react';
import Advertisement from '../../Dashboard/Components/Advertisement';
import FriendList from '../../Dashboard/Components/FriendList';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div style={{ flex: 1 }}>
      <Advertisement />
      { !pathname.includes('profile') && <FriendList /> }
    </div>
  );
};

export default Sidebar;
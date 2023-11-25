import React, { useEffect, useState } from 'react';
import Post from '../Dashboard/Components/Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../Core/Components/Loading/Loading';
import NoData from './Components/NoData';
import { useNavigate, useParams } from 'react-router-dom';
import { UserProfileSagaActions } from './Store/UserProfile.saga';
import { Button } from '../../Core/Components/Buttons/Button.style';
import PostModal from '../../Components/PostModal/PostModal';
import { DashboardSagaActions } from '../Dashboard/Store/Dashboard.saga';
import { DashboardActions } from '../Dashboard/Store/Dashboard.slice';
import { snackbar } from '../../Core/Utils/Snackbar';
import { NotifierTypes } from '../../Core/Constants/Enums';
import useHttpResponse from '../../Core/Hooks/useHttpResponse';

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [isValidParam, setIsValidParam] = useState(false);
  const { authorizedUser } = useSelector((state) => state.AppConfig.init);
  const { posts, loading, page, limit, canBeMorePost } = useSelector((state) => state.Dashboard);

  // TODO: 'More Post' button and the snackbar message are gonna be removed. Instead of this, I am gonna do scroll & fetch combination. 
  const fetchMorePost = () => {
    if (canBeMorePost) {
      dispatch(DashboardSagaActions.getPosts({ page, limit, user_id: params.id }));
    }
  };

  useHttpResponse({
    failure: ({ idleAction }) => {
      idleAction();
      navigate('/');
    }
  }, UserProfileSagaActions.getUserById());

  useEffect(() => {
    if (isValidParam) {
      dispatch(DashboardSagaActions.getPosts({ page: 1, limit: 10, user_id: parseInt(params.id) }));
    }
  }, [isValidParam]);

  useEffect(() => {
    if (isValidParam && (parseInt(params.id) !== authorizedUser?.id)) {
      dispatch(UserProfileSagaActions.getUserById({ user_id: parseInt(params.id) }));
    }
  }, [isValidParam, authorizedUser]);

  useEffect(() => {
    if (isNaN(parseInt(params.id))) {
      dispatch(snackbar("Url couldn't found", { variant: NotifierTypes.WARNING }));
      navigate('/');
    }
    setIsValidParam(true);
  }, [params.id]);

  useEffect(() => {
    return () => {
      dispatch(DashboardActions.setReset());
    };
  }, []);

  return (
    <div>
      {
        !posts.length && loading?.getPosts === false
          ? <NoData />
          : posts.map((obj) => (
            <Post 
              key={obj.id}
              data={obj}
            />
          ))
      }
      { loading?.getPosts && !posts.length && <div className="loading-container"> <Loading /> </div> }
      {
        !!posts.length && canBeMorePost
          && (<div className="more-button-container">
            <Button onClick={fetchMorePost}> More Post </Button>
          </div>)
      }
      <PostModal />
    </div>
  );
};

export default UserProfile;
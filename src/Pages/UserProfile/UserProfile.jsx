import React, { useEffect } from 'react';
import Post from '../Dashboard/Components/Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../Core/Components/Loading/Loading';
import NoData from './Components/NoData';
import { useNavigate, useParams } from 'react-router-dom';
import { UserProfileSagaActions } from './Store/UserProfile.saga';
import { DashboardSagaActions } from '../Dashboard/Store/Dashboard.saga';
import { DashboardActions } from '../Dashboard/Store/Dashboard.slice';
import { snackbar } from '../../Core/Utils/Snackbar';
import { ModalTypes, NotifierTypes } from '../../Core/Constants/Enums';
import useHttpResponse from '../../Core/Hooks/useHttpResponse';
import { PostModalActions } from '../../Components/PostModal/Store/PostModal.slice';
import { PostSkeleton } from '../../Components/Skeletons';
import { AppConfigSagaActions } from '../../Core/Store/AppConfig.saga';

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { authorizedUser } = useSelector((state) => state.AppConfig.init);
  const { posts, loading, page, limit, canBeMorePost } = useSelector((state) => state.Dashboard);

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

  // useEffect(() => {
  //   if ((parseInt(params.id) !== authorizedUser?.id)) {
  //     dispatch(UserProfileSagaActions.getUserById({ user_id: parseInt(params.id) }));
  //   }
  // }, [authorizedUser]);

  useHttpResponse({
    success: ({ idleAction }) => {
      idleAction();
      dispatch(AppConfigSagaActions.getUnseenNotifications({ query: `?is_removed=false&seen=false&receiver_id=${authorizedUser.id}`}));
    }
  }, DashboardSagaActions.acceptFriendship());

  useEffect(() => {
    if (isNaN(parseInt(params.id))) {
      dispatch(snackbar("Url couldn't found", { variant: NotifierTypes.WARNING }));
      navigate('/');
    } else {
      dispatch(DashboardActions.setReset());
      dispatch(DashboardSagaActions.getPosts({ page: 1, limit: 10, user_id: parseInt(params.id) }));
    }
  }, [params.id]);

  useEffect(() => {
    return () => {
      dispatch(DashboardActions.setReset());
      dispatch(PostModalActions.handleModal(ModalTypes.CLOSE));
    };
  }, []);

  return (
    <div>
      {
        !posts.length && loading?.getPosts === false
          ? <NoData message="There is no post in this profile." />
          : posts.map((obj, index) => (
            <Post 
              key={obj.id}
              data={obj}
              className="post"
              {...(posts.length - 1 === index ? { fetchMorePost, isLastElement: true } : {})}
            />
          ))
      }
      { loading?.getPosts && <PostSkeleton count={2} />}
      { loading?.getPosts && <div className="loading-container"> <Loading /> </div> }
    </div>
  );
};

export default UserProfile;
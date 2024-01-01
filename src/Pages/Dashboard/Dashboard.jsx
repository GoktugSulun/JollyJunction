import React, { useEffect, useState } from 'react';
import * as S from './Style/Dashboard.style';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardSagaActions } from './Store/Dashboard.saga';
import { useNavigate } from 'react-router-dom';
import { useHttpResponse, useMaterialForm } from '../../Core/Hooks';
import { snackbar } from '../../Core/Utils/Snackbar';
import { Checkbox, SelectInput } from '../../Core/Inputs';
import { useWatch } from 'react-hook-form';
import * as yup from 'yup';

const defaultValues = {
  user_id: '', 
  checked: false
};

const DUMMY_VALUES = [
  {
    id: 1,
    name: 'Goktug'
  },
  {
    id: 2,
    name: 'Damla'
  },
  {
    id: 3,
    name: 'Oznur'
  },
  {
    id: 4,
    name: 'Sedat'
  }
];

const schema = yup.object({
  checked: yup.bool().test('isReaded', 'Lütfen sözleşmeyi kabul ediniz!', (value) => value)
});

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.Dashboard);
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);

  const { registerHandler, form } = useMaterialForm({
    defaultValues,
    schema
  });

  const onSubmit = (data) => {
    console.log(data, ' data');
  };

  const onError = (errors) => {
    console.log(errors, ' errors');
  };

  const reFetch = () => {
    console.log(form.getValues(), ' fpormös');
    form.handleSubmit(onSubmit, onError)();
    // dispatch(DashboardSagaActions.getPosts([{ id: 1, name: 2 }]));
  };

  useHttpResponse({
    success: ({ idleAction, payload }) => {
      dispatch(snackbar('Postlar başarıyla geldi'));
      idleAction();
    }
  }, DashboardSagaActions.getPosts());

  useEffect(() => {
    dispatch(DashboardSagaActions.getPosts());
  }, []);

  useEffect(() => {
    console.log(value, ' value');
  }, [checked]);

  return (
    <S.Dashboard>
      <h2> Posts - Dashboard </h2>
      <button onClick={reFetch} > ReFetch posts </button>
      <button onClick={() => navigate('/register')} > Register </button>
      <button onClick={() => navigate('/login')} > Login </button>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 30, justifyContent: 'center', padding: 100 }}>
        <SelectInput 
          label="Users" 
          fullWidth 
          helperText="Doldurulması zorunlu alandır!"
          {...registerHandler('user_id')}
          // value={value}
          data={DUMMY_VALUES}
          emptyValue="None"
          onChange={(_, value) => setValue(value)}
        />

        <Checkbox 
          label="Okudum, kabul ediyorum"
          // checked={checked}
          {...registerHandler('checked')}
          onChange={(_, value) => {
            console.log(value, ' VALUE ON CHANGE ÇEK');
            setChecked(value);
          }}
        />
      </div>

      {
        !posts.length
          ? <p> There is no posts </p>
          : posts.map((post) => {
            return (
              <div key={post.id}> { post.name } </div>
            );
          })
      }
    </S.Dashboard>
  );
};

export default Dashboard;
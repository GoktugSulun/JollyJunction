import React from 'react';
import * as S from './Style/Settings.style';
import TextInput from '../../Core/Inputs/TextInput';
import SelectInput from '../../Core/Inputs/SelectInput';

const countries = [
  { id: 1, name: 'Türkiye' },
  { id: 2, name: 'USA' },
  { id: 3, name: 'England' },
];

const Settings = () => {
  return (
    <S.Settings>
      <div className="content">
        <section>
          <h2 className="title"> Account </h2>
          <div className="group">
            <TextInput label="Name" />
            <TextInput label="Surname" />
          </div>
          <div className="group">
            <TextInput label="Email" />
            <TextInput label="Password" type="password" />
          </div>
        </section>
        <section>
          <h2 className="title"> Personal </h2>
          <div className="group">
            <SelectInput label="Country" data={countries} />
            <TextInput label="Surname" />
          </div>
          <div className="group">
            <TextInput label="Email" />
            <TextInput label="Password" type="password" />
          </div>
        </section>
        <section>
          <h2 className="title"> Social Media </h2>
        </section>
      </div>
    </S.Settings>
  );
};

export default Settings;
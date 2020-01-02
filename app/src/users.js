import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  TextInput,
  Edit,
  Create,
  SimpleForm,
  DisabledInput,
} from 'react-admin';

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="firstname" />
      <TextField source="lastname" />
      {/* <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" label="Address" />
      <TextField source="phone" />
      <UrlField source="website" />
      <TextField source="company.name" label="Company" /> */}
    </Datagrid>
  </List>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="address.street" />
            <TextInput source="phone" />
            <TextInput source="website" />
            <TextInput source="company.name" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="address.street" />
            <TextInput source="phone" />
            <TextInput source="website" />
            <TextInput source="company.name" />
        </SimpleForm>
    </Create>
);
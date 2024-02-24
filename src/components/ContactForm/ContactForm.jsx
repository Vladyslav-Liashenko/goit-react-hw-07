import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlice';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 sumb long')
    .required('This is a required field'),
  number: Yup.number()
    .min(5, 'Number must be at least 5 sumb long')
    .required('This is a required field'),
});

export const ContactForm = () => {
  const nameField = useId();
  const numberField = useId();

  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          dispatch(addContact({ id: nanoid(), ...values }));
          actions.resetForm();
        }}
      >
        <Form autoComplete="off">
          <div className={styled.form}>
            <label htmlFor={nameField} className={styled.label}>
              Name
            </label>
            <Field type="text" name="name" id={nameField} />
            <ErrorMessage name="name" component="span" />

            <label htmlFor={numberField} className={styled.label}>
              Number
            </label>
            <Field type="text" name="number" id={numberField} />
            <ErrorMessage name="number" component="span" />

            <button type="submit" className={styled.btnAdd}>
              Add contact
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

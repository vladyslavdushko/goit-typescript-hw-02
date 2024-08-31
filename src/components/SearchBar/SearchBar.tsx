import React from 'react';
import { Formik, Form, Field, FormikProps, FormikValues , FormikHelpers  } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import css from "./SearchBar.module.css";
import { IoMdSearch } from "react-icons/io";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

interface FormValues {
  query: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions: FormikHelpers<FormValues>) =>  {
          if (values.query.trim() === '') {
            toast.error('Please enter a search term');
            return;
          }
          onSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field name="query">
            {({ field }: { field: FormikValues }) => (
              <input
                {...field}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                className={css.input}
              />
            )}
          </Field>
          <button type="submit" className={css.button}>
            <IoMdSearch />
          </button>
          <Toaster position="top-right" reverseOrder={false} />
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
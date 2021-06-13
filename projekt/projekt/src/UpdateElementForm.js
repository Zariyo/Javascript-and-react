import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
const axios = require('axios')
let _ = require('lodash')




function UpdateElementForm() {

  let x = window.location.pathname.slice(9)

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.default.get("http://localhost:5000/api/book/" + x)
      .then(response => setBooks(response.data))
  })

  const validate = values => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Tytuł jest wymagany';
    }

    if (!values.author) {
      errors.author = 'Autor jest wymagany';
    }
    if (!values.genre) {
      errors.genre = 'Kategoria jest wymagana';
    }
    else if (/.*[0-9].*/i.test(values.genre)) {
      errors.genre = 'Kategoria nie może zawierać cyfr';
    }
    if (!values.release_date) {
      errors.release_date = 'Data wydania jest wymagana';
    }

    if (!values.image_url) {
      errors.image_url = 'Link do okładki jest wymagany';
    } else if (!/(https?:\/\/.*\.(?:jpg|png|jpeg|img|svg))/i.test(values.image_url)) {
      errors.image_url = 'Nieprawidłowy link do okładki (akceptowane rozszerzenia: .jpg, .png, .jpeg, .img, .svg)';
    }

    return errors;
  };

  return (
    <div>
      <Formik enableReinitialize initialValues={
        {
          title: books.title,
          author: books.author,
          genre: books.genre,
          release_date: books.release_date,
          description: books.description,
          image_url: books.image_url
        }
      } onSubmit={(values) => {
        if (_.isEmpty(validate(values))) {
          axios.put('http://localhost:5000/api/book/' + x, values)
          window.location.href = window.location.pathname
        }
        else {
          let errors = validate(values)
          let alerts = []
          if (errors.title) {
            alerts.push(errors.title)
          }
          if (errors.author) {
            alerts.push('\n' + errors.author)
          }
          if (errors.genre) {
            alerts.push('\n' + errors.genre)
          }
          if (errors.image_url) {
            alerts.push('\n' + errors.image_url)
          }
          alert(alerts)
        }

      }}>

        <Form>
          <Field name="title" type="text" />
          <Field name="author" type="text" />
          <Field name="genre" type="text" />
          <Field name="release_date" type="date" />
          <Field as="textarea" name="description" type="text" />
          <Field as="textarea" name="image_url" type="text" />
          <button type="submit">Zatwierdź</button>
        </Form>
      </Formik>
    </div>
  );
}

export default UpdateElementForm;

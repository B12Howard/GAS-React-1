import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
import "../styles.css";
import validate from "../js/form-input2-validation-rules";
// import {useHistory} from 'react-router-dom';

const FormInput2 = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  // let history = useHistory();

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log("No errors, submit callback called!");
      setIsSubmitting(false);
    }
  }, [errors]);

  const handleSubmit = event => {
    event.preventDefault();
    setErrors(validate(values));
    console.log(values);
    setIsSubmitting(true);
    setValues({});
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
    setErrors(validate(values));
    console.log(errors);
  };

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input
              className="validate"
              placeholder="First Name"
              type="text"
              name="firstname"
              onChange={handleChange}
              value={values.firstname || ""}
              required
            />
            {errors.firstname && (
              <p
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                {errors.firstname}
              </p>
            )}
            <input
              placeholder="Last Name"
              type="text"
              name="lastname"
              onChange={handleChange}
              value={values.lastname || ""}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Address 1"
              type="text"
              name="address1"
              onChange={handleChange}
              value={values.address1}
            />
            <input
              placeholder="Address 2"
              type="text"
              name="address2"
              onChange={handleChange}
              value={values.address2 || ""}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="City"
              type="text"
              name="city"
              onChange={handleChange}
              value={values.city || ""}
            />
            <input
              placeholder="State"
              type="text"
              name="stateinput"
              onChange={handleChange}
              value={values.stateinput || ""}
            />
            <input
              placeholder="Zip"
              type="number"
              min="00000"
              max="99999"
              name="zip"
              onChange={handleChange}
              value={values.zip || ""}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Phone 1"
              type="tel"
              name="phone1"
              onChange={handleChange}
              value={values.phone1 || ""}
            />
            <input
              placeholder="Phone 2"
              type="tel"
              name="phone2"
              onChange={handleChange}
              value={values.phone2 || ""}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              className="validate"
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email || ""}
              required
            />
            {errors.email && (
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                {errors.email}
              </span>
            )}
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <textarea
              placeholder="Note"
              name="note"
              onChange={handleChange}
              value={values.note || ""}
            />
          </div>
        </div>
        <button className="btn-small btn">Submit</button>
      </form>
    </div>
  );
};

export default FormInput2;

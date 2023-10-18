import { useState } from 'react';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './RegistrationForm.css';
import { INewUser } from '../../models/INewUser';

function RegistrationForm() {
  const [validated, setValidated] = useState(false);
  const [newUser, setNewUser] = useState<INewUser>({
    email: '',
    password: '',
});

  // const sendUserDataToStorage = (user:INewUser) => {
  //   //...
  // };

  const handleSubmit = (event:any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      event.preventDefault();
      event.stopPropagation();
      console.log(newUser);
      // sendUserDataToStorage(newUser);
      // redirect ...
    }
    // setNewUser({email: '', password: ''})
    setValidated(true);
  };

  return (
    <Form className='registration-form' noValidate validated={validated} onSubmit={handleSubmit}>
      <div className='registration-form__title-wrapper'>
        <h4 className='registration-form__title'> Sign up</h4>
      </div>
      <div className='registration-form__inputs-wrapper'>
        <FloatingLabel
          className='mb-3 registration-form__input--floating'
          label="E-mail"
        >
          <Form.Control 
            className='registration-form__input' 
            required 
            type="email" 
            placeholder="name@example.com" 
            value={newUser.email}
            onChange={ e => setNewUser({...newUser, email: e.target.value})}
          />
        </FloatingLabel>

        <FloatingLabel 
          className='registration-form__input--floating' 
          label="Password"
        >
          <Form.Control 
            className='registration-form__input' 
            required 
            type="password" 
            placeholder="Password" 
            value={newUser.password}
            onChange={ e => setNewUser({...newUser, password: e.target.value})}
          />
        </FloatingLabel>
        <div className='registration-form__input-checkbox-wrapper'>
          <Form.Check>
            <Form.Check.Input required />
            <Form.Check.Label>
              <p className='registration-form__input-checkbox-label'>I agree to the <a href='/'>Terms and Conditions</a>  and I confirm that I am eighteen (18) years of age or older</p>
            </Form.Check.Label>
          </Form.Check>
        </div>
      </div>
      <div className='registration-form__submit-btn-wrapper'>
        <button className='registration-form__submit-btn' type="submit">Create profile</button>
      </div>
      <div className='registration-form__privacy-wrapper'>
        <p className='registration-form__privacy-title'>
          This site is protected by reCAPTCHA and the Google <a href='/'>Privacy Policy</a> and <a href='/'>Terms of Service</a> apply
        </p>
      </div>
    </Form>
  );
}

export default RegistrationForm;
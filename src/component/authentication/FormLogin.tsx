import { CFormInput, CLink, CFormFeedback, CForm } from '@coreui/react';
import styles from "../../assets/styleLogin.module.scss";
import Button from '../custome/Button';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
  email: string;
  password: string;
}

function FormLogin() {
  const schema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };


  return (
    <div>
      <div className={styles.login}>
        <h1>Welcome Back</h1>
        <CForm className="w-100" onSubmit={handleSubmit(onSubmit)}>
          <CFormInput
            className="mb-4"
            type="text"
            {...register('email')}
            size="lg"
            placeholder="Email"
            aria-label="lg input example"
          />
          {errors.email && <CFormFeedback>{errors.email.message}</CFormFeedback>}
          
          <CFormInput
            className="mb-4"
            type="password"
            {...register('password')}
            size="lg"
            placeholder="Password"
            aria-label="lg input example"
          />
          {errors.password && <CFormFeedback>{errors.password.message}</CFormFeedback>}
          
          <CLink to="/" className={`text-white ${styles.link}`}>
            Forgot password ?
          </CLink>
          <Button name="LOGIN" link=""></Button>
        </CForm>
        <CLink to="/" className={`mt-4 text-white ${styles.link}`}>
          Create Account
        </CLink>
      </div>
    </div>
  );
}

export default FormLogin;

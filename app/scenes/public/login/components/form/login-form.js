import { navigateTo } from '../../../../../Router.js';
import { formValidator } from '../../../../../helpers';
import style from './login-form.css';

export async function LoginFormComponent() {
  const root = document.getElementById('root');

  console.log(style);
  root.innerHTML = `
  <div class="${style.body}">
    <div class="${style.container1}">
    <h1>hola</h1>
    </div>
    <div class="${style.container2}">
        <div class="${style.form1}">
            <form class="${style.form}" method="post">
                <input class="${style.input}" type="text" name="username" placeholder="Username">
                <input class="${style.input}" type="password" name="password" placeholder="********">
                <input class="${style.input}" type="submit" name="login" value="Login">
                <a href="#" class="${style.google}">Login with Google</a>
                <a href="#" class="${style.forpass}">Forgot password?</a>
            </form>
        </div>
    </div>
  </div>
`;
  
  const form = document.getElementById('loginForm');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(!formValidator(email, password)){
      alert('Please fill in all fields');
      return;
    }
    const token = await login(email, password);
    if (token) {
      localStorage.setItem('token', token);
      navigateTo('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  });
}

async function login(email, password) {
  try {
    const response = await fetch('http://localhost:4000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }

    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error('Login failed:', error);
    return null;
  }
}

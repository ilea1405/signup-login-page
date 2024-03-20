const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here, you can add your login logic to authenticate the user
    // For example, you can send a request to a server to verify the credentials

    console.log('Username:', username);
    console.log('Password:', password);

    // Reset the form after submission
    loginForm.reset();
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here, you can add your sign-up logic to create a new user account
    // For example, you can send a request to a server to create a new user

    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset the form after submission
    signupForm.reset();
});
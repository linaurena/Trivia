const Register = () => {
    const template = document.createElement('div');
    template.innerHTML = `
        <header>
            <img src="" alt="Cinefilos logo">
        </header>
        <p>
            Hello...
        </p>
        <a href="/categories">Select a category</a>
        <img src="" alt="Pet of Trivia">`;
    return template;
};

export default Register;
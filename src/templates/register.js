const Register = () => {
    alert('Escribe tu nombre o sé invitado');
    const template = document.createElement('div');
    template.innerHTML = `
        <header>
            <img src='' alt='Cinefilos logo'>
        </header>
        <p>
            Hello...
        </p>
        <p>
            <label for='username'></label>
            <input type='text' id='username'>
        </p>
        <a href='#/categories'>Select a category</a>
        <img src='' alt='Pet of Trivia'>`;
    return template;
};

export default Register;
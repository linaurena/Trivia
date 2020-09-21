const Onboarding = () => {
    const template = document.createElement('div');
    template.innerHTML = `
        <header>
            <img src="" alt="Cinefilos logo">
        </header>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores distinctio nulla deserunt laboriosam cupiditate eos, sit officiis obcaecati. Similique tenetur corporis laudantium mollitia expedita molestiae aut suscipit dolor labore! Minima?
        </p>
        <a href='#/register'>Play</a>
        <img src="" alt="Popcorn">`;
    return template;
};

export default Onboarding;
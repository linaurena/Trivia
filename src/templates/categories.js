const Categories = () => {
    const template = document.createElement('div');
    template.innerHTML = `
        <p>
            <span>Nombre</span>, por cual categoría te gustaría empezar?
        </p>
        <a href='#/movies'><img src='' alt='Monster eating popcorn in cinema'></a>
        <a href='#/series'><img src='' alt='Monster eating popcorn on its sofa'></a>`;
    return template;
};

export default Categories;
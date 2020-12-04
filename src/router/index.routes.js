import Onboarding from '../templates/onboarding.js';
import Register from '../templates/register.js';
import Categories from '../templates/categories.js';

const root = document.getElementById('root');

const router = (route) => {
    root.innerHTML = '';
    switch(route){
        case '': {
            return root.appendChild(Onboarding());
        }
        case '#/register': {
            return root.appendChild(Register());
        }
        case '#/categories': {
            return root.appendChild(Categories());
        }
        default: 
            return root.appendChild(Onboarding());
    }
};

export {router};

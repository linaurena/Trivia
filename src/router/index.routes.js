import Onboarding from '../templates/onboarding.js';
import Register from '../templates/register.js';

const root = document.getElementById('root');

const router = (route) => {
    root.innerHTML = '';
    switch(route){
        case '#/': {
            return root.appendChild(Onboarding());
        }
        case '#/register': {
            return root.appendChild(Register());
        }
        default: 
            return root.appendChild(Onboarding());
    }
};

export {router};

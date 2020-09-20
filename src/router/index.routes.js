import Onboarding from '../templates/onboarding.js';

const root = document.getElementById('root');

const router = (route) => {
    root.innerHTML = '';
    switch(route){
        default:
            return root.appendChild(Onboarding());
    }
};

export {router};

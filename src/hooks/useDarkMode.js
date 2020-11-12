import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = (initialValue) => {
    const [value, setValue] = useLocalStorage('toggled', initialValue);
    
    useEffect(() => {
        const body = document.querySelector('body');
        if(localStorage.getItem('toggled') === 'true'){
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }, [value])

    return [value, setValue];
}
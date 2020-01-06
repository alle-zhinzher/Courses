const generateRandomDelay = () => Math.floor(Math.random()*2000)
const randomNumber = () => Math.floor(Math.random()*4)

const colors = ['red', 'blue', 'yellow']

const changeColorAPI = async () => {
    return await new Promise((resolve, reject) => { 
        setTimeout(() => { 
            resolve(colors[randomNumber()]); 
        }, generateRandomDelay());
    });
};


export {
    changeColorAPI,
};
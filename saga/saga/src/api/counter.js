const generateRandomDelay = () => Math.floor(Math.random()*2000)


const incCounterOnAPI = async value => {
    return await new Promise((resolve, reject) => { 
        setTimeout(() => { 
            resolve(++value); 
        }, generateRandomDelay());
    });
};

const decCounterOnAPI = async value => {
    return await new Promise((resolve, reject) => { 
        setTimeout(() => { 
            resolve(--value); 
        }, generateRandomDelay());
    });
};


export {
    incCounterOnAPI,
    decCounterOnAPI,
};
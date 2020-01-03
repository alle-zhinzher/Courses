const generateRandomDelay = () => Math.floor(Math.random()*2000)


const calcMulAPI = async (value1, value2) => {
    return await new Promise((resolve, reject) => { 
        setTimeout(() => { 
            resolve(value1 * value2); 
        }, generateRandomDelay());
    });
};

const calcDivAPI = async (value1, value2) => {
    return await new Promise((resolve, reject) => { 
        setTimeout(() => { 
            if (1*value2) {
                resolve(value1 / value2); 
            } else {
                reject("Zero devision")
            }
        }, generateRandomDelay());
    });
};

const clacSqrtAPI = async value => {
    return await new Promise((resolve, reject) => { 
        setTimeout(() => { 
            if (value >= 0) {
                resolve(Math.sqrt(value))
            } else {
                reject("Number is negative, imposible to calculate sqrt")
            }
        }, generateRandomDelay());
    });
};


export {
    calcDivAPI,
    calcMulAPI,
    clacSqrtAPI,
};
const generateLineEquation = (point1, point2) => {
    /* 
    line equation: Ax + By + C = 0, where
    A = (y1 - y2)
    B = (x2 - x1)
    C = (x1y2 - x2y1)
    from this: 
    y = (-Ax - C)/(-B)
    */
    return ({
        Xcoef: point1.y - point2.y,
        Ycoef: point2.x - point1.x,
        FreeCoef: point1.x * point2.y - point2.x * point1.y,
    });
};

const getApproximatePriceOfCurrency = (startOfLine, endOfLine, point) => {
    
    if (startOfLine.x < 0 | endOfLine.x < 0) {
        throw new Error('Time con`t be negative')
    }

    if (startOfLine.y < 0 | endOfLine.y < 0) {
        throw new Error('Price con`t be negative')
    }

    if (startOfLine.x > endOfLine.x) {
        throw new Error('Start time can`t be bigger then End time')
    }

    const lineEquation = generateLineEquation(startOfLine, endOfLine);
    
    if (point > startOfLine.x && point < endOfLine.x) {
        return ((-lineEquation.Xcoef) * point - lineEquation.FreeCoef) / lineEquation.Ycoef
    } else {
        throw new Error("Point out of the possible range")
    }
};
const startDate = new Date(2020, 0, 6, 3)
const endDate = new Date(2020, 0, 6, 9)
const pointDate = new Date(2020, 0, 6, 5)

console.log(getApproximatePriceOfCurrency({x: startDate, y: 7369.20}, {x: endDate, y: 7513.50}, pointDate));
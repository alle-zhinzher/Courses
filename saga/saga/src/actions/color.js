import { COLOR } from '../constants/color';

const changeColor = () => ({
    type: COLOR.CHANGE_COLOR,
});

const setColor = color => ({
    type: COLOR.SET_COLOR,
    color
});

export { 
    changeColor,
    setColor,
}
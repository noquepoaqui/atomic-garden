export const getRandom = () => Math.random();
export const getRandomNumber = (maxNumber) => Math.random() * maxNumber;
export const getRandomInteger = (maxNumber) => Math.floor(getRandomNumber(maxNumber));
export const getRandomInterval = (minNumber, maxNumber) => getRandomInteger(maxNumber - minNumber) + minNumber;

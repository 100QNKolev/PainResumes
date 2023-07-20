import { faker } from '@faker-js/faker';

export const userGenerator = async () => {
    const userData = {};

    userData.username = faker.internet.userName();
    userData.email = faker.internet.email();

    const password = generatePassword();

    userData.password = password;
    userData.repeatPassword = password;

    return userData;
};

const generatePassword = () => {
    const passwordLength = 10;
    const passwordChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * passwordChars.length);
      password += passwordChars[randomIndex];
    }
    return password;
  };
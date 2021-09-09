const {Builder, By, Key, until} = require('selenium-webdriver');

async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://ex-oblivione.github.io/2nd-task/dist/index.html');

        const searchBtn = driver.findElement(By.linkText("ЗАРЕГИСТРИРОВАТЬСЯ"));
        const actions = driver.actions({async: true});
        await actions.move({origin:searchBtn}).click().perform();

        const registrationForm = driver.findElement(By.css('.registration'));


        // Get array of registration forms for name, last name, email and password
        const registrationFields = await registrationForm.findElements(By.css('.registration__name-form'));

        // Enter name
        const firstNameFieldInput = await registrationFields[0].findElement(By.css('.text-field'));
        await firstNameFieldInput.sendKeys('John ');

        // Enter last name
        const lastNameFieldInput = await registrationFields[1].findElement(By.css('.text-field'));
        await lastNameFieldInput.sendKeys('Doe');

        // Choose sex
        await registrationForm.findElement(By.id('radio-first')).click();

        // Enter date of birth
        await registrationForm.findElement(By.css('.date-dropdown__input')).click();

        const datepicker = await driver.findElement(By.css('.datepicker'))
        await datepicker.findElement(By.css('.datepicker--nav-title')).click();
        await datepicker.findElement(By.css('.datepicker--nav-title')).click();
        await datepicker.findElement(By.css('.datepicker--nav-action')).click();
        await datepicker.findElement(By.css('.datepicker--nav-action')).click();
        await datepicker.findElement(By.css('.datepicker--nav-action')).click();
        const birthYear = await datepicker.findElement(By.css('.datepicker--content')).findElement(By.css('.datepicker--years')).findElement(By.css('.datepicker--cells')).findElements(By.css('.datepicker--cell'));
        await birthYear[3].click();
        const birthMonth = await datepicker.findElement(By.css('.datepicker--content')).findElement(By.css('.datepicker--months')).findElement(By.css('.datepicker--cells')).findElements(By.css('.datepicker--cell'));
        await birthMonth[11].click();
        const birthDay = await datepicker.findElement(By.css('.datepicker--content')).findElement(By.css('.datepicker--days')).findElement(By.css('.datepicker--cells')).findElements(By.css('.datepicker--cell'));
        await birthDay[11].click();
        await datepicker.findElement(By.css('.datepicker--button')).click();

        // Enter email
        const emailFieldInput = await registrationFields[2].findElement(By.css('.text-field'));
        await emailFieldInput.sendKeys('johndoe@anymail.ru');

        // Enter password
        const passwordFieldInput = await registrationFields[3].findElement(By.css('.text-field'));
        await passwordFieldInput.sendKeys('*********');


        await registrationForm.findElement(By.css('.toggle')).click();
    }
    finally {
        setTimeout(() =>  driver.quit(), 10000);
    }
}
example();
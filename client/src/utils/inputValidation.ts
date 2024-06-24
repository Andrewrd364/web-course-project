// Функция проверки пароля
export const isValidPassword = (password: string): boolean => {
    // Пароль должен содержать как минимум одну цифру, одну маленькую букву, одну большую букву и один специальный символ
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return passwordRegex.test(password);
};

// Функция проверки email
export const isValidEmail = (email: string): boolean => {
    // Простейшая проверка на соответствие формату email-адреса
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Функция для проверки валидности номера телефона
export const isPhoneNumberValid = (phoneNumber: string): boolean => {
    const phoneRegex = /^\d{11}$/;
    return phoneRegex.test(phoneNumber);
};

// Функция для проверки валидности даты в формате DD.MM.YY
export const parseAndValidateDate = (date: string): Date | false => {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{2})$/;
    if (!dateRegex.test(date)) {
        return false;
    }

    const [day, month, year] = date.split('.').map(Number);

    // Проверка на корректность дня и месяца
    if (day < 1 || day > 31 || month < 1 || month > 12) {
        return false;
    }

    // Проверка на корректность числа дней в месяце
    const daysInMonth = new Date(2000 + year, month, 0).getDate(); // 2000 + year для корректного определения високосных годов
    if (day > daysInMonth) {
        return false;
    }

    // Создание объекта Date
    const parsedDate = new Date(2000 + year, month - 1, day); // month - 1, потому что месяцы в объекте Date нумеруются с 0
    return parsedDate;
};


// Функция для проверки валидности времени в формате HH:MM
export const isTimeValid = (time: string): boolean => {
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (!timeRegex.test(time)) {
        return false;
    }

    const [hours, minutes] = time.split(':').map(Number);

    // Проверка на корректность часов и минут
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        return false;
    }

    return true;
};

// Функция для проверки, является ли строка числом
export const isNumber = (value: string): boolean => {
    return !isNaN(parseFloat(value)) && isFinite(Number(value));
};

// Функция для проверки, является ли строка целым числом
export const isInteger = (value: string): number | false => {
    const intRegex = /^-?\d+$/;
    if (intRegex.test(value)) {
        return parseInt(value, 10);
    }
    return false;
};



/**
 * Комбинирует строку даты и времени в один объект Date.
 * @param dateString Строка с датой в формате DD.MM.YY.
 * @param timeString Строка с временем в формате HH:MM.
 * @returns Объект Date, если строки корректны, иначе false.
 */
const combineDateTime = (dateString: string, timeString: string): Date | false => {
    // Регулярное выражение для проверки даты в формате DD.MM.YY
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{2})$/;
    
    // Проверка формата даты
    if (!dateRegex.test(dateString)) {
        return false;
    }

    // Парсинг строки даты
    const [day, month, year] = dateString.split('.').map(Number);

    // Проверка на корректность дня и месяца
    if (day < 1 || day > 31 || month < 1 || month > 12) {
        return false;
    }

    // Парсинг строки времени
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    
    // Проверка формата времени
    if (!timeRegex.test(timeString)) {
        return false;
    }

    // Разделение времени на часы и минуты
    const [hours, minutes] = timeString.split(':').map(Number);

    // Проверка на корректность часов и минут
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        return false;
    }

    // Создание объекта Date
    const combinedDate = new Date(2000 + year, month - 1, day, hours, minutes); // 2000 + year для корректного определения года
    return combinedDate;
};

export default combineDateTime;



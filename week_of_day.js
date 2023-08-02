const weekOfDay = (num) => {
    const obj = {
        0: 'Sun',
        1: "Mon",
        2: 'Tue',
        3: 'Wed',
        4: 'Thu',
        5: 'Fri',
        6: 'Sat'
    }
    return console.log(`Day of the Week is ${obj[num%7]}`);
}
weekOfDay(15);
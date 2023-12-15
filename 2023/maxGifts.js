// Reto #14: 🚨 Evita la alarma
//Challenge #14: Avoid the alarm
// Con el tema de las redes sociales, Santa Claus tiene pánico que los niños se despierten mientras él está repartiendo regalos en sus casos, usen el móvil para grabarlo y se haga viral en TikTok.

// Quiere evitarlo a toda costa. Cada casa en esa calle tiene un número de regalos preparados. Sin embargo, las casas tienen un sistema de seguridad conectado entre casas adyacentes, por lo que no puede dejar los regalos en dos casas seguidas, o se activará la alarma que alertará a los niños.

// Dada un array de enteros no negativos regalos que representa la cantidad de regalos en cada casa, tu tarea es ayudar a Papá Noel a determinar la máxima cantidad de regalos que puede entregar en una noche sin activar ninguna alarma.

// maxGifts([2, 4, 2]) // 4 (4)
// maxGifts([5, 1, 1, 5]) // 10 (5 + 5)
// maxGifts([4, 1, 1, 4, 2, 1]) // 9 (4 + 4 + 1)
// maxGifts([1, 3, 1, 3, 100]) // 103 (3 + 100)
function maxGifts(houses) {
    let n = houses.length;
    let include = Array.from(n)
    let exclude = Array.from(n)


    include[0] = houses[0];
    exclude[0] = 0;

//maxGifts([5, 1, 1, 5])
    for (let i = 1; i < n; i++) {
        console.log("index:",i)
        //'-----------------'
        include[i] = houses[i] + exclude[i - 1];
        console.log("include[i]:", include[i], ", houses[i]:", houses[i], "+ exclude[i-1]: ", exclude[i - 1], "=", houses[i] + exclude[i - 1])
        //'-----------------'
        exclude[i] = Math.max(include[i - 1], exclude[i - 1]);
        console.log("exclude[i]:", include[i], ", Max(include[i - 1]:", include[i - 1], "+ exclude[i-1]:", exclude[i - 1], "):", Math.max(include[i - 1], exclude[i - 1]))
        console.log("include", include)
        console.log("exclude", exclude)
        console.log('-----------------')
    }
    console.log("include", include)
    console.log("exclude", exclude)
    return Math.max(include[n - 1], exclude[n - 1]);
}

//maxGifts([2, 4, 2]) // 4 (4)
maxGifts([5, 1, 1, 5]) // 10 (5 + 5)
// maxGifts([4, 1, 1, 4, 2, 1]) // 9 (4 + 4 + 1)
// maxGifts([1, 3, 1, 3, 100]) // 103 (3 + 100)
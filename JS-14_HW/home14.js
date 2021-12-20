// Зробити свій розпорядок дня. У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// Напиклад. Прикнутись - 0.3с. Поснідати - 1с. Піти в душ - 0.5с. Дочекатись автобус - 3с. Пообідати - 1с. І так далі...

//                                                            #1 Promises
// function wakeUp(isWorkingDay = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isWorkingDay) {
//                 resolve('Waking up');
//             }
//             reject('Sleep 5 minutes more');
//         }, 800);
//     });
// }
//
// function cleanTeeth() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Brushing teethes');
//         }, 200);
//     });
// }
//
// function makeBreakfast(time, eat) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (time >= 20) {
//                 resolve(`Cooking ${eat} with coffee, and pack lunch box`);
//             }
//             reject('Go to work with out eating');
//         }, 400);
//     });
// }
//
// function eatingBreakfast() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Eating breakfast');
//         }, 300);
//     });
// }
//
// function goToBusStation(timeForWork) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (timeForWork >= 40) {
//                 resolve('Go to bus 47A');
//             }
//             reject('Go to bus 6A');
//         }, 600);
//     });
// }
//
// function morningInTheOffice(morningCoffee) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (morningCoffee) {
//                 resolve('Go work');
//             }
//             reject('Make yourself coffee in the office');
//         }, 100);
//     });
// }
//
// function checkingMyEmail(emails) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (emails) {
//                 resolve('Answer for the emails');
//             }
//             reject('Check 1C');
//         }, 700);
//     });
// }
//
// function lunch(lunchBox) {
//     return new Promise((resolve, reject) => {
//         if (lunchBox) {
//             resolve('Eat your Lunch');
//         }
//         reject('Go for a lunch menu');
//     }, 500);
// }
//
// function exercise(timeForLecture) {
//     return new Promise((resolve, reject) => {
//         if (timeForLecture >= 30) {
//             resolve('Do some exercise');
//         }
//         reject('waiting for the lecture');
//     }, 700);
// }
//
// function sleep(makeAllHomeWorks) {
//     return new Promise((resolve, reject) => {
//         if (makeAllHomeWorks) {
//             resolve('Go to sleep');
//         }
//         reject('Try again');
//     }, 600);
// }
//
// wakeUp()
//     .then(getUp => {
//         console.log(getUp);
//         return cleanTeeth();
//     })
//     .then(clean => {
//         console.log(clean);
//         return makeBreakfast(30, 'Sandwich');
//     })
//     .then(breakfast => {
//         console.log(breakfast);
//         return eatingBreakfast();
//     })
//     .then(goForWork => {
//         console.log(goForWork);
//         return goToBusStation(40);
//     })
//     .then(office => {
//         console.log(office);
//         return morningInTheOffice('Coffee');
//     })
//     .then(post => {
//         console.log(post);
//         return checkingMyEmail('emails');
//     })
//     .then(afternoon => {
//         console.log(afternoon);
//         return lunch('chicken with rice');
//     })
//     .then(home => {
//         console.log(home);
//         return exercise(30);
//     })
//     .then(lecture => {
//         console.log(lecture);
//         return sleep('done');
//     })
//     .then(dream => {
//         console.log(dream);
//     })
//     .catch(reason => {
//         console.error('Oops', reason);
//     });

//                                                            #2 ASYNC-AWAIT
// async function myDay() {
//     try {
//         const morning = await wakeUp(true);
//         const clean = await cleanTeeth();
//         const breakfast = await makeBreakfast(30, 'Sandwich');
//         const eat = await eatingBreakfast();
//         const bus = await goToBusStation(40);
//         const office = await morningInTheOffice('Coffee');
//         const emails = await checkingMyEmail('emails');
//         const afternoon = await lunch('chicken with rice');
//         const sport = await exercise(30);
//         const goSleep = await sleep('makeAllHomeWorks');
//         console.log(morning, clean, breakfast, eat, bus, office, emails, afternoon, sport, goSleep);
//     } catch (error){
//         console.error('Oops');
//     }
// }
//
// myDay();


//                                                            #3 CALLBACK
function wakeUp(isWorkingDay = true, callback) {
    setTimeout(() => {
        if (isWorkingDay) {
            callback(null, 'Вставай');
        }
        callback('Поспи ще 5хв.')
    }, 200);
}

function goCooking(eat, callback) {
    setTimeout(() => {
        if (eat) {
            callback(null, `Готую ${eat}`);
        }
        callback('На роботу голодним...')
    }, 100);
}

function goToWork(time, callback) {
    setTimeout(() => {
        if (time >= 40) {
            callback(null, 'Йду спокійно');
        }
        callback('Біжу');
    }, 400);
}

function morningInTheOffice(coffee, callback) {
    setTimeout(() => {
        if (coffee) {
            callback(null, 'Пю воду');
        }
        callback('Роблю каву в офісі');
    }, 300);
}

function working(massages, callback) {
    setTimeout(() => {
        if (massages) {
            callback(null, 'Відписую на листи.');
        }
        callback('Йду на виробництво');
    }, 120);
}

function lunch(lunchbox, callback) {
    setTimeout(() => {
        if (lunchbox) {
            callback(null, 'Йду гріти обід');
        }
        callback('Йду на комплексне меню');
    }, 500);
}

function goHome(bus, callback) {
    setTimeout(() => {
        if (bus === 47) {
            callback(null, 'Їду на автобусі 47А');
        }
            callback('Їду на іншому автобусі');
    }, 600);
}

function goSleep(tasks, callback) {
    setTimeout(() => {
        if (tasks) {
            callback(null, 'Йду спокійно спати');
        }
        callback('Пробую ще раз вирішити');
    });
}


wakeUp(true, (error, up) => {
    if (error) {
        console.error('Oops', error);
        return;
    }
    console.log(up);

    goCooking('Бутерброд з кавою', (error, breakfast) => {
        if (error) {
            console.error('Oops', error);
            return;
        }
        console.log(breakfast);

        goToWork(40, (error, bus) => {
            if (error) {
                console.error('Oops', error);
                return;
            }
            console.log(bus);

            morningInTheOffice('espresso', (error, coffee) => {
                if (error) {
                    console.error('Oops', error);
                    return;
                }
                console.log(coffee);

                working('Привіт, Вася', (error, msg) => {
                    if (error) {
                        console.error('Oops', error);
                        return;
                    }
                    console.log(msg);

                    lunch('Риба з гречкою', (error, eat) => {
                        if (error) {
                            console.error('Oops', error);
                            return;
                        }
                        console.log(eat);

                        goHome(47, (error, bus) => {
                            if (error) {
                                console.error('Oops', error);
                                return;
                            }
                            console.log(bus);

                            goSleep('completed', (error, sleep) => {
                                if (error) {
                                    console.error('Oops', error);
                                    return;
                                }
                                console.log(sleep);
                            });
                        });
                    });
                });
            });
        });
    });
});
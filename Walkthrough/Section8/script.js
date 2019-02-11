const second = () => {
    setTimeout(() => {
        console.log('Asynch hello')
    }, 2000);
}

const first = () => {
    console.log('hey there')
    second();
    console.log('the end')
}

first();




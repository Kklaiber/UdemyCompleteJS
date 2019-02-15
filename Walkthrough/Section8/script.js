//LECTURE  121 BASIC ASYNCHRONOUS JS
// const second = () => {
//     setTimeout(() => {
//         console.log('Asynch hello')
//     }, 2000);
// }

// const first = () => {
//     console.log('hey there')
//     second();
//     console.log('the end')
// }

// first();


//LECTURE 122 THE OLD WAY, ASYNCH JS WITH CALLBACKS

// function getRecipe() {
//     setTimeout(() => {
//         const recipeID = [455, 123, 321, 222];
//         // console.log(recipeID);

//         setTimeout(id => {
//             const recipe = {
//                 title: 'Fresh Tomato Pasta',
//                 publisher: 'Kyle Klaiber'
//             }
//             // console.log(`${id}: ${recipe.title} By ${recipe.publisher}`);

//             setTimeout(publisher => {
//                 const recipe2 = {
//                     title: 'Pizza',
//                     publisher: 'Kyle Klaiber'
//                 }
//                 // console.log(recipe2)
//             }, 1500, recipe.publisher)
//         }, 1500, recipeID[2])
//     }, 1500)
// }

// getRecipe();


//LECTURE 123 FROM CALLBACK HELL TO PROMISES

//The callback inside the Promise is called the EXECUTOR FUNCTION...it takes in two arguments,
//resolve and reject. It runs resolve if everything ran correctly and reject if something didnt work
const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([455, 123, 321, 222])
    },1500)
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {
                title: 'Best Burger EVER',
                publisher: 'Kyle Klaiber'
            };
            resolve([`${ID}: ${recipe.title}`, recipe])
            
        }, 1500, recID)
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
    setTimeout(pub => {
        const recipe2 = {
            title: 'Best Pizza',
            publisher: 'Tony Ramone'
        }
        resolve(pub + ':' + recipe2.title);
    }, 1500, publisher)
})
}

getIDs.then(IDs => {
    console.log(IDs);
    return getRecipe(IDs[0])
})
.then(recipe => {
    console.log(recipe[0]);
    return getRelated(recipe[1].publisher)
})
.then(recipe => {
    console.log(recipe)
})
.catch(err => {
    console.log(err)
})




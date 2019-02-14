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

function getRecipe() {
    setTimeout(() => {
        const recipeID = [455, 123, 321, 222];
        console.log(recipeID);

        setTimeout(id => {
            const recipe = {
                title: 'Fresh Tomato Pasta',
                publisher: 'Kyle Klaiber'
            }
            console.log(`${id}: ${recipe.title} By ${recipe.publisher}`);

            setTimeout(publisher => {
                const recipe2 = {
                    title: 'Pizza',
                    publisher: 'Kyle Klaiber'
                }
                console.log(recipe2)
            }, 1500, recipe.publisher)
        }, 1500, recipeID[2])
    }, 1500)
}

getRecipe();




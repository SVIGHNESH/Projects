function List() {

    // const fruits = ['apple','oranges','bananas','grapes',"mango"];
    const fruits = [
        { id: 1, name: 'apple', calories: 95 },
        { id: 2, name: 'oranges', calories: 35 },
        { id: 3, name: 'bananas', calories: 105 },
        { id: 4, name: 'grapes', calories: 45 },
        { id: 5, name: "mango", calories: 52 }];

  //  fruits.sort((a,b) => a.name.localeCompare(b.name)); //Alphabetical

  //fruits.sort((a,b) => b.name.localeCompare(a.name)); // Reverse Alphabetical

  //  fruits.sort((a,b) => a.calories - b.calories) //Numerica Order

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100 )
    






    fruits.sort((a,b) => b.calories - a.calories)        //Reverse Numeric Order 
    const listItems = lowCalFruits.map(fruit => <li key={fruit.id}>{fruit.name}: <b>{fruit.calories} </b> </li>);
    return (
        <ol> {listItems}</ol>

    );
}
export default List
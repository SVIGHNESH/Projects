function List(){

    // const fruits = ['apple','oranges','bananas','grapes',"mango"];
    const fruits = [
    { id: 1, name: 'apple', calories: 95 },
    { id: 2, name: 'oranges', calories: 45 },
    { id: 3, name: 'bananas', calories: 105 },
    { id: 4, name: 'grapes', calories: 45 },
    { id: 5, name: "mango", calories: 52 }];

    fruits.sort();

    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name} </li>);
    return(
       <ol> {listItems}</ol>

    );
}
export default List
class People {
    constructor(name, age) {
        //your code writting here
    }

    isTeenager() {
        //your code writting here
    }
}


function PeopleList() {

    //init people list
    const peopleList = []; //replace by your code

    //Find first Teenager
    const firstTeenager = {}; //replace by your code

    //Find all Teenager
    const allTeenager = []; //replace by your code

    //Find other People
    const notTeenager = []; //replace by your code

    //Find oldest in other People
    const oldest = []; //replace by your code

    //Find youngest in other People
    const youngest = []; //replace by your code

    return (
        <div>
            <h1>First Teenager is</h1>
            <div>
                {firstTeenager ? (
                    <p>The first teenager is: <b>{firstTeenager.name}</b> - Age: <b>{firstTeenager.age}</b></p>
                ) : (
                    <p>No teenagers found.</p>
                )}
            </div>
            <h1>All Teenager list (sorted by age ascending)</h1>
            <ul>
            <li>... replace by your code here ...</li>
            </ul>
            <h1>All other people list</h1>
            <ul>
            <li>... replace by your code here ...</li>
            </ul>
        </div>
    );
}

export default PeopleList;
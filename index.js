import LinkedList from "./linked-list.js";

(() => {

    // [abc] -> [def] -> [ghi] -> [jkl] -> null

    let linked = new LinkedList();
    console.log(linked);

    // add to start of list
    console.log('\nPREPEND');
    linked.prepend('ghi');
    linked.prepend('def');
    linked.prepend('abc');
    console.log(linked);

    // // add to end of list
    console.log('\nAPPEND');
    linked.append('jkl');
    console.log(linked);

    // return list length
    console.log('\nSIZE')
    console.log(linked.size());

    // // return first node
    console.log('\nHEAD');
    console.log(linked.getHead());

    // // return last node
    console.log('\nTAIL');
    console.log(linked.getTail());

    // // return node at index
    console.log('\nAT');
    console.log(linked.at(3));

    // // remove last element from list
    console.log('\nPOP');
    linked.pop();
    console.log(linked);

    // // return true if value in list
    console.log('\nCONTAINS');
    console.log(linked.contains('abc'));
    console.log(linked.contains('def'));
    console.log(linked.contains('ghi'));
    console.log(linked.contains('jkl'));

    // // return index of value, or null
    console.log('\nFIND');
    console.log(linked.find('abc'));
    console.log(linked.find('def'));
    console.log(linked.find('ghi'));
    console.log(linked.find('jkl'));

    // print list as strings to console
    console.log('\nTO_STRING');
    console.log(linked.toString());

    // insert value at index
    console.log('\nINSERT_AT')
    linked.insertAt('new', 2);
    console.log(linked);

    // remove node at index
    console.log('\nREMOVE_AT')
    linked.removeAt(2);
    console.log(linked);
})()
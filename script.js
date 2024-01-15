import { linkedListFactory } from "./linkedList.js"
export { hashmapFactory }



// Function
const hashmapFactory = () => {
    let map = [];
    let capacity = 16;
    let loadFactor = 0.75;

    // Returns a hash of the value
    function hash(string){
        let value = 0;
        const primeNumber = 1; // Note: Set to 1 for demo purposes. We want to encourage collisions; normally want to avoid.
        for (let i=0; i<string.length; i++){
            value = primeNumber*value + string.charCodeAt(i);
        }
        return value%capacity;
    }

    // Adding to hashmap
    // TODO: Bucket size growth
    function set(key, value){
        if (map[hash(key)]){ // Bucket non-empty
            if (has(key)){ //Replace existing
                let node = map[hash(key)].getHead();
                if (node.key === key) node.value = value 
                while (node.next){
                    node = node.next
                    if (node.key === key) node.value = value 
                }
            }else{ //new entry - use linked list to avoid collisions
                map[hash(key)].append(key,value);
            }
        } else { //Item is first item in bucket. Create linked list, attach to map
            const newList = linkedListFactory();
            newList.append(key, value);
            map[hash(key)] = newList;
        }
    }

    // Returns the value that is assigned to this key. If key is not found, return null
    function get(key){

        if (map[hash(key)]){
            let node = map[hash(key)].getHead();
            if (node.key === key) return node.value;
            while (node.next){
                node = node.next;
                if (node.key === key) return node.value;
                
            }
        }
        return null;
    }

    // Returns true or false based on whether or not the key is in the hash map
    function has(key){
        let node = map[hash(key)].getHead();
        if (node.key === key) return true;
        while (node.next){
            node = node.next;
            if (node.key === key) return true;
        }
        return false;
    }
    // If the given key is in the hash map, it should remove the entry with that key and return true.
    function remove(key){
        
    }

    //returns the number of stored keys in the hash map.
    function length(){
        let result = 0;
        for (let i=0; i<map.length; i++){
            if (map[i]) result++;
        }
        return result;
    }

    // Removes all entries in hash map
    function clear(){
        map = [];
    }

    // returns an array containing all the keys inside the hash map.
    function keys(){
        let result = [];
        for(let i=0; i<map.length; i++){
            if (map[i]){ // linked list exists at index
                let node = map[i].getHead();
                result.push(node.key);
                while (node.next){
                    node = node.next;
                    result.push(node.key);
                }
            }
        }
        return result;
    }

    // returns an array containing all the values.
    function values(){
        let result = [];
        for(let i=0; i<map.length; i++){
            if (map[i]){ // linked list exists at index
                let node = map[i].getHead();
                result.push(node.value);
                while (node.next){
                    node = node.next;
                    result.push(node.value);
                }
            }
        }
        return result;
    }

    //eturns an array that contains each key, value pair.
    //Example: [[firstKey, firstValue], [secondKey, secondValue]]
    function entries(){
        let result = []

        for(let i=0; i<map.length; i++){
            if (map[i]){ // linked list exists at index
                let node = map[i].getHead();
                result.push([node.key, node.value]);
                while (node.next){
                    node = node.next;
                    result.push([node.key, node.value]);
                }
            }
        }

        return result;

    }

    return{
        set, get, has, remove, length, clear, keys, values, entries
    }
};
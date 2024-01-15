import { linkedListFactory } from "./linkedList.js"
export { hashmapFactory }



// Function
const hashmapFactory = () => {
    let map = [];
    let buckets = 16;

    // Returns a hash of the value
    function hash(string){
        let value = 0;
        const primeNumber = 17;
        for (let i=0; i<string.length; i++){
            value = primeNumber*value + string.charCodeAt(i);
        }
        return value%buckets;
    }

    // takes two arguments, the first is a key and the second is a value that is assigned to this key.
    // If a key already exists, then the old value is overwritten.
    // TODO: Bucket size growth
    function set(key, value){
        map[hash(key)] = value;
    }

    // Returns the value that is assigned to this key. If key is not found, return null
    function get(key){
        if(!has(key)) return null;
        return map[hash(key)];
    }

    // Returns true or false based on whether or not the key is in the hash map
    function has(key){
        if (map[hash(key)]){
            return true;
        }
        return false;
    }
    // If the given key is in the hash map, it should remove the entry with that key and return true.
    function remove(key){
        if(!has(key)) return false;     // If the key isn’t in the hash map, it should return false.
        map[hash(key)] = null;
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

    }

    // returns an array containing all the values.
    function values(){

    }

    //eturns an array that contains each key, value pair.
    //Example: [[firstKey, firstValue], [secondKey, secondValue]]
    function entries(){

    }


    // TODO: Verify what needs to truly be exposed here
    return{
        set, get, has, remove, length, clear, keys, values, entries
    }
};
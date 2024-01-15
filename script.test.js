import { hashmapFactory } from "./script";


// TODO: implement forEach in jest
test('set a value - non-colliding', () => {
    const myMap = hashmapFactory();
    myMap.set("Seb", "Yamaha");
    expect(myMap.get("Seb")).toBe("Yamaha");
});

// For collision, the hash values must be the same
test.todo('set a set a value -colliding')

test('get a value - existing', () => {
    const myMap = hashmapFactory();
    myMap.set("Seb", "Yamaha");
    expect(myMap.get("Seb")).toBe("Yamaha");
});

test('get a value - non-existing', () => {
    const myMap = hashmapFactory();
    expect(myMap.get("Seb")).toBe(null);
});

test('check length of empty map', () => {
    const myMap = hashmapFactory();
    expect(myMap.length()).toBe(0);
})

test('check length of non-empty map', () => {
    const myMap = hashmapFactory();
    myMap.set("Seb", "Yamaha");
    expect(myMap.length()).toBe(1);
});

test('Clearing a hash map', () => {
    const myMap = hashmapFactory();
    myMap.set("Seb", "Yamaha");
    myMap.clear();
    expect(myMap.length()).toBe(0);
});

test.todo('Fetching all map keys')
test.todo('Fetching all map values')
test.todo('Fetching all map key-value pairs')

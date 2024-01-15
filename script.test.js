import { hashmapFactory } from "./script";


// TODO: implement forEach in jest
test('set a new value', () => {
    const myMap = hashmapFactory();
    myMap.set("Seb", "Yamaha");
    expect(myMap.get("Seb")).toBe("Yamaha");
});

test('set 2 new values', () => {
    const myMap = hashmapFactory();
    myMap.set("Seb", "Yamaha");
    myMap.set("Zoli", "Kawasaki");
    expect(myMap.get("Seb")).toBe("Yamaha");
    expect(myMap.get("Zoli")).toBe("Kawasaki");
});

test('overwrite a value', () => {
    const myMap = hashmapFactory();
    myMap.set("Seb", "Honda");
    myMap.set("Seb", "Yamaha");
    expect(myMap.get("Seb")).toBe("Yamaha");
});

// For collision, the hash values must be the same
test('set a set a colliding value', () =>{
    const myMap = hashmapFactory();
    myMap.set("Seb", "Honda");
    myMap.set("beS", "Yamaha");
    expect(myMap.get("Seb")).toBe("Honda");
    expect(myMap.get("beS")).toBe("Yamaha");
})

test.todo('set a set a value requiring bucket resize')

test('get a value - existing', () => {
    const myMap = hashmapFactory();
    myMap.set("Seb", "Yamaha");
    expect(myMap.get("Seb")).toBe("Yamaha");
});

test('get a value - non-existing', () => {
    const myMap = hashmapFactory();
    expect(myMap.get("Seb")).toBe(null);
});

test.todo('test remove');

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

test('Fetching all map keys', () => {
    const myMap = hashmapFactory();
    myMap.set("Seb", "Yamaha");
    myMap.set("Zoli", "Kawasaki");
    myMap.set("Jordan", "BMW");
    expect(myMap.keys().length).toBe(3);
    expect(myMap.keys().sort()).toEqual(['Jordan', 'Seb', 'Zoli' ])
});

test('Fetching all map keys-empty map', () =>{
    const myMap = hashmapFactory();
    expect(myMap.keys().length).toBe(0);
    expect(myMap.keys().sort()).toEqual([])
});


test('Fetching all map values', () => {
    const myMap = hashmapFactory();
    myMap.set("Seb", "Yamaha");
    myMap.set("Zoli", "Kawasaki");
    myMap.set("Jordan", "BMW");
    expect(myMap.values().length).toBe(3);
    expect(myMap.values().sort()).toEqual(['BMW','Kawasaki','Yamaha'])
});

test('Fetching all map values-empty map', () =>{
    const myMap = hashmapFactory();
    expect(myMap.values().length).toBe(0);
    expect(myMap.values().sort()).toEqual([])
});


test('Fetching all map entries', () => {
    const myMap = hashmapFactory();
    myMap.set("Seb", "Yamaha");
    myMap.set("Zoli", "Kawasaki");
    myMap.set("Jordan", "BMW");
    expect(myMap.entries()).toEqual([ ['Seb','Yamaha'],["Zoli","Kawasaki"],["Jordan","BMW"] ])
});

test('Fetching all map entries-empty map', () =>{
    const myMap = hashmapFactory();
    expect(myMap.entries().length).toBe(0);
    expect(myMap.entries().sort()).toEqual([])
});
import { hashmapFactory } from "./script";


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

test('Insert values requiring resize of buckets', () => {
    const myMap = hashmapFactory();
    myMap.set("Seb", "Yamaha");
    myMap.set("Seb2", "Yamaha");
    myMap.set("Seb3", "Yamaha");
    myMap.set("Seb4", "Yamaha");
    myMap.set("Seb5", "Yamaha");
    myMap.set("Seb6", "Yamaha");
    myMap.set("Seb7", "Yamaha");
    myMap.set("Seb8", "Yamaha");
    myMap.set("Seb9", "Yamaha");
    myMap.set("Sebq", "Yamaha");
    myMap.set("Sebj", "Yamaha");
    myMap.set("Sebk", "Yamaha");
    myMap.set("Sebiu", "Yamaha"); // This prompts bucket resize
    expect(myMap.length()).toBe(13)
});


test('get a value - existing', () => {
    const myMap = hashmapFactory();
    myMap.set("Seb", "Yamaha");
    expect(myMap.get("Seb")).toBe("Yamaha");
});

test('get a value - non-existing', () => {
    const myMap = hashmapFactory();
    expect(myMap.get("Seb")).toBe(null);
});

test('remove a new valid value', () => {
    const myMap = hashmapFactory();
    myMap.set("Seb", "Yamaha");
    expect(myMap.remove("Seb")).toBe(true);
    expect(myMap.length()).toBe(0)
    expect(myMap.entries()).toEqual([])
});

test('remove a invalid value', () => {
    const myMap = hashmapFactory();
    expect(myMap.remove("Seb")).toBe(false);
});

test('remove first value in multiple value list', () => {
    const myMap = hashmapFactory();
    myMap.set("Seb", "Yamaha");
    myMap.set("beS", "Kawasaki");
    myMap.set("eSb", "BMW");

    expect(myMap.remove("Seb")).toBe(true);
    expect(myMap.entries()).toEqual([ ["beS", "Kawasaki"],["eSb","BMW"] ])
});

test('remove middle value in multiple value list', () => {
    const myMap = hashmapFactory();
    myMap.set("Seb", "Yamaha");
    myMap.set("Zoli", "Kawasaki");
    myMap.set("Jordan2", "BMW");

    expect(myMap.remove("Zoli")).toBe(true);
    expect(myMap.length()).toBe(2);
    expect(myMap.entries().sort()).toEqual([ ["Jordan2","BMW"],["Seb","Yamaha"] ])
});

test('remove last value in multiple value list', () => {
    const myMap = hashmapFactory();
    myMap.set("Seb", "Yamaha");
    myMap.set("Zoli", "Kawasaki");
    myMap.set("Jordan", "BMW");

    expect(myMap.remove("Jordan")).toBe(true);
    expect(myMap.entries().sort()).toEqual([ ["Seb","Yamaha"],["Zoli","Kawasaki"] ])
});

test('remove and add values', () => {
    const myMap = hashmapFactory();
    myMap.set("Seb", "Yamaha");
    myMap.set("Zoli", "Kawasaki");
    myMap.set("Jordan", "BMW");

    expect(myMap.remove("Seb")).toBe(true);
    expect(myMap.entries().sort()).toEqual([ ["Jordan","BMW"],["Zoli","Kawasaki"] ])

    expect(myMap.remove("Zoli")).toBe(true);
    expect(myMap.entries().sort()).toEqual([ ["Jordan","BMW"] ])

    myMap.set("Seb", "Yamaha");
    expect(myMap.entries().sort()).toEqual([ ["Jordan","BMW"],["Seb","Yamaha"]])

    expect(myMap.remove("Jordan")).toBe(true);
    expect(myMap.entries().sort()).toEqual([ ["Seb","Yamaha"] ])

    myMap.set("Zoli", "Kawasaki");
    expect(myMap.entries().sort()).toEqual([ ["Seb","Yamaha"], ["Zoli","Kawasaki"]])

    myMap.set("Jordan","BMW");
    expect(myMap.entries().sort()).toEqual([ ["Jordan","BMW"],["Seb","Yamaha"],["Zoli","Kawasaki"] ])
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

test('check length of non-empty map with collisions', () => {
    const myMap = hashmapFactory();
    myMap.set("Zoli", "Kawasaki");
    myMap.set("Jordan", "BMW");
    myMap.set("Seb", "Yamaha");
    expect(myMap.length()).toBe(3);
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


test('Fetching all map entries', () => {const myMap = hashmapFactory();
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

import { linkedListFactory } from "./linkedList";

test('add a element', () => {
    const myList = linkedListFactory();
    myList.append("Seb", "Yamaha");
    expect(myList.getHead()).toEqual({"key": "Seb", "next": null, "value": "Yamaha"});
});


test('add multiple element and check head/tail', () => {
    const myList = linkedListFactory();
    myList.append("Seb", "Yamaha");
    myList.append("Zoli", "Kawasaki");
    myList.append("Jordan", "BMW");
    expect(myList.getHead()).toEqual({"key": "Seb", "next": {"key": "Zoli", "next": {"key": "Jordan", "next": null, "value": "BMW"}, "value": "Kawasaki"}, "value": "Yamaha"});
    expect(myList.getLast()).toEqual({"key": "Jordan", "next": null, "value": "BMW"});
});

test('Check head/tail of empty list', () => {
    const myList = linkedListFactory();
    expect(myList.getHead()).toBe(null);
    expect(myList.getLast()).toBe(null);
});

test('Remove a element - first element', () => {
    const myList = linkedListFactory();
    myList.append("Seb", "Yamaha");
    myList.remove("Seb", "Yamaha");
    expect(myList.getHead()).toBe(null);
    expect(myList.getLast()).toBe(null);
});

test('Remove a element - middle element', () => {
    const myList = linkedListFactory();
    myList.append("Seb", "Yamaha");
    myList.append("Zoli", "Kawasaki");
    myList.append("Jordan", "BMW");
    myList.remove('Zoli');
    expect(myList.getHead()).toEqual({"key": "Seb", "next":  {"key": "Jordan", "next": null, "value": "BMW"}, "value": "Yamaha"});

});

test('Remove a element - last element', () => {
    const myList = linkedListFactory();
    myList.append("Seb", "Yamaha");
    myList.append("Zoli", "Kawasaki");
    myList.append("Jordan", "BMW");
    myList.remove('Jordan');
    expect(myList.getHead()).toEqual({"key": "Seb", "next": {"key": "Zoli", "next": null, "value": "Kawasaki"}, "value": "Yamaha"});
});

test('Remove a element - non exist', () => {
    const myList = linkedListFactory();
    myList.append("Seb", "Yamaha");
    myList.append("Zoli", "Kawasaki");
    myList.remove('ZZ');
    expect(myList.getHead()).toEqual({"key": "Seb", "next": {"key": "Zoli", "next": null, "value": "Kawasaki"}, "value": "Yamaha"});
});
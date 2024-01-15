import { linkedListFactory } from "./linkedList";


// TODO: implement forEach in jest
test('add a element', () => {
    const myList = linkedListFactory();
    myList.append("Seb", "Yamaha");
    expect(myList.getHead()).toEqual({"key": "Seb", "next": null, "value": "Yamaha"});
});

test('add multiple element', () => {
    const myList = linkedListFactory();
    myList.append("Seb", "Yamaha");
    myList.append("Zoli", "Kawasaki");
    myList.append("Jordan", "BMW");
    expect(myList.getHead()).toEqual({"key": "Seb", "next": {"key": "Zoli", "next": {"key": "Jordan", "next": null, "value": "BMW"}, "value": "Kawasaki"}, "value": "Yamaha"});
    expect(myList.getLast()).toEqual({"key": "Jordan", "next": null, "value": "BMW"});
});
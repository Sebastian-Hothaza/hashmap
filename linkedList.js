export { linkedListFactory }

const node = (key, value, next) => {
    return{
        key, value, next
    }
}

const linkedListFactory = () => {
    let head=null;

    function getHead(){
        return head;
    }

    function getLast(){
        let cur = head;
        while(cur.next != null){
            cur = cur.next;
        }
        return cur;
    }

    function append(key, value){
        const newNode = node(key,value,null);
        if (head!=null){
            getLast().next=newNode;
        }else{
            head = newNode;
        }
    }

    return{
        getHead, getLast, append
    }
};
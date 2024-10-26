const ListNode = (val, next)=>{
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

const middleNode = (head)=>{
    let slow = head , fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    console.log(slow);
    return slow;
}

const _jsondata = require("./data.json");

const compare = (result, output)=>{
    const aftcompare = JSON.stringify(result) === JSON.stringify(output)
    console.log(aftcompare);
}

for(data of _jsondata){
    const {input: head,output } = data;
    const indOfData = _jsondata.indexOf(data)

    console.time(`Time response#${indOfData}`);
    const result = middleNode(head);
    console.timeEnd(`Time response#${indOfData}`);

    compare(result, output);
}


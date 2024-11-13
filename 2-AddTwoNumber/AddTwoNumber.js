

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


function compare(listNode, output){
    const shadowList = [];
    let _list = Object.assign(listNode);

    do{
        shadowList.push(_list.val);
        _list = _list.next;
    }while(_list);

    const result = JSON.stringify(shadowList) === JSON.stringify(output);

    console.log(result);
}

function createListNode(nums){
    const result = new ListNode(0);
    let head = result;
    for(let i = 0 ; i < nums.length;i++){
        head.next = new ListNode(nums[i]);
        head = head.next;
    }
    return result.next;
}

const addTwoNumber = (l1,l2)=>{
    const result = new ListNode(0);
    let fakeNode = result;
    let sum = 0;
    while (l1||l2||sum > 0){
        if(l1){
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2){
            sum += l2.val;
            l2 = l2.next;
        }
        fakeNode.next = new ListNode(sum%10);
        fakeNode = fakeNode.next;
        sum = sum > 9 ? 1:0;
    }
    return result.next;
}

const datajs = require("./data.json");
for(let data of datajs){
    const { input: { l1, l2 }, output} = data;
    const indexOfTestCase = datajs.indexOf(data);
    const listnodef = createListNode(l1);
    const listnodes = createListNode(l2);

    console.time(`Test case:#${indexOfTestCase}`);
    const newListNode = addTwoNumber(listnodef, listnodes);
    console.timeEnd(`Test case:#${indexOfTestCase}`);
    
    compare(newListNode,output)
}

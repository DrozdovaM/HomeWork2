class Node {
	constructor(value){
		this.value = value;
		this.next = null;
	}

}
class SingleList {
	constructor(...nodes){
		let arr = nodes;
		this.list = new Node(arr[0]);
		this.first = this.list; 
		for ( let i = 1; i < arr.length ; i++){
			this.list.next = new Node(arr[i]);
			this.list = this.list.next;
		}

		this.last = this.list;
	}

	showList(){
		this.list = this.first;
		console.log(this.list);
	}

	push(...val){
		let arrr = val;
		for( let i = 0 ; i < arrr.length ; ++i){
		this.last.next = new Node(arrr[i]);
		this.last = this.last.next;
		}
		this.list = this.first;
		console.log(this.list);
	}

	unshift(...val){
		let array = val;
		let first;
		for(let i = array.length ; i >= 0  ; --i){
			first = new Node(array[i]);	
			first.next = this.first;
			this.first = first;

		}
		console.log(this.first);
	}

	

	pop(){

		this.list = this.first;
		let i = 1;

		while(this.list.next){
			this.list = this.list.next;
			i++;
		}

		this.list = this.first;

		for(let k = 0 ; k < i - 2 ; ++k ){
			this.list = this.list.next;
		}
		this.prev = this.list;
		this.list.next = null;
		this.list = this.first;
		console.log(this.list);
	}
	
	shift(){
		this.prev = this.first.next;
		this.first = null;
		this.list = this.prev;
		console.log(this.list);

	}

	contains(val){
		this.list = this.first;
		let i = 1;

		while(this.list.next){
			this.list = this.list.next;
			i++;
		}

		let count = 0;

		this.list = this.first;

		if(this.list.value == val){
			count++;
		}
		else {
			for( let k = 1; k < i; ++k ){
				this.list = this.list.next;
				if(this.list.value == val){
					count++;
				}
			}
		}

		if(count > 0){
			console.log(true);
		}
		else {
			console.log(false);
		}

	}

	toString(){

		this.list = this.first;
		let string = this.list.value;

		while(this.list.next){
			this.list = this.list.next;
			string += " " + this.list.value; 
		}

		console.log(string);
	}

	forEach(){

		this.list = this.first;
		console.log(this.list.value);
		while(this.list.next){
			this.list = this.list.next;
			console.log(this.list.value);
		}
	}

	set(item,String){

		this.list = this.first;

		let i = 1;

		while(this.list.next){
			this.list = this.list.next;
			i++;
		}

		this.list = this.first;

		for(let k = 1 ; k < item - 1 ; ++k){
			this.list = this.list.next;
		}


		this.prev = this.list.next;
		this.list.next = new Node(String);
		this.list = this.list.next;
		this.list.next = this.prev;


		this.list = this.first;
		console.log(this.list);
}


}

let list = new SingleList(6, 8,"gold", 8417, 4141,"red");
list.showList();
list.set(4, 999);
list.contains(999);
list.push(500, 100, "I LOVE JS");
list.toString();			
list.forEach();
list.unshift("One",88);
list.pop();
list.shift();

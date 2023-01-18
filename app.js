let txtin = document.querySelector("#txtin");
let addBtn = document.querySelector("#addBtn");
let list = document.querySelector(".list");


addBtn.addEventListener('click', (e) => {
	let val = txtin.value.trim()
	if (val == ""){
		alert("You Can Not Add Empty Item To Your Tasks");
	}else{
		item = document.createElement('div');
		item.className = "item";
		item.innerHTML = `
				<p>${val}</p>
                <div class="itemBtns" >
					<button class="complete" onclick="complete(this)"><i class="fa fa-check" aria-hidden="true" style="font-size:20px"></i></button>
                    <button class="editBtn" onclick="editfunc(this)"><i class="fa fa-edit" aria-hidden="true" style="font-size:20px"></i></button>
                    <button class="delBtn" onclick="delfunc(this)"><i class="fa fa-trash" aria-hidden="true" style="font-size:20px"></i></button>
                </div>`
		list.appendChild(item);
		txtin.value = "";
	};
});

function complete(e){
	let item = e.parentElement.parentElement
	
	if(item.classList.contains("completed")){
		
		item.classList.remove("completed");
		
	} else {
		item.classList.add("completed");
	}
};

function delfunc(e){
	e.parentElement.parentElement.remove();
};

function editfunc(e){
	var content = e.parentElement.parentElement.firstElementChild.innerText
	
	var newContent = prompt("Please Edit Your Task:", `${content}`);
	
	if (newContent != null){
		e.parentElement.parentElement.firstElementChild.innerText = newContent;
	} else {
		e.parentElement.parentElement.firstElementChild.innerText = content;
	};
};
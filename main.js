'use strict'
const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
    //1. 사용자가 입력한 텍스트를 받아옴
    const text = input.value;
    console.log(text);
    if(text === '') {
        input.focus();
        return;
    }
    //2. 새로운 아이템을 만듬(텍스트 + 삭제 버튼)
    const item = createItem(text);
    //3. items 컨테이너안에 새로 만든 아이템을 추가한다
    items.appendChild(item);
    //4. 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({block: 'center'});
    //5. 인풋을 초기화 한다
    input.value = '';
    input.focus();//입력란에 한번 입력 후 마우스를 갔다대지 않아도 바로바로 쓸수 있음
} 
let id = 0; //UUID
function createItem(text) {
    const itemRow = document.createElement('li');//itemRow가 li tag라서 입력
    itemRow.setAttribute('class', 'item__row');//class가 item__row임을 지정
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `   
        <div class="item">
            <span class="item__name">${text}</span>
            <button class="item__delete" >
                <i class="fa-solid fa-trash-can" data-id=${id}></i>
            </button>
        </div>
        <div class="item__divider"></div>`;   
    id++; // shopping list가 추가되때마다 0~ 고유 id 추가      
    
    // const item = document.createElement('div');//item이 div tag라서 입력
    // item.setAttribute('class', 'item');

    // const name = document.createElement('span');
    // name.setAttribute('class', 'item__name');
    // name.innerText = text;
    // //const item = createItem(); 여기서 text를 creatItem에 전달해주고 그 text를 이용해서
    // //item__name에 innerText에 설정

    // const deleteBtn = document.createElement('button');
    // deleteBtn.setAttribute('class', 'item__delete')
    // deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    // deleteBtn.addEventListener('click', () => {
    //     items.removeChild(itemRow);
    // });

    // const itemDivider = document.createElement('div');
    // itemDivider.setAttribute('class', 'item__divider');

    // item.appendChild(name);
    // item.appendChild(deleteBtn);

    // itemRow.appendChild(item);
    // itemRow.appendChild(itemDivider);
    return itemRow;
}
addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keydown', event => {
    if (event.isComposing) { //한국어처럼 한글자를 만들면 중간중간 event 발생 할수 있어서 타이핑 완성된후 하라는 코드
        return; //or 'keyup' 사용하면 됨
    
    }
    if(event.key ==='Enter') {
        onAdd();
    }  
});

items.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if(id) {
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`)
        toBeDeleted.remove();
    }   
});
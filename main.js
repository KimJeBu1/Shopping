'static'
const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
    //1. 사용자가 입력한 텍스트를 받아옴
    const text = input.value;
    // console.log(text);
    if(text === '') {
        input.focus();
        return;
    }
    //2. 새로운 아이템을 만듬(텍스트 + 삭제 버튼)
    const item = createItem();
    //3. items 컨테이너안에 새로 만든 아이템을 추가한다
    items.appendChild(item);
    //4. 인풋을 초기화 한다
    input.value = '';
    input.focus();//입력란에 한번 입력 후 마우스를 갔다대지 않아도 바로바로 쓸수 있음
} 

function createItem(text) {
    const itemRow = document.createElement('li');//itemRow가 li tag라서 입력
    itemRow.setAttribute('class', 'item__row');//class가 item__row임을 지정
    
    const item = document.createElement('div');//item이 div tag라서 입력
    item.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('class', 'item__name')
    name.innerText = text;
    //const item = createItem(); 여기서 text를 creatItem에 전달해주고 그 text를 이용해서
    //item__name에 innerText에 설정

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete')
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    })

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    item.appendChild(name);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);
    return itemRow;
}
addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypresss', (event) => {
    
})
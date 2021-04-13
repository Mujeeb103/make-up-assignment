function defineBudgetSection() {
    html = `
    <div id="note-area">
    <div id="note" contenteditable="true"></div>
    </div>
    ` 
    return html
}

function createBudgetWritingArea() {
    const div = document.querySelector('#content')
    div.insertAdjacentHTML('beforeend', defineBudgetSection())
}
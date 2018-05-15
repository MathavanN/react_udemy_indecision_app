console.log("App.js is running");

//JSX - JavaScript XML
function getSubtitle(subtitle){
    if(subtitle){
        return <p>{subtitle}</p>
    }
}
const app = {
    title : "Indecision App",
    subtitle: "Put your life in the hands of a computers",
    options: ['One', 'Two']
}
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderOption();
    }
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const resetOption = () => {
    app.options = [];
    renderOption();
}
const appRoot = document.getElementById("app");
const numbers = [55, 105, 45];
const renderOption = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {getSubtitle(app.subtitle)}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={resetOption}>Remove All</button>
            {
                numbers.map((number) => { return <p key={number}>Number: {number}</p>})
            }
            <ol>
            {
                app.options.map((option) => {return <li key={option}>{option}</li>})
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderOption();
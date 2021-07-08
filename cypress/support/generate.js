import { build, fake } from "test-data-bot";
const buildTodo = build('Todo').fields({
	title:fake(f=>f.company.catchPhrase),
	tagId:[1,2][Math.floor(Math.round(Math.random()*2))]
})
export {buildTodo}
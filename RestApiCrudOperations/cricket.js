const  Express =require("express");
const router=Express.Router()

const players = [
	{firstName:"Virat", lastName:"Kohli", position:"Batsman", age:37, team:"India"},
	{firstName:"Rohit", lastName:"Sharma", position:"Batsman", age:41, team:"India"},
	{firstName:"MS", lastName:"Dhoni", position:"Keeper", age:28, team:"India"},
    {firstName:"Jasprit", lastName:"Bumrah", position:"Bowler", age:28, team:"India"},
    {firstName:"Bhuvneshwar", lastName:"Kumar", position:"Bowler", age:41, team:"India"},
	{firstName:"Hardik", lastName:"Pandya", position:"AllRounder", age:28, team:"India"}
]

const teams = [
	{name:"MI", city:"Mumbai", Available:"True"},
	{name:"CSK", city:"Chennai", Available:"True"},
	{name:"RCB", city:"Bangolore", Available:"True"}
]

const db = {
	team: teams,
	player: players
}

router.get('/:resource', (req, res) => {
	const resource = req.params.resource

	const data = db[resource]
	console.log(resource);
	if (data == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid request. Resource undefined.'
		})

		return
	}

	res.json({
		confirmation: 'success',
		data: data
	})
})

module.exports = router

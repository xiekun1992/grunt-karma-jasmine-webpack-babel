module.exports=function(){
	context:__dirname,
	entry:{
		spec:['specs.js']
	},
	output:{
		filename:'/lib/[name].js'
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				// exclude:''
				loader:'babel-loader'
			}
		]
	}
}
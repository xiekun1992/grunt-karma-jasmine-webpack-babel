'use strict';

describe('系统加载时',()=>{
	var user;
	beforeEach(()=>{
		user=new User();
	})

	it('用户名和密码为空串',()=>{
		expect(user.username).toEqual('');
		expect(user.password).toEqual('');
	});

	
})
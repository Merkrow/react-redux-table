import test1 from './testStudentsReducer';
import test2 from './testUpdateStudentReducer';
import test3 from './testUserLoginReducer';


const run = () => {
	test1();
	test2();
	test3();
	console.log('ALL TESTS ARE PASSED');
}

export default run;
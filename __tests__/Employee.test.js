const Employee = require('../lib/Employee');

test("Can create new Employee object", () =>{
    // Arrange Act Assert
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
})
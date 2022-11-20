// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
// TODO - Part 2
test('Tests validPhoneNumber "(408)-210-6988" success', () => {
    expect(functions.isPhoneNumber('(408)-210-6988')).toBe(true);
});
test('Tests validPhoneNumber "408-818-6988" success', () => {
    expect(functions.isPhoneNumber('408-818-6988')).toBe(true);
});
test('Tests validPhoneNumber "999999999" fail', () => {
    expect(functions.isPhoneNumber('999999999')).toBe(false);
});
test('Tests validPhoneNumber "408 e" fail', () => {
    expect(functions.isPhoneNumber('408 e')).toBe(false);
});



test('Tests validEmail "asenthilkumar@ucsd.edu" success', () => {
    expect(functions.isEmail('asenthilkumar@ucsd.edu')).toBe(true);
});
test('Tests validEmail "asenthilkumar@gmail.com" success', () => {
    expect(functions.isEmail('asenthilkumar@gmail.com')).toBe(true);
});
test('Tests validEmail "asenthilkumar@" fail', () => {
    expect(functions.isEmail('asenthilkumar@')).toBe(false);
});
test('Tests validEmail "@gmail.com" fail', () => {
    expect(functions.isEmail('@gmail.com')).toBe(false);
});



test('Tests strongPassword "hello123" success', () => {
    expect(functions.isStrongPassword('hello123')).toBe(true);
});
test('Tests strongPassword "pass_123" success', () => {
    expect(functions.isStrongPassword('pass_123')).toBe(true);
});
test('Tests strongPassword "hello%%" fail', () => {
    expect(functions.isStrongPassword('hello%%')).toBe(false);
});
test('Tests strongPassword "h" fail', () => {
    expect(functions.isStrongPassword('h')).toBe(false);
});




test('Tests isDate "01/01/2001" success', () => {
    expect(functions.isDate('01/01/2001')).toBe(true);
});
test('Tests isDate "11/17/2022" success', () => {
    expect(functions.isDate('11/17/2022')).toBe(true);
});
test('Tests isDate "01/01/20" success', () => {
    expect(functions.isDate('01/01/20')).toBe(false);
});
test('Tests isDate "01/012001" success', () => {
    expect(functions.isDate('01/012001')).toBe(false);
});




test('Tests isHexColor "#FF1493" success', () => {
    expect(functions.isHexColor('#FF1493')).toBe(true);
});
test('Tests isHexColor "#FF1492" success', () => {
    expect(functions.isHexColor('#FF1492')).toBe(true);
});
test('Tests isHexColor "#FF14" fail', () => {
    expect(functions.isHexColor('#FF14')).toBe(false);
});
test('Tests isHexColor "#F1434" fail', () => {
    expect(functions.isHexColor('#F1434')).toBe(false);
});
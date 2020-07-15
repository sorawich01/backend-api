const expect = require('chai').expect;
const calmodule = require('../../model/calculator')

const plus = calmodule.plus;
const sub = calmodule.minus;
const multi = calmodule.multiply;
const divide = calmodule.divide;

/******************************************************************************************** 

                                      plus function

********************************************************************************************/

describe('calculator test',() => {
    describe('add', () => {
        it('#1 Should be able to add two positive integers numbers', function () {
            expect(plus(4, 2)).to.equal(6);
        });
        it('#2 Should be able to add a negative integer to a positive floating point number', function () {
            expect(plus(-1, 2.5)).to.equal(1.5);
        });
        it('#3 Should be able to add a floating point number to an integer', function () {
            expect(plus(10.1, 2)).to.equal(12.1);
        });
        it('#4 Should be able to add an integer to a floating point number', function () {
            expect(plus(10, 9.9999)).to.equal(19.9999);
        });
        // it('5', function () {
        //     expect(plus(34.999, 1.0009)).to.equal(35.9999);
        // });
        it('#5 Should be able to add a negative integer and zero', function () {
            expect(plus(-5, 0)).to.equal(-5);
        });
        it('#6 Should be able to add zero and a positive integer', function () {
            expect(plus(0, 5)).to.equal(5);
        });
        it('#7 Should be able to add a negative integer with a positive number', function () {
            expect(plus(-5, 5)).to.equal(0);
        });
        describe('#8 Should be able to add two large positive integers', () => {
            it('Large integers #1', function () {
                expect(plus(300000000, 900000000)).to.equal("too high");
            });
            it('Large integers #2', function () {
                expect(plus(900000000, 900000000)).to.equal("too high");
            });
                it('Large integers #3', function () {
            expect(plus(999999999, 1)).to.equal("too high");
            });
        });
        it('#9 Should be able to add a negative floating point and a positive integer', function () {
            expect(plus(-1987.50, 1987)).to.equal(-0.50);
        });
    });

    describe('substrict', () => {
        it('#1 Should be able to subtract two positive integers', function () {
            expect(sub(1500, 2000)).to.equal(-500);
        });
        it('#2 Should be able to subtract zero from a negative integer', function () {
            expect(sub(-3, -0)).to.equal(-3);
        });
        it('#3 Should be able to subtract 0 from a positive integer', function () {
            expect(sub(3, 0)).to.equal(3);
        });
        it('#4 Should be able to subtract a floating point number from a negative integer', function () {
            expect(sub(-1, 2.25)).to.equal(-3.25);
        });
        it('#5 Should be able to subtract an integer from a floating point number', function () {
            expect(sub(9.35 , 1)).to.equal(8.35);
        });
        it('#6 Should be able to subtract a floating point number from an integer', function () {
            expect(sub(9, 1.35)).to.equal(7.65);
        });
        it('#7 Should be able to subtract two floating point numbers', function () {
            expect(sub(0.29, 1.35)).to.equal(-1.06);
        });
        it('#8 Should be able to subtract two max-input floating point numbers', function () {
            expect(sub(7.1234567, 2.2109876)).to.equal(4.9124691);
        });
        it('#9 Should be able to subtract an integer from a negative floating point number', function () {
            expect(sub(-1.33 , 2)).to.equal(-3.33);
        });
        it('#10 Should be able to subtract two large integers', function () {
            expect(sub(123456789, 210987654)).to.equal(-87530865);
        });
        it('#11 Should be able to subtract two floating point numbers with many digits', function () {
            expect(sub(7.12345678, 2.21098765)).to.equal(4.91246913);
        });
    });
    describe('multiply', () => {
        it('#1 Should be able to multiply two positive integers', function () {
            expect(multi(1500, 2000)).to.equal(3000000);
        });
        it('#2 Should be able to multiply a floating point multiplicand with an integer multipliplier', function () {
            expect(multi(1.212, 8)).to.equal(9.696);
        });
        it('#3 Should be able to multiply an integer multiplicand with a floating point multiplier', function () {
            expect(multi(3, 1.212)).to.equal(3.636);
        });
        it('#4 Should be able to multiply two floating point numbers', function () {
            expect(multi(0.133, 1.212)).to.equal(0.161196);
        });
        it('#5 Should be able to multiply a integer multiplicand with zero', function () {
            expect(multi(1200 , 0)).to.equal(0);
        });
        it('#6 Should be able to multiply a negative integer multiplicand with a positive intger multiplier', function () {
            expect(multi(-1500, 2000)).to.equal(-3000000);
        });
        it('#7 Should be able to multiply a negative floating point multiplicand with a positive integer multiplier', function () {
            expect(multi(-1.212, 8)).to.equal(-9.696);
        });
        it('#8 Should be able to multiply a negative integer multiplicand with a positive floating point multiplier', function () {
            expect(multi(-8, 1.212)).to.equal(-9.696);
        });
        it('#9 Should be able to multiply two many digit floating point numbers', function () {
            expect(multi(1.23456789 , 2.10987654)).to.equal(2.604785828);
        });
        it('#10 Should be able to multiply two large integers(return too high/ too low)', function () {
            expect(multi(123456789, 210987654)).to.equal("too high");
        });
        it('#11 Should be able to multiply two large integers(return too high/ too low)', function () {
            expect(multi(-123456789, 210987654)).to.equal("too low");
        });
    });
    describe('divide', () => {
        it('#1 Should be able to divide two positive integers', function () {
            expect(divide(1500, 2000)).to.equal(0.75);
        });
        it('#2 Should be able to divide 0 by a integer divisor', function () {
            expect(divide(0, 8)).to.equal(0);
        });
        it('#3 Should be able to divide a negative dividend by a positive divisor', function () {
            expect(divide(-1500, 2000)).to.equal(-0.75);
        });
        it('#4 Should be able to divide a negative floating point dividend by a positive divisor', function () {
            expect(divide(-3.123, 5)).to.equal(-0.6246);
        });
        it('#5 Should be able to divide a negative integer dividend by a positive floating point divisor to nine significiant figures', function () {
            expect(divide(-5 , 3.123)).to.equal(-1.601024656);
        });
        it('#6 Should be able to divide an floating point dividend by an integer divisor', function () {
            expect(divide(4.21,3)).to.equal(1.403333333);
        });
        it('#7 Should be able to divide an integer dividend by a floating point divisor', function () {
            expect(divide(10, 3.123)).to.equal(3.202049312);
        });
        it('#8 Should be able to divide two floating point numbers', function () {
            expect(divide(0.234, 3.123)).to.equal(0.074927954);
        });
        it('#9 Should report error for division by 0', function () {
            expect(divide(1500 , 0)).to.equal("Can't division by 0");
        });
        it('#10 Should be able to divide two many digit floating point numbers', function () {
            expect(divide(1.23456789, 2.10987654)).to.equal(0.585137503);
        });
        
    });
    describe('check error condition', () => { 
        it('#1 too high in all function', function () {
            expect(plus(999999999, 1)).to.equal("too high");
            expect(sub(56789000, -60000000)).to.equal("too high");
            expect(multi(123789, 2187654)).to.equal("too high");
            expect(divide(12345678, 0.10987654)).to.equal("too high");
        });
        it('#2 too low in all function', function () {
            expect(plus(-999999999, -1)).to.equal("too low");
            expect(sub(-56789000, 60000000)).to.equal("too low");
            expect(multi(123789, -2187654)).to.equal("too low");
            expect(divide(12345678, -0.10987654)).to.equal("too low");
        });
        it("#3 can't devision by 0", function () {
            expect(divide(-12.123, 0)).to.equal("Can't division by 0");
            expect(divide(12.123, 0)).to.equal("Can't division by 0");
        });
        it("#4 test NaN (send something isn't number)", function () {
            expect(plus('a', 0)).to.include({ErrorType : 'NaN'});
            expect(plus(1, "b")).to.include({ErrorType : 'NaN'});
            expect(plus('a', "asd")).to.include({ErrorType : 'NaN'});
          
        });
        it("#4 syntax wrong", function () {
            expect(plus(0)).to.include({ErrorType : 'Syntax wrong'});
          
        });

    })
});
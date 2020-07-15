const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index.js');

const expect = chai.expect;
// const should = chai.should();
chai.use(chaiHttp);


/******************************************************************************************** 
/                                                                                           /
/                                        main test                                          /
/                                                                                           /
********************************************************************************************/

describe('calculator test', () => {                                                        // 

  describe('get about test', () => {
    it('should return true', (done) => {
      chai.request(app)
        .get('/calculator')
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(200);
          expect(res).to.be.an('object');
          done();
        });
    });
  });

/******************************************************************************************** 
/                                                                                           /
/                                      plus function                                        /
/                                                                                           /
********************************************************************************************/

  describe('expect result of plus function is correct', () => {

    it('#1 Should be able to add two positive integers numbers', (done) => {
      chai.request(app)                                                                     // start function
        .post('/calculator/plus')                                                           // http method POST
        .send({                                                                             // Send number to function
          "num1": "4",
          "num2": "2"
        })
        .end((err, res) => {                                                                // compare 
          if (err) done(err);             
          expect(res).to.have.status(200);                                                  // check status http (200 is The request has succeeded)
          expect(res).to.be.json;                                                           // check data is json
          expect(6).to.deep.equal(res.body);                                                // compare result and what we want
          done();                                                                           // end function
        });
    });
    it('#2 Should be able to add a negative integer to a positive floating point number', (done) => {
      chai.request(app)
        .post('/calculator/plus')
        .send({
          "num1": "-1",
          "num2": "2.5"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(1.5).to.deep.equal(res.body);
          expect(res.body).to.deep.equal(1.5);
          done();
        });
    });

    it('#3 Should be able to add a floating point number to an integer', (done) => {
      chai.request(app)
        .post('/calculator/plus')
        .send({
          "num1": "10.1",
          "num2": "2"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(12.1).to.deep.equal(res.body);
          done();
        });
    });

    it('#4 Should be able to add an integer to a floating point number', (done) => {
      chai.request(app)
        .post('/calculator/plus')
        .send({
          "num1": "10",
          "num2": "9.9999"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(19.9999).to.deep.equal(res.body);
          done();
        });
    });
    // it('Should be able to add two floating point numbers', (done) => {                             // error like 0.1 + 0.2
    //   chai.request(app)
    //     .post('/calculator/plus')
    //     .send({"num1" : "34.999" ,"num2" : "1.0009"})
    //     .end((err, res) => {
    //       if (err) done(err);
    //       expect(35.9999).to.deep.equal(res.body);

    //        done();
    //     });
    // });
    it('#5 Should be able to add a negative integer and zero', (done) => {
      chai.request(app)
        .post('/calculator/plus')
        .send({
          "num1": "-5",
          "num2": "0"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(-5).to.deep.equal(res.body);
          done();
        });
    });
    it('#6 Should be able to add zero and a positive integer', (done) => {
      chai.request(app)
        .post('/calculator/plus')
        .send({
          "num1": "0",
          "num2": "5"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(5).to.deep.equal(res.body);
          done();
        });
    });
    it('#7 Should be able to add a negative integer with a positive number', (done) => {
      chai.request(app)
        .post('/calculator/plus')
        .send({
          "num1": "-5",
          "num2": "5"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(0).to.deep.equal(res.body);
          done();
        });
    });
    describe('#8 Should be able to add two large positive integers', () => { // error number > 100000000
      it('Large integers #1', (done) => {
        chai.request(app)
          .post('/calculator/plus')
          .send({
            "num1": "300000000",
            "num2": "900000000"
          })
          .end((err, res) => {
            if (err) done(err);
            expect("too high").to.deep.equal(res.body);
            done();
          });
      });
      it('#9 Large integers #2', (done) => {
        chai.request(app)
          .post('/calculator/plus')
          .send({
            "num1": "900000000",
            "num2": "900000000"
          })
          .end((err, res) => {
            if (err) done(err);
            expect("too high").to.deep.equal(res.body);
            done();
          });
      });
      it('#10 Large integers #3', (done) => {
        chai.request(app)
          .post('/calculator/plus')
          .send({
            "num1": "999999999",
            "num2": "1"
          })
          .end((err, res) => {
            if (err) done(err);
            expect("too high").to.deep.equal(res.body);
            done();
          });
      });
    });
    it('#11 Should be able to add a negative floating point and a positive integer', (done) => {
      chai.request(app)
        .post('/calculator/plus')
        .send({
          "num1": "-1987.50",
          "num2": "1987"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(-0.5).to.deep.equal(res.body);
          done();
        });
    });
    
  });


/******************************************************************************************** 
/                                                                                           /
/                                    suntract function                                      /
/                                                                                           /
********************************************************************************************/

  describe('expect result of subtraction function is correct', () => {
    it('#1 Should be able to subtract two positive integers', (done) => {
      chai.request(app)
        .post('/calculator/minus')
        .send({
          "num1": "1500",
          "num2": "2000"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(-500).to.deep.equal(res.body);
          done();
        });
    });

    it('#2 Should be able to subtract zero from a negative integer', (done) => {
      chai.request(app)
        .post('/calculator/minus')
        .send({
          "num1": "-3",
          "num2": "-0"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(-3).to.deep.equal(res.body);
          done();
        });
    });

    it('#3 Should be able to subtract 0 from a positive integer', (done) => {
      chai.request(app)
        .post('/calculator/minus')
        .send({
          "num1": "3",
          "num2": "0"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(3).to.deep.equal(res.body);
          done();
        });
    });

    it('#4 Should be able to subtract a floating point number from a negative integer', (done) => {
      chai.request(app)
        .post('/calculator/minus')
        .send({
          "num1": "-1",
          "num2": "2.25"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(-3.25).to.deep.equal(res.body);
          done();
        });
    });
    it('#5 Should be able to subtract an integer from a floating point number', (done) => {
      chai.request(app)
        .post('/calculator/minus')
        .send({
          "num1": "9.35",
          "num2": "1"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(8.35).to.deep.equal(res.body);
          done();
        });
    });
    it('#6 Should be able to subtract a floating point number from an integer', (done) => {
      chai.request(app)
        .post('/calculator/minus')
        .send({
          "num1": "9",
          "num2": "1.35"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(7.65).to.deep.equal(res.body);
          done();
        });
    });
    it('#7 Should be able to subtract two floating point numbers', (done) => {
      chai.request(app)
        .post('/calculator/minus')
        .send({
          "num1": "0.29",
          "num2": "1.35"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(-1.06).to.deep.equal(res.body);
          done();
        });
    });
    it('#8 Should be able to subtract two max-input floating point numbers', (done) => {
      chai.request(app)
        .post('/calculator/minus')
        .send({
          "num1": "7.1234567",
          "num2": "2.2109876"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(4.9124691).to.deep.equal(res.body);
          done();
        });
    });
    it('#9 Should be able to subtract an integer from a negative floating point number', (done) => {
      chai.request(app)
        .post('/calculator/minus')
        .send({
          "num1": "-1.33",
          "num2": "2"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(-3.33).to.deep.equal(res.body);
          done();
        });
    });
    it('#10 Should be able to subtract two large integers', (done) => {
      chai.request(app)
        .post('/calculator/minus')
        .send({
          "num1": "123456789",
          "num2": "210987654"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(-87530865).to.deep.equal(res.body);
          done();
        });
    });
    it('#11 Should be able to subtract two floating point numbers with many digits', (done) => {
      chai.request(app)
        .post('/calculator/minus')
        .send({
          "num1": "7.12345678",
          "num2": "2.21098765"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(4.91246913).to.deep.equal(res.body);
          done();
        });
    });
  });

/******************************************************************************************** 
/                                                                                           /
/                                    multiply function                                      /
/                                                                                           /
********************************************************************************************/

  describe('expect result of multiply function is correct', () => {
    it('#1 Should be able to multiply two positive integers', (done) => {
      chai.request(app)
        .post('/calculator/multi')
        .send({
          "num1": "1500",
          "num2": "2000"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(3000000).to.deep.equal(res.body);
          done();
        });
    });

    it('#2 Should be able to multiply a floating point multiplicand with an integer multipliplier', (done) => {
      chai.request(app)
        .post('/calculator/multi')
        .send({
          "num1": "1.212",
          "num2": "8"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(9.696).to.deep.equal(res.body);
          done();
        });
    });

    it('#3 Should be able to multiply an integer multiplicand with a floating point multiplier', (done) => {
      chai.request(app)
        .post('/calculator/multi')
        .send({
          "num1": "3",
          "num2": "1.212"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(3.636).to.deep.equal(res.body);
          done();
        });
    });

    it('#4 Should be able to multiply two floating point numbers', (done) => {
      chai.request(app)
        .post('/calculator/multi')
        .send({
          "num1": "0.133",
          "num2": "1.212"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(0.161196).to.deep.equal(res.body);
          done();
        });
    });

    it('#5 Should be able to multiply a integer multiplicand with zero', (done) => {
      chai.request(app)
        .post('/calculator/multi')
        .send({
          "num1": "1200",
          "num2": "0"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(0).to.deep.equal(res.body);
          done();
        });
    });

    it('#6 Should be able to multiply a negative integer multiplicand with a positive intger multiplier', (done) => {
      chai.request(app)
        .post('/calculator/multi')
        .send({
          "num1": "-1500",
          "num2": "2000"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(-3000000).to.deep.equal(res.body);
          done();
        });
    });

    it('#7 Should be able to multiply a negative floating point multiplicand with a positive integer multiplier', (done) => {
      chai.request(app)
        .post('/calculator/multi')
        .send({
          "num1": "-1.212",
          "num2": "8"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(-9.696).to.deep.equal(res.body);
          done();
        });
    });

    it('#8 Should be able to multiply a negative integer multiplicand with a positive floating point multiplier', (done) => {
      chai.request(app)
        .post('/calculator/multi')
        .send({
          "num1": "-8",
          "num2": "1.212"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(-9.696).to.deep.equal(res.body);
          done();
        });
    });

    it('#9 Should be able to multiply two many digit floating point numbers', (done) => {
      chai.request(app)
        .post('/calculator/multi')
        .send({
          "num1": "1.23456789",
          "num2": "2.10987654"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(2.604785828).to.deep.equal(res.body);
          done();
        });
    });

    it('#10 Should be able to multiply two large integers(return too high/ too low)', (done) => { // error too high
      chai.request(app)
        .post('/calculator/multi')
        .send({
          "num1": "123456789",
          "num2": "210987654"
        })
        .end((err, res) => {
          if (err) done(err);
          expect("too high").to.deep.equal(res.body);
          done();
        });
    });

  });

/******************************************************************************************** 
/                                                                                           /
/                                     divide function                                       /
/                                                                                           /
********************************************************************************************/
  describe('expect result of multiply function is correct', () => {
    it('#1 Should be able to divide two positive integers', (done) => {
      chai.request(app)
        .post('/calculator/divide')
        .send({
          "num1": "1500",
          "num2": "2000"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(0.75).to.deep.equal(res.body);
          done();
        });
    });

    it('#2 Should be able to divide 0 by a integer divisor', (done) => {
      chai.request(app)
        .post('/calculator/divide')
        .send({
          "num1": "0",
          "num2": "8"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(0).to.deep.equal(res.body);
          done();
        });
    });

    it('#3 Should be able to divide a negative dividend by a positive divisor', (done) => {
      chai.request(app)
        .post('/calculator/divide')
        .send({
          "num1": "-1500",
          "num2": "2000"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(-0.75).to.deep.equal(res.body);
          done();
        });
    });

    it('#4 Should be able to divide a negative floating point dividend by a positive divisor', (done) => {
      chai.request(app)
        .post('/calculator/divide')
        .send({
          "num1": "-3.123",
          "num2": "5"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(-0.6246).to.deep.equal(res.body);
          done();
        });
    });

    it('#5 Should be able to divide a negative integer dividend by a positive floating point divisor to nine significiant figures', (done) => {
      chai.request(app)
        .post('/calculator/divide')
        .send({
          "num1": "-5",
          "num2": "3.123"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(-1.601024656).to.deep.equal(res.body);
          done();
        });
    });

    it('#6 Should be able to divide an floating point dividend by an integer divisor', (done) => {
      chai.request(app)
        .post('/calculator/divide')
        .send({
          "num1": "4.21",
          "num2": "3"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(1.403333333).to.deep.equal(res.body);
          done();
        });
    });

    it('#7 Should be able to divide an integer dividend by a floating point divisor', (done) => {
      chai.request(app)
        .post('/calculator/divide')
        .send({
          "num1": "10",
          "num2": "3.123"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(3.202049312).to.deep.equal(res.body);
          done();
        });
    });

    it('#8 Should be able to divide two floating point numbers', (done) => {
      chai.request(app)
        .post('/calculator/divide')
        .send({
          "num1": "0.234",
          "num2": "3.123"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(0.074927954).to.deep.equal(res.body);
          done();
        });
    });

    it('#9 Should report error for division by 0', (done) => {
      chai.request(app)
        .post('/calculator/divide')
        .send({
          "num1": "1500",
          "num2": "0"
        })
        .end((err, res) => {
          if (err) done(err);
          expect("Can't division by 0").to.deep.equal(res.body);
          done();
        });
    });

    it('#10 Should be able to divide two many digit floating point numbers', (done) => { // error too high
      chai.request(app)
        .post('/calculator/divide')
        .send({
          "num1": "1.23456789",
          "num2": "2.10987654"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(0.585137503).to.deep.equal(res.body);
          done();
        });
    });

  });

/******************************************************************************************** 
/                                                                                           /
/                                     error condition                                       /
/                                                                                           /
********************************************************************************************/

  describe('check api error condition', () => {
    it("#1 test NaN (send something isn't number)", (done) => { //test NaN
      chai.request(app)
        .post('/calculator/plus')
        .send({
          "num1": "a",
          "num2": "b"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(res.body).to.include({
            ErrorType: 'NaN'
          });
          done();
        });
    });
    it('#1.1', (done) => { 
      chai.request(app)
        .post('/calculator/plus')
        .send({
          num1: "a",
          num2: "b"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(res.body).to.include({
            ErrorType: 'NaN'
          });
          done();
        });
    });
    it('#2 syntax or paramiter wrong', (done) => { 
      chai.request(app)
        .post('/calculator/plus')
        .send({
          num3: "1",
          num2: "2"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(res.body).to.include({
            ErrorType: 'Syntax wrong'
          });
          done();
        });
    });
    it('#2.2', (done) => { 
      chai.request(app)
        .post('/calculator/plus')
        .send({
          num3: "a",
          num2: "2"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(res.body).to.include({
            ErrorType: 'Syntax wrong'
          });
          done();
        });
    });
    it('#3 Should be able to send a number = 0', (done) => {
      chai.request(app)
        .post('/calculator/plus')
        .send({
          "num1": 0,
          "num2": "1987"
        })
        .end((err, res) => {
          if (err) done(err);
          expect(1987).to.deep.equal(res.body);
          done();
        });
    });
    it('#3.1', (done) => {
      chai.request(app)
        .post('/calculator/minus')
        .send({
          "num1": "123",
          "num2": 0
        })
        .end((err, res) => {
          if (err) done(err);
          expect(123).to.deep.equal(res.body);
          done();
        });
    });
    it('#3.2', (done) => {
      chai.request(app)
        .post('/calculator/multi')
        .send({
          "num1": 0,
          "num2": 0
        })
        .end((err, res) => {
          if (err) done(err);
          expect(0).to.deep.equal(res.body);
          done();
        });
    });
  });

});




























/******************************************************************************************** 

                                    test code in this file  |||||
                                                            vvvvvv
********************************************************************************************/

// const chai = require('chai');
// const chaihttp = require('chai-http');
// const mocha = require('mocha');
// const assert = require('assert');
// const expect = chai.expect;


// describe('First test', () => {
//   it('Should assert true to be true', () => {
//     expect(true).to.be.true;
//   });
// }); 

// describe('Second case', () => {
//     it('Should assert false to be false', () => {
//         expect(false).to.be.false;
//     });
// });


// describe('Array', function() {
//     describe('#indexOf()', function() {
//       it('should return -1 when the value is not present', function() {
//         assert.equal([1, 2, 3].indexOf(4), -1);
//       });
//     });
//   });





/******************************************************************************************** 
                                                            ^^^^^
                                    test code in this file  |||||

********************************************************************************************/








// describe('POST /plus', () => {
//   it('should return a list sum', done => {
//     chaihttp
//       .request(app)
//       .get('/films-list')
//       .end((err, res) => {
//         res.should.have.status(200);
//         expect(res.body).to.deep.equal(starwarsFilmListMock);
//         done();
//       });
//   });
// // });


// var expect = require('chai').expect;
// var numbers = [1, 2, 3, 4, 5];

// expect(numbers).to.be.an('array').that.includes(2);
// expect(numbers).to.have.lengthOf(5);









// var chai = require('chai');
// var chaiHttp = require('chai-http');

// var should = chai.should();

// chai.use(chaiHttp);


//     describe('/calculator/plus', function() {
//         it('plus /post' , function(done) {
//             chai.request(server)
//             .post('/calculator/plus')
//             .end(function(err, res){
//                 res.should.have.status(200);
//                 done();
//               });
//           });

//         it('should list a SINGLE blob on /blob/<id> GET');
//         it('should add a SINGLE blob on /blobs POST');
//         it('should update a SINGLE blob on /blob/<id> PUT');
//         it('should delete a SINGLE blob on /blob/<id> DELETE');
//       });
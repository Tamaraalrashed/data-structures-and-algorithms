'use strict';

function multiBracketValidation(input){

  if ( input === ''|| typeof(input)!== 'string'){
    throw new Error( 'This is not a sting or empty one!' );
  }

  //   const regex1 =/[{|(|[]/g;
  //   const regex2 =/[}|)|]]/g;

  let roundRight=0;
  let roundLift=0;
  let curlyRight=0;
  let curlyLift=0;
  let squareRight=0;
  let squareLift=0;

  for (let i = 0; i < input.length; i++) {
    if( input[i]==='(') {roundRight++;}
    if( input[i]===(')')) {roundLift++;}
    if( input[i]===('{')) {curlyRight++ ;}
    if( input[i]===('}')) {curlyLift++ ;}
    if( input[i]===('[')) {squareRight++ ;}
    if( input[i]===(']')) {squareLift++ ;}
  }

  //console.log('roundRight',roundRight,'roundLift',roundLift, curlyRight,curlyLift, squareRight,squareLift);
  if (roundRight === roundLift && curlyRight === curlyLift && squareRight === squareLift ){ true ;}
  else{ false;}

}


module.exports=multiBracketValidation;

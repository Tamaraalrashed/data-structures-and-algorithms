'use strict';

const AnimalShelter = require('./fifo-animal-shelter.js');
const {expect} = require('@jest/globals');

let animalShelter = new AnimalShelter();
const catObj = {type:'cat'};
const birdObj = {type:'bird'};

describe('FIFO animal shelter tests', () => {
  it('Can successfully enqueue cat to cat queue', () => {
    animalShelter.enqueue(catObj);
    expect(animalShelter.cat.size).toBe(1);

  });
  it('Can successfully dequeue from cat queue', () => {
    animalShelter.dequeue(catObj);
    expect(animalShelter.cat.size).toEqual(1);
  });
  it('It should return null when pass object other than dog or cat for dequeue method', () => {
    let x=animalShelter.enqueue(birdObj);
    expect(x).toBeNull();
  });

  it('It should return null if the animal is not dog or cat for enqueue method', () => {

    let x=animalShelter.dequeue(birdObj);
    expect(x).toBeNull();
  });

});

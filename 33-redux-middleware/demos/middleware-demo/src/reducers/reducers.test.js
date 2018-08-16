import sweetReducer, { addSweet, ADD as ADD_SWEET } from './sweet';
import savoryReducer, { addSavory, ADD as ADD_SAVORY } from './savory';

describe('action creators', () => {

  it('should create add sweet action', () => {

    const sweet = { name: 'red vines' };

    const action = addSweet(sweet);

    expect(action.type).toBe(ADD_SWEET);

    expect(action.payload.name).toBe(sweet.name);

  });

  it('should create add savory action', () => {

    const savory = { name: 'red beans and rice' };

    const action = addSavory(savory);

    expect(action.type).toBe(ADD_SAVORY);

    expect(action.payload.name).toBe(savory.name);

  });
});

describe('sweet reducer', () => {

  it('should add a sweet', () => {

    const sweet = { name: 'twizzlers'};

    const action = addSweet(sweet);

    const state = sweetReducer(undefined, action);

    expect(state.sweets.length).toBe(1);

    expect(state.sweets[0].name).toBe(sweet.name);
  });
});

describe('savory reducer', () => {

  it('should add savory', () => {
    const action = addSavory({name:'Foi Gras'});
    const state = savoryReducer(undefined, action);
    expect(state.savories.length).toBe(1);

  });
});
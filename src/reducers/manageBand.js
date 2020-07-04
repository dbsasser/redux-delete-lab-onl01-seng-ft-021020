import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
    
    const band = {
        id: uuid(),
        name: action.name
      }
      return { bands: state.bands.concat(band)}

    case 'DELETE_BAND':

      return {bands: state.bands.filter(band => this.props.id !== action.payload)}

    default:
      return state;
  }
};

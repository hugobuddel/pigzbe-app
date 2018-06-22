import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import Payments from './';
import wollo from '../../reducers/wollo';
import {mockStore} from '../../../setupTests';

const props = {
    dispatch: () => {}
};

describe('Payments', () => {
    test('renders correctly', () => {
        const tree = renderer.create((
            <Provider store={mockStore({wollo})}>
                <Payments {...props}/>
            </Provider>
        )).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

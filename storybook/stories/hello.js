import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {View, Text} from 'react-native';

const style = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
};
const CenteredView = ({children}) => (
    <View style={style}>
        {children}
    </View>
);

storiesOf('Hello')
    .add('default view', () => (
        <CenteredView>
            <Text>Hello Storybook</Text>
        </CenteredView>
    ));

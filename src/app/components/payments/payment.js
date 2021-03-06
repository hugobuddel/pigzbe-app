import React from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';
import styles from './styles';
import moneyFormat from '../../utils/money-format';
import {daysAgo} from '../../utils/date';
import {ASSET_DPS} from '../../constants';
import images from './images';

export default ({date, amount, direction, assetCode, memo, address, sender}) => (
    <View style={styles.payment} onStartShouldSetResponder={() => true}>
        <Text style={styles.date}>
            {daysAgo(date)}
        </Text>
        <View style={styles.detail}>
            {memo ? (
                <Text style={styles.memo}>
                    {sender && `From ${sender}:`} {memo}
                </Text>
            ) : null}
            <View style={styles.info}>
                <View style={styles.amountWrapper}>
                    <Image style={styles.direction} source={images[direction]}/>
                    <Text style={styles.amount}>
                        {moneyFormat(amount, ASSET_DPS)} {assetCode}
                    </Text>
                </View>
            </View>

        </View>
        {address && (
            <Text numberOfLines={2} style={styles.address}>
                {address}
            </Text>
        )}
    </View>
);

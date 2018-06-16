import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native';
import {
    profileUpdate,
    profileAvailable,
    profileClear,
    authLogout
} from '../../actions';
import styles from './styles';
import Button from '../button';
import TextInput from '../text-input';
import Loader from '../loader';
import Avatar from '../avatar';
import Checkbox from '../checkbox';
import Header from '../header';
import Container from '../container';
import KeyboardAvoid from '../keyboard-avoid';
import {pickImage} from '../../utils/image-picker';
import isEmail from './is-email';
import {
    strings,
    SCREEN_BALANCE,
    PRIVACY_URL
    // SCREEN_PRIVACY
} from '../../constants';
import openURL from '../../utils/open-url';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
            email: props.email,
            image: props.image,
            subscribe: props.subscribe,
            validName: true,
            validEmail: true,
            isUpdating: false
        };
    }

    validate() {
        const {
            name,
            email
        } = this.state;

        const validName = name && !!name.trim();
        const validEmail = email && isEmail(email);

        this.setState({
            validName,
            validEmail
        });

        return validName && validEmail;
    }

    async save() {
        const isValid = this.validate();

        if (!isValid) {
            return;
        }

        const {dispatch, navigation} = this.props;

        const {
            name,
            email,
            image,
            subscribe
        } = this.state;

        this.setState({isUpdating: true});

        await dispatch(profileUpdate({name, email, image, subscribe}));

        this.setState({isUpdating: false}, () => {
            dispatch(profileAvailable(true));
            if (navigation) {
                navigation.navigate(SCREEN_BALANCE);
            }
        });
    }

    onPressAvatar = async () => {
        try {
            const {uri} = await pickImage();
            this.setState({image: uri});
        } catch (e) {
            console.log('error', e);
        }
    }

    render() {
        const {
            dispatch,
            hasProfile,
            error,
            navigation
        } = this.props;

        const {
            name,
            email,
            image,
            subscribe,
            validName,
            validEmail,
            isUpdating
        } = this.state;

        return (
            <View style={styles.outer}>
                <ScrollView bounces={false} style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
                    <Container body style={{
                        paddingBottom: hasProfile ? 10 : 20,
                    }}>
                        <KeyboardAvoid>
                            <View>
                                <Header/>
                                <Text style={styles.title}>
                                    {hasProfile ? strings.accountEdit : strings.accountCreate}
                                </Text>
                                <TouchableOpacity
                                    style={styles.avatar}
                                    onPress={this.onPressAvatar}>
                                    <Avatar select image={image}/>
                                    <Text style={styles.avatarText}>
                                        {hasProfile ? strings.accountChangeImage : strings.accountAddImage}
                                    </Text>
                                </TouchableOpacity>
                                <TextInput
                                    error={!validName}
                                    placeholder={strings.accountNamePlaceholder}
                                    value={name}
                                    onChangeText={value => this.setState({name: value})}
                                />
                                <TextInput
                                    keyboardType="email-address"
                                    error={!validEmail}
                                    placeholder={strings.accountEmailPlaceholder}
                                    value={email}
                                    onChangeText={value => this.setState({email: value})}
                                />
                                <Checkbox
                                    text={strings.accountMailingListOptIn}
                                    value={subscribe}
                                    onValueChange={() => this.setState({subscribe: !this.state.subscribe})}
                                />
                            </View>
                        </KeyboardAvoid>
                        <View>
                            <Button
                                label={hasProfile ? strings.accountSaveButtonLabel : strings.accountSubmitButtonLabel}
                                onPress={() => this.save()}
                            />
                            {hasProfile ? (
                                <Button
                                    label={strings.accountCancelButtonLabel}
                                    onPress={() => navigation.navigate(SCREEN_BALANCE)}
                                />
                            ) : null}
                            {hasProfile ? (
                                <Button
                                    label={strings.accountLogoutButtonLabel}
                                    plain
                                    onPress={() => {
                                        dispatch(authLogout());
                                        dispatch(profileClear());
                                    }}
                                />
                            ) : (
                                <Button
                                    label={strings.accountPrivacyButtonLabel}
                                    plain
                                    onPress={() => openURL(PRIVACY_URL)}
                                />
                            )}
                            {error && (
                                <Text style={styles.error}>{error.message}</Text>
                            )}
                        </View>
                        <Loader
                            isLoading={isUpdating}
                        />
                    </Container>
                </ScrollView>
            </View>
        );
    }
}

export const ProfileComponent = Profile;

export default connect(
    state => ({
        name: state.profile.name,
        email: state.profile.email,
        image: state.profile.image,
        subscribe: state.profile.subscribe,
        hasProfile: state.profile.hasProfile
    })
)(Profile);
